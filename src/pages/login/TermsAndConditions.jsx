import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className='p-2'>
      <div className='py-2'>
        <p className='font-semibold'>1. Introduction</p>
        <p className='text-sm'>
          Welcome to our Online Voting System. By accessing or using our
          platform, you agree to comply with and be bound by the following terms
          and conditions. Please review them carefully.
        </p>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>2. Eligibility </p>
        <p className='text-sm'>To use our Online Voting System, you must:</p>
        <li className='text-sm list-inside'>
          Be a registered voter in accordance with our registration
          requirements.
        </li>
        <li className='text-sm'>
          Provide accurate and truthful information during registration and
          voting.
        </li>
        <li className='text-sm'>
          Not use the platform for any illegal or unauthorized purposes.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>3. User Account </p>
        <li className='text-sm list-inside'>
          You are responsible for maintaining the confidentiality of your
          account information, including your password.
        </li>
        <li className='text-sm'>
          You agree to notify us immediately of any unauthorized use of your
          account or any other breach of security.
        </li>
        <li className='text-sm'>
          We will not be liable for any loss or damage arising from your failure
          to comply with this obligation.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>4. Voting Process </p>
        <li className='text-sm'>
          Each registered user is entitled to one vote per election unless
          otherwise specified.
        </li>
        <li className='text-sm'>
          All votes are final and cannot be changed once submitted.
        </li>
        <li className='text-sm'>
          The voting period will be clearly communicated, and votes must be cast
          within this period.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>5. Data Privacy</p>
        <li className='text-sm'>
          We are committed to protecting your privacy. All personal data will be
          handled in accordance with our Privacy Policy.
        </li>
        <li className='text-sm'>
          By using the platform, you consent to the collection, use, and sharing
          of your information as described in our Privacy Policy.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>6. Security </p>
        <li className='text-sm'>
          We implement appropriate technical and organizational measures to
          ensure the security of the voting process and the data collected.
        </li>
        <li className='text-sm'>
          However, we cannot guarantee absolute security, and you agree to use
          the platform at your own risk.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>7. Prohibited Conduct</p>
        <li className='text-sm'>
          You agree not to engage in any activity that interferes with or
          disrupts the operation of the platform.
        </li>
        <li className='text-sm'>
          You must not attempt to gain unauthorized access to any part of the
          platform, other users' accounts, or any systems or networks connected
          to the platform.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>8. Termination</p>
        <li className='text-sm'>
          We reserve the right to suspend or terminate your access to the
          platform at any time, with or without cause, and with or without
          notice.
        </li>
        <li className='text-sm'>
          Upon termination, your right to use the platform will immediately
          cease.
        </li>
      </div>
      <div className='py-2'>
        <p className='font-semibold'>9. Contact Information </p>
        <li className='text-sm'>
          If you have any questions about these terms and conditions, please
          contact the chairman's office.
        </li>
      </div>
      <div className='py-2'>
        <p className='text-sm'>
          By using our Online Voting System, you acknowledge that you have read,
          understood, and agree to be bound by these terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
