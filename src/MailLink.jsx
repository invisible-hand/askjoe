import React from 'react';

const mail = 'noreply@askjoe.com';
const subject = '';
const body = '';

const MailLink = () => {
  return (
    <a
      className='App-link'
      href={`mailto:${mail}`}
      subject={subject}
      body={body}
      target='_blank'
      rel='noreferrer'
    >
      Contact
    </a>
  );
};

export default MailLink;
