export const siteData = {
  "tests": [
    {
      "id": "test_1",
      "name": "Sample CSV Test",
      "status": "completed",
      "duplicatesFound": 12,
      "totalRecords": 150,
      "created": "2024-01-15T10:30:00Z",
      "threshold": 85,
      "dataSource": "CSV File"
    },
    {
      "id": "test_2",
      "name": "User Database Check",
      "status": "running",
      "duplicatesFound": 0,
      "totalRecords": 0,
      "created": "2024-01-15T14:20:00Z",
      "threshold": 90,
      "dataSource": "Database"
    }
  ],
  "duplicates": [
    {
      "id": "dup_1",
      "testId": "test_1",
      "records": [
        {
          "id": "rec_1",
          "data": {
            "name": "John Smith",
            "email": "john.smith@email.com",
            "phone": "555-0123"
          }
        },
        {
          "id": "rec_2",
          "data": {
            "name": "Jon Smith",
            "email": "john.smith@email.com",
            "phone": "555-0123"
          }
        }
      ],
      "similarity": 95,
      "reason": "Email and phone match, name similarity high"
    }
  ],
  "settings": {
    "defaultThreshold": 80,
    "maxFileSize": "10MB",
    "supportedFormats": [
      "CSV",
      "JSON",
      "XML"
    ],
    "autoSave": true
  }
};

export const navigation = {
  "main": [
    {
      "label": "Home",
      "path": "/",
      "icon": "home"
    },
    {
      "label": "Tests",
      "path": "/tests",
      "icon": "beaker"
    },
    {
      "label": "Results",
      "path": "/results",
      "icon": "chart-bar"
    }
  ],
  "footer": [
    {
      "label": "Documentation",
      "path": "/docs"
    },
    {
      "label": "Support",
      "path": "/support"
    },
    {
      "label": "Privacy",
      "path": "/privacy"
    }
  ]
};