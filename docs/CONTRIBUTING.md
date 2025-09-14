# Contributing to Marine Data Verse

First off, thank you for considering contributing to Marine Data Verse! 🌊

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/marine-data-verse.git
   cd marine-data-verse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔄 Development Workflow

### Branching Strategy

- `main` - Production ready code
- `develop` - Development branch for integration
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/urgent-fix` - Critical production fixes

### Creating a Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/amazing-new-feature

# Make your changes...
git add .
git commit -m "feat: add amazing new feature"

# Push to your fork
git push origin feature/amazing-new-feature
```

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
git commit -m "feat(dashboard): add real-time data visualization"
git commit -m "fix(api): resolve data fetching timeout issue"
git commit -m "docs(readme): update deployment instructions"
```

## 🔍 Pull Request Process

1. **Ensure CI passes**
   - All tests pass
   - Linting passes
   - Build succeeds

2. **Update documentation**
   - Update README if needed
   - Add/update code comments
   - Update CHANGELOG.md

3. **Create Pull Request**
   - Use descriptive title
   - Fill out PR template
   - Link related issues
   - Request review from maintainers

4. **PR Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   - [ ] Tests pass locally
   - [ ] Added tests for new functionality

   ## Screenshots (if applicable)
   [Add screenshots here]

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Documentation updated
   ```

## 🎨 Coding Standards

### TypeScript

```typescript
// Use explicit types
interface UserData {
  id: string;
  name: string;
  email: string;
}

// Prefer const assertions
const MARINE_SPECIES = ['dolphin', 'whale', 'shark'] as const;

// Use proper error handling
try {
  const data = await fetchMarineData();
  return data;
} catch (error) {
  console.error('Failed to fetch marine data:', error);
  throw new Error('Data fetch failed');
}
```

### React Components

```tsx
// Use function components with TypeScript
interface MarineSpeciesProps {
  species: Species[];
  onSpeciesSelect: (species: Species) => void;
}

export const MarineSpeciesList: React.FC<MarineSpeciesProps> = ({
  species,
  onSpeciesSelect
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {species.map((item) => (
        <SpeciesCard
          key={item.id}
          species={item}
          onClick={() => onSpeciesSelect(item)}
        />
      ))}
    </div>
  );
};
```

### CSS/Tailwind

```tsx
// Use semantic class names and responsive design
<div className="flex flex-col space-y-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Marine Data</h2>
  <p className="text-gray-600 leading-relaxed">
    Description of marine data insights
  </p>
</div>
```

### File Organization

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components
│   └── marine/          # Domain-specific components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
├── types/               # TypeScript type definitions
└── integrations/        # External service integrations
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

```typescript
// Component test example
import { render, screen } from '@testing-library/react';
import { MarineSpeciesList } from './MarineSpeciesList';

describe('MarineSpeciesList', () => {
  it('renders species list correctly', () => {
    const mockSpecies = [
      { id: '1', name: 'Blue Whale', type: 'Mammal' },
      { id: '2', name: 'Great White Shark', type: 'Fish' }
    ];

    render(
      <MarineSpeciesList 
        species={mockSpecies} 
        onSpeciesSelect={jest.fn()} 
      />
    );

    expect(screen.getByText('Blue Whale')).toBeInTheDocument();
    expect(screen.getByText('Great White Shark')).toBeInTheDocument();
  });
});
```

## 📚 Documentation

### Code Documentation

```typescript
/**
 * Fetches marine biodiversity data from the API
 * @param filters - Optional filters to apply to the data
 * @param options - Additional request options
 * @returns Promise resolving to marine data array
 */
export async function fetchMarineData(
  filters?: DataFilters,
  options?: RequestOptions
): Promise<MarineData[]> {
  // Implementation
}
```

### README Updates

When adding new features:
1. Update feature list
2. Add configuration instructions
3. Update examples
4. Add troubleshooting info if needed

## 🐛 Bug Reports

### Before Reporting

1. Search existing issues
2. Try latest version
3. Check documentation
4. Reproduce with minimal example

### Bug Report Template

```markdown
**Bug Description**
Clear description of the bug

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected Behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 96]
- Node Version: [e.g. 18.15.0]
- App Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the requested feature

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
Describe your proposed solution

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other context or screenshots
```

## 🚀 Release Process

1. **Version Bump**
   ```bash
   npm version patch  # or minor/major
   ```

2. **Update Changelog**
   ```bash
   # Add new version section to CHANGELOG.md
   ```

3. **Create Release**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

4. **GitHub Release**
   - Create release on GitHub
   - Add release notes
   - Attach assets if needed

## 🙋‍♀️ Getting Help

- 💬 [GitHub Discussions](https://github.com/abhi-nv/marine-data-verse/discussions)
- 🐛 [Issues](https://github.com/abhi-nv/marine-data-verse/issues)
- 📧 [Email](mailto:contributors@marine-data-verse.com)

## 🏆 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Invited to maintainer team (for significant contributions)

Thank you for contributing to Marine Data Verse! 🌊🐋