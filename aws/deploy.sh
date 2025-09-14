#!/bin/bash

# AWS Deployment Script for Marine Data Verse
# Prerequisites: AWS CLI configured with appropriate permissions

set -e

DOMAIN_NAME=${1:-marine-data-verse.com}
STACK_NAME="marine-data-verse-stack"
REGION=${2:-us-east-1}
BUCKET_NAME="$DOMAIN_NAME-website"

echo "🌊 Deploying Marine Data Verse to AWS..."
echo "Domain: $DOMAIN_NAME"
echo "Region: $REGION"

# Build the application
echo "Building application..."
npm run build

# Deploy CloudFormation stack
echo "Deploying CloudFormation stack..."
aws cloudformation deploy \
    --template-file aws/cloudformation.yml \
    --stack-name $STACK_NAME \
    --parameter-overrides DomainName=$DOMAIN_NAME \
    --region $REGION \
    --capabilities CAPABILITY_IAM

# Get bucket name from stack outputs
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
    --output text)

# Sync built files to S3
echo "Uploading files to S3..."
aws s3 sync dist/ s3://$BUCKET_NAME --delete

# Get CloudFront distribution ID
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME \
    --region $REGION \
    --query 'Stacks[0].Outputs[?OutputKey==`DistributionId`].OutputValue' \
    --output text)

# Invalidate CloudFront cache
echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
    --distribution-id $DISTRIBUTION_ID \
    --paths "/*"

echo "✅ Deployment completed successfully!"
echo "Website URL: https://$DOMAIN_NAME"