# GoHighLevel API Library

A comprehensive Node.js library for interacting with the GoHighLevel API. This library provides type-safe access to all endpoints in the GoHighLevel platform.

## Features

- 🚀 **Complete API Coverage**: Access to all GoHighLevel API endpoints
- 📊 **Type Safety**: Full TypeScript support with interfaces for all requests and responses
- 🔄 **Auto-Generated**: Types and API clients generated from OpenAPI schemas
- 🔑 **Authentication**: Simple API key authentication
- 📝 **Well Documented**: Comprehensive documentation and examples

## Installation

```bash
npm install ghl-api-library
```

## Quick Start

```typescript
import { GHLClient } from 'ghl-api-library';

// Create a client instance with your API key
const client = new GHLClient('YOUR_API_KEY');

// Use any of the available API endpoints
async function getCalendars() {
  try {
    const locationId = 'YOUR_LOCATION_ID';
    
    const calendars = await client.calendars.get_calendars({
      Authorization: 'Bearer YOUR_API_KEY',
      Version: '2021-07-28',
      locationId
    });
    
    console.log(calendars);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Environment Variables

You can use environment variables to store your API key:

```typescript
// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

// Create client using API key from environment
const client = new GHLClient(); // Will use process.env.GHL_API_KEY
```

## Available APIs

The library provides access to all GoHighLevel APIs, including:

- Calendars
- Contacts
- Conversations
- Companies
- Opportunities
- Forms
- Locations
- Products
- Payments
- Users
- And many more...

## Front-End Integration

This library can be seamlessly integrated with any front-end framework or application. Here's how to use it with popular front-end technologies:

### Security Best Practices

⚠️ **Important**: Never expose your GoHighLevel API key in client-side code. Always use a backend service to proxy your API requests.

### Backend API Proxy

Create a backend API that serves as a proxy between your front-end application and the GoHighLevel API:

```typescript
// server.js (Node.js with Express)
import express from 'express';
import { GHLClient } from 'ghl-api-library';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

const ghlClient = new GHLClient(process.env.GHL_API_KEY);

// Create an endpoint to proxy calendar requests
app.get('/api/calendars', async (req, res) => {
  try {
    const locationId = req.query.locationId;
    const calendars = await ghlClient.calendars.get_calendars({
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      Version: '2021-07-28',
      locationId
    });
    res.json(calendars);
  } catch (error) {
    console.error('Error fetching calendars:', error);
    res.status(500).json({ error: 'Failed to fetch calendars' });
  }
});

