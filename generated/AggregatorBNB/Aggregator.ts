// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ResponseReceived extends ethereum.Event {
  get params(): ResponseReceived__Params {
    return new ResponseReceived__Params(this);
  }
}

export class ResponseReceived__Params {
  _event: ResponseReceived;

  constructor(event: ResponseReceived) {
    this._event = event;
  }

  get response(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get answerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OwnershipRenounced extends ethereum.Event {
  get params(): OwnershipRenounced__Params {
    return new OwnershipRenounced__Params(this);
  }
}

export class OwnershipRenounced__Params {
  _event: OwnershipRenounced;

  constructor(event: OwnershipRenounced) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ChainlinkRequested extends ethereum.Event {
  get params(): ChainlinkRequested__Params {
    return new ChainlinkRequested__Params(this);
  }
}

export class ChainlinkRequested__Params {
  _event: ChainlinkRequested;

  constructor(event: ChainlinkRequested) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkFulfilled extends ethereum.Event {
  get params(): ChainlinkFulfilled__Params {
    return new ChainlinkFulfilled__Params(this);
  }
}

export class ChainlinkFulfilled__Params {
  _event: ChainlinkFulfilled;

  constructor(event: ChainlinkFulfilled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkCancelled extends ethereum.Event {
  get params(): ChainlinkCancelled__Params {
    return new ChainlinkCancelled__Params(this);
  }
}

export class ChainlinkCancelled__Params {
  _event: ChainlinkCancelled;

  constructor(event: ChainlinkCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class AnswerUpdated extends ethereum.Event {
  get params(): AnswerUpdated__Params {
    return new AnswerUpdated__Params(this);
  }
}

export class AnswerUpdated__Params {
  _event: AnswerUpdated;

  constructor(event: AnswerUpdated) {
    this._event = event;
  }

  get current(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get roundId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AnswerUpdated1 extends ethereum.Event {
  get params(): AnswerUpdated1__Params {
    return new AnswerUpdated1__Params(this);
  }
}

export class AnswerUpdated1__Params {
  _event: AnswerUpdated1;

  constructor(event: AnswerUpdated1) {
    this._event = event;
  }

  get answer(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NewRound extends ethereum.Event {
  get params(): NewRound__Params {
    return new NewRound__Params(this);
  }
}

export class NewRound__Params {
  _event: NewRound;

  constructor(event: NewRound) {
    this._event = event;
  }

  get roundId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get startedBy(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Aggregator extends ethereum.SmartContract {
  static bind(address: Address): Aggregator {
    return new Aggregator("Aggregator", address);
  }

  authorizedRequesters(param0: Address): boolean {
    let result = super.call(
      "authorizedRequesters",
      "authorizedRequesters(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_authorizedRequesters(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "authorizedRequesters",
      "authorizedRequesters(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  jobIds(param0: BigInt): Bytes {
    let result = super.call("jobIds", "jobIds(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBytes();
  }

  try_jobIds(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("jobIds", "jobIds(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  latestAnswer(): BigInt {
    let result = super.call("latestAnswer", "latestAnswer():(int256)", []);

    return result[0].toBigInt();
  }

  try_latestAnswer(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("latestAnswer", "latestAnswer():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minimumResponses(): BigInt {
    let result = super.call(
      "minimumResponses",
      "minimumResponses():(uint128)",
      []
    );

    return result[0].toBigInt();
  }

  try_minimumResponses(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minimumResponses",
      "minimumResponses():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  oracles(param0: BigInt): Address {
    let result = super.call("oracles", "oracles(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_oracles(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("oracles", "oracles(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  latestRound(): BigInt {
    let result = super.call("latestRound", "latestRound():(uint256)", []);

    return result[0].toBigInt();
  }

  try_latestRound(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("latestRound", "latestRound():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  latestTimestamp(): BigInt {
    let result = super.call(
      "latestTimestamp",
      "latestTimestamp():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_latestTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "latestTimestamp",
      "latestTimestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAnswer(_roundId: BigInt): BigInt {
    let result = super.call("getAnswer", "getAnswer(uint256):(int256)", [
      ethereum.Value.fromUnsignedBigInt(_roundId)
    ]);

    return result[0].toBigInt();
  }

  try_getAnswer(_roundId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getAnswer", "getAnswer(uint256):(int256)", [
      ethereum.Value.fromUnsignedBigInt(_roundId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTimestamp(_roundId: BigInt): BigInt {
    let result = super.call("getTimestamp", "getTimestamp(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_roundId)
    ]);

    return result[0].toBigInt();
  }

  try_getTimestamp(_roundId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTimestamp",
      "getTimestamp(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_roundId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  paymentAmount(): BigInt {
    let result = super.call("paymentAmount", "paymentAmount():(uint128)", []);

    return result[0].toBigInt();
  }

  try_paymentAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "paymentAmount",
      "paymentAmount():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CancelRequestCall extends ethereum.Call {
  get inputs(): CancelRequestCall__Inputs {
    return new CancelRequestCall__Inputs(this);
  }

  get outputs(): CancelRequestCall__Outputs {
    return new CancelRequestCall__Outputs(this);
  }
}

export class CancelRequestCall__Inputs {
  _call: CancelRequestCall;

  constructor(call: CancelRequestCall) {
    this._call = call;
  }

  get _requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _payment(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _expiration(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CancelRequestCall__Outputs {
  _call: CancelRequestCall;

  constructor(call: CancelRequestCall) {
    this._call = call;
  }
}

export class TransferLINKCall extends ethereum.Call {
  get inputs(): TransferLINKCall__Inputs {
    return new TransferLINKCall__Inputs(this);
  }

  get outputs(): TransferLINKCall__Outputs {
    return new TransferLINKCall__Outputs(this);
  }
}

export class TransferLINKCall__Inputs {
  _call: TransferLINKCall;

  constructor(call: TransferLINKCall) {
    this._call = call;
  }

  get _recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferLINKCall__Outputs {
  _call: TransferLINKCall;

  constructor(call: TransferLINKCall) {
    this._call = call;
  }
}

export class ChainlinkCallbackCall extends ethereum.Call {
  get inputs(): ChainlinkCallbackCall__Inputs {
    return new ChainlinkCallbackCall__Inputs(this);
  }

  get outputs(): ChainlinkCallbackCall__Outputs {
    return new ChainlinkCallbackCall__Outputs(this);
  }
}

export class ChainlinkCallbackCall__Inputs {
  _call: ChainlinkCallbackCall;

  constructor(call: ChainlinkCallbackCall) {
    this._call = call;
  }

  get _clRequestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _response(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChainlinkCallbackCall__Outputs {
  _call: ChainlinkCallbackCall;

  constructor(call: ChainlinkCallbackCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class UpdateRequestDetailsCall extends ethereum.Call {
  get inputs(): UpdateRequestDetailsCall__Inputs {
    return new UpdateRequestDetailsCall__Inputs(this);
  }

  get outputs(): UpdateRequestDetailsCall__Outputs {
    return new UpdateRequestDetailsCall__Outputs(this);
  }
}

export class UpdateRequestDetailsCall__Inputs {
  _call: UpdateRequestDetailsCall;

  constructor(call: UpdateRequestDetailsCall) {
    this._call = call;
  }

  get _paymentAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _minimumResponses(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _oracles(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _jobIds(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }
}

export class UpdateRequestDetailsCall__Outputs {
  _call: UpdateRequestDetailsCall;

  constructor(call: UpdateRequestDetailsCall) {
    this._call = call;
  }
}

export class DestroyCall extends ethereum.Call {
  get inputs(): DestroyCall__Inputs {
    return new DestroyCall__Inputs(this);
  }

  get outputs(): DestroyCall__Outputs {
    return new DestroyCall__Outputs(this);
  }
}

export class DestroyCall__Inputs {
  _call: DestroyCall;

  constructor(call: DestroyCall) {
    this._call = call;
  }
}

export class DestroyCall__Outputs {
  _call: DestroyCall;

  constructor(call: DestroyCall) {
    this._call = call;
  }
}

export class RequestRateUpdateCall extends ethereum.Call {
  get inputs(): RequestRateUpdateCall__Inputs {
    return new RequestRateUpdateCall__Inputs(this);
  }

  get outputs(): RequestRateUpdateCall__Outputs {
    return new RequestRateUpdateCall__Outputs(this);
  }
}

export class RequestRateUpdateCall__Inputs {
  _call: RequestRateUpdateCall;

  constructor(call: RequestRateUpdateCall) {
    this._call = call;
  }
}

export class RequestRateUpdateCall__Outputs {
  _call: RequestRateUpdateCall;

  constructor(call: RequestRateUpdateCall) {
    this._call = call;
  }
}

export class SetAuthorizationCall extends ethereum.Call {
  get inputs(): SetAuthorizationCall__Inputs {
    return new SetAuthorizationCall__Inputs(this);
  }

  get outputs(): SetAuthorizationCall__Outputs {
    return new SetAuthorizationCall__Outputs(this);
  }
}

export class SetAuthorizationCall__Inputs {
  _call: SetAuthorizationCall;

  constructor(call: SetAuthorizationCall) {
    this._call = call;
  }

  get _requester(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _allowed(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetAuthorizationCall__Outputs {
  _call: SetAuthorizationCall;

  constructor(call: SetAuthorizationCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _link(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _paymentAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _minimumResponses(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _oracles(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _jobIds(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
