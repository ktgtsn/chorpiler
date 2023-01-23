//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Conformance {
  uint tokenState = 1;
  address[{{numberOfParticipants}}] private participants;

  constructor(address[{{numberOfParticipants}}] memory _participants) {
    participants = _participants;
  }

  function enact(uint id) external pure returns (uint) {
    {{#manualTransitions}}
    if ({{#initiator}}msg.sender == participants[{{{initiator}}}] && {{/initiator}}{{{id}}} == id && (tokenState & {{{consume}}} == {{{consume}}})) {
      tokenState &= ~uint({{{consume}}});
      tokenState |= {{{produce}}};
    }
    {{/manualTransitions}}
    {{#autonomousTransitions}}
    if (tokenState & {{{consume}}} == {{{consume}}}) {
      tokenState &= ~uint({{{consume}}});
      tokenState |= {{{produce}}};
    }
    {{/autonomousTransitions}}
    return tokenState;
  }
}