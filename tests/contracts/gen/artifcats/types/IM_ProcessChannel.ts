/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IM_ProcessChannel {
  export type StepStruct = {
    index: PromiseOrValue<BigNumberish>;
    from: PromiseOrValue<BigNumberish>;
    caseID: PromiseOrValue<BigNumberish>;
    taskID: PromiseOrValue<BigNumberish>;
    newTokenState: PromiseOrValue<BigNumberish>;
    newCondState: PromiseOrValue<BigNumberish>;
    signatures: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ];
  };

  export type StepStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    [string, string, string, string, string]
  ] & {
    index: BigNumber;
    from: BigNumber;
    caseID: BigNumber;
    taskID: BigNumber;
    newTokenState: BigNumber;
    newCondState: BigNumber;
    signatures: [string, string, string, string, string];
  };
}

export interface IM_ProcessChannelInterface extends utils.Interface {
  functions: {
    "continueAfterDispute(uint256,uint256)": FunctionFragment;
    "disputeMadeAtUNIX()": FunctionFragment;
    "disputeWindowInUNIX()": FunctionFragment;
    "index()": FunctionFragment;
    "participants(uint256)": FunctionFragment;
    "submit((uint256,uint256,uint256,uint256,uint256,uint256,bytes[5]))": FunctionFragment;
    "tokenState()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "continueAfterDispute"
      | "disputeMadeAtUNIX"
      | "disputeWindowInUNIX"
      | "index"
      | "participants"
      | "submit"
      | "tokenState"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "continueAfterDispute",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "disputeMadeAtUNIX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disputeWindowInUNIX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "index", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participants",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submit",
    values: [IM_ProcessChannel.StepStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenState",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "continueAfterDispute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeMadeAtUNIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disputeWindowInUNIX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "index", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenState", data: BytesLike): Result;

  events: {};
}

export interface IM_ProcessChannel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IM_ProcessChannelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    continueAfterDispute(
      id: PromiseOrValue<BigNumberish>,
      cond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    disputeMadeAtUNIX(overrides?: CallOverrides): Promise<[BigNumber]>;

    disputeWindowInUNIX(overrides?: CallOverrides): Promise<[BigNumber]>;

    index(overrides?: CallOverrides): Promise<[BigNumber]>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    submit(
      _step: IM_ProcessChannel.StepStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenState(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  continueAfterDispute(
    id: PromiseOrValue<BigNumberish>,
    cond: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  disputeMadeAtUNIX(overrides?: CallOverrides): Promise<BigNumber>;

  disputeWindowInUNIX(overrides?: CallOverrides): Promise<BigNumber>;

  index(overrides?: CallOverrides): Promise<BigNumber>;

  participants(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  submit(
    _step: IM_ProcessChannel.StepStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenState(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    continueAfterDispute(
      id: PromiseOrValue<BigNumberish>,
      cond: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    disputeMadeAtUNIX(overrides?: CallOverrides): Promise<BigNumber>;

    disputeWindowInUNIX(overrides?: CallOverrides): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    submit(
      _step: IM_ProcessChannel.StepStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenState(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    continueAfterDispute(
      id: PromiseOrValue<BigNumberish>,
      cond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    disputeMadeAtUNIX(overrides?: CallOverrides): Promise<BigNumber>;

    disputeWindowInUNIX(overrides?: CallOverrides): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submit(
      _step: IM_ProcessChannel.StepStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenState(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    continueAfterDispute(
      id: PromiseOrValue<BigNumberish>,
      cond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    disputeMadeAtUNIX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disputeWindowInUNIX(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submit(
      _step: IM_ProcessChannel.StepStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenState(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
