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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface VaultMockInterface extends ethers.utils.Interface {
  functions: {
    "addSeries(uint32)": FunctionFragment;
    "assets(bytes6)": FunctionFragment;
    "balances(bytes12)": FunctionFragment;
    "base()": FunctionFragment;
    "baseId()": FunctionFragment;
    "baseJoin()": FunctionFragment;
    "build(bytes6,bytes6,uint8)": FunctionFragment;
    "cauldron()": FunctionFragment;
    "close(bytes12,address,int128,int128)": FunctionFragment;
    "debt(bytes6,bytes6)": FunctionFragment;
    "debtToBase(bytes6,uint128)": FunctionFragment;
    "destroy(bytes12)": FunctionFragment;
    "joins(bytes6)": FunctionFragment;
    "lastVaultId()": FunctionFragment;
    "nextSeriesId()": FunctionFragment;
    "pour(bytes12,address,int128,int128)": FunctionFragment;
    "series(bytes6)": FunctionFragment;
    "vaults(bytes12)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addSeries",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "assets", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "balances", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "base", values?: undefined): string;
  encodeFunctionData(functionFragment: "baseId", values?: undefined): string;
  encodeFunctionData(functionFragment: "baseJoin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "build",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cauldron", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "close",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "debt",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "debtToBase",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "joins", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "lastVaultId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nextSeriesId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pour",
    values: [BytesLike, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "series", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "vaults", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "addSeries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "base", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseJoin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "build", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cauldron", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debtToBase", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastVaultId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextSeriesId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pour", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "series", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {};
}

export class VaultMock extends Contract {
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

  interface: VaultMockInterface;

  functions: {
    addSeries(
      maturity_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addSeries(uint32)"(
      maturity_: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    assets(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    balances(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    "balances(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    base(overrides?: CallOverrides): Promise<[string]>;

    "base()"(overrides?: CallOverrides): Promise<[string]>;

    baseId(overrides?: CallOverrides): Promise<[string]>;

    "baseId()"(overrides?: CallOverrides): Promise<[string]>;

    baseJoin(overrides?: CallOverrides): Promise<[string]>;

    "baseJoin()"(overrides?: CallOverrides): Promise<[string]>;

    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "build(bytes6,bytes6,uint8)"(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cauldron(overrides?: CallOverrides): Promise<[string]>;

    "cauldron()"(overrides?: CallOverrides): Promise<[string]>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "close(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    debt(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number, BigNumber] & {
          max: BigNumber;
          min: number;
          dec: number;
          sum: BigNumber;
        }
      ]
    >;

    "debt(bytes6,bytes6)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number, BigNumber] & {
          max: BigNumber;
          min: number;
          dec: number;
          sum: BigNumber;
        }
      ]
    >;

    debtToBase(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "debtToBase(bytes6,uint128)"(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    destroy(
      vaultId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "destroy(bytes12)"(
      vaultId: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    joins(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "joins(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lastVaultId(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lastVaultId()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextSeriesId(overrides?: CallOverrides): Promise<[number]>;

    "nextSeriesId()"(overrides?: CallOverrides): Promise<[number]>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "pour(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    series(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        fyToken: string;
        baseId: string;
        maturity: number;
      }
    >;

    "series(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        fyToken: string;
        baseId: string;
        maturity: number;
      }
    >;

    vaults(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    "vaults(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;
  };

  addSeries(
    maturity_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addSeries(uint32)"(
    maturity_: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  assets(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "assets(bytes6)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  balances(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

  "balances(bytes12)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

  base(overrides?: CallOverrides): Promise<string>;

  "base()"(overrides?: CallOverrides): Promise<string>;

  baseId(overrides?: CallOverrides): Promise<string>;

  "baseId()"(overrides?: CallOverrides): Promise<string>;

  baseJoin(overrides?: CallOverrides): Promise<string>;

  "baseJoin()"(overrides?: CallOverrides): Promise<string>;

  build(
    seriesId: BytesLike,
    ilkId: BytesLike,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "build(bytes6,bytes6,uint8)"(
    seriesId: BytesLike,
    ilkId: BytesLike,
    arg2: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cauldron(overrides?: CallOverrides): Promise<string>;

  "cauldron()"(overrides?: CallOverrides): Promise<string>;

  close(
    vaultId: BytesLike,
    to: string,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "close(bytes12,address,int128,int128)"(
    vaultId: BytesLike,
    to: string,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  debt(
    arg0: BytesLike,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, BigNumber] & {
      max: BigNumber;
      min: number;
      dec: number;
      sum: BigNumber;
    }
  >;

  "debt(bytes6,bytes6)"(
    arg0: BytesLike,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, BigNumber] & {
      max: BigNumber;
      min: number;
      dec: number;
      sum: BigNumber;
    }
  >;

  debtToBase(
    arg0: BytesLike,
    art: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "debtToBase(bytes6,uint128)"(
    arg0: BytesLike,
    art: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  destroy(
    vaultId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "destroy(bytes12)"(
    vaultId: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  joins(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "joins(bytes6)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  lastVaultId(overrides?: CallOverrides): Promise<BigNumber>;

  "lastVaultId()"(overrides?: CallOverrides): Promise<BigNumber>;

  nextSeriesId(overrides?: CallOverrides): Promise<number>;

  "nextSeriesId()"(overrides?: CallOverrides): Promise<number>;

  pour(
    vaultId: BytesLike,
    to: string,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "pour(bytes12,address,int128,int128)"(
    vaultId: BytesLike,
    to: string,
    ink: BigNumberish,
    art: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  series(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      fyToken: string;
      baseId: string;
      maturity: number;
    }
  >;

  "series(bytes6)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      fyToken: string;
      baseId: string;
      maturity: number;
    }
  >;

  vaults(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      owner: string;
      seriesId: string;
      ilkId: string;
    }
  >;

  "vaults(bytes12)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      owner: string;
      seriesId: string;
      ilkId: string;
    }
  >;

  callStatic: {
    addSeries(
      maturity_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "addSeries(uint32)"(
      maturity_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    assets(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    balances(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    "balances(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { art: BigNumber; ink: BigNumber }>;

    base(overrides?: CallOverrides): Promise<string>;

    "base()"(overrides?: CallOverrides): Promise<string>;

    baseId(overrides?: CallOverrides): Promise<string>;

    "baseId()"(overrides?: CallOverrides): Promise<string>;

    baseJoin(overrides?: CallOverrides): Promise<string>;

    "baseJoin()"(overrides?: CallOverrides): Promise<string>;

    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        }
      ] & {
        vaultId: string;
        vault: [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        };
      }
    >;

    "build(bytes6,bytes6,uint8)"(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        }
      ] & {
        vaultId: string;
        vault: [string, string, string] & {
          owner: string;
          seriesId: string;
          ilkId: string;
        };
      }
    >;

    cauldron(overrides?: CallOverrides): Promise<string>;

    "cauldron()"(overrides?: CallOverrides): Promise<string>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "close(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    debt(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, BigNumber] & {
        max: BigNumber;
        min: number;
        dec: number;
        sum: BigNumber;
      }
    >;

    "debt(bytes6,bytes6)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, BigNumber] & {
        max: BigNumber;
        min: number;
        dec: number;
        sum: BigNumber;
      }
    >;

    debtToBase(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "debtToBase(bytes6,uint128)"(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destroy(vaultId: BytesLike, overrides?: CallOverrides): Promise<void>;

    "destroy(bytes12)"(
      vaultId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    joins(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "joins(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    lastVaultId(overrides?: CallOverrides): Promise<BigNumber>;

    "lastVaultId()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextSeriesId(overrides?: CallOverrides): Promise<number>;

    "nextSeriesId()"(overrides?: CallOverrides): Promise<number>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "pour(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    series(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        fyToken: string;
        baseId: string;
        maturity: number;
      }
    >;

    "series(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        fyToken: string;
        baseId: string;
        maturity: number;
      }
    >;

    vaults(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;

    "vaults(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        owner: string;
        seriesId: string;
        ilkId: string;
      }
    >;
  };

  filters: {};

  estimateGas: {
    addSeries(
      maturity_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addSeries(uint32)"(
      maturity_: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    assets(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balances(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "balances(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    base(overrides?: CallOverrides): Promise<BigNumber>;

    "base()"(overrides?: CallOverrides): Promise<BigNumber>;

    baseId(overrides?: CallOverrides): Promise<BigNumber>;

    "baseId()"(overrides?: CallOverrides): Promise<BigNumber>;

    baseJoin(overrides?: CallOverrides): Promise<BigNumber>;

    "baseJoin()"(overrides?: CallOverrides): Promise<BigNumber>;

    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "build(bytes6,bytes6,uint8)"(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cauldron(overrides?: CallOverrides): Promise<BigNumber>;

    "cauldron()"(overrides?: CallOverrides): Promise<BigNumber>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "close(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    debt(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "debt(bytes6,bytes6)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtToBase(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "debtToBase(bytes6,uint128)"(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    destroy(vaultId: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "destroy(bytes12)"(
      vaultId: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    joins(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "joins(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastVaultId(overrides?: CallOverrides): Promise<BigNumber>;

    "lastVaultId()"(overrides?: CallOverrides): Promise<BigNumber>;

    nextSeriesId(overrides?: CallOverrides): Promise<BigNumber>;

    "nextSeriesId()"(overrides?: CallOverrides): Promise<BigNumber>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "pour(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    series(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "series(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vaults(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "vaults(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addSeries(
      maturity_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addSeries(uint32)"(
      maturity_: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    assets(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balances(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balances(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    base(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "base()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseJoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseJoin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    build(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "build(bytes6,bytes6,uint8)"(
      seriesId: BytesLike,
      ilkId: BytesLike,
      arg2: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cauldron(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cauldron()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    close(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "close(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    debt(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "debt(bytes6,bytes6)"(
      arg0: BytesLike,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtToBase(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "debtToBase(bytes6,uint128)"(
      arg0: BytesLike,
      art: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    destroy(
      vaultId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "destroy(bytes12)"(
      vaultId: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    joins(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "joins(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastVaultId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lastVaultId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nextSeriesId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nextSeriesId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pour(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "pour(bytes12,address,int128,int128)"(
      vaultId: BytesLike,
      to: string,
      ink: BigNumberish,
      art: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    series(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "series(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaults(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vaults(bytes12)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
