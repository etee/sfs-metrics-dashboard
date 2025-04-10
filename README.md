# SFS Metrics Dashboard
 The SFS Metrics Dashboard is an Angular-based application designed to monitor and visualize device metrics, production data, and operational statuses in real-time. It includes features like dynamic charts, device status tracking.

## Features

- **Real-Time Device Monitoring**: Track device statuses such as Running, Stopped, and Maintenance.
- **Dynamic Charts**: Visualize parts-per-minute and total parts produced using D3.js.
- **Device Event Logs**: View and manage recent device events and interruptions.
- **Order Progress Tracking**: Monitor production progress with a progress bar.
- **Loader Component**: Displays a loading spinner during API calls.

## Installation

1. Clone the repository:
```git clone https://github.com/your-username/sfs-metrics-dashboard.git cd sfs-metrics-dashboard```

2. Install dependencies:
```npm install```

3. Start the development server:
```ng serve```

4. Open the app in your browser:
```http://localhost:4200```

## Usage

- **Device Selection**: Select a device from the list to view its metrics and status.
- **Charts**: View real-time updates for parts-per-minute and total parts produced.
- **Order Progress**: Click on an order to view its production progress.