import React, { useRef, useState } from 'react';
import './encryptionModal.css';

const EncryptionModal = ({ }) => {
  return (
    <div className='modal-container'>
      <div className='modal-header'>
        Encryption
      </div>
      <div className='modal-body'>
        <div>Do you want to encrypt your modification</div>
        <div className='button-group'>
          <button className='modal-button'>YES</button>
          <button className='modal-button'>NO</button>
        </div>
      </div>
      <div className='modal-footer'>
      Cryptography is the art of protecting information by transforming it into an unreadable format, called cipher text. Only those who possess a secret key can decipher the message into plain text. Encrypted messages can sometimes be broken by cryptanalysis, also called code-breaking, although modern cryptography techniques are virtually unbreakable.
      </div>
    </div>
  )
};

export default EncryptionModal;