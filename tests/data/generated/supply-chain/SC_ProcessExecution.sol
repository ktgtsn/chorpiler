//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SC_ProcessExecution {
  uint public tokenState = 1;
  address[5] public participants;

  constructor(address[5] memory _participants) {
    participants = _participants;
  }

  function enact(uint id) external {
    uint _tokenState = tokenState;

    while(true) {
        if (msg.sender == participants[0] && 0 == id && (_tokenState & 1 == 1)) {
          _tokenState &= ~uint(1);
          _tokenState |= 2;
          break;
        }
        if (msg.sender == participants[4] && 1 == id && (_tokenState & 2 == 2)) {
          _tokenState &= ~uint(2);
          _tokenState |= 12;
          break;
        }
        if (msg.sender == participants[1] && 2 == id && (_tokenState & 4 == 4)) {
          _tokenState &= ~uint(4);
          _tokenState |= 16;
          break;
        }
        if (msg.sender == participants[1] && 3 == id && (_tokenState & 8 == 8)) {
          _tokenState &= ~uint(8);
          _tokenState |= 32;
          break;
        }
        if (msg.sender == participants[3] && 4 == id && (_tokenState & 64 == 64)) {
          _tokenState &= ~uint(64);
          _tokenState |= 128;
          break;
        }
        if (msg.sender == participants[2] && 5 == id && (_tokenState & 128 == 128)) {
          _tokenState &= ~uint(128);
          _tokenState |= 256;
          break;
        }
        if (msg.sender == participants[2] && 6 == id && (_tokenState & 256 == 256)) {
          _tokenState &= ~uint(256);
          _tokenState |= 512;
          break;
        }
        if (msg.sender == participants[3] && 7 == id && (_tokenState & 512 == 512)) {
          _tokenState &= ~uint(512);
          _tokenState |= 1024;
          break;
        }
        if (msg.sender == participants[4] && 8 == id && (_tokenState & 1024 == 1024)) {
          _tokenState &= ~uint(1024);
          _tokenState |= 2048;
          break;
        }
        if (msg.sender == participants[4] && 9 == id && (_tokenState & 2048 == 2048)) {
          _tokenState &= ~uint(2048);
          _tokenState |= 0;
          break;
        }
      return;
    }

    while(_tokenState != 0) {
      if ((_tokenState & 48 == 48)) {
        _tokenState &= ~uint(48);
        _tokenState |= 64;
        continue;
      }
      break;
    }

    tokenState = _tokenState;
  }
}