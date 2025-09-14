# 🚀 Deployment Guide - Marine Data Verse

This comprehensive guide covers all deployment options for the Marine Data Verse platform.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Docker Deployment](#docker-deployment)
4. [Cloud Platform Deployments](#cloud-platform-deployments)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Production Checklist](#production-checklist)
7. [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

### System Requirements
- **Node.js**: 18.0.0 or higher
- **npm**: 8.0.0 or higher
- **Git**: Latest version
- **Docker**: 20.10+ (for containerized deployment)

### Account Requirements
Choose based on your deployment platform:
- **Docker Hub**: For container registry
- **Vercel**: For serverless deployment
- **Netlify**: For static site hosting
- **AWS**: For cloud infrastructure
- **GitHub**: For CI/CD automation

## 🌐 Environment Setup

### 1. Environment Variables

Create environment files for different stages:

**.env.local** (Local development):
```env
VITE_API_URL=http://localhost:8000
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_ENVIRONMENT=development
VITE_DEBUG=true
```

**.env.production**:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_SUPABASE_URL=https://your-prod-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_production_supabase_anon_key
VITE_ENVIRONMENT=production
VITE_DEBUG=false
```

### 2. Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Configure authentication and database schemas
4. Update environment variables

## 🐳 Docker Deployment

### Local Docker

```bash
# Build the image
docker build -t marine-data-verse:latest .

# Run the container
docker run -d \
  --name marine-app \
  -p 80:80 \
  --restart unless-stopped \
  marine-data-verse:latest

# Check health
curl http://localhost/health
```

### Docker Compose

```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f marine-app

# Stop services
docker-compose down
```

### Production Docker Setup

```bash
# Enable SSL profile for production
docker-compose --profile ssl up -d

# This includes:
# - nginx-proxy for SSL termination
# - letsencrypt for automatic certificate management
```

## ☁️ Cloud Platform Deployments

### 🟢 Vercel (Recommended)

**One-Click Deployment:**
1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abhi-nv/marine-data-verse)
2. Connect your GitHub account
3. Configure environment variables
4. Deploy!

**Manual Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

**Environment Variables Setup:**
1. Go to Vercel Dashboard > Project > Settings > Environment Variables
2. Add all required variables for production

### 🟡 Netlify

**One-Click Deployment:**
1. Click: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abhi-nv/marine-data-verse)
2. Connect GitHub repository
3. Configure build settings
4. Deploy!

**Manual Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the application
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

**Build Settings:**
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18`

### 🟠 AWS (S3 + CloudFront)

**Prerequisites:**
```bash
# Install and configure AWS CLI
aws configure
# Enter your Access Key ID, Secret Access Key, and default region
```

**Deployment:**
```bash
# Make deployment script executable
chmod +x aws/deploy.sh

# Deploy with your domain
./aws/deploy.sh your-domain.com us-east-1
```

**Manual Steps:**
1. **SSL Certificate**: Request in AWS Certificate Manager (us-east-1)
2. **Domain**: Update nameservers to Route53
3. **Deploy**: Run the deployment script

### 🔵 Self-Hosted (VPS/Dedicated Server)

**Using deployment scripts:**

**Linux/macOS:**
```bash
# Make script executable
chmod +x deploy.sh

# Deploy to production
./deploy.sh production docker
```

**Windows:**
```powershell
# Run PowerShell as Administrator
.\deploy.ps1 -Environment "production" -Platform "docker"
```

**Manual Steps:**
1. Install Docker and Docker Compose
2. Clone repository
3. Set up environment variables
4. Run deployment script
5. Configure reverse proxy (nginx) for SSL

## 🔄 CI/CD Pipeline

### GitHub Actions Setup

The project includes automated CI/CD workflows:

1. **`.github/workflows/deploy.yml`**: Main deployment pipeline
2. **`.github/workflows/security.yml`**: Security scanning

### Required Secrets

Add these secrets in GitHub Repository Settings > Secrets and Variables > Actions:

**For Docker Hub:**
```
DOCKER_USERNAME=your_dockerhub_username
DOCKER_PASSWORD=your_dockerhub_token
```

**For Vercel:**
```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

**For Netlify:**
```
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID=your_site_id
```

**For Security Scanning:**
```
SNYK_TOKEN=your_snyk_token
```

### Manual Trigger

```bash
# Push to main branch triggers deployment
git push origin main

# Or manually trigger via GitHub Actions UI
```

## ✅ Production Checklist

### Before Deployment

- [ ] Environment variables configured
- [ ] Supabase project set up
- [ ] SSL certificate ready (for custom domains)
- [ ] Domain DNS configured
- [ ] Build process tested locally
- [ ] Security headers configured

### Security

- [ ] Environment variables are secure (no secrets in code)
- [ ] HTTPS enabled
- [ ] Security headers implemented
- [ ] Regular dependency updates scheduled
- [ ] Monitoring and alerting set up

### Performance

- [ ] Build optimization enabled
- [ ] CDN configured (CloudFront/Vercel/Netlify)
- [ ] Asset compression enabled
- [ ] Caching strategies implemented
- [ ] Performance monitoring enabled

### Monitoring

- [ ] Health check endpoints working
- [ ] Error tracking configured
- [ ] Analytics set up
- [ ] Uptime monitoring enabled
- [ ] Backup strategies in place

## 🔍 Troubleshooting

### Common Issues

**1. Build Failures**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

**2. Environment Variables Not Loading**
```bash
# Check file naming
ls -la .env*

# Verify file format (no quotes around values)
cat .env.local

# Restart development server
npm run dev
```

**3. Docker Container Won't Start**
```bash
# Check container logs
docker logs marine-app

# Check if port is available
lsof -i :80

# Rebuild image
docker build --no-cache -t marine-data-verse:latest .
```

**4. Deployment Timeouts**
```bash
# Increase build timeout (Vercel)
# Add to vercel.json:
{
  "functions": {
    "app/**": {
      "maxDuration": 30
    }
  }
}
```

### Platform-Specific Issues

**Vercel:**
- Build command not found: Check `package.json` scripts
- Environment variables: Ensure they're set in Vercel dashboard
- Function timeout: Increase maxDuration in `vercel.json`

**Netlify:**
- Build fails: Check Node.js version in build settings
- Redirects not working: Verify `netlify.toml` configuration
- Form handling: Enable Netlify Forms if needed

**Docker:**
- Image size too large: Use multi-stage builds (already implemented)
- Container crashes: Check health endpoint and logs
- Permission issues: Ensure proper file permissions

### Getting Help

1. **Check logs**: Always start with application and deployment logs
2. **GitHub Issues**: Report bugs and get community help
3. **Platform documentation**: Refer to specific platform docs
4. **Community**: Join discussions for troubleshooting

## 📞 Support

- 📚 [Main Documentation](../README.md)
- 🐛 [Report Issues](https://github.com/abhi-nv/marine-data-verse/issues)
- 💬 [Community Discussions](https://github.com/abhi-nv/marine-data-verse/discussions)
- 📧 [Contact](mailto:support@marine-data-verse.com)

---

**Happy Deploying! 🚀**