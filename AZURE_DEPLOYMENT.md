# Azure Static Web Apps Deployment Guide

Your portfolio has been successfully pushed to GitHub. Follow these steps to deploy to Azure Static Web Apps.

## Prerequisites

- Azure account (sign up at https://azure.microsoft.com/free/)
- GitHub account (already connected)

## Deployment Steps

### Option 1: Deploy via Azure Portal (Recommended)

1. **Go to Azure Portal**
   - Visit https://portal.azure.com
   - Sign in with your Azure account

2. **Create Static Web App Resource**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Configure Basic Settings**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: `portfolio-akv` (or your preferred name)
   - **Plan type**: Free (for personal projects)
   - **Region**: Choose closest to you (e.g., East US, West Europe)

4. **Configure Deployment Source**
   - **Source**: GitHub
   - Click "Sign in with GitHub" and authorize Azure
   - **Organization**: Select your GitHub username
   - **Repository**: `portfolio` (or your repo name)
   - **Branch**: `main`

5. **Configure Build Details**
   - **Build Presets**: Custom
   - **App location**: `/` (root)
   - **Api location**: Leave empty (no API)
   - **Output location**: `out` (this is where Next.js exports static files)

6. **Review and Create**
   - Review all settings
   - Click "Create"
   - Wait for deployment to complete (5-10 minutes)

7. **Get Deployment Token**
   - Once created, go to your Static Web App resource
   - Navigate to "Manage deployment token"
   - Copy the deployment token

8. **Add GitHub Secret**
   - Go to your GitHub repository: https://github.com/Vask006/portfolio
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Value: Paste the deployment token from step 7
   - Click "Add secret"

9. **Trigger Deployment**
   - The GitHub Actions workflow will automatically trigger
   - Go to Actions tab in your GitHub repo to monitor the deployment
   - Once complete, your site will be live at: `https://<your-app-name>.azurestaticapps.net`

### Option 2: Deploy via Azure CLI

```bash
# Install Azure CLI if not already installed
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Create resource group
az group create --name portfolio-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name portfolio-akv \
  --resource-group portfolio-rg \
  --sku Free \
  --location "East US 2" \
  --source https://github.com/Vask006/portfolio \
  --branch main \
  --app-location "/" \
  --output-location "out" \
  --login-with-github

# Get deployment token
az staticwebapp secrets list \
  --name portfolio-akv \
  --resource-group portfolio-rg \
  --query "properties.apiKey" -o tsv
```

Then add the token to GitHub Secrets as described in Option 1, step 8.

## Custom Domain (Optional)

1. Go to your Static Web App in Azure Portal
2. Navigate to "Custom domains"
3. Click "Add"
4. Follow the instructions to verify your domain
5. Configure DNS records as instructed

## Environment Variables (If Needed)

If you need environment variables:
1. Go to your Static Web App in Azure Portal
2. Navigate to "Configuration" → "Application settings"
3. Add your environment variables
4. Restart the app

## Monitoring

- **Logs**: View in Azure Portal under "Log stream"
- **Metrics**: Monitor traffic, errors, and performance in the Overview section
- **GitHub Actions**: Check deployment status in the Actions tab

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for errors
- Verify `output-location` is set to `out`
- Ensure Node.js version is compatible (20.x)

### Site Not Updating
- Check if GitHub Actions workflow completed successfully
- Verify the deployment token is correct in GitHub Secrets
- Check Azure Portal for deployment status

### 404 Errors
- Verify `staticwebapp.config.json` is in the root
- Check that `navigationFallback` is configured correctly

## Cost

Azure Static Web Apps Free tier includes:
- 100 GB bandwidth per month
- Unlimited custom domains
- SSL certificates (automatic)
- Global CDN
- Perfect for personal portfolios!

## Support

- Azure Static Web Apps Docs: https://docs.microsoft.com/azure/static-web-apps
- GitHub Actions: Check Actions tab in your repository

