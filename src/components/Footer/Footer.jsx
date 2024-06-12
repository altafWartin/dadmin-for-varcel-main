import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-200  text-center text-lg-left w-full mt-auto z-999999">
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
