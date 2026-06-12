import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimpolicydescriptionsApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimpolicydescriptionsApi';

        displayName = 'Azure Apimanagement Apimpolicydescriptions API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimpolicydescriptions/azure-apimanagement-apimpolicydescriptions.png', dark: 'file:../nodes/AzureApimanagementApimpolicydescriptions/azure-apimanagement-apimpolicydescriptions.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimpolicydescriptions API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
