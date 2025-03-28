/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import type {
  AccessController,
  AccessControllerInterface,
} from "../AccessController";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001c60003361004b565b6100467f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083361004b565b610150565b6100558282610059565b5050565b60008281526020818152604090912061007b9183906103e46100cc821b17901c565b15610055576100886100ea565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006100e1836001600160a01b0384166100ee565b90505b92915050565b3390565b60006100fa8383610138565b610130575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556100e4565b5060006100e4565b60009081526001919091016020526040902054151590565b6107868061015f6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a217fddf11610066578063a217fddf146101ab578063ca15c873146101b3578063d5391393146101d0578063d547741f146101d8578063ec87621c146102045761009e565b8063248a9ca3146100a35780632f2ff15d146100d257806336568abe146101005780639010d07c1461012c57806391d148541461016b575b600080fd5b6100c0600480360360208110156100b957600080fd5b503561020c565b60408051918252519081900360200190f35b6100fe600480360360408110156100e857600080fd5b50803590602001356001600160a01b0316610221565b005b6100fe6004803603604081101561011657600080fd5b50803590602001356001600160a01b031661028d565b61014f6004803603604081101561014257600080fd5b50803590602001356102ee565b604080516001600160a01b039092168252519081900360200190f35b6101976004803603604081101561018157600080fd5b50803590602001356001600160a01b031661030f565b604080519115158252519081900360200190f35b6100c0610327565b6100c0600480360360208110156101c957600080fd5b503561032c565b6100c0610343565b6100fe600480360360408110156101ee57600080fd5b50803590602001356001600160a01b0316610367565b6100c06103c0565b60009081526020819052604090206002015490565b6000828152602081905260409020600201546102449061023f6103f9565b61030f565b61027f5760405162461bcd60e51b815260040180806020018281038252602f8152602001806106c3602f913960400191505060405180910390fd5b61028982826103fd565b5050565b6102956103f9565b6001600160a01b0316816001600160a01b0316146102e45760405162461bcd60e51b815260040180806020018281038252602f815260200180610722602f913960400191505060405180910390fd5b6102898282610466565b600082815260208190526040812061030690836104cf565b90505b92915050565b600082815260208190526040812061030690836104db565b600081565b6000818152602081905260408120610309906104f0565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6000828152602081905260409020600201546103859061023f6103f9565b6102e45760405162461bcd60e51b81526004018080602001828103825260308152602001806106f26030913960400191505060405180910390fd5b7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b6000610306836001600160a01b0384166104fb565b3390565b600082815260208190526040902061041590826103e4565b15610289576104226103f9565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260208190526040902061047e9082610545565b156102895761048b6103f9565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6000610306838361055a565b6000610306836001600160a01b0384166105be565b6000610309826105d6565b600061050783836105be565b61053d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610309565b506000610309565b6000610306836001600160a01b0384166105da565b8154600090821061059c5760405162461bcd60e51b81526004018080602001828103825260228152602001806106a16022913960400191505060405180910390fd5b8260000182815481106105ab57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b60008181526001830160205260408120548015610696578354600019808301919081019060009087908390811061060d57fe5b906000526020600020015490508087600001848154811061062a57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061065a57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610309565b600091505061030956fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e74416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b65416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c66a264697066735822122035140059001f2c1dfd1de28341968dda13ed7835c59b279fee213244cfaa9fc464736f6c634300060c0033";

type AccessControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AccessControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AccessController__factory extends ContractFactory {
  constructor(...args: AccessControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<AccessController> {
    return super.deploy(overrides || {}) as Promise<AccessController>;
  }
  getDeployTransaction(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessController {
    return super.attach(address) as AccessController;
  }
  connect(signer: Signer): AccessController__factory {
    return super.connect(signer) as AccessController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControllerInterface {
    return new utils.Interface(_abi) as AccessControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessController {
    return new Contract(address, _abi, signerOrProvider) as AccessController;
  }
}
