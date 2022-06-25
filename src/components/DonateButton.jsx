import React, { useState, useCallback } from 'react';
import { ethers } from 'ethers';
import styles from '../styles/DonateButton.module.css';

const DonateButton = (props) => {

    const [transactionStatus, setTransactionStatus] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [userBalance, setUserBalance] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const CONTRACT_ADDRESS = '0x8a739E3349c8a21506c0045F5c7C473E2CE15a57';
    const ABI = {
        "deploy": {
            "VM:-": {
                "linkReferences": {},
                "autoDeployLib": true
            },
            "main:1": {
                "linkReferences": {},
                "autoDeployLib": true
            },
            "ropsten:3": {
                "linkReferences": {},
                "autoDeployLib": true
            },
            "rinkeby:4": {
                "linkReferences": {},
                "autoDeployLib": true
            },
            "kovan:42": {
                "linkReferences": {},
                "autoDeployLib": true
            },
            "görli:5": {
                "linkReferences": {},
                "autoDeployLib": true
            },
            "Custom": {
                "linkReferences": {},
                "autoDeployLib": true
            }
        },
        "data": {
            "bytecode": {
                "functionDebugData": {
                    "@_16": {
                        "entryPoint": null,
                        "id": 16,
                        "parameterSlots": 0,
                        "returnSlots": 0
                    }
                },
                "generatedSources": [],
                "linkReferences": {},
                "object": "608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506103b2806100606000396000f3fe6080604052600436106100345760003560e01c806370a08231146100395780638da5cb5b14610076578063e39ff19f146100a1575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b91906101d0565b6100bd565b60405161006d91906102a6565b60405180910390f35b34801561008257600080fd5b5061008b6100de565b604051610098919061026b565b60405180910390f35b6100bb60048036038101906100b691906101fd565b610102565b005b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b343373ffffffffffffffffffffffffffffffffffffffff1631101561015c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015390610286565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156101a2573d6000803e3d6000fd5b5050565b6000813590506101b58161034e565b92915050565b6000813590506101ca81610365565b92915050565b6000602082840312156101e6576101e5610320565b5b60006101f4848285016101a6565b91505092915050565b60006020828403121561021357610212610320565b5b6000610221848285016101bb565b91505092915050565b610233816102d2565b82525050565b6000610246600f836102c1565b915061025182610325565b602082019050919050565b61026581610316565b82525050565b6000602082019050610280600083018461022a565b92915050565b6000602082019050818103600083015261029f81610239565b9050919050565b60006020820190506102bb600083018461025c565b92915050565b600082825260208201905092915050565b60006102dd826102f6565b9050919050565b60006102ef826102f6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b7f4e6f7420656e6f75676820455448210000000000000000000000000000000000600082015250565b610357816102d2565b811461036257600080fd5b50565b61036e816102e4565b811461037957600080fd5b5056fea264697066735822122025e206dde6514aaa143fb6380288ef93da3f8e125aca7472acd86879fa029ffa64736f6c63430008070033",
                "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH2 0x3B2 DUP1 PUSH2 0x60 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x34 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x70A08231 EQ PUSH2 0x39 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x76 JUMPI DUP1 PUSH4 0xE39FF19F EQ PUSH2 0xA1 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x45 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x60 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x1D0 JUMP JUMPDEST PUSH2 0xBD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x6D SWAP2 SWAP1 PUSH2 0x2A6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x82 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x8B PUSH2 0xDE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x98 SWAP2 SWAP1 PUSH2 0x26B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xBB PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xB6 SWAP2 SWAP1 PUSH2 0x1FD JUMP JUMPDEST PUSH2 0x102 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST CALLVALUE CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE LT ISZERO PUSH2 0x15C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x153 SWAP1 PUSH2 0x286 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC CALLVALUE SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x1A2 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1B5 DUP2 PUSH2 0x34E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1CA DUP2 PUSH2 0x365 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1E6 JUMPI PUSH2 0x1E5 PUSH2 0x320 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1F4 DUP5 DUP3 DUP6 ADD PUSH2 0x1A6 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x213 JUMPI PUSH2 0x212 PUSH2 0x320 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x221 DUP5 DUP3 DUP6 ADD PUSH2 0x1BB JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x233 DUP2 PUSH2 0x2D2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x246 PUSH1 0xF DUP4 PUSH2 0x2C1 JUMP JUMPDEST SWAP2 POP PUSH2 0x251 DUP3 PUSH2 0x325 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x265 DUP2 PUSH2 0x316 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x280 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x22A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x29F DUP2 PUSH2 0x239 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2BB PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x25C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2DD DUP3 PUSH2 0x2F6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2EF DUP3 PUSH2 0x2F6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E6F7420656E6F75676820455448210000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x357 DUP2 PUSH2 0x2D2 JUMP JUMPDEST DUP2 EQ PUSH2 0x362 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x36E DUP2 PUSH2 0x2E4 JUMP JUMPDEST DUP2 EQ PUSH2 0x379 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x25 0xE2 MOD 0xDD 0xE6 MLOAD 0x4A 0xAA EQ EXTCODEHASH 0xB6 CODESIZE MUL DUP9 0xEF SWAP4 0xDA EXTCODEHASH DUP15 SLT GAS 0xCA PUSH21 0x72ACD86879FA029FFA64736F6C6343000807003300 ",
                "sourceMap": "60:552:0:-:0;;;167:51;;;;;;;;;;200:10;192:5;;:18;;;;;;;;;;;;;;;;;;60:552;;;;;;"
            },
            "deployedBytecode": {
                "functionDebugData": {
                    "@balanceOf_50": {
                        "entryPoint": 189,
                        "id": 50,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "@owner_3": {
                        "entryPoint": 222,
                        "id": 3,
                        "parameterSlots": 0,
                        "returnSlots": 0
                    },
                    "@transferFunds_39": {
                        "entryPoint": 258,
                        "id": 39,
                        "parameterSlots": 1,
                        "returnSlots": 0
                    },
                    "abi_decode_t_address": {
                        "entryPoint": 422,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "abi_decode_t_address_payable": {
                        "entryPoint": 443,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "abi_decode_tuple_t_address": {
                        "entryPoint": 464,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "abi_decode_tuple_t_address_payable": {
                        "entryPoint": 509,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "abi_encode_t_address_to_t_address_fromStack": {
                        "entryPoint": 554,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 0
                    },
                    "abi_encode_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de_to_t_string_memory_ptr_fromStack": {
                        "entryPoint": 569,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "abi_encode_t_uint256_to_t_uint256_fromStack": {
                        "entryPoint": 604,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 0
                    },
                    "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
                        "entryPoint": 619,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "abi_encode_tuple_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de__to_t_string_memory_ptr__fromStack_reversed": {
                        "entryPoint": 646,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
                        "entryPoint": 678,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "allocate_unbounded": {
                        "entryPoint": null,
                        "id": null,
                        "parameterSlots": 0,
                        "returnSlots": 1
                    },
                    "array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
                        "entryPoint": 705,
                        "id": null,
                        "parameterSlots": 2,
                        "returnSlots": 1
                    },
                    "cleanup_t_address": {
                        "entryPoint": 722,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "cleanup_t_address_payable": {
                        "entryPoint": 740,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "cleanup_t_uint160": {
                        "entryPoint": 758,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "cleanup_t_uint256": {
                        "entryPoint": 790,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 1
                    },
                    "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db": {
                        "entryPoint": null,
                        "id": null,
                        "parameterSlots": 0,
                        "returnSlots": 0
                    },
                    "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b": {
                        "entryPoint": 800,
                        "id": null,
                        "parameterSlots": 0,
                        "returnSlots": 0
                    },
                    "store_literal_in_memory_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de": {
                        "entryPoint": 805,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 0
                    },
                    "validator_revert_t_address": {
                        "entryPoint": 846,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 0
                    },
                    "validator_revert_t_address_payable": {
                        "entryPoint": 869,
                        "id": null,
                        "parameterSlots": 1,
                        "returnSlots": 0
                    }
                },
                "generatedSources": [
                    {
                        "ast": {
                            "nodeType": "YulBlock",
                            "src": "0:3869:1",
                            "statements": [
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "59:87:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "69:29:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "91:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "calldataload",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "78:12:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "78:20:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "69:5:1"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "134:5:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "validator_revert_t_address",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "107:26:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "107:33:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "107:33:1"
                                            }
                                        ]
                                    },
                                    "name": "abi_decode_t_address",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "offset",
                                            "nodeType": "YulTypedName",
                                            "src": "37:6:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "end",
                                            "nodeType": "YulTypedName",
                                            "src": "45:3:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "53:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "7:139:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "212:95:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "222:29:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "offset",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "244:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "calldataload",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "231:12:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "231:20:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "222:5:1"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "295:5:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "validator_revert_t_address_payable",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "260:34:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "260:41:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "260:41:1"
                                            }
                                        ]
                                    },
                                    "name": "abi_decode_t_address_payable",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "offset",
                                            "nodeType": "YulTypedName",
                                            "src": "190:6:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "end",
                                            "nodeType": "YulTypedName",
                                            "src": "198:3:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "206:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "152:155:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "379:263:1",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "425:83:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [],
                                                                "functionName": {
                                                                    "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "427:77:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "427:79:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "427:79:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "dataEnd",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "400:7:1"
                                                                },
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "409:9:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "396:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "396:23:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "421:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "slt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "392:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "392:32:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "389:119:1"
                                            },
                                            {
                                                "nodeType": "YulBlock",
                                                "src": "518:117:1",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulVariableDeclaration",
                                                        "src": "533:15:1",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "547:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        "variables": [
                                                            {
                                                                "name": "offset",
                                                                "nodeType": "YulTypedName",
                                                                "src": "537:6:1",
                                                                "type": ""
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "562:63:1",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "headStart",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "597:9:1"
                                                                        },
                                                                        {
                                                                            "name": "offset",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "608:6:1"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "593:3:1"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "593:22:1"
                                                                },
                                                                {
                                                                    "name": "dataEnd",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "617:7:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "abi_decode_t_address",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "572:20:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "572:53:1"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "value0",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "562:6:1"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "abi_decode_tuple_t_address",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "headStart",
                                            "nodeType": "YulTypedName",
                                            "src": "349:9:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "dataEnd",
                                            "nodeType": "YulTypedName",
                                            "src": "360:7:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "value0",
                                            "nodeType": "YulTypedName",
                                            "src": "372:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "313:329:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "722:271:1",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "768:83:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [],
                                                                "functionName": {
                                                                    "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "770:77:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "770:79:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "770:79:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "dataEnd",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "743:7:1"
                                                                },
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "752:9:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "739:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "739:23:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "764:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "slt",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "735:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "735:32:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "732:119:1"
                                            },
                                            {
                                                "nodeType": "YulBlock",
                                                "src": "861:125:1",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulVariableDeclaration",
                                                        "src": "876:15:1",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "890:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        "variables": [
                                                            {
                                                                "name": "offset",
                                                                "nodeType": "YulTypedName",
                                                                "src": "880:6:1",
                                                                "type": ""
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "905:71:1",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "headStart",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "948:9:1"
                                                                        },
                                                                        {
                                                                            "name": "offset",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "959:6:1"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "944:3:1"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "944:22:1"
                                                                },
                                                                {
                                                                    "name": "dataEnd",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "968:7:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "abi_decode_t_address_payable",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "915:28:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "915:61:1"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "value0",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "905:6:1"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "abi_decode_tuple_t_address_payable",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "headStart",
                                            "nodeType": "YulTypedName",
                                            "src": "692:9:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "dataEnd",
                                            "nodeType": "YulTypedName",
                                            "src": "703:7:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "value0",
                                            "nodeType": "YulTypedName",
                                            "src": "715:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "648:345:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "1064:53:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1081:3:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1104:5:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_address",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1086:17:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1086:24:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1074:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1074:37:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "1074:37:1"
                                            }
                                        ]
                                    },
                                    "name": "abi_encode_t_address_to_t_address_fromStack",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "1052:5:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "pos",
                                            "nodeType": "YulTypedName",
                                            "src": "1059:3:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "999:118:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "1269:220:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "1279:74:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1345:3:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1350:2:1",
                                                            "type": "",
                                                            "value": "15"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1286:58:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1286:67:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1279:3:1"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1451:3:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "store_literal_in_memory_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1362:88:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1362:93:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "1362:93:1"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "1464:19:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1475:3:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1480:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1471:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1471:12:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "end",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1464:3:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "abi_encode_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de_to_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulTypedName",
                                            "src": "1257:3:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "end",
                                            "nodeType": "YulTypedName",
                                            "src": "1265:3:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "1123:366:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "1560:53:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1577:3:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1600:5:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "cleanup_t_uint256",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1582:17:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1582:24:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1570:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1570:37:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "1570:37:1"
                                            }
                                        ]
                                    },
                                    "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "1548:5:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "pos",
                                            "nodeType": "YulTypedName",
                                            "src": "1555:3:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "1495:118:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "1717:124:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "1727:26:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1739:9:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "1750:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1735:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1735:18:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1727:4:1"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "value0",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1807:6:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1820:9:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "1831:1:1",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1816:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "1816:17:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_encode_t_address_to_t_address_fromStack",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1763:43:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "1763:71:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "1763:71:1"
                                            }
                                        ]
                                    },
                                    "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "headStart",
                                            "nodeType": "YulTypedName",
                                            "src": "1689:9:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "value0",
                                            "nodeType": "YulTypedName",
                                            "src": "1701:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulTypedName",
                                            "src": "1712:4:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "1619:222:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "2018:248:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2028:26:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2040:9:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2051:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2036:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2036:18:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2028:4:1"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2075:9:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2086:1:1",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2071:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2071:17:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "tail",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2094:4:1"
                                                                },
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2100:9:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "sub",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2090:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2090:20:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2064:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2064:47:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "2064:47:1"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2120:139:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "tail",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2254:4:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_encode_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de_to_t_string_memory_ptr_fromStack",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2128:124:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2128:131:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2120:4:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "abi_encode_tuple_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de__to_t_string_memory_ptr__fromStack_reversed",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "headStart",
                                            "nodeType": "YulTypedName",
                                            "src": "1998:9:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulTypedName",
                                            "src": "2013:4:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "1847:419:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "2370:124:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2380:26:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "headStart",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2392:9:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2403:2:1",
                                                            "type": "",
                                                            "value": "32"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2388:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2388:18:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2380:4:1"
                                                    }
                                                ]
                                            },
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "value0",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2460:6:1"
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "headStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2473:9:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2484:1:1",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2469:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2469:17:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2416:43:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2416:71:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "2416:71:1"
                                            }
                                        ]
                                    },
                                    "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "headStart",
                                            "nodeType": "YulTypedName",
                                            "src": "2342:9:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "value0",
                                            "nodeType": "YulTypedName",
                                            "src": "2354:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "tail",
                                            "nodeType": "YulTypedName",
                                            "src": "2365:4:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "2272:222:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "2540:35:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2550:19:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2566:2:1",
                                                            "type": "",
                                                            "value": "64"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mload",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2560:5:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2560:9:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "memPtr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2550:6:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "allocate_unbounded",
                                    "nodeType": "YulFunctionDefinition",
                                    "returnVariables": [
                                        {
                                            "name": "memPtr",
                                            "nodeType": "YulTypedName",
                                            "src": "2533:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "2500:75:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "2677:73:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2694:3:1"
                                                        },
                                                        {
                                                            "name": "length",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2699:6:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2687:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2687:19:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "2687:19:1"
                                            },
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2715:29:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "pos",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2734:3:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "2739:4:1",
                                                            "type": "",
                                                            "value": "0x20"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "add",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2730:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2730:14:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "updated_pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2715:11:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "pos",
                                            "nodeType": "YulTypedName",
                                            "src": "2649:3:1",
                                            "type": ""
                                        },
                                        {
                                            "name": "length",
                                            "nodeType": "YulTypedName",
                                            "src": "2654:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "updated_pos",
                                            "nodeType": "YulTypedName",
                                            "src": "2665:11:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "2581:169:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "2801:51:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2811:35:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2840:5:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_uint160",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2822:17:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2822:24:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "cleaned",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2811:7:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "cleanup_t_address",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "2783:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulTypedName",
                                            "src": "2793:7:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "2756:96:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "2911:51:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "2921:35:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2950:5:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "cleanup_t_uint160",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2932:17:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "2932:24:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "cleaned",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2921:7:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "cleanup_t_address_payable",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "2893:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulTypedName",
                                            "src": "2903:7:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "2858:104:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3013:81:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3023:65:1",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "value",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3038:5:1"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3045:42:1",
                                                            "type": "",
                                                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "and",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3034:3:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3034:54:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "cleaned",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3023:7:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "cleanup_t_uint160",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "2995:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulTypedName",
                                            "src": "3005:7:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "2968:126:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3145:32:1",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "3155:16:1",
                                                "value": {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3166:5:1"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "cleaned",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3155:7:1"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "name": "cleanup_t_uint256",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "3127:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "returnVariables": [
                                        {
                                            "name": "cleaned",
                                            "nodeType": "YulTypedName",
                                            "src": "3137:7:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "3100:77:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3272:28:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3289:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3292:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3282:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3282:12:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "3282:12:1"
                                            }
                                        ]
                                    },
                                    "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                    "nodeType": "YulFunctionDefinition",
                                    "src": "3183:117:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3395:28:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3412:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3415:1:1",
                                                            "type": "",
                                                            "value": "0"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "revert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3405:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3405:12:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "3405:12:1"
                                            }
                                        ]
                                    },
                                    "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                    "nodeType": "YulFunctionDefinition",
                                    "src": "3306:117:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3535:59:1",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "memPtr",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3557:6:1"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3565:1:1",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3553:3:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3553:14:1"
                                                        },
                                                        {
                                                            "hexValue": "4e6f7420656e6f7567682045544821",
                                                            "kind": "string",
                                                            "nodeType": "YulLiteral",
                                                            "src": "3569:17:1",
                                                            "type": "",
                                                            "value": "Not enough ETH!"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "mstore",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3546:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3546:41:1"
                                                },
                                                "nodeType": "YulExpressionStatement",
                                                "src": "3546:41:1"
                                            }
                                        ]
                                    },
                                    "name": "store_literal_in_memory_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "memPtr",
                                            "nodeType": "YulTypedName",
                                            "src": "3527:6:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "3429:165:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3643:79:1",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "3700:16:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "3709:1:1",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "3712:1:1",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3702:6:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3702:12:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "3702:12:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3666:5:1"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "value",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3691:5:1"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "cleanup_t_address",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3673:17:1"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3673:24:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "eq",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3663:2:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3663:35:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3656:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3656:43:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "3653:63:1"
                                            }
                                        ]
                                    },
                                    "name": "validator_revert_t_address",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "3636:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "3600:122:1"
                                },
                                {
                                    "body": {
                                        "nodeType": "YulBlock",
                                        "src": "3779:87:1",
                                        "statements": [
                                            {
                                                "body": {
                                                    "nodeType": "YulBlock",
                                                    "src": "3844:16:1",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "3853:1:1",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "3856:1:1",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "revert",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3846:6:1"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3846:12:1"
                                                            },
                                                            "nodeType": "YulExpressionStatement",
                                                            "src": "3846:12:1"
                                                        }
                                                    ]
                                                },
                                                "condition": {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "name": "value",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3802:5:1"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "value",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3835:5:1"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "cleanup_t_address_payable",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3809:25:1"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3809:32:1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "eq",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3799:2:1"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3799:43:1"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "iszero",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3792:6:1"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "3792:51:1"
                                                },
                                                "nodeType": "YulIf",
                                                "src": "3789:71:1"
                                            }
                                        ]
                                    },
                                    "name": "validator_revert_t_address_payable",
                                    "nodeType": "YulFunctionDefinition",
                                    "parameters": [
                                        {
                                            "name": "value",
                                            "nodeType": "YulTypedName",
                                            "src": "3772:5:1",
                                            "type": ""
                                        }
                                    ],
                                    "src": "3728:138:1"
                                }
                            ]
                        },
                        "contents": "{\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_address_payable(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address_payable(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address_payable(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_payable(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 15)\n        store_literal_in_memory_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_address_payable(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function store_literal_in_memory_15a10bfc30965e42ff8acbb34211e82f5d4dfa40cc212e627d7e731a1df1e3de(memPtr) {\n\n        mstore(add(memPtr, 0), \"Not enough ETH!\")\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_address_payable(value) {\n        if iszero(eq(value, cleanup_t_address_payable(value))) { revert(0, 0) }\n    }\n\n}\n",
                        "id": 1,
                        "language": "Yul",
                        "name": "#utility.yul"
                    }
                ],
                "immutableReferences": {},
                "linkReferences": {},
                "object": "6080604052600436106100345760003560e01c806370a08231146100395780638da5cb5b14610076578063e39ff19f146100a1575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b91906101d0565b6100bd565b60405161006d91906102a6565b60405180910390f35b34801561008257600080fd5b5061008b6100de565b604051610098919061026b565b60405180910390f35b6100bb60048036038101906100b691906101fd565b610102565b005b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b343373ffffffffffffffffffffffffffffffffffffffff1631101561015c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015390610286565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156101a2573d6000803e3d6000fd5b5050565b6000813590506101b58161034e565b92915050565b6000813590506101ca81610365565b92915050565b6000602082840312156101e6576101e5610320565b5b60006101f4848285016101a6565b91505092915050565b60006020828403121561021357610212610320565b5b6000610221848285016101bb565b91505092915050565b610233816102d2565b82525050565b6000610246600f836102c1565b915061025182610325565b602082019050919050565b61026581610316565b82525050565b6000602082019050610280600083018461022a565b92915050565b6000602082019050818103600083015261029f81610239565b9050919050565b60006020820190506102bb600083018461025c565b92915050565b600082825260208201905092915050565b60006102dd826102f6565b9050919050565b60006102ef826102f6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b7f4e6f7420656e6f75676820455448210000000000000000000000000000000000600082015250565b610357816102d2565b811461036257600080fd5b50565b61036e816102e4565b811461037957600080fd5b5056fea264697066735822122025e206dde6514aaa143fb6380288ef93da3f8e125aca7472acd86879fa029ffa64736f6c63430008070033",
                "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x34 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x70A08231 EQ PUSH2 0x39 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0x76 JUMPI DUP1 PUSH4 0xE39FF19F EQ PUSH2 0xA1 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x45 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x60 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x5B SWAP2 SWAP1 PUSH2 0x1D0 JUMP JUMPDEST PUSH2 0xBD JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x6D SWAP2 SWAP1 PUSH2 0x2A6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x82 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x8B PUSH2 0xDE JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x98 SWAP2 SWAP1 PUSH2 0x26B JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xBB PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xB6 SWAP2 SWAP1 PUSH2 0x1FD JUMP JUMPDEST PUSH2 0x102 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST CALLVALUE CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND BALANCE LT ISZERO PUSH2 0x15C JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x153 SWAP1 PUSH2 0x286 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH2 0x8FC CALLVALUE SWAP1 DUP2 ISZERO MUL SWAP1 PUSH1 0x40 MLOAD PUSH1 0x0 PUSH1 0x40 MLOAD DUP1 DUP4 SUB DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x1A2 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1B5 DUP2 PUSH2 0x34E JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x1CA DUP2 PUSH2 0x365 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x1E6 JUMPI PUSH2 0x1E5 PUSH2 0x320 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x1F4 DUP5 DUP3 DUP6 ADD PUSH2 0x1A6 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x213 JUMPI PUSH2 0x212 PUSH2 0x320 JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0x221 DUP5 DUP3 DUP6 ADD PUSH2 0x1BB JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x233 DUP2 PUSH2 0x2D2 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x246 PUSH1 0xF DUP4 PUSH2 0x2C1 JUMP JUMPDEST SWAP2 POP PUSH2 0x251 DUP3 PUSH2 0x325 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x265 DUP2 PUSH2 0x316 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x280 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x22A JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x29F DUP2 PUSH2 0x239 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x2BB PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0x25C JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2DD DUP3 PUSH2 0x2F6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x2EF DUP3 PUSH2 0x2F6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH32 0x4E6F7420656E6F75676820455448210000000000000000000000000000000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH2 0x357 DUP2 PUSH2 0x2D2 JUMP JUMPDEST DUP2 EQ PUSH2 0x362 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH2 0x36E DUP2 PUSH2 0x2E4 JUMP JUMPDEST DUP2 EQ PUSH2 0x379 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0x25 0xE2 MOD 0xDD 0xE6 MLOAD 0x4A 0xAA EQ EXTCODEHASH 0xB6 CODESIZE MUL DUP9 0xEF SWAP4 0xDA EXTCODEHASH DUP15 SLT GAS 0xCA PUSH21 0x72ACD86879FA029FFA64736F6C6343000807003300 ",
                "sourceMap": "60:552:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;498:109;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;93:20;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;305:185;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;498:109;557:7;584;:15;;;577:22;;498:109;;;:::o;93:20::-;;;;;;;;;;;;:::o;305:185::-;408:9;386:10;:18;;;:31;;378:59;;;;;;;;;;;;:::i;:::-;;;;;;;;;460:2;:11;;:22;472:9;460:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;305:185;:::o;7:139:1:-;53:5;91:6;78:20;69:29;;107:33;134:5;107:33;:::i;:::-;7:139;;;;:::o;152:155::-;206:5;244:6;231:20;222:29;;260:41;295:5;260:41;:::i;:::-;152:155;;;;:::o;313:329::-;372:6;421:2;409:9;400:7;396:23;392:32;389:119;;;427:79;;:::i;:::-;389:119;547:1;572:53;617:7;608:6;597:9;593:22;572:53;:::i;:::-;562:63;;518:117;313:329;;;;:::o;648:345::-;715:6;764:2;752:9;743:7;739:23;735:32;732:119;;;770:79;;:::i;:::-;732:119;890:1;915:61;968:7;959:6;948:9;944:22;915:61;:::i;:::-;905:71;;861:125;648:345;;;;:::o;999:118::-;1086:24;1104:5;1086:24;:::i;:::-;1081:3;1074:37;999:118;;:::o;1123:366::-;1265:3;1286:67;1350:2;1345:3;1286:67;:::i;:::-;1279:74;;1362:93;1451:3;1362:93;:::i;:::-;1480:2;1475:3;1471:12;1464:19;;1123:366;;;:::o;1495:118::-;1582:24;1600:5;1582:24;:::i;:::-;1577:3;1570:37;1495:118;;:::o;1619:222::-;1712:4;1750:2;1739:9;1735:18;1727:26;;1763:71;1831:1;1820:9;1816:17;1807:6;1763:71;:::i;:::-;1619:222;;;;:::o;1847:419::-;2013:4;2051:2;2040:9;2036:18;2028:26;;2100:9;2094:4;2090:20;2086:1;2075:9;2071:17;2064:47;2128:131;2254:4;2128:131;:::i;:::-;2120:139;;1847:419;;;:::o;2272:222::-;2365:4;2403:2;2392:9;2388:18;2380:26;;2416:71;2484:1;2473:9;2469:17;2460:6;2416:71;:::i;:::-;2272:222;;;;:::o;2581:169::-;2665:11;2699:6;2694:3;2687:19;2739:4;2734:3;2730:14;2715:29;;2581:169;;;;:::o;2756:96::-;2793:7;2822:24;2840:5;2822:24;:::i;:::-;2811:35;;2756:96;;;:::o;2858:104::-;2903:7;2932:24;2950:5;2932:24;:::i;:::-;2921:35;;2858:104;;;:::o;2968:126::-;3005:7;3045:42;3038:5;3034:54;3023:65;;2968:126;;;:::o;3100:77::-;3137:7;3166:5;3155:16;;3100:77;;;:::o;3306:117::-;3415:1;3412;3405:12;3429:165;3569:17;3565:1;3557:6;3553:14;3546:41;3429:165;:::o;3600:122::-;3673:24;3691:5;3673:24;:::i;:::-;3666:5;3663:35;3653:63;;3712:1;3709;3702:12;3653:63;3600:122;:::o;3728:138::-;3809:32;3835:5;3809:32;:::i;:::-;3802:5;3799:43;3789:71;;3856:1;3853;3846:12;3789:71;3728:138;:::o"
            },
            "gasEstimates": {
                "creation": {
                    "codeDepositCost": "189200",
                    "executionCost": "24498",
                    "totalCost": "213698"
                },
                "external": {
                    "balanceOf(address)": "3235",
                    "owner()": "2511",
                    "transferFunds(address)": "infinite"
                }
            },
            "methodIdentifiers": {
                "balanceOf(address)": "70a08231",
                "owner()": "8da5cb5b",
                "transferFunds(address)": "e39ff19f"
            }
        },
        "abi": [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address payable",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "transferFunds",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }
        ]
    }

    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);

    const donateFunds = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {

                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, ABI.abi, signer);
                
                let donateTxn = await connectedContract.transferFunds(props.recipientAddress, {
                    // value: toWei(props.amountToDonate, [, "ether"]).toString()
                    // value: web3.utils.toWei(props.amountToDonate, [, "ether"])
                    value: (props.amountToDonate * 10**18).toString()
                })

                await donateTxn.wait();
                setTransactionStatus('Transaction successful! Thank you for your donation!');

                ethereum.request({ method: 'eth_getBalance', params: [props.recipientAddress, 'latest'] })
                .then(
                    (balance) => {
                        console.log(parseInt(balance, 16) / 10**18);
                        props.updateRecipientBalance(balance);
                    }
                )

                setTimeout(() => { setTransactionStatus('') }, 5000);

            }
        }
        catch (err) {
            // console.log(err);
            setTransactionStatus(err);
        }
    }

    const callToSetIsDisabled = useCallback(
        () => {
            toSetIsDisabled();
        },
        [props.recipientAddress, props.amountToDonate]
    );

    const toSetIsDisabled = () => {

        getUserBalance();

        setIsDisabled(true);

        if (props.recipientAddress && props.amountToDonate > 0 && parseFloat(props.amountToDonate) + 0.0001 < parseFloat(parseInt(userBalance, 16) / 10**18)) {
            setIsDisabled(false);
            setErrorMessage('');
            // console.log('false')
        }

        else if (!props.recipientAddress) {
            // setIsDisabled(true);
            setErrorMessage('Please choose a charity to donate to.');
        }

        else if (props.amountToDonate <= 0) {
            // setIsDisabled(true);
            setErrorMessage('Donation amount should be greater than 0.');
        }

        else {
            // setIsDisabled(true);
            setErrorMessage('Insufficient funds in wallet.');
            // console.log('true');
        }
    }

    const getUserBalance = () => {
        ethereum.request({ method: 'eth_getBalance', params: [props.currentAccount, 'latest'] })
        .then(
            (balance) => {
                setUserBalance(balance);
            }
        )
    }

    return (
        <div className={styles.donateButtonContainer}>
            <button className={styles.donateButton} ref={callToSetIsDisabled} onClick={async () => {await donateFunds()}} disabled={isDisabled}>
                Donate
            </button>
            <br />
            <div>{transactionStatus}</div>
            <br />
            <div className={styles.errorMessageText}>{errorMessage}</div>
        </div>
    )
}

export default DonateButton;