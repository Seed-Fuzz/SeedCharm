/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockAccountAccessController,
  MockAccountAccessControllerInterface,
} from "../MockAccountAccessController";

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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AccountAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AccountBlocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
    ],
    name: "AllowedAccountsCleared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "index",
        type: "uint32",
      },
    ],
    name: "BlockedAccountsCleared",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
    ],
    name: "RootChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
    ],
    name: "allowAccounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
    ],
    name: "allowSelf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_accounts",
        type: "address[]",
      },
    ],
    name: "blockAccounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clearAllowedAccounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clearBlockedAccounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllowedAccountsIndex",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockedAccountsIndex",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRoot",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isAccountAllowed",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isAccountBlocked",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
    ],
    name: "setRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_newRoot",
        type: "bytes32",
      },
    ],
    name: "setRootAndClearAllowedAccounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610fd68061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638da5cb5b11610097578063c41ac1e911610066578063c41ac1e914610213578063ca88bd5b14610226578063dab5f34014610278578063f2fde38b1461028b57600080fd5b80638da5cb5b146101ab57806397102efb146101d3578063becc43a7146101f4578063c06c3c531461020757600080fd5b80635f69aaf9116100d35780635f69aaf9146101755780636abf70811461017d578063715018a614610190578063851678e11461019857600080fd5b80631fd9a8c6146100fa578063575ca0c91461015a5780635ca1e16514610164575b600080fd5b610145610108366004610e4f565b60025461ffff16600090815260036020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b60405190151581526020015b60405180910390f35b61016261029e565b005b600154604051908152602001610151565b61016261032e565b61016261018b366004610e8c565b610426565b6101626105ca565b6101626101a6366004610ece565b610655565b60005460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610151565b60025462010000900461ffff165b60405161ffff9091168152602001610151565b610162610202366004610e8c565b6106ea565b60025461ffff166101e1565b610162610221366004610e8c565b610883565b610145610234366004610e4f565b60025461ffff6201000090910416600090815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff9094168352929052205460ff1690565b610162610286366004610ece565b610a76565b610162610299366004610e4f565b610b00565b60005473ffffffffffffffffffffffffffffffffffffffff163314610324576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61032c610c2d565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b6002805462010000900461ffff1690806103c883610ee7565b82546101009290920a61ffff8181021990931691831602179091556002546040516201000090910490911681527ff00615fe8ae50ff90ca87ea3ef0ef3900f17c6ed04a215096a77539eebe886af91506020015b60405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b60005b818110156105c55760025462010000900461ffff1660009081526004602052604081206001918585858181106104e2576104e2610f71565b90506020020160208101906104f79190610e4f565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905582828281811061055c5761055c610f71565b90506020020160208101906105719190610e4f565b73ffffffffffffffffffffffffffffffffffffffff167f28e9b38569d728986e5868b0e113d9a49ee4c47dfc6db29a673e25b3515a56a860405160405180910390a2806105bd81610f09565b9150506104aa565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461064b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b61032c6000610c91565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b6106df81610d06565b6106e7610c2d565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461076b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b60005b818110156105c55760025461ffff1660009081526003602052604081206001918585858181106107a0576107a0610f71565b90506020020160208101906107b59190610e4f565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905582828281811061081a5761081a610f71565b905060200201602081019061082f9190610e4f565b73ffffffffffffffffffffffffffffffffffffffff167f2241f00dd2c136c402aac1497b67b34525c46620ff2762139f3f88ca5f7409c560405160405180910390a28061087b81610f09565b91505061076e565b60025461ffff16600090815260036020908152604080832033845290915290205460ff161561090e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4163636f756e7420616c72656164792072656769737465726564000000000000604482015260640161031b565b6040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b16602082015260009060340160405160208183030381529060405280519060200120905061099b838380806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250506001549150849050610d41565b610a01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69642070726f6f6600000000000000000000000000000000000000604482015260640161031b565b60025461ffff16600090815260036020908152604080832033808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555190917f2241f00dd2c136c402aac1497b67b34525c46620ff2762139f3f88ca5f7409c591a2505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610af7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b6106e781610d06565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161031b565b73ffffffffffffffffffffffffffffffffffffffff8116610c24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161031b565b6106e781610c91565b6002805461ffff16906000610c4183610ee7565b82546101009290920a61ffff818102199093169183160217909155600254604051911681527f2d7888569c1691ca7c866b17ee2300ae16414c90e24fa2ead0530abe2520d6a7915060200161041c565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60018190556040518181527f545a99af2f74d472d3ceb11889ff68b31a1a02f48a9431f04cda814892ee57e29060200160405180910390a150565b600082610d4e8584610d57565b14949350505050565b600081815b8451811015610dfb576000858281518110610d7957610d79610f71565b60200260200101519050808311610dbb576040805160208101859052908101829052606001604051602081830303815290604052805190602001209250610de8565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b5080610df381610f09565b915050610d5c565b509392505050565b60008083601f840112610e1557600080fd5b50813567ffffffffffffffff811115610e2d57600080fd5b6020830191508360208260051b8501011115610e4857600080fd5b9250929050565b600060208284031215610e6157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610e8557600080fd5b9392505050565b60008060208385031215610e9f57600080fd5b823567ffffffffffffffff811115610eb657600080fd5b610ec285828601610e03565b90969095509350505050565b600060208284031215610ee057600080fd5b5035919050565b600061ffff80831681811415610eff57610eff610f42565b6001019392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610f3b57610f3b610f42565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212203f6ec530f8bfbd74d30e8528fd28594bd30b99659b53fa3022f990a82a45155f64736f6c63430008070033";

type MockAccountAccessControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAccountAccessControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAccountAccessController__factory extends ContractFactory {
  constructor(...args: MockAccountAccessControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockAccountAccessController> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockAccountAccessController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockAccountAccessController {
    return super.attach(address) as MockAccountAccessController;
  }
  connect(signer: Signer): MockAccountAccessController__factory {
    return super.connect(signer) as MockAccountAccessController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAccountAccessControllerInterface {
    return new utils.Interface(_abi) as MockAccountAccessControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAccountAccessController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockAccountAccessController;
  }
}
