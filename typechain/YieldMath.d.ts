/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface YieldMathInterface extends ethers.utils.Interface {
  functions: {
    "MAX()": FunctionFragment;
    "ONE()": FunctionFragment;
    "TWO()": FunctionFragment;
    "VAR()": FunctionFragment;
    "baseInForFYTokenOut(uint128,uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "baseOutForFYTokenIn(uint128,uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "fyTokenInForBaseOut(uint128,uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "fyTokenOutForBaseIn(uint128,uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "invariant(uint128,uint128,uint256,uint128,int128)": FunctionFragment;
    "maxBaseIn(uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "maxBaseOut(uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "maxFYTokenIn(uint128,uint128,uint128,int128,int128)": FunctionFragment;
    "maxFYTokenOut(uint128,uint128,uint128,int128,int128)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "MAX", values?: undefined): string;
  encodeFunctionData(functionFragment: "ONE", values?: undefined): string;
  encodeFunctionData(functionFragment: "TWO", values?: undefined): string;
  encodeFunctionData(functionFragment: "VAR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "baseInForFYTokenOut",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "baseOutForFYTokenIn",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fyTokenInForBaseOut",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fyTokenOutForBaseIn",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "invariant",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "maxBaseIn",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "maxBaseOut",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "maxFYTokenIn",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "maxFYTokenOut",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "MAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ONE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TWO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VAR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseInForFYTokenOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "baseOutForFYTokenIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fyTokenInForBaseOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fyTokenOutForBaseIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "invariant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxBaseIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxBaseOut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxFYTokenIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxFYTokenOut",
    data: BytesLike
  ): Result;

  events: {};
}

export class YieldMath extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: YieldMathInterface;

  functions: {
    MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    "MAX()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    ONE(overrides?: CallOverrides): Promise<[BigNumber]>;

    "ONE()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    TWO(overrides?: CallOverrides): Promise<[BigNumber]>;

    "TWO()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    VAR(overrides?: CallOverrides): Promise<[BigNumber]>;

    "VAR()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    baseInForFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "baseInForFYTokenOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    baseOutForFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "baseOutForFYTokenIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fyTokenInForBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "fyTokenInForBaseOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fyTokenOutForBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "fyTokenOutForBaseIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    invariant(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "invariant(uint128,uint128,uint256,uint128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "maxBaseIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "maxBaseOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "maxFYTokenIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "maxFYTokenOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  MAX(overrides?: CallOverrides): Promise<BigNumber>;

  "MAX()"(overrides?: CallOverrides): Promise<BigNumber>;

  ONE(overrides?: CallOverrides): Promise<BigNumber>;

  "ONE()"(overrides?: CallOverrides): Promise<BigNumber>;

  TWO(overrides?: CallOverrides): Promise<BigNumber>;

  "TWO()"(overrides?: CallOverrides): Promise<BigNumber>;

  VAR(overrides?: CallOverrides): Promise<BigNumber>;

  "VAR()"(overrides?: CallOverrides): Promise<BigNumber>;

  baseInForFYTokenOut(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    fyTokenAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "baseInForFYTokenOut(uint128,uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    fyTokenAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  baseOutForFYTokenIn(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    fyTokenAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "baseOutForFYTokenIn(uint128,uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    fyTokenAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fyTokenInForBaseOut(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    baseAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "fyTokenInForBaseOut(uint128,uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    baseAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fyTokenOutForBaseIn(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    baseAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "fyTokenOutForBaseIn(uint128,uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    baseAmount: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  invariant(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    totalSupply: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "invariant(uint128,uint128,uint256,uint128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    totalSupply: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxBaseIn(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "maxBaseIn(uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxBaseOut(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "maxBaseOut(uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxFYTokenIn(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "maxFYTokenIn(uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxFYTokenOut(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "maxFYTokenOut(uint128,uint128,uint128,int128,int128)"(
    baseReserves: BigNumberish,
    fyTokenReserves: BigNumberish,
    timeTillMaturity: BigNumberish,
    ts: BigNumberish,
    g: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    MAX(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX()"(overrides?: CallOverrides): Promise<BigNumber>;

    ONE(overrides?: CallOverrides): Promise<BigNumber>;

    "ONE()"(overrides?: CallOverrides): Promise<BigNumber>;

    TWO(overrides?: CallOverrides): Promise<BigNumber>;

    "TWO()"(overrides?: CallOverrides): Promise<BigNumber>;

    VAR(overrides?: CallOverrides): Promise<BigNumber>;

    "VAR()"(overrides?: CallOverrides): Promise<BigNumber>;

    baseInForFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "baseInForFYTokenOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseOutForFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "baseOutForFYTokenIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fyTokenInForBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fyTokenInForBaseOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fyTokenOutForBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fyTokenOutForBaseIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invariant(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "invariant(uint128,uint128,uint256,uint128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxBaseIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxBaseOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxFYTokenIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxFYTokenOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    MAX(overrides?: CallOverrides): Promise<BigNumber>;

    "MAX()"(overrides?: CallOverrides): Promise<BigNumber>;

    ONE(overrides?: CallOverrides): Promise<BigNumber>;

    "ONE()"(overrides?: CallOverrides): Promise<BigNumber>;

    TWO(overrides?: CallOverrides): Promise<BigNumber>;

    "TWO()"(overrides?: CallOverrides): Promise<BigNumber>;

    VAR(overrides?: CallOverrides): Promise<BigNumber>;

    "VAR()"(overrides?: CallOverrides): Promise<BigNumber>;

    baseInForFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "baseInForFYTokenOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    baseOutForFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "baseOutForFYTokenIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fyTokenInForBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fyTokenInForBaseOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fyTokenOutForBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fyTokenOutForBaseIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    invariant(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "invariant(uint128,uint128,uint256,uint128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxBaseIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxBaseOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxFYTokenIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxFYTokenOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MAX()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ONE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ONE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TWO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "TWO()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VAR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VAR()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseInForFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "baseInForFYTokenOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseOutForFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "baseOutForFYTokenIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      fyTokenAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fyTokenInForBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fyTokenInForBaseOut(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fyTokenOutForBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fyTokenOutForBaseIn(uint128,uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      baseAmount: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    invariant(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "invariant(uint128,uint128,uint256,uint128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      totalSupply: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxBaseIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxBaseIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxBaseOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxBaseOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxFYTokenIn(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxFYTokenIn(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxFYTokenOut(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxFYTokenOut(uint128,uint128,uint128,int128,int128)"(
      baseReserves: BigNumberish,
      fyTokenReserves: BigNumberish,
      timeTillMaturity: BigNumberish,
      ts: BigNumberish,
      g: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
