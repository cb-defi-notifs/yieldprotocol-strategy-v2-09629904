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

interface ICauldronInterface extends ethers.utils.Interface {
  functions: {
    "assets(bytes6)": FunctionFragment;
    "debt(bytes6,bytes6)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "assets", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "debt",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;

  events: {};
}

export class ICauldron extends Contract {
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

  interface: ICauldronInterface;

  functions: {
    assets(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    debt(
      baseId: BytesLike,
      ilkId: BytesLike,
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
      baseId: BytesLike,
      ilkId: BytesLike,
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
  };

  assets(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "assets(bytes6)"(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  debt(
    baseId: BytesLike,
    ilkId: BytesLike,
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
    baseId: BytesLike,
    ilkId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, BigNumber] & {
      max: BigNumber;
      min: number;
      dec: number;
      sum: BigNumber;
    }
  >;

  callStatic: {
    assets(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    debt(
      baseId: BytesLike,
      ilkId: BytesLike,
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
      baseId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, BigNumber] & {
        max: BigNumber;
        min: number;
        dec: number;
        sum: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    assets(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debt(
      baseId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "debt(bytes6,bytes6)"(
      baseId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assets(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assets(bytes6)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debt(
      baseId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "debt(bytes6,bytes6)"(
      baseId: BytesLike,
      ilkId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
