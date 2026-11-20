
# DevOps Task Tracker

**ATU Donegal — DevOps Pipeline Demo — Task 3**

## 1. Project Overview

DevOps Task Tracker is a Node.js application developed to demonstrate the implementation of an automated Continuous Integration (CI) pipeline.

The project represents the initial technical foundation for a proposed software platform supporting construction subcontracting companies.

The current phase focuses on automated testing, code quality, dependency security checks, and Docker image building.

## 2. Business Scenario

A construction subcontracting company may provide electrical installation, plumbing, painting, maintenance, and other specialist services to construction contractors.

Such a company needs reliable software to support future management of construction projects, workforce assignments, subcontracted tasks, and project progress.

Before developing these business features, this project establishes a CI pipeline that can validate code changes automatically.

The construction management functionality is a proposed future development, not part of the current implementation.

## 3. Technologies Used

- Node.js — JavaScript runtime
- Express — Web application framework
- Git and GitHub — Source code version control
- GitHub Actions — CI automation
- Jest and Supertest — Automated API testing
- ESLint — Static code analysis
- npm audit — Dependency vulnerability checks
- Docker — Application container image building

## 4. Current Application

The application provides two HTTP endpoints:

- `GET /` — Returns basic application information.
- `GET /health` — Returns a health status response.

The application uses port 3000 by default.

These endpoints provide a simple foundation for testing the automated pipeline.

## 5. Continuous Integration Pipeline

The GitHub Actions workflow is defined in:

`.github/workflows/ci.yml`

The pipeline runs automatically when changes are pushed to the `main` branch or when a pull request targets `main`.

It can also be started manually using GitHub Actions.

The pipeline performs the following steps:

1. Checks out the repository.
2. Configures Node.js 22.
3. Installs dependencies using `npm ci`.
4. Runs automated tests using `npm test`.
5. Performs static code analysis using `npm run lint`.
6. Checks dependencies using `npm audit --audit-level=moderate`.
7. Builds the Docker image.

A successful workflow indicates that these configured checks have passed.

## 6. Running the Application Locally

Install dependencies:

```bash
npm ci
```

Start the application:

```bash
npm start
```

Access the application at:

http://localhost:3000

Health check:

http://localhost:3000/health

## 7. Running Quality Checks

Run automated tests:

```bash
npm test
```

Run static code analysis:

```bash
npm run lint
```

Run the dependency security audit:

```bash
npm audit --audit-level=moderate
```

Build the Docker image:

```bash
docker build -t devops-task-tracker .
```

## 8. Current Project Scope

The current implementation demonstrates Continuous Integration.

The Docker image is built as part of the CI workflow, but the application is not automatically deployed to a production environment.

Automated deployment is a potential future enhancement.

## 9. Future Development — Level 2

### Construction Services Management Platform

The proposed next phase would extend the existing application into a business management platform for construction subcontracting companies.

Potential features include:

- Client and contractor management
- Construction project registration
- Subcontracted service tracking
- Workforce and task assignments
- Task status and progress monitoring
- Working hours and cost tracking
- Project progress reports
- Database integration
- User authentication and access control

These features have not yet been implemented.

The existing CI pipeline could be extended with additional automated tests as the application grows.

## 10. Conclusion

This project demonstrates how an automated CI pipeline can support software quality, repeatability, and early identification of problems.

The current implementation provides a technical foundation for future application development while keeping the initial scope focused on DevOps practices.

