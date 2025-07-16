import { ApiResponse } from './types';

function handleApiResponse(res: ApiResponse): string {
  switch (res.status) {
    case 'success':
      return `Success with data: ${res.data}`;
    case 'error':
      return `Error with message: ${res.message}`;
    // Uncomment the line below to see effect after fixing strictNullChecks
    // case 'pending':
    //   return 'Pending';
    // No default
  }
}

const results: ApiResponse[] = [
  { status: 'success', data: 'done' },
  { status: 'error', message: 'oops' },
  { status: 'pending' }
];

for (const res of results) {
  // This will throw at runtime on 'pending' until exhaustiveness is fixed
  try {
    const output = handleApiResponse(res);
    console.log(output);
  } catch (e) {
    console.error('Runtime error:', e);
  }
}
