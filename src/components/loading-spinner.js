import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function LoadSpinner() {
  return (
    <div className='row'>
      <div className='col'>
        <div className='container text-center'>
          <div className='mt-4'>
            <Spinner animation="border"
              variant="dark"
              style={{ width: '5rem', height: '5rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
}