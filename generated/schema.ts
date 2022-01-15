// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("fromAmount", Value.fromBigInt(BigInt.zero()));
    this.set("toAmount", Value.fromBigInt(BigInt.zero()));
    this.set("fee", Value.fromBigInt(BigInt.zero()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("trackingCode", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get fromCurrencyKey(): string | null {
    let value = this.get("fromCurrencyKey");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromCurrencyKey(value: string | null) {
    if (!value) {
      this.unset("fromCurrencyKey");
    } else {
      this.set("fromCurrencyKey", Value.fromString(<string>value));
    }
  }

  get fromAmount(): BigInt {
    let value = this.get("fromAmount");
    return value!.toBigInt();
  }

  set fromAmount(value: BigInt) {
    this.set("fromAmount", Value.fromBigInt(value));
  }

  get toCurrencyKey(): string | null {
    let value = this.get("toCurrencyKey");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set toCurrencyKey(value: string | null) {
    if (!value) {
      this.unset("toCurrencyKey");
    } else {
      this.set("toCurrencyKey", Value.fromString(<string>value));
    }
  }

  get toAmount(): BigInt {
    let value = this.get("toAmount");
    return value!.toBigInt();
  }

  set toAmount(value: BigInt) {
    this.set("toAmount", Value.fromBigInt(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    return value!.toBigInt();
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get trackingCode(): string {
    let value = this.get("trackingCode");
    return value!.toString();
  }

  set trackingCode(value: string) {
    this.set("trackingCode", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("reges", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get reges(): string {
    let value = this.get("reges");
    return value!.toString();
  }

  set reges(value: string) {
    this.set("reges", Value.fromString(value));
  }
}

export class RegisterMember extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("accountList", Value.fromStringArray(new Array(0)));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RegisterMember entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RegisterMember entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RegisterMember", id.toString(), this);
    }
  }

  static load(id: string): RegisterMember | null {
    return changetype<RegisterMember | null>(store.get("RegisterMember", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get accountList(): Array<string> {
    let value = this.get("accountList");
    return value!.toStringArray();
  }

  set accountList(value: Array<string>) {
    this.set("accountList", Value.fromStringArray(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }
}

export class Portfolio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("zasset", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Portfolio entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Portfolio entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Portfolio", id.toString(), this);
    }
  }

  static load(id: string): Portfolio | null {
    return changetype<Portfolio | null>(store.get("Portfolio", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get zasset(): Array<string> {
    let value = this.get("zasset");
    return value!.toStringArray();
  }

  set zasset(value: Array<string>) {
    this.set("zasset", Value.fromStringArray(value));
  }
}

export class ZAssetBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("currencyKey", Value.fromString(""));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
    this.set("usdConvertBalance", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("rate", Value.fromBigInt(BigInt.zero()));
    this.set("portfolios", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ZAssetBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ZAssetBalance entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ZAssetBalance", id.toString(), this);
    }
  }

  static load(id: string): ZAssetBalance | null {
    return changetype<ZAssetBalance | null>(store.get("ZAssetBalance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get currencyKey(): string {
    let value = this.get("currencyKey");
    return value!.toString();
  }

  set currencyKey(value: string) {
    this.set("currencyKey", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get usdConvertBalance(): BigDecimal {
    let value = this.get("usdConvertBalance");
    return value!.toBigDecimal();
  }

  set usdConvertBalance(value: BigDecimal) {
    this.set("usdConvertBalance", Value.fromBigDecimal(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    return value!.toBigInt();
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }

  get portfolios(): string {
    let value = this.get("portfolios");
    return value!.toString();
  }

  set portfolios(value: string) {
    this.set("portfolios", Value.fromString(value));
  }
}

export class OneHourPortFolio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("startAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OneHourPortFolio entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OneHourPortFolio entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OneHourPortFolio", id.toString(), this);
    }
  }

  static load(id: string): OneHourPortFolio | null {
    return changetype<OneHourPortFolio | null>(
      store.get("OneHourPortFolio", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get startAmount(): BigDecimal {
    let value = this.get("startAmount");
    return value!.toBigDecimal();
  }

  set startAmount(value: BigDecimal) {
    this.set("startAmount", Value.fromBigDecimal(value));
  }
}

export class OneDayPortFolio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("startAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OneDayPortFolio entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OneDayPortFolio entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OneDayPortFolio", id.toString(), this);
    }
  }

  static load(id: string): OneDayPortFolio | null {
    return changetype<OneDayPortFolio | null>(store.get("OneDayPortFolio", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get startAmount(): BigDecimal {
    let value = this.get("startAmount");
    return value!.toBigDecimal();
  }

  set startAmount(value: BigDecimal) {
    this.set("startAmount", Value.fromBigDecimal(value));
  }
}

export class WeekPortFolio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("startAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WeekPortFolio entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save WeekPortFolio entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("WeekPortFolio", id.toString(), this);
    }
  }

  static load(id: string): WeekPortFolio | null {
    return changetype<WeekPortFolio | null>(store.get("WeekPortFolio", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get startAmount(): BigDecimal {
    let value = this.get("startAmount");
    return value!.toBigDecimal();
  }

  set startAmount(value: BigDecimal) {
    this.set("startAmount", Value.fromBigDecimal(value));
  }
}

export class MonthPortFolio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("startAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MonthPortFolio entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save MonthPortFolio entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("MonthPortFolio", id.toString(), this);
    }
  }

  static load(id: string): MonthPortFolio | null {
    return changetype<MonthPortFolio | null>(store.get("MonthPortFolio", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get startAmount(): BigDecimal {
    let value = this.get("startAmount");
    return value!.toBigDecimal();
  }

  set startAmount(value: BigDecimal) {
    this.set("startAmount", Value.fromBigDecimal(value));
  }
}

export class YearPortFolio extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("timstamp", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("startAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save YearPortFolio entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save YearPortFolio entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("YearPortFolio", id.toString(), this);
    }
  }

  static load(id: string): YearPortFolio | null {
    return changetype<YearPortFolio | null>(store.get("YearPortFolio", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get timstamp(): BigInt {
    let value = this.get("timstamp");
    return value!.toBigInt();
  }

  set timstamp(value: BigInt) {
    this.set("timstamp", Value.fromBigInt(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get startAmount(): BigDecimal {
    let value = this.get("startAmount");
    return value!.toBigDecimal();
  }

  set startAmount(value: BigDecimal) {
    this.set("startAmount", Value.fromBigDecimal(value));
  }
}