app.listen(3000, () => {
  console.log('API proxy server running on port 3000');
});
```

### Integration with React

Here's how to use your API proxy with React:

```jsx
// CalendarComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CalendarComponent({ locationId }) {
  const [calendars, setCalendars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCalendars = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/calendars?locationId=${locationId}`);
        setCalendars(response.data.calendars || []);
        setLoading(false);
      } catch (err) {
        setError('Failed to load calendars');
        setLoading(false);
        console.error(err);
      }
    };

    fetchCalendars();
  }, [locationId]);

  if (loading) return <div>Loading calendars...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="calendars-list">
      <h2>Calendars</h2>
      {calendars.length === 0 ? (
        <p>No calendars found</p>
      ) : (
        <ul>
          {calendars.map(calendar => (
            <li key={calendar.id}>
              <h3>{calendar.name}</h3>
              <p>{calendar.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CalendarComponent;
```

### Integration with Vue.js

```vue
<!-- CalendarComponent.vue -->
<template>
  <div class="calendars-container">
    <h2>Calendars</h2>
    <div v-if="loading">Loading calendars...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <div v-if="calendars.length === 0">No calendars found</div>
      <ul v-else class="calendars-list">
        <li v-for="calendar in calendars" :key="calendar.id" class="calendar-item">
          <h3>{{ calendar.name }}</h3>
          <p>{{ calendar.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CalendarComponent',
  props: {
    locationId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      calendars: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`/api/calendars?locationId=${this.locationId}`);
      this.calendars = response.data.calendars || [];
      this.loading = false;
    } catch (err) {
      this.error = 'Failed to load calendars';
      this.loading = false;
      console.error(err);
    }
  }
};
</script>
```

### Integration with Angular

```typescript
// calendar.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getCalendars(locationId: string): Observable<any> {
    return this.http.get(`/api/calendars?locationId=${locationId}`);
  }
}
```

```typescript
// calendar.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() locationId: string;
  calendars: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.getCalendars(this.locationId)
      .subscribe({
        next: (data) => {
          this.calendars = data.calendars || [];
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Failed to load calendars';
          this.loading = false;
          console.error(err);
        }
      });
  }
}
```

### Using with Next.js API Routes

Next.js provides API routes which are perfect for creating a secure backend proxy for your GHL API calls:

```typescript
// pages/api/calendars.ts (Next.js API Route)
import type { NextApiRequest, NextApiResponse } from 'next';
import { GHLClient } from 'ghl-api-library';

const ghlClient = new GHLClient(process.env.GHL_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const locationId = req.query.locationId as string;
    
    if (!locationId) {
      return res.status(400).json({ message: 'Location ID is required' });
    }

    const calendars = await ghlClient.calendars.get_calendars({
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      Version: '2021-07-28',
      locationId
    });

    return res.status(200).json(calendars);
  } catch (error) {
    console.error('Error fetching calendars:', error);
    return res.status(500).json({ message: 'Failed to fetch calendars' });
  }
}
```

Then use it in your Next.js page component:

```jsx
// pages/calendars.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CalendarsPage() {
  const [calendars, setCalendars] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const locationId = 'YOUR_LOCATION_ID';
    axios.get(`/api/calendars?locationId=${locationId}`)
      .then(response => {
        setCalendars(response.data.calendars || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching calendars:', error);
        setLoading(false);
      });
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Calendars</h1>
      <ul>
        {calendars.map(calendar => (
          <li key={calendar.id}>{calendar.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Building a Robust Frontend Application

For production applications, consider the following best practices:

### 1. State Management

For larger applications, use state management libraries like Redux (React), Vuex (Vue), or NgRx (Angular) to manage your GHL data.

### 2. Type Safety

Export and use the types from this library in your frontend application for full type safety:

```typescript
// In your backend proxy
import { CalendarsAPI } from 'ghl-api-library';
import type { Get_calendarsResponse } from 'ghl-api-library';

// Then expose these types for your frontend
export type CalendarsResponse = Get_calendarsResponse;
```

### 3. Error Handling

Implement consistent error handling throughout your application:

```typescript
async function fetchGHLData(endpoint, params) {
  try {
    const response = await axios.get(`/api/${endpoint}`, { params });
    return { data: response.data, error: null };
  } catch (error) {
    // Handle different error types
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const status = error.response.status;
      
      if (status === 401 || status === 403) {
        // Handle authentication errors
        return { data: null, error: 'Authentication failed. Please log in again.' };
      } else if (status === 404) {
        return { data: null, error: 'Resource not found' };
      } else {
        return { data: null, error: `Server error: ${error.response.data.message || 'Unknown error'}` };
      }
    } else if (error.request) {
      // The request was made but no response was received
      return { data: null, error: 'No response from server. Please check your connection.' };
    } else {
      // Something happened in setting up the request that triggered an Error
      return { data: null, error: 'Failed to make request: ' + error.message };
    }
  }
}
```

### 4. Caching Strategies

Implement caching for frequently accessed data to improve performance:

```typescript
// Simple cache implementation
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function fetchWithCache(key, fetchFn) {
  const cachedItem = cache.get(key);
  
  if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_TTL) {
    return cachedItem.data;
  }
  
  const data = await fetchFn();
  cache.set(key, { 
    data, 
    timestamp: Date.now() 
  });
  
  return data;
}

// Usage
const getCalendars = async (locationId) => {
  return fetchWithCache(`calendars-${locationId}`, async () => {
    const response = await axios.get(`/api/calendars?locationId=${locationId}`);
    return response.data;
  });
};
```

## Development

### Prerequisites

- Node.js 14+
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your API key:
   ```
   GHL_API_KEY=your_api_key_here
   ```

### Code Generation

The library's types and API clients are auto-generated from OpenAPI schemas. To regenerate them:

```bash
npm run generate
```

### Building

To build the library:

```bash
npm run build
```

## Examples

Check the `examples` directory for more usage examples.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License. 