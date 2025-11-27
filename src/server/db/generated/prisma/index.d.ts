
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model JadwalShift
 * 
 */
export type JadwalShift = $Result.DefaultSelection<Prisma.$JadwalShiftPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model SiteAddress
 * 
 */
export type SiteAddress = $Result.DefaultSelection<Prisma.$SiteAddressPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model UserAddress
 * 
 */
export type UserAddress = $Result.DefaultSelection<Prisma.$UserAddressPayload>
/**
 * Model Presensi
 * 
 */
export type Presensi = $Result.DefaultSelection<Prisma.$PresensiPayload>
/**
 * Model Laporan
 * 
 */
export type Laporan = $Result.DefaultSelection<Prisma.$LaporanPayload>
/**
 * Model Ijin
 * 
 */
export type Ijin = $Result.DefaultSelection<Prisma.$IjinPayload>
/**
 * Model Libur
 * 
 */
export type Libur = $Result.DefaultSelection<Prisma.$LiburPayload>
/**
 * Model Help
 * 
 */
export type Help = $Result.DefaultSelection<Prisma.$HelpPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  HRD: 'HRD'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const siteStatus: {
  ACTIVE: 'ACTIVE',
  MAINTENANCE: 'MAINTENANCE',
  INACTIVE: 'INACTIVE'
};

export type siteStatus = (typeof siteStatus)[keyof typeof siteStatus]


export const StatusApproval: {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED'
};

export type StatusApproval = (typeof StatusApproval)[keyof typeof StatusApproval]


export const StatusPresensi: {
  ONTIME: 'ONTIME',
  LATE: 'LATE'
};

export type StatusPresensi = (typeof StatusPresensi)[keyof typeof StatusPresensi]


export const EquipmentStatus: {
  NORMAL: 'NORMAL',
  MAINTENANCE: 'MAINTENANCE',
  BROKEN: 'BROKEN'
};

export type EquipmentStatus = (typeof EquipmentStatus)[keyof typeof EquipmentStatus]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type siteStatus = $Enums.siteStatus

export const siteStatus: typeof $Enums.siteStatus

export type StatusApproval = $Enums.StatusApproval

export const StatusApproval: typeof $Enums.StatusApproval

export type StatusPresensi = $Enums.StatusPresensi

export const StatusPresensi: typeof $Enums.StatusPresensi

export type EquipmentStatus = $Enums.EquipmentStatus

export const EquipmentStatus: typeof $Enums.EquipmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwalShift`: Exposes CRUD operations for the **JadwalShift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalShifts
    * const jadwalShifts = await prisma.jadwalShift.findMany()
    * ```
    */
  get jadwalShift(): Prisma.JadwalShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siteAddress`: Exposes CRUD operations for the **SiteAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteAddresses
    * const siteAddresses = await prisma.siteAddress.findMany()
    * ```
    */
  get siteAddress(): Prisma.SiteAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAddress`: Exposes CRUD operations for the **UserAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAddresses
    * const userAddresses = await prisma.userAddress.findMany()
    * ```
    */
  get userAddress(): Prisma.UserAddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presensi`: Exposes CRUD operations for the **Presensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presensis
    * const presensis = await prisma.presensi.findMany()
    * ```
    */
  get presensi(): Prisma.PresensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laporan`: Exposes CRUD operations for the **Laporan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporans
    * const laporans = await prisma.laporan.findMany()
    * ```
    */
  get laporan(): Prisma.LaporanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ijin`: Exposes CRUD operations for the **Ijin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ijins
    * const ijins = await prisma.ijin.findMany()
    * ```
    */
  get ijin(): Prisma.IjinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libur`: Exposes CRUD operations for the **Libur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Liburs
    * const liburs = await prisma.libur.findMany()
    * ```
    */
  get libur(): Prisma.LiburDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.help`: Exposes CRUD operations for the **Help** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Helps
    * const helps = await prisma.help.findMany()
    * ```
    */
  get help(): Prisma.HelpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    JadwalShift: 'JadwalShift',
    Site: 'Site',
    SiteAddress: 'SiteAddress',
    Profile: 'Profile',
    UserAddress: 'UserAddress',
    Presensi: 'Presensi',
    Laporan: 'Laporan',
    Ijin: 'Ijin',
    Libur: 'Libur',
    Help: 'Help',
    Ticket: 'Ticket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "jadwalShift" | "site" | "siteAddress" | "profile" | "userAddress" | "presensi" | "laporan" | "ijin" | "libur" | "help" | "ticket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      JadwalShift: {
        payload: Prisma.$JadwalShiftPayload<ExtArgs>
        fields: Prisma.JadwalShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>
          }
          findFirst: {
            args: Prisma.JadwalShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>
          }
          findMany: {
            args: Prisma.JadwalShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>[]
          }
          create: {
            args: Prisma.JadwalShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>
          }
          createMany: {
            args: Prisma.JadwalShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>[]
          }
          delete: {
            args: Prisma.JadwalShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>
          }
          update: {
            args: Prisma.JadwalShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>
          }
          deleteMany: {
            args: Prisma.JadwalShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>[]
          }
          upsert: {
            args: Prisma.JadwalShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalShiftPayload>
          }
          aggregate: {
            args: Prisma.JadwalShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwalShift>
          }
          groupBy: {
            args: Prisma.JadwalShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalShiftCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalShiftCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      SiteAddress: {
        payload: Prisma.$SiteAddressPayload<ExtArgs>
        fields: Prisma.SiteAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          findFirst: {
            args: Prisma.SiteAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          findMany: {
            args: Prisma.SiteAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>[]
          }
          create: {
            args: Prisma.SiteAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          createMany: {
            args: Prisma.SiteAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>[]
          }
          delete: {
            args: Prisma.SiteAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          update: {
            args: Prisma.SiteAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          deleteMany: {
            args: Prisma.SiteAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>[]
          }
          upsert: {
            args: Prisma.SiteAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteAddressPayload>
          }
          aggregate: {
            args: Prisma.SiteAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteAddress>
          }
          groupBy: {
            args: Prisma.SiteAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteAddressCountArgs<ExtArgs>
            result: $Utils.Optional<SiteAddressCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      UserAddress: {
        payload: Prisma.$UserAddressPayload<ExtArgs>
        fields: Prisma.UserAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findFirst: {
            args: Prisma.UserAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          findMany: {
            args: Prisma.UserAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          create: {
            args: Prisma.UserAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          createMany: {
            args: Prisma.UserAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          delete: {
            args: Prisma.UserAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          update: {
            args: Prisma.UserAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          deleteMany: {
            args: Prisma.UserAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>[]
          }
          upsert: {
            args: Prisma.UserAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAddressPayload>
          }
          aggregate: {
            args: Prisma.UserAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAddress>
          }
          groupBy: {
            args: Prisma.UserAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAddressCountArgs<ExtArgs>
            result: $Utils.Optional<UserAddressCountAggregateOutputType> | number
          }
        }
      }
      Presensi: {
        payload: Prisma.$PresensiPayload<ExtArgs>
        fields: Prisma.PresensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          findFirst: {
            args: Prisma.PresensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          findMany: {
            args: Prisma.PresensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>[]
          }
          create: {
            args: Prisma.PresensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          createMany: {
            args: Prisma.PresensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>[]
          }
          delete: {
            args: Prisma.PresensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          update: {
            args: Prisma.PresensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          deleteMany: {
            args: Prisma.PresensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>[]
          }
          upsert: {
            args: Prisma.PresensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresensiPayload>
          }
          aggregate: {
            args: Prisma.PresensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresensi>
          }
          groupBy: {
            args: Prisma.PresensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresensiCountArgs<ExtArgs>
            result: $Utils.Optional<PresensiCountAggregateOutputType> | number
          }
        }
      }
      Laporan: {
        payload: Prisma.$LaporanPayload<ExtArgs>
        fields: Prisma.LaporanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findFirst: {
            args: Prisma.LaporanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findMany: {
            args: Prisma.LaporanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          create: {
            args: Prisma.LaporanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          createMany: {
            args: Prisma.LaporanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          delete: {
            args: Prisma.LaporanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          update: {
            args: Prisma.LaporanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaporanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          upsert: {
            args: Prisma.LaporanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          aggregate: {
            args: Prisma.LaporanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan>
          }
          groupBy: {
            args: Prisma.LaporanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanCountAggregateOutputType> | number
          }
        }
      }
      Ijin: {
        payload: Prisma.$IjinPayload<ExtArgs>
        fields: Prisma.IjinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IjinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IjinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>
          }
          findFirst: {
            args: Prisma.IjinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IjinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>
          }
          findMany: {
            args: Prisma.IjinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>[]
          }
          create: {
            args: Prisma.IjinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>
          }
          createMany: {
            args: Prisma.IjinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IjinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>[]
          }
          delete: {
            args: Prisma.IjinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>
          }
          update: {
            args: Prisma.IjinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>
          }
          deleteMany: {
            args: Prisma.IjinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IjinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IjinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>[]
          }
          upsert: {
            args: Prisma.IjinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IjinPayload>
          }
          aggregate: {
            args: Prisma.IjinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIjin>
          }
          groupBy: {
            args: Prisma.IjinGroupByArgs<ExtArgs>
            result: $Utils.Optional<IjinGroupByOutputType>[]
          }
          count: {
            args: Prisma.IjinCountArgs<ExtArgs>
            result: $Utils.Optional<IjinCountAggregateOutputType> | number
          }
        }
      }
      Libur: {
        payload: Prisma.$LiburPayload<ExtArgs>
        fields: Prisma.LiburFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LiburFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LiburFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>
          }
          findFirst: {
            args: Prisma.LiburFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LiburFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>
          }
          findMany: {
            args: Prisma.LiburFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>[]
          }
          create: {
            args: Prisma.LiburCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>
          }
          createMany: {
            args: Prisma.LiburCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LiburCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>[]
          }
          delete: {
            args: Prisma.LiburDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>
          }
          update: {
            args: Prisma.LiburUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>
          }
          deleteMany: {
            args: Prisma.LiburDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LiburUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LiburUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>[]
          }
          upsert: {
            args: Prisma.LiburUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LiburPayload>
          }
          aggregate: {
            args: Prisma.LiburAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibur>
          }
          groupBy: {
            args: Prisma.LiburGroupByArgs<ExtArgs>
            result: $Utils.Optional<LiburGroupByOutputType>[]
          }
          count: {
            args: Prisma.LiburCountArgs<ExtArgs>
            result: $Utils.Optional<LiburCountAggregateOutputType> | number
          }
        }
      }
      Help: {
        payload: Prisma.$HelpPayload<ExtArgs>
        fields: Prisma.HelpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HelpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HelpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          findFirst: {
            args: Prisma.HelpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HelpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          findMany: {
            args: Prisma.HelpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>[]
          }
          create: {
            args: Prisma.HelpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          createMany: {
            args: Prisma.HelpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HelpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>[]
          }
          delete: {
            args: Prisma.HelpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          update: {
            args: Prisma.HelpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          deleteMany: {
            args: Prisma.HelpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HelpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HelpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>[]
          }
          upsert: {
            args: Prisma.HelpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpPayload>
          }
          aggregate: {
            args: Prisma.HelpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelp>
          }
          groupBy: {
            args: Prisma.HelpGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelpGroupByOutputType>[]
          }
          count: {
            args: Prisma.HelpCountArgs<ExtArgs>
            result: $Utils.Optional<HelpCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    jadwalShift?: JadwalShiftOmit
    site?: SiteOmit
    siteAddress?: SiteAddressOmit
    profile?: ProfileOmit
    userAddress?: UserAddressOmit
    presensi?: PresensiOmit
    laporan?: LaporanOmit
    ijin?: IjinOmit
    libur?: LiburOmit
    help?: HelpOmit
    ticket?: TicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sites: number
    shift: number
    presensi: number
    laporan: number
    ijin: number
    libur: number
    help: number
    ticket: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | UserCountOutputTypeCountSitesArgs
    shift?: boolean | UserCountOutputTypeCountShiftArgs
    presensi?: boolean | UserCountOutputTypeCountPresensiArgs
    laporan?: boolean | UserCountOutputTypeCountLaporanArgs
    ijin?: boolean | UserCountOutputTypeCountIjinArgs
    libur?: boolean | UserCountOutputTypeCountLiburArgs
    help?: boolean | UserCountOutputTypeCountHelpArgs
    ticket?: boolean | UserCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalShiftWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresensiWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIjinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IjinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLiburArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiburWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHelpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    users: number
    report: number
    shift: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | SiteCountOutputTypeCountUsersArgs
    report?: boolean | SiteCountOutputTypeCountReportArgs
    shift?: boolean | SiteCountOutputTypeCountShiftArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalShiftWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    roleId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    roleId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    roleId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    roleId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    roleId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    roleId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    roleId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    sites?: boolean | User$sitesArgs<ExtArgs>
    shift?: boolean | User$shiftArgs<ExtArgs>
    presensi?: boolean | User$presensiArgs<ExtArgs>
    laporan?: boolean | User$laporanArgs<ExtArgs>
    ijin?: boolean | User$ijinArgs<ExtArgs>
    libur?: boolean | User$liburArgs<ExtArgs>
    help?: boolean | User$helpArgs<ExtArgs>
    ticket?: boolean | User$ticketArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    roleId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt" | "deletedAt" | "roleId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    sites?: boolean | User$sitesArgs<ExtArgs>
    shift?: boolean | User$shiftArgs<ExtArgs>
    presensi?: boolean | User$presensiArgs<ExtArgs>
    laporan?: boolean | User$laporanArgs<ExtArgs>
    ijin?: boolean | User$ijinArgs<ExtArgs>
    libur?: boolean | User$liburArgs<ExtArgs>
    help?: boolean | User$helpArgs<ExtArgs>
    ticket?: boolean | User$ticketArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      sites: Prisma.$SitePayload<ExtArgs>[]
      shift: Prisma.$JadwalShiftPayload<ExtArgs>[]
      presensi: Prisma.$PresensiPayload<ExtArgs>[]
      laporan: Prisma.$LaporanPayload<ExtArgs>[]
      ijin: Prisma.$IjinPayload<ExtArgs>[]
      libur: Prisma.$LiburPayload<ExtArgs>[]
      help: Prisma.$HelpPayload<ExtArgs>[]
      ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      roleId: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sites<T extends User$sitesArgs<ExtArgs> = {}>(args?: Subset<T, User$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shift<T extends User$shiftArgs<ExtArgs> = {}>(args?: Subset<T, User$shiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presensi<T extends User$presensiArgs<ExtArgs> = {}>(args?: Subset<T, User$presensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    laporan<T extends User$laporanArgs<ExtArgs> = {}>(args?: Subset<T, User$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ijin<T extends User$ijinArgs<ExtArgs> = {}>(args?: Subset<T, User$ijinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    libur<T extends User$liburArgs<ExtArgs> = {}>(args?: Subset<T, User$liburArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    help<T extends User$helpArgs<ExtArgs> = {}>(args?: Subset<T, User$helpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticket<T extends User$ticketArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly roleId: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.sites
   */
  export type User$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * User.shift
   */
  export type User$shiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    where?: JadwalShiftWhereInput
    orderBy?: JadwalShiftOrderByWithRelationInput | JadwalShiftOrderByWithRelationInput[]
    cursor?: JadwalShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalShiftScalarFieldEnum | JadwalShiftScalarFieldEnum[]
  }

  /**
   * User.presensi
   */
  export type User$presensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    where?: PresensiWhereInput
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    cursor?: PresensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * User.laporan
   */
  export type User$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * User.ijin
   */
  export type User$ijinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    where?: IjinWhereInput
    orderBy?: IjinOrderByWithRelationInput | IjinOrderByWithRelationInput[]
    cursor?: IjinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IjinScalarFieldEnum | IjinScalarFieldEnum[]
  }

  /**
   * User.libur
   */
  export type User$liburArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    where?: LiburWhereInput
    orderBy?: LiburOrderByWithRelationInput | LiburOrderByWithRelationInput[]
    cursor?: LiburWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LiburScalarFieldEnum | LiburScalarFieldEnum[]
  }

  /**
   * User.help
   */
  export type User$helpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    where?: HelpWhereInput
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    cursor?: HelpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * User.ticket
   */
  export type User$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: $Enums.RoleName | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: $Enums.RoleName | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: $Enums.RoleName
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.RoleName
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'RoleName'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model JadwalShift
   */

  export type AggregateJadwalShift = {
    _count: JadwalShiftCountAggregateOutputType | null
    _avg: JadwalShiftAvgAggregateOutputType | null
    _sum: JadwalShiftSumAggregateOutputType | null
    _min: JadwalShiftMinAggregateOutputType | null
    _max: JadwalShiftMaxAggregateOutputType | null
  }

  export type JadwalShiftAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    siteId: number | null
  }

  export type JadwalShiftSumAggregateOutputType = {
    id: number | null
    userId: number | null
    siteId: number | null
  }

  export type JadwalShiftMinAggregateOutputType = {
    id: number | null
    shiftDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
    siteId: number | null
  }

  export type JadwalShiftMaxAggregateOutputType = {
    id: number | null
    shiftDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
    siteId: number | null
  }

  export type JadwalShiftCountAggregateOutputType = {
    id: number
    shiftDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    siteId: number
    _all: number
  }


  export type JadwalShiftAvgAggregateInputType = {
    id?: true
    userId?: true
    siteId?: true
  }

  export type JadwalShiftSumAggregateInputType = {
    id?: true
    userId?: true
    siteId?: true
  }

  export type JadwalShiftMinAggregateInputType = {
    id?: true
    shiftDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    siteId?: true
  }

  export type JadwalShiftMaxAggregateInputType = {
    id?: true
    shiftDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    siteId?: true
  }

  export type JadwalShiftCountAggregateInputType = {
    id?: true
    shiftDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    siteId?: true
    _all?: true
  }

  export type JadwalShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalShift to aggregate.
     */
    where?: JadwalShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalShifts to fetch.
     */
    orderBy?: JadwalShiftOrderByWithRelationInput | JadwalShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalShifts
    **/
    _count?: true | JadwalShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalShiftMaxAggregateInputType
  }

  export type GetJadwalShiftAggregateType<T extends JadwalShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalShift[P]>
      : GetScalarType<T[P], AggregateJadwalShift[P]>
  }




  export type JadwalShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalShiftWhereInput
    orderBy?: JadwalShiftOrderByWithAggregationInput | JadwalShiftOrderByWithAggregationInput[]
    by: JadwalShiftScalarFieldEnum[] | JadwalShiftScalarFieldEnum
    having?: JadwalShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalShiftCountAggregateInputType | true
    _avg?: JadwalShiftAvgAggregateInputType
    _sum?: JadwalShiftSumAggregateInputType
    _min?: JadwalShiftMinAggregateInputType
    _max?: JadwalShiftMaxAggregateInputType
  }

  export type JadwalShiftGroupByOutputType = {
    id: number
    shiftDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    siteId: number
    _count: JadwalShiftCountAggregateOutputType | null
    _avg: JadwalShiftAvgAggregateOutputType | null
    _sum: JadwalShiftSumAggregateOutputType | null
    _min: JadwalShiftMinAggregateOutputType | null
    _max: JadwalShiftMaxAggregateOutputType | null
  }

  type GetJadwalShiftGroupByPayload<T extends JadwalShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalShiftGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalShiftGroupByOutputType[P]>
        }
      >
    >


  export type JadwalShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    siteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalShift"]>

  export type JadwalShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    siteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalShift"]>

  export type JadwalShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shiftDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    siteId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalShift"]>

  export type JadwalShiftSelectScalar = {
    id?: boolean
    shiftDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    siteId?: boolean
  }

  export type JadwalShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shiftDate" | "createdAt" | "updatedAt" | "deletedAt" | "userId" | "siteId", ExtArgs["result"]["jadwalShift"]>
  export type JadwalShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type JadwalShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }
  export type JadwalShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
  }

  export type $JadwalShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JadwalShift"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      site: Prisma.$SitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shiftDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
      siteId: number
    }, ExtArgs["result"]["jadwalShift"]>
    composites: {}
  }

  type JadwalShiftGetPayload<S extends boolean | null | undefined | JadwalShiftDefaultArgs> = $Result.GetResult<Prisma.$JadwalShiftPayload, S>

  type JadwalShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalShiftCountAggregateInputType | true
    }

  export interface JadwalShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JadwalShift'], meta: { name: 'JadwalShift' } }
    /**
     * Find zero or one JadwalShift that matches the filter.
     * @param {JadwalShiftFindUniqueArgs} args - Arguments to find a JadwalShift
     * @example
     * // Get one JadwalShift
     * const jadwalShift = await prisma.jadwalShift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalShiftFindUniqueArgs>(args: SelectSubset<T, JadwalShiftFindUniqueArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JadwalShift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalShiftFindUniqueOrThrowArgs} args - Arguments to find a JadwalShift
     * @example
     * // Get one JadwalShift
     * const jadwalShift = await prisma.jadwalShift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalShift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftFindFirstArgs} args - Arguments to find a JadwalShift
     * @example
     * // Get one JadwalShift
     * const jadwalShift = await prisma.jadwalShift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalShiftFindFirstArgs>(args?: SelectSubset<T, JadwalShiftFindFirstArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalShift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftFindFirstOrThrowArgs} args - Arguments to find a JadwalShift
     * @example
     * // Get one JadwalShift
     * const jadwalShift = await prisma.jadwalShift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JadwalShifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalShifts
     * const jadwalShifts = await prisma.jadwalShift.findMany()
     * 
     * // Get first 10 JadwalShifts
     * const jadwalShifts = await prisma.jadwalShift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalShiftWithIdOnly = await prisma.jadwalShift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalShiftFindManyArgs>(args?: SelectSubset<T, JadwalShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JadwalShift.
     * @param {JadwalShiftCreateArgs} args - Arguments to create a JadwalShift.
     * @example
     * // Create one JadwalShift
     * const JadwalShift = await prisma.jadwalShift.create({
     *   data: {
     *     // ... data to create a JadwalShift
     *   }
     * })
     * 
     */
    create<T extends JadwalShiftCreateArgs>(args: SelectSubset<T, JadwalShiftCreateArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JadwalShifts.
     * @param {JadwalShiftCreateManyArgs} args - Arguments to create many JadwalShifts.
     * @example
     * // Create many JadwalShifts
     * const jadwalShift = await prisma.jadwalShift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalShiftCreateManyArgs>(args?: SelectSubset<T, JadwalShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JadwalShifts and returns the data saved in the database.
     * @param {JadwalShiftCreateManyAndReturnArgs} args - Arguments to create many JadwalShifts.
     * @example
     * // Create many JadwalShifts
     * const jadwalShift = await prisma.jadwalShift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JadwalShifts and only return the `id`
     * const jadwalShiftWithIdOnly = await prisma.jadwalShift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JadwalShift.
     * @param {JadwalShiftDeleteArgs} args - Arguments to delete one JadwalShift.
     * @example
     * // Delete one JadwalShift
     * const JadwalShift = await prisma.jadwalShift.delete({
     *   where: {
     *     // ... filter to delete one JadwalShift
     *   }
     * })
     * 
     */
    delete<T extends JadwalShiftDeleteArgs>(args: SelectSubset<T, JadwalShiftDeleteArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JadwalShift.
     * @param {JadwalShiftUpdateArgs} args - Arguments to update one JadwalShift.
     * @example
     * // Update one JadwalShift
     * const jadwalShift = await prisma.jadwalShift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalShiftUpdateArgs>(args: SelectSubset<T, JadwalShiftUpdateArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JadwalShifts.
     * @param {JadwalShiftDeleteManyArgs} args - Arguments to filter JadwalShifts to delete.
     * @example
     * // Delete a few JadwalShifts
     * const { count } = await prisma.jadwalShift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalShiftDeleteManyArgs>(args?: SelectSubset<T, JadwalShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalShifts
     * const jadwalShift = await prisma.jadwalShift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalShiftUpdateManyArgs>(args: SelectSubset<T, JadwalShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalShifts and returns the data updated in the database.
     * @param {JadwalShiftUpdateManyAndReturnArgs} args - Arguments to update many JadwalShifts.
     * @example
     * // Update many JadwalShifts
     * const jadwalShift = await prisma.jadwalShift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JadwalShifts and only return the `id`
     * const jadwalShiftWithIdOnly = await prisma.jadwalShift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JadwalShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JadwalShift.
     * @param {JadwalShiftUpsertArgs} args - Arguments to update or create a JadwalShift.
     * @example
     * // Update or create a JadwalShift
     * const jadwalShift = await prisma.jadwalShift.upsert({
     *   create: {
     *     // ... data to create a JadwalShift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalShift we want to update
     *   }
     * })
     */
    upsert<T extends JadwalShiftUpsertArgs>(args: SelectSubset<T, JadwalShiftUpsertArgs<ExtArgs>>): Prisma__JadwalShiftClient<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JadwalShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftCountArgs} args - Arguments to filter JadwalShifts to count.
     * @example
     * // Count the number of JadwalShifts
     * const count = await prisma.jadwalShift.count({
     *   where: {
     *     // ... the filter for the JadwalShifts we want to count
     *   }
     * })
    **/
    count<T extends JadwalShiftCountArgs>(
      args?: Subset<T, JadwalShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalShiftAggregateArgs>(args: Subset<T, JadwalShiftAggregateArgs>): Prisma.PrismaPromise<GetJadwalShiftAggregateType<T>>

    /**
     * Group by JadwalShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalShiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JadwalShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalShiftGroupByArgs['orderBy'] }
        : { orderBy?: JadwalShiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JadwalShift model
   */
  readonly fields: JadwalShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalShift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JadwalShift model
   */
  interface JadwalShiftFieldRefs {
    readonly id: FieldRef<"JadwalShift", 'Int'>
    readonly shiftDate: FieldRef<"JadwalShift", 'DateTime'>
    readonly createdAt: FieldRef<"JadwalShift", 'DateTime'>
    readonly updatedAt: FieldRef<"JadwalShift", 'DateTime'>
    readonly deletedAt: FieldRef<"JadwalShift", 'DateTime'>
    readonly userId: FieldRef<"JadwalShift", 'Int'>
    readonly siteId: FieldRef<"JadwalShift", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * JadwalShift findUnique
   */
  export type JadwalShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * Filter, which JadwalShift to fetch.
     */
    where: JadwalShiftWhereUniqueInput
  }

  /**
   * JadwalShift findUniqueOrThrow
   */
  export type JadwalShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * Filter, which JadwalShift to fetch.
     */
    where: JadwalShiftWhereUniqueInput
  }

  /**
   * JadwalShift findFirst
   */
  export type JadwalShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * Filter, which JadwalShift to fetch.
     */
    where?: JadwalShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalShifts to fetch.
     */
    orderBy?: JadwalShiftOrderByWithRelationInput | JadwalShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalShifts.
     */
    cursor?: JadwalShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalShifts.
     */
    distinct?: JadwalShiftScalarFieldEnum | JadwalShiftScalarFieldEnum[]
  }

  /**
   * JadwalShift findFirstOrThrow
   */
  export type JadwalShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * Filter, which JadwalShift to fetch.
     */
    where?: JadwalShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalShifts to fetch.
     */
    orderBy?: JadwalShiftOrderByWithRelationInput | JadwalShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalShifts.
     */
    cursor?: JadwalShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalShifts.
     */
    distinct?: JadwalShiftScalarFieldEnum | JadwalShiftScalarFieldEnum[]
  }

  /**
   * JadwalShift findMany
   */
  export type JadwalShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * Filter, which JadwalShifts to fetch.
     */
    where?: JadwalShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalShifts to fetch.
     */
    orderBy?: JadwalShiftOrderByWithRelationInput | JadwalShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalShifts.
     */
    cursor?: JadwalShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalShifts.
     */
    skip?: number
    distinct?: JadwalShiftScalarFieldEnum | JadwalShiftScalarFieldEnum[]
  }

  /**
   * JadwalShift create
   */
  export type JadwalShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a JadwalShift.
     */
    data: XOR<JadwalShiftCreateInput, JadwalShiftUncheckedCreateInput>
  }

  /**
   * JadwalShift createMany
   */
  export type JadwalShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalShifts.
     */
    data: JadwalShiftCreateManyInput | JadwalShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JadwalShift createManyAndReturn
   */
  export type JadwalShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * The data used to create many JadwalShifts.
     */
    data: JadwalShiftCreateManyInput | JadwalShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalShift update
   */
  export type JadwalShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a JadwalShift.
     */
    data: XOR<JadwalShiftUpdateInput, JadwalShiftUncheckedUpdateInput>
    /**
     * Choose, which JadwalShift to update.
     */
    where: JadwalShiftWhereUniqueInput
  }

  /**
   * JadwalShift updateMany
   */
  export type JadwalShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalShifts.
     */
    data: XOR<JadwalShiftUpdateManyMutationInput, JadwalShiftUncheckedUpdateManyInput>
    /**
     * Filter which JadwalShifts to update
     */
    where?: JadwalShiftWhereInput
    /**
     * Limit how many JadwalShifts to update.
     */
    limit?: number
  }

  /**
   * JadwalShift updateManyAndReturn
   */
  export type JadwalShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * The data used to update JadwalShifts.
     */
    data: XOR<JadwalShiftUpdateManyMutationInput, JadwalShiftUncheckedUpdateManyInput>
    /**
     * Filter which JadwalShifts to update
     */
    where?: JadwalShiftWhereInput
    /**
     * Limit how many JadwalShifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalShift upsert
   */
  export type JadwalShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the JadwalShift to update in case it exists.
     */
    where: JadwalShiftWhereUniqueInput
    /**
     * In case the JadwalShift found by the `where` argument doesn't exist, create a new JadwalShift with this data.
     */
    create: XOR<JadwalShiftCreateInput, JadwalShiftUncheckedCreateInput>
    /**
     * In case the JadwalShift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalShiftUpdateInput, JadwalShiftUncheckedUpdateInput>
  }

  /**
   * JadwalShift delete
   */
  export type JadwalShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    /**
     * Filter which JadwalShift to delete.
     */
    where: JadwalShiftWhereUniqueInput
  }

  /**
   * JadwalShift deleteMany
   */
  export type JadwalShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalShifts to delete
     */
    where?: JadwalShiftWhereInput
    /**
     * Limit how many JadwalShifts to delete.
     */
    limit?: number
  }

  /**
   * JadwalShift without action
   */
  export type JadwalShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type SiteSumAggregateOutputType = {
    id: number | null
    addressId: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    status: $Enums.siteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    addressId: number | null
  }

  export type SiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    status: $Enums.siteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    addressId: number | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    image: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    addressId: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type SiteSumAggregateInputType = {
    id?: true
    addressId?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    addressId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    addressId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    addressId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: number
    name: string
    image: string | null
    status: $Enums.siteStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    addressId: number
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    addressId?: boolean
    address?: boolean | SiteAddressDefaultArgs<ExtArgs>
    users?: boolean | Site$usersArgs<ExtArgs>
    report?: boolean | Site$reportArgs<ExtArgs>
    shift?: boolean | Site$shiftArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    addressId?: boolean
    address?: boolean | SiteAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    addressId?: boolean
    address?: boolean | SiteAddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    addressId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "status" | "createdAt" | "updatedAt" | "deletedAt" | "addressId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | SiteAddressDefaultArgs<ExtArgs>
    users?: boolean | Site$usersArgs<ExtArgs>
    report?: boolean | Site$reportArgs<ExtArgs>
    shift?: boolean | Site$shiftArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | SiteAddressDefaultArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | SiteAddressDefaultArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      address: Prisma.$SiteAddressPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      report: Prisma.$LaporanPayload<ExtArgs>[]
      shift: Prisma.$JadwalShiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string | null
      status: $Enums.siteStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      addressId: number
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends SiteAddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteAddressDefaultArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends Site$usersArgs<ExtArgs> = {}>(args?: Subset<T, Site$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report<T extends Site$reportArgs<ExtArgs> = {}>(args?: Subset<T, Site$reportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shift<T extends Site$shiftArgs<ExtArgs> = {}>(args?: Subset<T, Site$shiftArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'Int'>
    readonly name: FieldRef<"Site", 'String'>
    readonly image: FieldRef<"Site", 'String'>
    readonly status: FieldRef<"Site", 'siteStatus'>
    readonly createdAt: FieldRef<"Site", 'DateTime'>
    readonly updatedAt: FieldRef<"Site", 'DateTime'>
    readonly deletedAt: FieldRef<"Site", 'DateTime'>
    readonly addressId: FieldRef<"Site", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.users
   */
  export type Site$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Site.report
   */
  export type Site$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Site.shift
   */
  export type Site$shiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalShift
     */
    select?: JadwalShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalShift
     */
    omit?: JadwalShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalShiftInclude<ExtArgs> | null
    where?: JadwalShiftWhereInput
    orderBy?: JadwalShiftOrderByWithRelationInput | JadwalShiftOrderByWithRelationInput[]
    cursor?: JadwalShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalShiftScalarFieldEnum | JadwalShiftScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model SiteAddress
   */

  export type AggregateSiteAddress = {
    _count: SiteAddressCountAggregateOutputType | null
    _avg: SiteAddressAvgAggregateOutputType | null
    _sum: SiteAddressSumAggregateOutputType | null
    _min: SiteAddressMinAggregateOutputType | null
    _max: SiteAddressMaxAggregateOutputType | null
  }

  export type SiteAddressAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type SiteAddressSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type SiteAddressMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    province: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SiteAddressMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    province: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type SiteAddressCountAggregateOutputType = {
    id: number
    address: number
    city: number
    province: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type SiteAddressAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type SiteAddressSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type SiteAddressMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    province?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SiteAddressMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    province?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type SiteAddressCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    province?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type SiteAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteAddress to aggregate.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteAddresses
    **/
    _count?: true | SiteAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteAddressMaxAggregateInputType
  }

  export type GetSiteAddressAggregateType<T extends SiteAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteAddress[P]>
      : GetScalarType<T[P], AggregateSiteAddress[P]>
  }




  export type SiteAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteAddressWhereInput
    orderBy?: SiteAddressOrderByWithAggregationInput | SiteAddressOrderByWithAggregationInput[]
    by: SiteAddressScalarFieldEnum[] | SiteAddressScalarFieldEnum
    having?: SiteAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteAddressCountAggregateInputType | true
    _avg?: SiteAddressAvgAggregateInputType
    _sum?: SiteAddressSumAggregateInputType
    _min?: SiteAddressMinAggregateInputType
    _max?: SiteAddressMaxAggregateInputType
  }

  export type SiteAddressGroupByOutputType = {
    id: number
    address: string
    city: string
    province: string
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: SiteAddressCountAggregateOutputType | null
    _avg: SiteAddressAvgAggregateOutputType | null
    _sum: SiteAddressSumAggregateOutputType | null
    _min: SiteAddressMinAggregateOutputType | null
    _max: SiteAddressMaxAggregateOutputType | null
  }

  type GetSiteAddressGroupByPayload<T extends SiteAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteAddressGroupByOutputType[P]>
            : GetScalarType<T[P], SiteAddressGroupByOutputType[P]>
        }
      >
    >


  export type SiteAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    site?: boolean | SiteAddress$siteArgs<ExtArgs>
  }, ExtArgs["result"]["siteAddress"]>

  export type SiteAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["siteAddress"]>

  export type SiteAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["siteAddress"]>

  export type SiteAddressSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type SiteAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "province" | "latitude" | "longitude" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["siteAddress"]>
  export type SiteAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteAddress$siteArgs<ExtArgs>
  }
  export type SiteAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SiteAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteAddress"
    objects: {
      site: Prisma.$SitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      province: string
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["siteAddress"]>
    composites: {}
  }

  type SiteAddressGetPayload<S extends boolean | null | undefined | SiteAddressDefaultArgs> = $Result.GetResult<Prisma.$SiteAddressPayload, S>

  type SiteAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteAddressCountAggregateInputType | true
    }

  export interface SiteAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteAddress'], meta: { name: 'SiteAddress' } }
    /**
     * Find zero or one SiteAddress that matches the filter.
     * @param {SiteAddressFindUniqueArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteAddressFindUniqueArgs>(args: SelectSubset<T, SiteAddressFindUniqueArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteAddressFindUniqueOrThrowArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressFindFirstArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteAddressFindFirstArgs>(args?: SelectSubset<T, SiteAddressFindFirstArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressFindFirstOrThrowArgs} args - Arguments to find a SiteAddress
     * @example
     * // Get one SiteAddress
     * const siteAddress = await prisma.siteAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteAddresses
     * const siteAddresses = await prisma.siteAddress.findMany()
     * 
     * // Get first 10 SiteAddresses
     * const siteAddresses = await prisma.siteAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteAddressWithIdOnly = await prisma.siteAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteAddressFindManyArgs>(args?: SelectSubset<T, SiteAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteAddress.
     * @param {SiteAddressCreateArgs} args - Arguments to create a SiteAddress.
     * @example
     * // Create one SiteAddress
     * const SiteAddress = await prisma.siteAddress.create({
     *   data: {
     *     // ... data to create a SiteAddress
     *   }
     * })
     * 
     */
    create<T extends SiteAddressCreateArgs>(args: SelectSubset<T, SiteAddressCreateArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteAddresses.
     * @param {SiteAddressCreateManyArgs} args - Arguments to create many SiteAddresses.
     * @example
     * // Create many SiteAddresses
     * const siteAddress = await prisma.siteAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteAddressCreateManyArgs>(args?: SelectSubset<T, SiteAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteAddresses and returns the data saved in the database.
     * @param {SiteAddressCreateManyAndReturnArgs} args - Arguments to create many SiteAddresses.
     * @example
     * // Create many SiteAddresses
     * const siteAddress = await prisma.siteAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteAddresses and only return the `id`
     * const siteAddressWithIdOnly = await prisma.siteAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteAddress.
     * @param {SiteAddressDeleteArgs} args - Arguments to delete one SiteAddress.
     * @example
     * // Delete one SiteAddress
     * const SiteAddress = await prisma.siteAddress.delete({
     *   where: {
     *     // ... filter to delete one SiteAddress
     *   }
     * })
     * 
     */
    delete<T extends SiteAddressDeleteArgs>(args: SelectSubset<T, SiteAddressDeleteArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteAddress.
     * @param {SiteAddressUpdateArgs} args - Arguments to update one SiteAddress.
     * @example
     * // Update one SiteAddress
     * const siteAddress = await prisma.siteAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteAddressUpdateArgs>(args: SelectSubset<T, SiteAddressUpdateArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteAddresses.
     * @param {SiteAddressDeleteManyArgs} args - Arguments to filter SiteAddresses to delete.
     * @example
     * // Delete a few SiteAddresses
     * const { count } = await prisma.siteAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteAddressDeleteManyArgs>(args?: SelectSubset<T, SiteAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteAddresses
     * const siteAddress = await prisma.siteAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteAddressUpdateManyArgs>(args: SelectSubset<T, SiteAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteAddresses and returns the data updated in the database.
     * @param {SiteAddressUpdateManyAndReturnArgs} args - Arguments to update many SiteAddresses.
     * @example
     * // Update many SiteAddresses
     * const siteAddress = await prisma.siteAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteAddresses and only return the `id`
     * const siteAddressWithIdOnly = await prisma.siteAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteAddress.
     * @param {SiteAddressUpsertArgs} args - Arguments to update or create a SiteAddress.
     * @example
     * // Update or create a SiteAddress
     * const siteAddress = await prisma.siteAddress.upsert({
     *   create: {
     *     // ... data to create a SiteAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteAddress we want to update
     *   }
     * })
     */
    upsert<T extends SiteAddressUpsertArgs>(args: SelectSubset<T, SiteAddressUpsertArgs<ExtArgs>>): Prisma__SiteAddressClient<$Result.GetResult<Prisma.$SiteAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressCountArgs} args - Arguments to filter SiteAddresses to count.
     * @example
     * // Count the number of SiteAddresses
     * const count = await prisma.siteAddress.count({
     *   where: {
     *     // ... the filter for the SiteAddresses we want to count
     *   }
     * })
    **/
    count<T extends SiteAddressCountArgs>(
      args?: Subset<T, SiteAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAddressAggregateArgs>(args: Subset<T, SiteAddressAggregateArgs>): Prisma.PrismaPromise<GetSiteAddressAggregateType<T>>

    /**
     * Group by SiteAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteAddressGroupByArgs['orderBy'] }
        : { orderBy?: SiteAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteAddress model
   */
  readonly fields: SiteAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteAddress$siteArgs<ExtArgs> = {}>(args?: Subset<T, SiteAddress$siteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SiteAddress model
   */
  interface SiteAddressFieldRefs {
    readonly id: FieldRef<"SiteAddress", 'Int'>
    readonly address: FieldRef<"SiteAddress", 'String'>
    readonly city: FieldRef<"SiteAddress", 'String'>
    readonly province: FieldRef<"SiteAddress", 'String'>
    readonly latitude: FieldRef<"SiteAddress", 'Float'>
    readonly longitude: FieldRef<"SiteAddress", 'Float'>
    readonly createdAt: FieldRef<"SiteAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteAddress", 'DateTime'>
    readonly deletedAt: FieldRef<"SiteAddress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteAddress findUnique
   */
  export type SiteAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress findUniqueOrThrow
   */
  export type SiteAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress findFirst
   */
  export type SiteAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteAddresses.
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteAddresses.
     */
    distinct?: SiteAddressScalarFieldEnum | SiteAddressScalarFieldEnum[]
  }

  /**
   * SiteAddress findFirstOrThrow
   */
  export type SiteAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddress to fetch.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteAddresses.
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteAddresses.
     */
    distinct?: SiteAddressScalarFieldEnum | SiteAddressScalarFieldEnum[]
  }

  /**
   * SiteAddress findMany
   */
  export type SiteAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter, which SiteAddresses to fetch.
     */
    where?: SiteAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteAddresses to fetch.
     */
    orderBy?: SiteAddressOrderByWithRelationInput | SiteAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteAddresses.
     */
    cursor?: SiteAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteAddresses.
     */
    skip?: number
    distinct?: SiteAddressScalarFieldEnum | SiteAddressScalarFieldEnum[]
  }

  /**
   * SiteAddress create
   */
  export type SiteAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteAddress.
     */
    data: XOR<SiteAddressCreateInput, SiteAddressUncheckedCreateInput>
  }

  /**
   * SiteAddress createMany
   */
  export type SiteAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteAddresses.
     */
    data: SiteAddressCreateManyInput | SiteAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteAddress createManyAndReturn
   */
  export type SiteAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * The data used to create many SiteAddresses.
     */
    data: SiteAddressCreateManyInput | SiteAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteAddress update
   */
  export type SiteAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteAddress.
     */
    data: XOR<SiteAddressUpdateInput, SiteAddressUncheckedUpdateInput>
    /**
     * Choose, which SiteAddress to update.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress updateMany
   */
  export type SiteAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteAddresses.
     */
    data: XOR<SiteAddressUpdateManyMutationInput, SiteAddressUncheckedUpdateManyInput>
    /**
     * Filter which SiteAddresses to update
     */
    where?: SiteAddressWhereInput
    /**
     * Limit how many SiteAddresses to update.
     */
    limit?: number
  }

  /**
   * SiteAddress updateManyAndReturn
   */
  export type SiteAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * The data used to update SiteAddresses.
     */
    data: XOR<SiteAddressUpdateManyMutationInput, SiteAddressUncheckedUpdateManyInput>
    /**
     * Filter which SiteAddresses to update
     */
    where?: SiteAddressWhereInput
    /**
     * Limit how many SiteAddresses to update.
     */
    limit?: number
  }

  /**
   * SiteAddress upsert
   */
  export type SiteAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteAddress to update in case it exists.
     */
    where: SiteAddressWhereUniqueInput
    /**
     * In case the SiteAddress found by the `where` argument doesn't exist, create a new SiteAddress with this data.
     */
    create: XOR<SiteAddressCreateInput, SiteAddressUncheckedCreateInput>
    /**
     * In case the SiteAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteAddressUpdateInput, SiteAddressUncheckedUpdateInput>
  }

  /**
   * SiteAddress delete
   */
  export type SiteAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
    /**
     * Filter which SiteAddress to delete.
     */
    where: SiteAddressWhereUniqueInput
  }

  /**
   * SiteAddress deleteMany
   */
  export type SiteAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteAddresses to delete
     */
    where?: SiteAddressWhereInput
    /**
     * Limit how many SiteAddresses to delete.
     */
    limit?: number
  }

  /**
   * SiteAddress.site
   */
  export type SiteAddress$siteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
  }

  /**
   * SiteAddress without action
   */
  export type SiteAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteAddress
     */
    select?: SiteAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteAddress
     */
    omit?: SiteAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteAddressInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    birthDate: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    birthDate: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    birthDate: number
    image: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    birthDate?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    birthDate?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    birthDate?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    birthDate: Date
    image: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthDate?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | Profile$addressArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthDate?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthDate?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    birthDate?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "birthDate" | "image" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    address?: boolean | Profile$addressArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      address: Prisma.$UserAddressPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      birthDate: Date
      image: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends Profile$addressArgs<ExtArgs> = {}>(args?: Subset<T, Profile$addressArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly birthDate: FieldRef<"Profile", 'DateTime'>
    readonly image: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly deletedAt: FieldRef<"Profile", 'DateTime'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.address
   */
  export type Profile$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    where?: UserAddressWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserAddress
   */

  export type AggregateUserAddress = {
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  export type UserAddressAvgAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type UserAddressSumAggregateOutputType = {
    id: number | null
    profileId: number | null
  }

  export type UserAddressMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    province: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    profileId: number | null
  }

  export type UserAddressMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    province: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    profileId: number | null
  }

  export type UserAddressCountAggregateOutputType = {
    id: number
    address: number
    city: number
    province: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    profileId: number
    _all: number
  }


  export type UserAddressAvgAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type UserAddressSumAggregateInputType = {
    id?: true
    profileId?: true
  }

  export type UserAddressMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    province?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    profileId?: true
  }

  export type UserAddressMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    province?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    profileId?: true
  }

  export type UserAddressCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    province?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    profileId?: true
    _all?: true
  }

  export type UserAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddress to aggregate.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAddresses
    **/
    _count?: true | UserAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAddressMaxAggregateInputType
  }

  export type GetUserAddressAggregateType<T extends UserAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAddress[P]>
      : GetScalarType<T[P], AggregateUserAddress[P]>
  }




  export type UserAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAddressWhereInput
    orderBy?: UserAddressOrderByWithAggregationInput | UserAddressOrderByWithAggregationInput[]
    by: UserAddressScalarFieldEnum[] | UserAddressScalarFieldEnum
    having?: UserAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAddressCountAggregateInputType | true
    _avg?: UserAddressAvgAggregateInputType
    _sum?: UserAddressSumAggregateInputType
    _min?: UserAddressMinAggregateInputType
    _max?: UserAddressMaxAggregateInputType
  }

  export type UserAddressGroupByOutputType = {
    id: number
    address: string
    city: string
    province: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    profileId: number
    _count: UserAddressCountAggregateOutputType | null
    _avg: UserAddressAvgAggregateOutputType | null
    _sum: UserAddressSumAggregateOutputType | null
    _min: UserAddressMinAggregateOutputType | null
    _max: UserAddressMaxAggregateOutputType | null
  }

  type GetUserAddressGroupByPayload<T extends UserAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAddressGroupByOutputType[P]>
        }
      >
    >


  export type UserAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profileId?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAddress"]>

  export type UserAddressSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    profileId?: boolean
  }

  export type UserAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "province" | "createdAt" | "updatedAt" | "deletedAt" | "profileId", ExtArgs["result"]["userAddress"]>
  export type UserAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAddress"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      province: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      profileId: number
    }, ExtArgs["result"]["userAddress"]>
    composites: {}
  }

  type UserAddressGetPayload<S extends boolean | null | undefined | UserAddressDefaultArgs> = $Result.GetResult<Prisma.$UserAddressPayload, S>

  type UserAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAddressCountAggregateInputType | true
    }

  export interface UserAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAddress'], meta: { name: 'UserAddress' } }
    /**
     * Find zero or one UserAddress that matches the filter.
     * @param {UserAddressFindUniqueArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAddressFindUniqueArgs>(args: SelectSubset<T, UserAddressFindUniqueArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAddressFindUniqueOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAddressFindFirstArgs>(args?: SelectSubset<T, UserAddressFindFirstArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindFirstOrThrowArgs} args - Arguments to find a UserAddress
     * @example
     * // Get one UserAddress
     * const userAddress = await prisma.userAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAddresses
     * const userAddresses = await prisma.userAddress.findMany()
     * 
     * // Get first 10 UserAddresses
     * const userAddresses = await prisma.userAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAddressFindManyArgs>(args?: SelectSubset<T, UserAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAddress.
     * @param {UserAddressCreateArgs} args - Arguments to create a UserAddress.
     * @example
     * // Create one UserAddress
     * const UserAddress = await prisma.userAddress.create({
     *   data: {
     *     // ... data to create a UserAddress
     *   }
     * })
     * 
     */
    create<T extends UserAddressCreateArgs>(args: SelectSubset<T, UserAddressCreateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAddresses.
     * @param {UserAddressCreateManyArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAddressCreateManyArgs>(args?: SelectSubset<T, UserAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAddresses and returns the data saved in the database.
     * @param {UserAddressCreateManyAndReturnArgs} args - Arguments to create many UserAddresses.
     * @example
     * // Create many UserAddresses
     * const userAddress = await prisma.userAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAddress.
     * @param {UserAddressDeleteArgs} args - Arguments to delete one UserAddress.
     * @example
     * // Delete one UserAddress
     * const UserAddress = await prisma.userAddress.delete({
     *   where: {
     *     // ... filter to delete one UserAddress
     *   }
     * })
     * 
     */
    delete<T extends UserAddressDeleteArgs>(args: SelectSubset<T, UserAddressDeleteArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAddress.
     * @param {UserAddressUpdateArgs} args - Arguments to update one UserAddress.
     * @example
     * // Update one UserAddress
     * const userAddress = await prisma.userAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAddressUpdateArgs>(args: SelectSubset<T, UserAddressUpdateArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAddresses.
     * @param {UserAddressDeleteManyArgs} args - Arguments to filter UserAddresses to delete.
     * @example
     * // Delete a few UserAddresses
     * const { count } = await prisma.userAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAddressDeleteManyArgs>(args?: SelectSubset<T, UserAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAddressUpdateManyArgs>(args: SelectSubset<T, UserAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAddresses and returns the data updated in the database.
     * @param {UserAddressUpdateManyAndReturnArgs} args - Arguments to update many UserAddresses.
     * @example
     * // Update many UserAddresses
     * const userAddress = await prisma.userAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAddresses and only return the `id`
     * const userAddressWithIdOnly = await prisma.userAddress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAddress.
     * @param {UserAddressUpsertArgs} args - Arguments to update or create a UserAddress.
     * @example
     * // Update or create a UserAddress
     * const userAddress = await prisma.userAddress.upsert({
     *   create: {
     *     // ... data to create a UserAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAddress we want to update
     *   }
     * })
     */
    upsert<T extends UserAddressUpsertArgs>(args: SelectSubset<T, UserAddressUpsertArgs<ExtArgs>>): Prisma__UserAddressClient<$Result.GetResult<Prisma.$UserAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressCountArgs} args - Arguments to filter UserAddresses to count.
     * @example
     * // Count the number of UserAddresses
     * const count = await prisma.userAddress.count({
     *   where: {
     *     // ... the filter for the UserAddresses we want to count
     *   }
     * })
    **/
    count<T extends UserAddressCountArgs>(
      args?: Subset<T, UserAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAddressAggregateArgs>(args: Subset<T, UserAddressAggregateArgs>): Prisma.PrismaPromise<GetUserAddressAggregateType<T>>

    /**
     * Group by UserAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAddressGroupByArgs['orderBy'] }
        : { orderBy?: UserAddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAddress model
   */
  readonly fields: UserAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAddress model
   */
  interface UserAddressFieldRefs {
    readonly id: FieldRef<"UserAddress", 'Int'>
    readonly address: FieldRef<"UserAddress", 'String'>
    readonly city: FieldRef<"UserAddress", 'String'>
    readonly province: FieldRef<"UserAddress", 'String'>
    readonly createdAt: FieldRef<"UserAddress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAddress", 'DateTime'>
    readonly deletedAt: FieldRef<"UserAddress", 'DateTime'>
    readonly profileId: FieldRef<"UserAddress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserAddress findUnique
   */
  export type UserAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findUniqueOrThrow
   */
  export type UserAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress findFirst
   */
  export type UserAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findFirstOrThrow
   */
  export type UserAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddress to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAddresses.
     */
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress findMany
   */
  export type UserAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter, which UserAddresses to fetch.
     */
    where?: UserAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAddresses to fetch.
     */
    orderBy?: UserAddressOrderByWithRelationInput | UserAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAddresses.
     */
    cursor?: UserAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAddresses.
     */
    skip?: number
    distinct?: UserAddressScalarFieldEnum | UserAddressScalarFieldEnum[]
  }

  /**
   * UserAddress create
   */
  export type UserAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAddress.
     */
    data: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
  }

  /**
   * UserAddress createMany
   */
  export type UserAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAddress createManyAndReturn
   */
  export type UserAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to create many UserAddresses.
     */
    data: UserAddressCreateManyInput | UserAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress update
   */
  export type UserAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAddress.
     */
    data: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
    /**
     * Choose, which UserAddress to update.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress updateMany
   */
  export type UserAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
  }

  /**
   * UserAddress updateManyAndReturn
   */
  export type UserAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * The data used to update UserAddresses.
     */
    data: XOR<UserAddressUpdateManyMutationInput, UserAddressUncheckedUpdateManyInput>
    /**
     * Filter which UserAddresses to update
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAddress upsert
   */
  export type UserAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAddress to update in case it exists.
     */
    where: UserAddressWhereUniqueInput
    /**
     * In case the UserAddress found by the `where` argument doesn't exist, create a new UserAddress with this data.
     */
    create: XOR<UserAddressCreateInput, UserAddressUncheckedCreateInput>
    /**
     * In case the UserAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAddressUpdateInput, UserAddressUncheckedUpdateInput>
  }

  /**
   * UserAddress delete
   */
  export type UserAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
    /**
     * Filter which UserAddress to delete.
     */
    where: UserAddressWhereUniqueInput
  }

  /**
   * UserAddress deleteMany
   */
  export type UserAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAddresses to delete
     */
    where?: UserAddressWhereInput
    /**
     * Limit how many UserAddresses to delete.
     */
    limit?: number
  }

  /**
   * UserAddress without action
   */
  export type UserAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAddress
     */
    select?: UserAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAddress
     */
    omit?: UserAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAddressInclude<ExtArgs> | null
  }


  /**
   * Model Presensi
   */

  export type AggregatePresensi = {
    _count: PresensiCountAggregateOutputType | null
    _avg: PresensiAvgAggregateOutputType | null
    _sum: PresensiSumAggregateOutputType | null
    _min: PresensiMinAggregateOutputType | null
    _max: PresensiMaxAggregateOutputType | null
  }

  export type PresensiAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    userId: number | null
  }

  export type PresensiSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    userId: number | null
  }

  export type PresensiMinAggregateOutputType = {
    id: number | null
    presensiDate: Date | null
    latitude: number | null
    longitude: number | null
    fotoDiri: string | null
    statusPresensi: $Enums.StatusPresensi | null
    statusApproval: $Enums.StatusApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type PresensiMaxAggregateOutputType = {
    id: number | null
    presensiDate: Date | null
    latitude: number | null
    longitude: number | null
    fotoDiri: string | null
    statusPresensi: $Enums.StatusPresensi | null
    statusApproval: $Enums.StatusApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type PresensiCountAggregateOutputType = {
    id: number
    presensiDate: number
    latitude: number
    longitude: number
    fotoDiri: number
    statusPresensi: number
    statusApproval: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type PresensiAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    userId?: true
  }

  export type PresensiSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    userId?: true
  }

  export type PresensiMinAggregateInputType = {
    id?: true
    presensiDate?: true
    latitude?: true
    longitude?: true
    fotoDiri?: true
    statusPresensi?: true
    statusApproval?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type PresensiMaxAggregateInputType = {
    id?: true
    presensiDate?: true
    latitude?: true
    longitude?: true
    fotoDiri?: true
    statusPresensi?: true
    statusApproval?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type PresensiCountAggregateInputType = {
    id?: true
    presensiDate?: true
    latitude?: true
    longitude?: true
    fotoDiri?: true
    statusPresensi?: true
    statusApproval?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type PresensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presensi to aggregate.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presensis
    **/
    _count?: true | PresensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresensiMaxAggregateInputType
  }

  export type GetPresensiAggregateType<T extends PresensiAggregateArgs> = {
        [P in keyof T & keyof AggregatePresensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresensi[P]>
      : GetScalarType<T[P], AggregatePresensi[P]>
  }




  export type PresensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresensiWhereInput
    orderBy?: PresensiOrderByWithAggregationInput | PresensiOrderByWithAggregationInput[]
    by: PresensiScalarFieldEnum[] | PresensiScalarFieldEnum
    having?: PresensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresensiCountAggregateInputType | true
    _avg?: PresensiAvgAggregateInputType
    _sum?: PresensiSumAggregateInputType
    _min?: PresensiMinAggregateInputType
    _max?: PresensiMaxAggregateInputType
  }

  export type PresensiGroupByOutputType = {
    id: number
    presensiDate: Date
    latitude: number
    longitude: number
    fotoDiri: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval: $Enums.StatusApproval
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: PresensiCountAggregateOutputType | null
    _avg: PresensiAvgAggregateOutputType | null
    _sum: PresensiSumAggregateOutputType | null
    _min: PresensiMinAggregateOutputType | null
    _max: PresensiMaxAggregateOutputType | null
  }

  type GetPresensiGroupByPayload<T extends PresensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresensiGroupByOutputType[P]>
            : GetScalarType<T[P], PresensiGroupByOutputType[P]>
        }
      >
    >


  export type PresensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presensiDate?: boolean
    latitude?: boolean
    longitude?: boolean
    fotoDiri?: boolean
    statusPresensi?: boolean
    statusApproval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presensi"]>

  export type PresensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presensiDate?: boolean
    latitude?: boolean
    longitude?: boolean
    fotoDiri?: boolean
    statusPresensi?: boolean
    statusApproval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presensi"]>

  export type PresensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presensiDate?: boolean
    latitude?: boolean
    longitude?: boolean
    fotoDiri?: boolean
    statusPresensi?: boolean
    statusApproval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presensi"]>

  export type PresensiSelectScalar = {
    id?: boolean
    presensiDate?: boolean
    latitude?: boolean
    longitude?: boolean
    fotoDiri?: boolean
    statusPresensi?: boolean
    statusApproval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type PresensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "presensiDate" | "latitude" | "longitude" | "fotoDiri" | "statusPresensi" | "statusApproval" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["presensi"]>
  export type PresensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PresensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PresensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PresensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Presensi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      presensiDate: Date
      latitude: number
      longitude: number
      fotoDiri: string | null
      statusPresensi: $Enums.StatusPresensi
      statusApproval: $Enums.StatusApproval
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["presensi"]>
    composites: {}
  }

  type PresensiGetPayload<S extends boolean | null | undefined | PresensiDefaultArgs> = $Result.GetResult<Prisma.$PresensiPayload, S>

  type PresensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresensiCountAggregateInputType | true
    }

  export interface PresensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Presensi'], meta: { name: 'Presensi' } }
    /**
     * Find zero or one Presensi that matches the filter.
     * @param {PresensiFindUniqueArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresensiFindUniqueArgs>(args: SelectSubset<T, PresensiFindUniqueArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Presensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresensiFindUniqueOrThrowArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresensiFindUniqueOrThrowArgs>(args: SelectSubset<T, PresensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiFindFirstArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresensiFindFirstArgs>(args?: SelectSubset<T, PresensiFindFirstArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Presensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiFindFirstOrThrowArgs} args - Arguments to find a Presensi
     * @example
     * // Get one Presensi
     * const presensi = await prisma.presensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresensiFindFirstOrThrowArgs>(args?: SelectSubset<T, PresensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presensis
     * const presensis = await prisma.presensi.findMany()
     * 
     * // Get first 10 Presensis
     * const presensis = await prisma.presensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presensiWithIdOnly = await prisma.presensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresensiFindManyArgs>(args?: SelectSubset<T, PresensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Presensi.
     * @param {PresensiCreateArgs} args - Arguments to create a Presensi.
     * @example
     * // Create one Presensi
     * const Presensi = await prisma.presensi.create({
     *   data: {
     *     // ... data to create a Presensi
     *   }
     * })
     * 
     */
    create<T extends PresensiCreateArgs>(args: SelectSubset<T, PresensiCreateArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presensis.
     * @param {PresensiCreateManyArgs} args - Arguments to create many Presensis.
     * @example
     * // Create many Presensis
     * const presensi = await prisma.presensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresensiCreateManyArgs>(args?: SelectSubset<T, PresensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Presensis and returns the data saved in the database.
     * @param {PresensiCreateManyAndReturnArgs} args - Arguments to create many Presensis.
     * @example
     * // Create many Presensis
     * const presensi = await prisma.presensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Presensis and only return the `id`
     * const presensiWithIdOnly = await prisma.presensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresensiCreateManyAndReturnArgs>(args?: SelectSubset<T, PresensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Presensi.
     * @param {PresensiDeleteArgs} args - Arguments to delete one Presensi.
     * @example
     * // Delete one Presensi
     * const Presensi = await prisma.presensi.delete({
     *   where: {
     *     // ... filter to delete one Presensi
     *   }
     * })
     * 
     */
    delete<T extends PresensiDeleteArgs>(args: SelectSubset<T, PresensiDeleteArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Presensi.
     * @param {PresensiUpdateArgs} args - Arguments to update one Presensi.
     * @example
     * // Update one Presensi
     * const presensi = await prisma.presensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresensiUpdateArgs>(args: SelectSubset<T, PresensiUpdateArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presensis.
     * @param {PresensiDeleteManyArgs} args - Arguments to filter Presensis to delete.
     * @example
     * // Delete a few Presensis
     * const { count } = await prisma.presensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresensiDeleteManyArgs>(args?: SelectSubset<T, PresensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presensis
     * const presensi = await prisma.presensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresensiUpdateManyArgs>(args: SelectSubset<T, PresensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presensis and returns the data updated in the database.
     * @param {PresensiUpdateManyAndReturnArgs} args - Arguments to update many Presensis.
     * @example
     * // Update many Presensis
     * const presensi = await prisma.presensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Presensis and only return the `id`
     * const presensiWithIdOnly = await prisma.presensi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PresensiUpdateManyAndReturnArgs>(args: SelectSubset<T, PresensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Presensi.
     * @param {PresensiUpsertArgs} args - Arguments to update or create a Presensi.
     * @example
     * // Update or create a Presensi
     * const presensi = await prisma.presensi.upsert({
     *   create: {
     *     // ... data to create a Presensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Presensi we want to update
     *   }
     * })
     */
    upsert<T extends PresensiUpsertArgs>(args: SelectSubset<T, PresensiUpsertArgs<ExtArgs>>): Prisma__PresensiClient<$Result.GetResult<Prisma.$PresensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiCountArgs} args - Arguments to filter Presensis to count.
     * @example
     * // Count the number of Presensis
     * const count = await prisma.presensi.count({
     *   where: {
     *     // ... the filter for the Presensis we want to count
     *   }
     * })
    **/
    count<T extends PresensiCountArgs>(
      args?: Subset<T, PresensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Presensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresensiAggregateArgs>(args: Subset<T, PresensiAggregateArgs>): Prisma.PrismaPromise<GetPresensiAggregateType<T>>

    /**
     * Group by Presensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresensiGroupByArgs['orderBy'] }
        : { orderBy?: PresensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Presensi model
   */
  readonly fields: PresensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Presensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Presensi model
   */
  interface PresensiFieldRefs {
    readonly id: FieldRef<"Presensi", 'Int'>
    readonly presensiDate: FieldRef<"Presensi", 'DateTime'>
    readonly latitude: FieldRef<"Presensi", 'Int'>
    readonly longitude: FieldRef<"Presensi", 'Int'>
    readonly fotoDiri: FieldRef<"Presensi", 'String'>
    readonly statusPresensi: FieldRef<"Presensi", 'StatusPresensi'>
    readonly statusApproval: FieldRef<"Presensi", 'StatusApproval'>
    readonly createdAt: FieldRef<"Presensi", 'DateTime'>
    readonly updatedAt: FieldRef<"Presensi", 'DateTime'>
    readonly deletedAt: FieldRef<"Presensi", 'DateTime'>
    readonly userId: FieldRef<"Presensi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Presensi findUnique
   */
  export type PresensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi findUniqueOrThrow
   */
  export type PresensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi findFirst
   */
  export type PresensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presensis.
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presensis.
     */
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * Presensi findFirstOrThrow
   */
  export type PresensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensi to fetch.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presensis.
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presensis.
     */
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * Presensi findMany
   */
  export type PresensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter, which Presensis to fetch.
     */
    where?: PresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presensis to fetch.
     */
    orderBy?: PresensiOrderByWithRelationInput | PresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presensis.
     */
    cursor?: PresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presensis.
     */
    skip?: number
    distinct?: PresensiScalarFieldEnum | PresensiScalarFieldEnum[]
  }

  /**
   * Presensi create
   */
  export type PresensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Presensi.
     */
    data: XOR<PresensiCreateInput, PresensiUncheckedCreateInput>
  }

  /**
   * Presensi createMany
   */
  export type PresensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presensis.
     */
    data: PresensiCreateManyInput | PresensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Presensi createManyAndReturn
   */
  export type PresensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * The data used to create many Presensis.
     */
    data: PresensiCreateManyInput | PresensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presensi update
   */
  export type PresensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Presensi.
     */
    data: XOR<PresensiUpdateInput, PresensiUncheckedUpdateInput>
    /**
     * Choose, which Presensi to update.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi updateMany
   */
  export type PresensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presensis.
     */
    data: XOR<PresensiUpdateManyMutationInput, PresensiUncheckedUpdateManyInput>
    /**
     * Filter which Presensis to update
     */
    where?: PresensiWhereInput
    /**
     * Limit how many Presensis to update.
     */
    limit?: number
  }

  /**
   * Presensi updateManyAndReturn
   */
  export type PresensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * The data used to update Presensis.
     */
    data: XOR<PresensiUpdateManyMutationInput, PresensiUncheckedUpdateManyInput>
    /**
     * Filter which Presensis to update
     */
    where?: PresensiWhereInput
    /**
     * Limit how many Presensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Presensi upsert
   */
  export type PresensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Presensi to update in case it exists.
     */
    where: PresensiWhereUniqueInput
    /**
     * In case the Presensi found by the `where` argument doesn't exist, create a new Presensi with this data.
     */
    create: XOR<PresensiCreateInput, PresensiUncheckedCreateInput>
    /**
     * In case the Presensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresensiUpdateInput, PresensiUncheckedUpdateInput>
  }

  /**
   * Presensi delete
   */
  export type PresensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
    /**
     * Filter which Presensi to delete.
     */
    where: PresensiWhereUniqueInput
  }

  /**
   * Presensi deleteMany
   */
  export type PresensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presensis to delete
     */
    where?: PresensiWhereInput
    /**
     * Limit how many Presensis to delete.
     */
    limit?: number
  }

  /**
   * Presensi without action
   */
  export type PresensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Presensi
     */
    select?: PresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Presensi
     */
    omit?: PresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresensiInclude<ExtArgs> | null
  }


  /**
   * Model Laporan
   */

  export type AggregateLaporan = {
    _count: LaporanCountAggregateOutputType | null
    _avg: LaporanAvgAggregateOutputType | null
    _sum: LaporanSumAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  export type LaporanAvgAggregateOutputType = {
    id: number | null
    flowRate: number | null
    volt: number | null
    pH: number | null
    ampere: number | null
    TDS: number | null
    EC: number | null
    userId: number | null
  }

  export type LaporanSumAggregateOutputType = {
    id: number | null
    flowRate: number | null
    volt: number | null
    pH: number | null
    ampere: number | null
    TDS: number | null
    EC: number | null
    userId: number | null
  }

  export type LaporanMinAggregateOutputType = {
    id: number | null
    flowRate: number | null
    volt: number | null
    pH: number | null
    ampere: number | null
    TDS: number | null
    EC: number | null
    laporanStatus: $Enums.StatusApproval | null
    agitatorStatus: $Enums.EquipmentStatus | null
    settleStatus: $Enums.EquipmentStatus | null
    outFilterStatus: $Enums.EquipmentStatus | null
    notes: string | null
    laporanDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    siteName: string | null
    userId: number | null
  }

  export type LaporanMaxAggregateOutputType = {
    id: number | null
    flowRate: number | null
    volt: number | null
    pH: number | null
    ampere: number | null
    TDS: number | null
    EC: number | null
    laporanStatus: $Enums.StatusApproval | null
    agitatorStatus: $Enums.EquipmentStatus | null
    settleStatus: $Enums.EquipmentStatus | null
    outFilterStatus: $Enums.EquipmentStatus | null
    notes: string | null
    laporanDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    siteName: string | null
    userId: number | null
  }

  export type LaporanCountAggregateOutputType = {
    id: number
    fotoSampel: number
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus: number
    agitatorStatus: number
    settleStatus: number
    outFilterStatus: number
    notes: number
    laporanDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    siteName: number
    userId: number
    _all: number
  }


  export type LaporanAvgAggregateInputType = {
    id?: true
    flowRate?: true
    volt?: true
    pH?: true
    ampere?: true
    TDS?: true
    EC?: true
    userId?: true
  }

  export type LaporanSumAggregateInputType = {
    id?: true
    flowRate?: true
    volt?: true
    pH?: true
    ampere?: true
    TDS?: true
    EC?: true
    userId?: true
  }

  export type LaporanMinAggregateInputType = {
    id?: true
    flowRate?: true
    volt?: true
    pH?: true
    ampere?: true
    TDS?: true
    EC?: true
    laporanStatus?: true
    agitatorStatus?: true
    settleStatus?: true
    outFilterStatus?: true
    notes?: true
    laporanDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    siteName?: true
    userId?: true
  }

  export type LaporanMaxAggregateInputType = {
    id?: true
    flowRate?: true
    volt?: true
    pH?: true
    ampere?: true
    TDS?: true
    EC?: true
    laporanStatus?: true
    agitatorStatus?: true
    settleStatus?: true
    outFilterStatus?: true
    notes?: true
    laporanDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    siteName?: true
    userId?: true
  }

  export type LaporanCountAggregateInputType = {
    id?: true
    fotoSampel?: true
    flowRate?: true
    volt?: true
    pH?: true
    ampere?: true
    TDS?: true
    EC?: true
    laporanStatus?: true
    agitatorStatus?: true
    settleStatus?: true
    outFilterStatus?: true
    notes?: true
    laporanDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    siteName?: true
    userId?: true
    _all?: true
  }

  export type LaporanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporan to aggregate.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laporans
    **/
    _count?: true | LaporanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanMaxAggregateInputType
  }

  export type GetLaporanAggregateType<T extends LaporanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan[P]>
      : GetScalarType<T[P], AggregateLaporan[P]>
  }




  export type LaporanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithAggregationInput | LaporanOrderByWithAggregationInput[]
    by: LaporanScalarFieldEnum[] | LaporanScalarFieldEnum
    having?: LaporanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanCountAggregateInputType | true
    _avg?: LaporanAvgAggregateInputType
    _sum?: LaporanSumAggregateInputType
    _min?: LaporanMinAggregateInputType
    _max?: LaporanMaxAggregateInputType
  }

  export type LaporanGroupByOutputType = {
    id: number
    fotoSampel: string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus: $Enums.StatusApproval
    agitatorStatus: $Enums.EquipmentStatus
    settleStatus: $Enums.EquipmentStatus
    outFilterStatus: $Enums.EquipmentStatus
    notes: string
    laporanDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    siteName: string
    userId: number
    _count: LaporanCountAggregateOutputType | null
    _avg: LaporanAvgAggregateOutputType | null
    _sum: LaporanSumAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  type GetLaporanGroupByPayload<T extends LaporanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fotoSampel?: boolean
    flowRate?: boolean
    volt?: boolean
    pH?: boolean
    ampere?: boolean
    TDS?: boolean
    EC?: boolean
    laporanStatus?: boolean
    agitatorStatus?: boolean
    settleStatus?: boolean
    outFilterStatus?: boolean
    notes?: boolean
    laporanDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    siteName?: boolean
    userId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fotoSampel?: boolean
    flowRate?: boolean
    volt?: boolean
    pH?: boolean
    ampere?: boolean
    TDS?: boolean
    EC?: boolean
    laporanStatus?: boolean
    agitatorStatus?: boolean
    settleStatus?: boolean
    outFilterStatus?: boolean
    notes?: boolean
    laporanDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    siteName?: boolean
    userId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fotoSampel?: boolean
    flowRate?: boolean
    volt?: boolean
    pH?: boolean
    ampere?: boolean
    TDS?: boolean
    EC?: boolean
    laporanStatus?: boolean
    agitatorStatus?: boolean
    settleStatus?: boolean
    outFilterStatus?: boolean
    notes?: boolean
    laporanDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    siteName?: boolean
    userId?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectScalar = {
    id?: boolean
    fotoSampel?: boolean
    flowRate?: boolean
    volt?: boolean
    pH?: boolean
    ampere?: boolean
    TDS?: boolean
    EC?: boolean
    laporanStatus?: boolean
    agitatorStatus?: boolean
    settleStatus?: boolean
    outFilterStatus?: boolean
    notes?: boolean
    laporanDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    siteName?: boolean
    userId?: boolean
  }

  export type LaporanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fotoSampel" | "flowRate" | "volt" | "pH" | "ampere" | "TDS" | "EC" | "laporanStatus" | "agitatorStatus" | "settleStatus" | "outFilterStatus" | "notes" | "laporanDate" | "createdAt" | "updatedAt" | "deletedAt" | "siteName" | "userId", ExtArgs["result"]["laporan"]>
  export type LaporanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LaporanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laporan"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fotoSampel: string[]
      flowRate: number
      volt: number
      pH: number
      ampere: number
      TDS: number
      EC: number
      laporanStatus: $Enums.StatusApproval
      agitatorStatus: $Enums.EquipmentStatus
      settleStatus: $Enums.EquipmentStatus
      outFilterStatus: $Enums.EquipmentStatus
      notes: string
      laporanDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      siteName: string
      userId: number
    }, ExtArgs["result"]["laporan"]>
    composites: {}
  }

  type LaporanGetPayload<S extends boolean | null | undefined | LaporanDefaultArgs> = $Result.GetResult<Prisma.$LaporanPayload, S>

  type LaporanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaporanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaporanCountAggregateInputType | true
    }

  export interface LaporanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laporan'], meta: { name: 'Laporan' } }
    /**
     * Find zero or one Laporan that matches the filter.
     * @param {LaporanFindUniqueArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanFindUniqueArgs>(args: SelectSubset<T, LaporanFindUniqueArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Laporan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaporanFindUniqueOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanFindFirstArgs>(args?: SelectSubset<T, LaporanFindFirstArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Laporan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Laporans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporans
     * const laporans = await prisma.laporan.findMany()
     * 
     * // Get first 10 Laporans
     * const laporans = await prisma.laporan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanWithIdOnly = await prisma.laporan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanFindManyArgs>(args?: SelectSubset<T, LaporanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Laporan.
     * @param {LaporanCreateArgs} args - Arguments to create a Laporan.
     * @example
     * // Create one Laporan
     * const Laporan = await prisma.laporan.create({
     *   data: {
     *     // ... data to create a Laporan
     *   }
     * })
     * 
     */
    create<T extends LaporanCreateArgs>(args: SelectSubset<T, LaporanCreateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Laporans.
     * @param {LaporanCreateManyArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanCreateManyArgs>(args?: SelectSubset<T, LaporanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Laporans and returns the data saved in the database.
     * @param {LaporanCreateManyAndReturnArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Laporan.
     * @param {LaporanDeleteArgs} args - Arguments to delete one Laporan.
     * @example
     * // Delete one Laporan
     * const Laporan = await prisma.laporan.delete({
     *   where: {
     *     // ... filter to delete one Laporan
     *   }
     * })
     * 
     */
    delete<T extends LaporanDeleteArgs>(args: SelectSubset<T, LaporanDeleteArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Laporan.
     * @param {LaporanUpdateArgs} args - Arguments to update one Laporan.
     * @example
     * // Update one Laporan
     * const laporan = await prisma.laporan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanUpdateArgs>(args: SelectSubset<T, LaporanUpdateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Laporans.
     * @param {LaporanDeleteManyArgs} args - Arguments to filter Laporans to delete.
     * @example
     * // Delete a few Laporans
     * const { count } = await prisma.laporan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanDeleteManyArgs>(args?: SelectSubset<T, LaporanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanUpdateManyArgs>(args: SelectSubset<T, LaporanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans and returns the data updated in the database.
     * @param {LaporanUpdateManyAndReturnArgs} args - Arguments to update many Laporans.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaporanUpdateManyAndReturnArgs>(args: SelectSubset<T, LaporanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Laporan.
     * @param {LaporanUpsertArgs} args - Arguments to update or create a Laporan.
     * @example
     * // Update or create a Laporan
     * const laporan = await prisma.laporan.upsert({
     *   create: {
     *     // ... data to create a Laporan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanUpsertArgs>(args: SelectSubset<T, LaporanUpsertArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCountArgs} args - Arguments to filter Laporans to count.
     * @example
     * // Count the number of Laporans
     * const count = await prisma.laporan.count({
     *   where: {
     *     // ... the filter for the Laporans we want to count
     *   }
     * })
    **/
    count<T extends LaporanCountArgs>(
      args?: Subset<T, LaporanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaporanAggregateArgs>(args: Subset<T, LaporanAggregateArgs>): Prisma.PrismaPromise<GetLaporanAggregateType<T>>

    /**
     * Group by Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaporanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laporan model
   */
  readonly fields: LaporanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laporan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Laporan model
   */
  interface LaporanFieldRefs {
    readonly id: FieldRef<"Laporan", 'Int'>
    readonly fotoSampel: FieldRef<"Laporan", 'String[]'>
    readonly flowRate: FieldRef<"Laporan", 'Float'>
    readonly volt: FieldRef<"Laporan", 'Float'>
    readonly pH: FieldRef<"Laporan", 'Float'>
    readonly ampere: FieldRef<"Laporan", 'Float'>
    readonly TDS: FieldRef<"Laporan", 'Float'>
    readonly EC: FieldRef<"Laporan", 'Float'>
    readonly laporanStatus: FieldRef<"Laporan", 'StatusApproval'>
    readonly agitatorStatus: FieldRef<"Laporan", 'EquipmentStatus'>
    readonly settleStatus: FieldRef<"Laporan", 'EquipmentStatus'>
    readonly outFilterStatus: FieldRef<"Laporan", 'EquipmentStatus'>
    readonly notes: FieldRef<"Laporan", 'String'>
    readonly laporanDate: FieldRef<"Laporan", 'DateTime'>
    readonly createdAt: FieldRef<"Laporan", 'DateTime'>
    readonly updatedAt: FieldRef<"Laporan", 'DateTime'>
    readonly deletedAt: FieldRef<"Laporan", 'DateTime'>
    readonly siteName: FieldRef<"Laporan", 'String'>
    readonly userId: FieldRef<"Laporan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Laporan findUnique
   */
  export type LaporanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findUniqueOrThrow
   */
  export type LaporanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findFirst
   */
  export type LaporanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findFirstOrThrow
   */
  export type LaporanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findMany
   */
  export type LaporanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporans to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan create
   */
  export type LaporanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to create a Laporan.
     */
    data: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
  }

  /**
   * Laporan createMany
   */
  export type LaporanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan createManyAndReturn
   */
  export type LaporanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan update
   */
  export type LaporanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to update a Laporan.
     */
    data: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
    /**
     * Choose, which Laporan to update.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan updateMany
   */
  export type LaporanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
  }

  /**
   * Laporan updateManyAndReturn
   */
  export type LaporanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan upsert
   */
  export type LaporanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The filter to search for the Laporan to update in case it exists.
     */
    where: LaporanWhereUniqueInput
    /**
     * In case the Laporan found by the `where` argument doesn't exist, create a new Laporan with this data.
     */
    create: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
    /**
     * In case the Laporan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
  }

  /**
   * Laporan delete
   */
  export type LaporanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter which Laporan to delete.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan deleteMany
   */
  export type LaporanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporans to delete
     */
    where?: LaporanWhereInput
    /**
     * Limit how many Laporans to delete.
     */
    limit?: number
  }

  /**
   * Laporan without action
   */
  export type LaporanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Laporan
     */
    omit?: LaporanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
  }


  /**
   * Model Ijin
   */

  export type AggregateIjin = {
    _count: IjinCountAggregateOutputType | null
    _avg: IjinAvgAggregateOutputType | null
    _sum: IjinSumAggregateOutputType | null
    _min: IjinMinAggregateOutputType | null
    _max: IjinMaxAggregateOutputType | null
  }

  export type IjinAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IjinSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IjinMinAggregateOutputType = {
    id: number | null
    ijinDate: Date | null
    ijinStatus: $Enums.StatusApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type IjinMaxAggregateOutputType = {
    id: number | null
    ijinDate: Date | null
    ijinStatus: $Enums.StatusApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type IjinCountAggregateOutputType = {
    id: number
    ijinDate: number
    ijinStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type IjinAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IjinSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IjinMinAggregateInputType = {
    id?: true
    ijinDate?: true
    ijinStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type IjinMaxAggregateInputType = {
    id?: true
    ijinDate?: true
    ijinStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type IjinCountAggregateInputType = {
    id?: true
    ijinDate?: true
    ijinStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type IjinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ijin to aggregate.
     */
    where?: IjinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ijins to fetch.
     */
    orderBy?: IjinOrderByWithRelationInput | IjinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IjinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ijins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ijins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ijins
    **/
    _count?: true | IjinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IjinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IjinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IjinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IjinMaxAggregateInputType
  }

  export type GetIjinAggregateType<T extends IjinAggregateArgs> = {
        [P in keyof T & keyof AggregateIjin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIjin[P]>
      : GetScalarType<T[P], AggregateIjin[P]>
  }




  export type IjinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IjinWhereInput
    orderBy?: IjinOrderByWithAggregationInput | IjinOrderByWithAggregationInput[]
    by: IjinScalarFieldEnum[] | IjinScalarFieldEnum
    having?: IjinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IjinCountAggregateInputType | true
    _avg?: IjinAvgAggregateInputType
    _sum?: IjinSumAggregateInputType
    _min?: IjinMinAggregateInputType
    _max?: IjinMaxAggregateInputType
  }

  export type IjinGroupByOutputType = {
    id: number
    ijinDate: Date
    ijinStatus: $Enums.StatusApproval
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: IjinCountAggregateOutputType | null
    _avg: IjinAvgAggregateOutputType | null
    _sum: IjinSumAggregateOutputType | null
    _min: IjinMinAggregateOutputType | null
    _max: IjinMaxAggregateOutputType | null
  }

  type GetIjinGroupByPayload<T extends IjinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IjinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IjinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IjinGroupByOutputType[P]>
            : GetScalarType<T[P], IjinGroupByOutputType[P]>
        }
      >
    >


  export type IjinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ijinDate?: boolean
    ijinStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ijin"]>

  export type IjinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ijinDate?: boolean
    ijinStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ijin"]>

  export type IjinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ijinDate?: boolean
    ijinStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ijin"]>

  export type IjinSelectScalar = {
    id?: boolean
    ijinDate?: boolean
    ijinStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type IjinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ijinDate" | "ijinStatus" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["ijin"]>
  export type IjinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IjinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IjinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IjinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ijin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ijinDate: Date
      ijinStatus: $Enums.StatusApproval
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["ijin"]>
    composites: {}
  }

  type IjinGetPayload<S extends boolean | null | undefined | IjinDefaultArgs> = $Result.GetResult<Prisma.$IjinPayload, S>

  type IjinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IjinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IjinCountAggregateInputType | true
    }

  export interface IjinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ijin'], meta: { name: 'Ijin' } }
    /**
     * Find zero or one Ijin that matches the filter.
     * @param {IjinFindUniqueArgs} args - Arguments to find a Ijin
     * @example
     * // Get one Ijin
     * const ijin = await prisma.ijin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IjinFindUniqueArgs>(args: SelectSubset<T, IjinFindUniqueArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ijin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IjinFindUniqueOrThrowArgs} args - Arguments to find a Ijin
     * @example
     * // Get one Ijin
     * const ijin = await prisma.ijin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IjinFindUniqueOrThrowArgs>(args: SelectSubset<T, IjinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ijin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinFindFirstArgs} args - Arguments to find a Ijin
     * @example
     * // Get one Ijin
     * const ijin = await prisma.ijin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IjinFindFirstArgs>(args?: SelectSubset<T, IjinFindFirstArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ijin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinFindFirstOrThrowArgs} args - Arguments to find a Ijin
     * @example
     * // Get one Ijin
     * const ijin = await prisma.ijin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IjinFindFirstOrThrowArgs>(args?: SelectSubset<T, IjinFindFirstOrThrowArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ijins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ijins
     * const ijins = await prisma.ijin.findMany()
     * 
     * // Get first 10 Ijins
     * const ijins = await prisma.ijin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ijinWithIdOnly = await prisma.ijin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IjinFindManyArgs>(args?: SelectSubset<T, IjinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ijin.
     * @param {IjinCreateArgs} args - Arguments to create a Ijin.
     * @example
     * // Create one Ijin
     * const Ijin = await prisma.ijin.create({
     *   data: {
     *     // ... data to create a Ijin
     *   }
     * })
     * 
     */
    create<T extends IjinCreateArgs>(args: SelectSubset<T, IjinCreateArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ijins.
     * @param {IjinCreateManyArgs} args - Arguments to create many Ijins.
     * @example
     * // Create many Ijins
     * const ijin = await prisma.ijin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IjinCreateManyArgs>(args?: SelectSubset<T, IjinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ijins and returns the data saved in the database.
     * @param {IjinCreateManyAndReturnArgs} args - Arguments to create many Ijins.
     * @example
     * // Create many Ijins
     * const ijin = await prisma.ijin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ijins and only return the `id`
     * const ijinWithIdOnly = await prisma.ijin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IjinCreateManyAndReturnArgs>(args?: SelectSubset<T, IjinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ijin.
     * @param {IjinDeleteArgs} args - Arguments to delete one Ijin.
     * @example
     * // Delete one Ijin
     * const Ijin = await prisma.ijin.delete({
     *   where: {
     *     // ... filter to delete one Ijin
     *   }
     * })
     * 
     */
    delete<T extends IjinDeleteArgs>(args: SelectSubset<T, IjinDeleteArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ijin.
     * @param {IjinUpdateArgs} args - Arguments to update one Ijin.
     * @example
     * // Update one Ijin
     * const ijin = await prisma.ijin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IjinUpdateArgs>(args: SelectSubset<T, IjinUpdateArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ijins.
     * @param {IjinDeleteManyArgs} args - Arguments to filter Ijins to delete.
     * @example
     * // Delete a few Ijins
     * const { count } = await prisma.ijin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IjinDeleteManyArgs>(args?: SelectSubset<T, IjinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ijins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ijins
     * const ijin = await prisma.ijin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IjinUpdateManyArgs>(args: SelectSubset<T, IjinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ijins and returns the data updated in the database.
     * @param {IjinUpdateManyAndReturnArgs} args - Arguments to update many Ijins.
     * @example
     * // Update many Ijins
     * const ijin = await prisma.ijin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ijins and only return the `id`
     * const ijinWithIdOnly = await prisma.ijin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IjinUpdateManyAndReturnArgs>(args: SelectSubset<T, IjinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ijin.
     * @param {IjinUpsertArgs} args - Arguments to update or create a Ijin.
     * @example
     * // Update or create a Ijin
     * const ijin = await prisma.ijin.upsert({
     *   create: {
     *     // ... data to create a Ijin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ijin we want to update
     *   }
     * })
     */
    upsert<T extends IjinUpsertArgs>(args: SelectSubset<T, IjinUpsertArgs<ExtArgs>>): Prisma__IjinClient<$Result.GetResult<Prisma.$IjinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ijins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinCountArgs} args - Arguments to filter Ijins to count.
     * @example
     * // Count the number of Ijins
     * const count = await prisma.ijin.count({
     *   where: {
     *     // ... the filter for the Ijins we want to count
     *   }
     * })
    **/
    count<T extends IjinCountArgs>(
      args?: Subset<T, IjinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IjinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ijin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IjinAggregateArgs>(args: Subset<T, IjinAggregateArgs>): Prisma.PrismaPromise<GetIjinAggregateType<T>>

    /**
     * Group by Ijin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IjinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IjinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IjinGroupByArgs['orderBy'] }
        : { orderBy?: IjinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IjinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIjinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ijin model
   */
  readonly fields: IjinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ijin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IjinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ijin model
   */
  interface IjinFieldRefs {
    readonly id: FieldRef<"Ijin", 'Int'>
    readonly ijinDate: FieldRef<"Ijin", 'DateTime'>
    readonly ijinStatus: FieldRef<"Ijin", 'StatusApproval'>
    readonly createdAt: FieldRef<"Ijin", 'DateTime'>
    readonly updatedAt: FieldRef<"Ijin", 'DateTime'>
    readonly deletedAt: FieldRef<"Ijin", 'DateTime'>
    readonly userId: FieldRef<"Ijin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ijin findUnique
   */
  export type IjinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * Filter, which Ijin to fetch.
     */
    where: IjinWhereUniqueInput
  }

  /**
   * Ijin findUniqueOrThrow
   */
  export type IjinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * Filter, which Ijin to fetch.
     */
    where: IjinWhereUniqueInput
  }

  /**
   * Ijin findFirst
   */
  export type IjinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * Filter, which Ijin to fetch.
     */
    where?: IjinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ijins to fetch.
     */
    orderBy?: IjinOrderByWithRelationInput | IjinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ijins.
     */
    cursor?: IjinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ijins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ijins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ijins.
     */
    distinct?: IjinScalarFieldEnum | IjinScalarFieldEnum[]
  }

  /**
   * Ijin findFirstOrThrow
   */
  export type IjinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * Filter, which Ijin to fetch.
     */
    where?: IjinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ijins to fetch.
     */
    orderBy?: IjinOrderByWithRelationInput | IjinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ijins.
     */
    cursor?: IjinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ijins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ijins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ijins.
     */
    distinct?: IjinScalarFieldEnum | IjinScalarFieldEnum[]
  }

  /**
   * Ijin findMany
   */
  export type IjinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * Filter, which Ijins to fetch.
     */
    where?: IjinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ijins to fetch.
     */
    orderBy?: IjinOrderByWithRelationInput | IjinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ijins.
     */
    cursor?: IjinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ijins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ijins.
     */
    skip?: number
    distinct?: IjinScalarFieldEnum | IjinScalarFieldEnum[]
  }

  /**
   * Ijin create
   */
  export type IjinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * The data needed to create a Ijin.
     */
    data: XOR<IjinCreateInput, IjinUncheckedCreateInput>
  }

  /**
   * Ijin createMany
   */
  export type IjinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ijins.
     */
    data: IjinCreateManyInput | IjinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ijin createManyAndReturn
   */
  export type IjinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * The data used to create many Ijins.
     */
    data: IjinCreateManyInput | IjinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ijin update
   */
  export type IjinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * The data needed to update a Ijin.
     */
    data: XOR<IjinUpdateInput, IjinUncheckedUpdateInput>
    /**
     * Choose, which Ijin to update.
     */
    where: IjinWhereUniqueInput
  }

  /**
   * Ijin updateMany
   */
  export type IjinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ijins.
     */
    data: XOR<IjinUpdateManyMutationInput, IjinUncheckedUpdateManyInput>
    /**
     * Filter which Ijins to update
     */
    where?: IjinWhereInput
    /**
     * Limit how many Ijins to update.
     */
    limit?: number
  }

  /**
   * Ijin updateManyAndReturn
   */
  export type IjinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * The data used to update Ijins.
     */
    data: XOR<IjinUpdateManyMutationInput, IjinUncheckedUpdateManyInput>
    /**
     * Filter which Ijins to update
     */
    where?: IjinWhereInput
    /**
     * Limit how many Ijins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ijin upsert
   */
  export type IjinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * The filter to search for the Ijin to update in case it exists.
     */
    where: IjinWhereUniqueInput
    /**
     * In case the Ijin found by the `where` argument doesn't exist, create a new Ijin with this data.
     */
    create: XOR<IjinCreateInput, IjinUncheckedCreateInput>
    /**
     * In case the Ijin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IjinUpdateInput, IjinUncheckedUpdateInput>
  }

  /**
   * Ijin delete
   */
  export type IjinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
    /**
     * Filter which Ijin to delete.
     */
    where: IjinWhereUniqueInput
  }

  /**
   * Ijin deleteMany
   */
  export type IjinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ijins to delete
     */
    where?: IjinWhereInput
    /**
     * Limit how many Ijins to delete.
     */
    limit?: number
  }

  /**
   * Ijin without action
   */
  export type IjinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ijin
     */
    select?: IjinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ijin
     */
    omit?: IjinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IjinInclude<ExtArgs> | null
  }


  /**
   * Model Libur
   */

  export type AggregateLibur = {
    _count: LiburCountAggregateOutputType | null
    _avg: LiburAvgAggregateOutputType | null
    _sum: LiburSumAggregateOutputType | null
    _min: LiburMinAggregateOutputType | null
    _max: LiburMaxAggregateOutputType | null
  }

  export type LiburAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LiburSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LiburMinAggregateOutputType = {
    id: number | null
    liburDate: Date | null
    liburStatus: $Enums.StatusApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type LiburMaxAggregateOutputType = {
    id: number | null
    liburDate: Date | null
    liburStatus: $Enums.StatusApproval | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type LiburCountAggregateOutputType = {
    id: number
    liburDate: number
    liburStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type LiburAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LiburSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LiburMinAggregateInputType = {
    id?: true
    liburDate?: true
    liburStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type LiburMaxAggregateInputType = {
    id?: true
    liburDate?: true
    liburStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type LiburCountAggregateInputType = {
    id?: true
    liburDate?: true
    liburStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type LiburAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libur to aggregate.
     */
    where?: LiburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liburs to fetch.
     */
    orderBy?: LiburOrderByWithRelationInput | LiburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LiburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Liburs
    **/
    _count?: true | LiburCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LiburAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LiburSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LiburMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LiburMaxAggregateInputType
  }

  export type GetLiburAggregateType<T extends LiburAggregateArgs> = {
        [P in keyof T & keyof AggregateLibur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibur[P]>
      : GetScalarType<T[P], AggregateLibur[P]>
  }




  export type LiburGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LiburWhereInput
    orderBy?: LiburOrderByWithAggregationInput | LiburOrderByWithAggregationInput[]
    by: LiburScalarFieldEnum[] | LiburScalarFieldEnum
    having?: LiburScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LiburCountAggregateInputType | true
    _avg?: LiburAvgAggregateInputType
    _sum?: LiburSumAggregateInputType
    _min?: LiburMinAggregateInputType
    _max?: LiburMaxAggregateInputType
  }

  export type LiburGroupByOutputType = {
    id: number
    liburDate: Date
    liburStatus: $Enums.StatusApproval
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: LiburCountAggregateOutputType | null
    _avg: LiburAvgAggregateOutputType | null
    _sum: LiburSumAggregateOutputType | null
    _min: LiburMinAggregateOutputType | null
    _max: LiburMaxAggregateOutputType | null
  }

  type GetLiburGroupByPayload<T extends LiburGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LiburGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LiburGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LiburGroupByOutputType[P]>
            : GetScalarType<T[P], LiburGroupByOutputType[P]>
        }
      >
    >


  export type LiburSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liburDate?: boolean
    liburStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libur"]>

  export type LiburSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liburDate?: boolean
    liburStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libur"]>

  export type LiburSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    liburDate?: boolean
    liburStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libur"]>

  export type LiburSelectScalar = {
    id?: boolean
    liburDate?: boolean
    liburStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type LiburOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "liburDate" | "liburStatus" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["libur"]>
  export type LiburInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LiburIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LiburIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LiburPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Libur"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      liburDate: Date
      liburStatus: $Enums.StatusApproval
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["libur"]>
    composites: {}
  }

  type LiburGetPayload<S extends boolean | null | undefined | LiburDefaultArgs> = $Result.GetResult<Prisma.$LiburPayload, S>

  type LiburCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LiburFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LiburCountAggregateInputType | true
    }

  export interface LiburDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Libur'], meta: { name: 'Libur' } }
    /**
     * Find zero or one Libur that matches the filter.
     * @param {LiburFindUniqueArgs} args - Arguments to find a Libur
     * @example
     * // Get one Libur
     * const libur = await prisma.libur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LiburFindUniqueArgs>(args: SelectSubset<T, LiburFindUniqueArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LiburFindUniqueOrThrowArgs} args - Arguments to find a Libur
     * @example
     * // Get one Libur
     * const libur = await prisma.libur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LiburFindUniqueOrThrowArgs>(args: SelectSubset<T, LiburFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburFindFirstArgs} args - Arguments to find a Libur
     * @example
     * // Get one Libur
     * const libur = await prisma.libur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LiburFindFirstArgs>(args?: SelectSubset<T, LiburFindFirstArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburFindFirstOrThrowArgs} args - Arguments to find a Libur
     * @example
     * // Get one Libur
     * const libur = await prisma.libur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LiburFindFirstOrThrowArgs>(args?: SelectSubset<T, LiburFindFirstOrThrowArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Liburs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Liburs
     * const liburs = await prisma.libur.findMany()
     * 
     * // Get first 10 Liburs
     * const liburs = await prisma.libur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const liburWithIdOnly = await prisma.libur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LiburFindManyArgs>(args?: SelectSubset<T, LiburFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libur.
     * @param {LiburCreateArgs} args - Arguments to create a Libur.
     * @example
     * // Create one Libur
     * const Libur = await prisma.libur.create({
     *   data: {
     *     // ... data to create a Libur
     *   }
     * })
     * 
     */
    create<T extends LiburCreateArgs>(args: SelectSubset<T, LiburCreateArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Liburs.
     * @param {LiburCreateManyArgs} args - Arguments to create many Liburs.
     * @example
     * // Create many Liburs
     * const libur = await prisma.libur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LiburCreateManyArgs>(args?: SelectSubset<T, LiburCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Liburs and returns the data saved in the database.
     * @param {LiburCreateManyAndReturnArgs} args - Arguments to create many Liburs.
     * @example
     * // Create many Liburs
     * const libur = await prisma.libur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Liburs and only return the `id`
     * const liburWithIdOnly = await prisma.libur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LiburCreateManyAndReturnArgs>(args?: SelectSubset<T, LiburCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libur.
     * @param {LiburDeleteArgs} args - Arguments to delete one Libur.
     * @example
     * // Delete one Libur
     * const Libur = await prisma.libur.delete({
     *   where: {
     *     // ... filter to delete one Libur
     *   }
     * })
     * 
     */
    delete<T extends LiburDeleteArgs>(args: SelectSubset<T, LiburDeleteArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libur.
     * @param {LiburUpdateArgs} args - Arguments to update one Libur.
     * @example
     * // Update one Libur
     * const libur = await prisma.libur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LiburUpdateArgs>(args: SelectSubset<T, LiburUpdateArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Liburs.
     * @param {LiburDeleteManyArgs} args - Arguments to filter Liburs to delete.
     * @example
     * // Delete a few Liburs
     * const { count } = await prisma.libur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LiburDeleteManyArgs>(args?: SelectSubset<T, LiburDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Liburs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Liburs
     * const libur = await prisma.libur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LiburUpdateManyArgs>(args: SelectSubset<T, LiburUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Liburs and returns the data updated in the database.
     * @param {LiburUpdateManyAndReturnArgs} args - Arguments to update many Liburs.
     * @example
     * // Update many Liburs
     * const libur = await prisma.libur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Liburs and only return the `id`
     * const liburWithIdOnly = await prisma.libur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LiburUpdateManyAndReturnArgs>(args: SelectSubset<T, LiburUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libur.
     * @param {LiburUpsertArgs} args - Arguments to update or create a Libur.
     * @example
     * // Update or create a Libur
     * const libur = await prisma.libur.upsert({
     *   create: {
     *     // ... data to create a Libur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libur we want to update
     *   }
     * })
     */
    upsert<T extends LiburUpsertArgs>(args: SelectSubset<T, LiburUpsertArgs<ExtArgs>>): Prisma__LiburClient<$Result.GetResult<Prisma.$LiburPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Liburs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburCountArgs} args - Arguments to filter Liburs to count.
     * @example
     * // Count the number of Liburs
     * const count = await prisma.libur.count({
     *   where: {
     *     // ... the filter for the Liburs we want to count
     *   }
     * })
    **/
    count<T extends LiburCountArgs>(
      args?: Subset<T, LiburCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LiburCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LiburAggregateArgs>(args: Subset<T, LiburAggregateArgs>): Prisma.PrismaPromise<GetLiburAggregateType<T>>

    /**
     * Group by Libur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiburGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LiburGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LiburGroupByArgs['orderBy'] }
        : { orderBy?: LiburGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LiburGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiburGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Libur model
   */
  readonly fields: LiburFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LiburClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Libur model
   */
  interface LiburFieldRefs {
    readonly id: FieldRef<"Libur", 'Int'>
    readonly liburDate: FieldRef<"Libur", 'DateTime'>
    readonly liburStatus: FieldRef<"Libur", 'StatusApproval'>
    readonly createdAt: FieldRef<"Libur", 'DateTime'>
    readonly updatedAt: FieldRef<"Libur", 'DateTime'>
    readonly deletedAt: FieldRef<"Libur", 'DateTime'>
    readonly userId: FieldRef<"Libur", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Libur findUnique
   */
  export type LiburFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * Filter, which Libur to fetch.
     */
    where: LiburWhereUniqueInput
  }

  /**
   * Libur findUniqueOrThrow
   */
  export type LiburFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * Filter, which Libur to fetch.
     */
    where: LiburWhereUniqueInput
  }

  /**
   * Libur findFirst
   */
  export type LiburFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * Filter, which Libur to fetch.
     */
    where?: LiburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liburs to fetch.
     */
    orderBy?: LiburOrderByWithRelationInput | LiburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Liburs.
     */
    cursor?: LiburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Liburs.
     */
    distinct?: LiburScalarFieldEnum | LiburScalarFieldEnum[]
  }

  /**
   * Libur findFirstOrThrow
   */
  export type LiburFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * Filter, which Libur to fetch.
     */
    where?: LiburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liburs to fetch.
     */
    orderBy?: LiburOrderByWithRelationInput | LiburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Liburs.
     */
    cursor?: LiburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liburs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Liburs.
     */
    distinct?: LiburScalarFieldEnum | LiburScalarFieldEnum[]
  }

  /**
   * Libur findMany
   */
  export type LiburFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * Filter, which Liburs to fetch.
     */
    where?: LiburWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Liburs to fetch.
     */
    orderBy?: LiburOrderByWithRelationInput | LiburOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Liburs.
     */
    cursor?: LiburWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Liburs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Liburs.
     */
    skip?: number
    distinct?: LiburScalarFieldEnum | LiburScalarFieldEnum[]
  }

  /**
   * Libur create
   */
  export type LiburCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * The data needed to create a Libur.
     */
    data: XOR<LiburCreateInput, LiburUncheckedCreateInput>
  }

  /**
   * Libur createMany
   */
  export type LiburCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Liburs.
     */
    data: LiburCreateManyInput | LiburCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libur createManyAndReturn
   */
  export type LiburCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * The data used to create many Liburs.
     */
    data: LiburCreateManyInput | LiburCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Libur update
   */
  export type LiburUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * The data needed to update a Libur.
     */
    data: XOR<LiburUpdateInput, LiburUncheckedUpdateInput>
    /**
     * Choose, which Libur to update.
     */
    where: LiburWhereUniqueInput
  }

  /**
   * Libur updateMany
   */
  export type LiburUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Liburs.
     */
    data: XOR<LiburUpdateManyMutationInput, LiburUncheckedUpdateManyInput>
    /**
     * Filter which Liburs to update
     */
    where?: LiburWhereInput
    /**
     * Limit how many Liburs to update.
     */
    limit?: number
  }

  /**
   * Libur updateManyAndReturn
   */
  export type LiburUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * The data used to update Liburs.
     */
    data: XOR<LiburUpdateManyMutationInput, LiburUncheckedUpdateManyInput>
    /**
     * Filter which Liburs to update
     */
    where?: LiburWhereInput
    /**
     * Limit how many Liburs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Libur upsert
   */
  export type LiburUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * The filter to search for the Libur to update in case it exists.
     */
    where: LiburWhereUniqueInput
    /**
     * In case the Libur found by the `where` argument doesn't exist, create a new Libur with this data.
     */
    create: XOR<LiburCreateInput, LiburUncheckedCreateInput>
    /**
     * In case the Libur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LiburUpdateInput, LiburUncheckedUpdateInput>
  }

  /**
   * Libur delete
   */
  export type LiburDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
    /**
     * Filter which Libur to delete.
     */
    where: LiburWhereUniqueInput
  }

  /**
   * Libur deleteMany
   */
  export type LiburDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Liburs to delete
     */
    where?: LiburWhereInput
    /**
     * Limit how many Liburs to delete.
     */
    limit?: number
  }

  /**
   * Libur without action
   */
  export type LiburDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libur
     */
    select?: LiburSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libur
     */
    omit?: LiburOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LiburInclude<ExtArgs> | null
  }


  /**
   * Model Help
   */

  export type AggregateHelp = {
    _count: HelpCountAggregateOutputType | null
    _avg: HelpAvgAggregateOutputType | null
    _sum: HelpSumAggregateOutputType | null
    _min: HelpMinAggregateOutputType | null
    _max: HelpMaxAggregateOutputType | null
  }

  export type HelpAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type HelpSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type HelpMinAggregateOutputType = {
    id: number | null
    deskripsi: string | null
    gambar: string | null
    helpDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type HelpMaxAggregateOutputType = {
    id: number | null
    deskripsi: string | null
    gambar: string | null
    helpDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type HelpCountAggregateOutputType = {
    id: number
    deskripsi: number
    gambar: number
    helpDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type HelpAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type HelpSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type HelpMinAggregateInputType = {
    id?: true
    deskripsi?: true
    gambar?: true
    helpDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type HelpMaxAggregateInputType = {
    id?: true
    deskripsi?: true
    gambar?: true
    helpDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type HelpCountAggregateInputType = {
    id?: true
    deskripsi?: true
    gambar?: true
    helpDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type HelpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Help to aggregate.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Helps
    **/
    _count?: true | HelpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HelpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HelpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelpMaxAggregateInputType
  }

  export type GetHelpAggregateType<T extends HelpAggregateArgs> = {
        [P in keyof T & keyof AggregateHelp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelp[P]>
      : GetScalarType<T[P], AggregateHelp[P]>
  }




  export type HelpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpWhereInput
    orderBy?: HelpOrderByWithAggregationInput | HelpOrderByWithAggregationInput[]
    by: HelpScalarFieldEnum[] | HelpScalarFieldEnum
    having?: HelpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelpCountAggregateInputType | true
    _avg?: HelpAvgAggregateInputType
    _sum?: HelpSumAggregateInputType
    _min?: HelpMinAggregateInputType
    _max?: HelpMaxAggregateInputType
  }

  export type HelpGroupByOutputType = {
    id: number
    deskripsi: string
    gambar: string | null
    helpDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: HelpCountAggregateOutputType | null
    _avg: HelpAvgAggregateOutputType | null
    _sum: HelpSumAggregateOutputType | null
    _min: HelpMinAggregateOutputType | null
    _max: HelpMaxAggregateOutputType | null
  }

  type GetHelpGroupByPayload<T extends HelpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelpGroupByOutputType[P]>
            : GetScalarType<T[P], HelpGroupByOutputType[P]>
        }
      >
    >


  export type HelpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    helpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["help"]>

  export type HelpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    helpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["help"]>

  export type HelpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    helpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["help"]>

  export type HelpSelectScalar = {
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    helpDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type HelpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deskripsi" | "gambar" | "helpDate" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["help"]>
  export type HelpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HelpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HelpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HelpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Help"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deskripsi: string
      gambar: string | null
      helpDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["help"]>
    composites: {}
  }

  type HelpGetPayload<S extends boolean | null | undefined | HelpDefaultArgs> = $Result.GetResult<Prisma.$HelpPayload, S>

  type HelpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HelpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HelpCountAggregateInputType | true
    }

  export interface HelpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Help'], meta: { name: 'Help' } }
    /**
     * Find zero or one Help that matches the filter.
     * @param {HelpFindUniqueArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HelpFindUniqueArgs>(args: SelectSubset<T, HelpFindUniqueArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Help that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HelpFindUniqueOrThrowArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HelpFindUniqueOrThrowArgs>(args: SelectSubset<T, HelpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Help that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpFindFirstArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HelpFindFirstArgs>(args?: SelectSubset<T, HelpFindFirstArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Help that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpFindFirstOrThrowArgs} args - Arguments to find a Help
     * @example
     * // Get one Help
     * const help = await prisma.help.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HelpFindFirstOrThrowArgs>(args?: SelectSubset<T, HelpFindFirstOrThrowArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Helps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Helps
     * const helps = await prisma.help.findMany()
     * 
     * // Get first 10 Helps
     * const helps = await prisma.help.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helpWithIdOnly = await prisma.help.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HelpFindManyArgs>(args?: SelectSubset<T, HelpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Help.
     * @param {HelpCreateArgs} args - Arguments to create a Help.
     * @example
     * // Create one Help
     * const Help = await prisma.help.create({
     *   data: {
     *     // ... data to create a Help
     *   }
     * })
     * 
     */
    create<T extends HelpCreateArgs>(args: SelectSubset<T, HelpCreateArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Helps.
     * @param {HelpCreateManyArgs} args - Arguments to create many Helps.
     * @example
     * // Create many Helps
     * const help = await prisma.help.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HelpCreateManyArgs>(args?: SelectSubset<T, HelpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Helps and returns the data saved in the database.
     * @param {HelpCreateManyAndReturnArgs} args - Arguments to create many Helps.
     * @example
     * // Create many Helps
     * const help = await prisma.help.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Helps and only return the `id`
     * const helpWithIdOnly = await prisma.help.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HelpCreateManyAndReturnArgs>(args?: SelectSubset<T, HelpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Help.
     * @param {HelpDeleteArgs} args - Arguments to delete one Help.
     * @example
     * // Delete one Help
     * const Help = await prisma.help.delete({
     *   where: {
     *     // ... filter to delete one Help
     *   }
     * })
     * 
     */
    delete<T extends HelpDeleteArgs>(args: SelectSubset<T, HelpDeleteArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Help.
     * @param {HelpUpdateArgs} args - Arguments to update one Help.
     * @example
     * // Update one Help
     * const help = await prisma.help.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HelpUpdateArgs>(args: SelectSubset<T, HelpUpdateArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Helps.
     * @param {HelpDeleteManyArgs} args - Arguments to filter Helps to delete.
     * @example
     * // Delete a few Helps
     * const { count } = await prisma.help.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HelpDeleteManyArgs>(args?: SelectSubset<T, HelpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Helps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Helps
     * const help = await prisma.help.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HelpUpdateManyArgs>(args: SelectSubset<T, HelpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Helps and returns the data updated in the database.
     * @param {HelpUpdateManyAndReturnArgs} args - Arguments to update many Helps.
     * @example
     * // Update many Helps
     * const help = await prisma.help.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Helps and only return the `id`
     * const helpWithIdOnly = await prisma.help.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HelpUpdateManyAndReturnArgs>(args: SelectSubset<T, HelpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Help.
     * @param {HelpUpsertArgs} args - Arguments to update or create a Help.
     * @example
     * // Update or create a Help
     * const help = await prisma.help.upsert({
     *   create: {
     *     // ... data to create a Help
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Help we want to update
     *   }
     * })
     */
    upsert<T extends HelpUpsertArgs>(args: SelectSubset<T, HelpUpsertArgs<ExtArgs>>): Prisma__HelpClient<$Result.GetResult<Prisma.$HelpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Helps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpCountArgs} args - Arguments to filter Helps to count.
     * @example
     * // Count the number of Helps
     * const count = await prisma.help.count({
     *   where: {
     *     // ... the filter for the Helps we want to count
     *   }
     * })
    **/
    count<T extends HelpCountArgs>(
      args?: Subset<T, HelpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Help.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HelpAggregateArgs>(args: Subset<T, HelpAggregateArgs>): Prisma.PrismaPromise<GetHelpAggregateType<T>>

    /**
     * Group by Help.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HelpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HelpGroupByArgs['orderBy'] }
        : { orderBy?: HelpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HelpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Help model
   */
  readonly fields: HelpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Help.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HelpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Help model
   */
  interface HelpFieldRefs {
    readonly id: FieldRef<"Help", 'Int'>
    readonly deskripsi: FieldRef<"Help", 'String'>
    readonly gambar: FieldRef<"Help", 'String'>
    readonly helpDate: FieldRef<"Help", 'DateTime'>
    readonly createdAt: FieldRef<"Help", 'DateTime'>
    readonly updatedAt: FieldRef<"Help", 'DateTime'>
    readonly deletedAt: FieldRef<"Help", 'DateTime'>
    readonly userId: FieldRef<"Help", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Help findUnique
   */
  export type HelpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help findUniqueOrThrow
   */
  export type HelpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help findFirst
   */
  export type HelpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helps.
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helps.
     */
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * Help findFirstOrThrow
   */
  export type HelpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * Filter, which Help to fetch.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Helps.
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Helps.
     */
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * Help findMany
   */
  export type HelpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * Filter, which Helps to fetch.
     */
    where?: HelpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Helps to fetch.
     */
    orderBy?: HelpOrderByWithRelationInput | HelpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Helps.
     */
    cursor?: HelpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Helps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Helps.
     */
    skip?: number
    distinct?: HelpScalarFieldEnum | HelpScalarFieldEnum[]
  }

  /**
   * Help create
   */
  export type HelpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * The data needed to create a Help.
     */
    data: XOR<HelpCreateInput, HelpUncheckedCreateInput>
  }

  /**
   * Help createMany
   */
  export type HelpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Helps.
     */
    data: HelpCreateManyInput | HelpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Help createManyAndReturn
   */
  export type HelpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * The data used to create many Helps.
     */
    data: HelpCreateManyInput | HelpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Help update
   */
  export type HelpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * The data needed to update a Help.
     */
    data: XOR<HelpUpdateInput, HelpUncheckedUpdateInput>
    /**
     * Choose, which Help to update.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help updateMany
   */
  export type HelpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Helps.
     */
    data: XOR<HelpUpdateManyMutationInput, HelpUncheckedUpdateManyInput>
    /**
     * Filter which Helps to update
     */
    where?: HelpWhereInput
    /**
     * Limit how many Helps to update.
     */
    limit?: number
  }

  /**
   * Help updateManyAndReturn
   */
  export type HelpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * The data used to update Helps.
     */
    data: XOR<HelpUpdateManyMutationInput, HelpUncheckedUpdateManyInput>
    /**
     * Filter which Helps to update
     */
    where?: HelpWhereInput
    /**
     * Limit how many Helps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Help upsert
   */
  export type HelpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * The filter to search for the Help to update in case it exists.
     */
    where: HelpWhereUniqueInput
    /**
     * In case the Help found by the `where` argument doesn't exist, create a new Help with this data.
     */
    create: XOR<HelpCreateInput, HelpUncheckedCreateInput>
    /**
     * In case the Help was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HelpUpdateInput, HelpUncheckedUpdateInput>
  }

  /**
   * Help delete
   */
  export type HelpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
    /**
     * Filter which Help to delete.
     */
    where: HelpWhereUniqueInput
  }

  /**
   * Help deleteMany
   */
  export type HelpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Helps to delete
     */
    where?: HelpWhereInput
    /**
     * Limit how many Helps to delete.
     */
    limit?: number
  }

  /**
   * Help without action
   */
  export type HelpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Help
     */
    select?: HelpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Help
     */
    omit?: HelpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    deskripsi: string | null
    gambar: string | null
    ticketDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    deskripsi: string | null
    gambar: string | null
    ticketDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    userId: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    deskripsi: number
    gambar: number
    ticketDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    userId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    deskripsi?: true
    gambar?: true
    ticketDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    deskripsi?: true
    gambar?: true
    ticketDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    deskripsi?: true
    gambar?: true
    ticketDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    userId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    deskripsi: string
    gambar: string | null
    ticketDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    userId: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    ticketDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    ticketDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    ticketDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    deskripsi?: boolean
    gambar?: boolean
    ticketDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    userId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deskripsi" | "gambar" | "ticketDate" | "createdAt" | "updatedAt" | "deletedAt" | "userId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deskripsi: string
      gambar: string | null
      ticketDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      userId: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly deskripsi: FieldRef<"Ticket", 'String'>
    readonly gambar: FieldRef<"Ticket", 'String'>
    readonly ticketDate: FieldRef<"Ticket", 'DateTime'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly deletedAt: FieldRef<"Ticket", 'DateTime'>
    readonly userId: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    roleId: 'roleId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const JadwalShiftScalarFieldEnum: {
    id: 'id',
    shiftDate: 'shiftDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId',
    siteId: 'siteId'
  };

  export type JadwalShiftScalarFieldEnum = (typeof JadwalShiftScalarFieldEnum)[keyof typeof JadwalShiftScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    addressId: 'addressId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const SiteAddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    province: 'province',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type SiteAddressScalarFieldEnum = (typeof SiteAddressScalarFieldEnum)[keyof typeof SiteAddressScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    birthDate: 'birthDate',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const UserAddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    province: 'province',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    profileId: 'profileId'
  };

  export type UserAddressScalarFieldEnum = (typeof UserAddressScalarFieldEnum)[keyof typeof UserAddressScalarFieldEnum]


  export const PresensiScalarFieldEnum: {
    id: 'id',
    presensiDate: 'presensiDate',
    latitude: 'latitude',
    longitude: 'longitude',
    fotoDiri: 'fotoDiri',
    statusPresensi: 'statusPresensi',
    statusApproval: 'statusApproval',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type PresensiScalarFieldEnum = (typeof PresensiScalarFieldEnum)[keyof typeof PresensiScalarFieldEnum]


  export const LaporanScalarFieldEnum: {
    id: 'id',
    fotoSampel: 'fotoSampel',
    flowRate: 'flowRate',
    volt: 'volt',
    pH: 'pH',
    ampere: 'ampere',
    TDS: 'TDS',
    EC: 'EC',
    laporanStatus: 'laporanStatus',
    agitatorStatus: 'agitatorStatus',
    settleStatus: 'settleStatus',
    outFilterStatus: 'outFilterStatus',
    notes: 'notes',
    laporanDate: 'laporanDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    siteName: 'siteName',
    userId: 'userId'
  };

  export type LaporanScalarFieldEnum = (typeof LaporanScalarFieldEnum)[keyof typeof LaporanScalarFieldEnum]


  export const IjinScalarFieldEnum: {
    id: 'id',
    ijinDate: 'ijinDate',
    ijinStatus: 'ijinStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type IjinScalarFieldEnum = (typeof IjinScalarFieldEnum)[keyof typeof IjinScalarFieldEnum]


  export const LiburScalarFieldEnum: {
    id: 'id',
    liburDate: 'liburDate',
    liburStatus: 'liburStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type LiburScalarFieldEnum = (typeof LiburScalarFieldEnum)[keyof typeof LiburScalarFieldEnum]


  export const HelpScalarFieldEnum: {
    id: 'id',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    helpDate: 'helpDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type HelpScalarFieldEnum = (typeof HelpScalarFieldEnum)[keyof typeof HelpScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    deskripsi: 'deskripsi',
    gambar: 'gambar',
    ticketDate: 'ticketDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    userId: 'userId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'RoleName[]'
   */
  export type ListEnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName[]'>
    


  /**
   * Reference to a field of type 'siteStatus'
   */
  export type EnumsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'siteStatus'>
    


  /**
   * Reference to a field of type 'siteStatus[]'
   */
  export type ListEnumsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'siteStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusPresensi'
   */
  export type EnumStatusPresensiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPresensi'>
    


  /**
   * Reference to a field of type 'StatusPresensi[]'
   */
  export type ListEnumStatusPresensiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPresensi[]'>
    


  /**
   * Reference to a field of type 'StatusApproval'
   */
  export type EnumStatusApprovalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusApproval'>
    


  /**
   * Reference to a field of type 'StatusApproval[]'
   */
  export type ListEnumStatusApprovalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusApproval[]'>
    


  /**
   * Reference to a field of type 'EquipmentStatus'
   */
  export type EnumEquipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentStatus'>
    


  /**
   * Reference to a field of type 'EquipmentStatus[]'
   */
  export type ListEnumEquipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EquipmentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    sites?: SiteListRelationFilter
    shift?: JadwalShiftListRelationFilter
    presensi?: PresensiListRelationFilter
    laporan?: LaporanListRelationFilter
    ijin?: IjinListRelationFilter
    libur?: LiburListRelationFilter
    help?: HelpListRelationFilter
    ticket?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    profile?: ProfileOrderByWithRelationInput
    sites?: SiteOrderByRelationAggregateInput
    shift?: JadwalShiftOrderByRelationAggregateInput
    presensi?: PresensiOrderByRelationAggregateInput
    laporan?: LaporanOrderByRelationAggregateInput
    ijin?: IjinOrderByRelationAggregateInput
    libur?: LiburOrderByRelationAggregateInput
    help?: HelpOrderByRelationAggregateInput
    ticket?: TicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: IntFilter<"User"> | number
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    sites?: SiteListRelationFilter
    shift?: JadwalShiftListRelationFilter
    presensi?: PresensiListRelationFilter
    laporan?: LaporanListRelationFilter
    ijin?: IjinListRelationFilter
    libur?: LiburListRelationFilter
    help?: HelpListRelationFilter
    ticket?: TicketListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    roleId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type JadwalShiftWhereInput = {
    AND?: JadwalShiftWhereInput | JadwalShiftWhereInput[]
    OR?: JadwalShiftWhereInput[]
    NOT?: JadwalShiftWhereInput | JadwalShiftWhereInput[]
    id?: IntFilter<"JadwalShift"> | number
    shiftDate?: DateTimeFilter<"JadwalShift"> | Date | string
    createdAt?: DateTimeFilter<"JadwalShift"> | Date | string
    updatedAt?: DateTimeFilter<"JadwalShift"> | Date | string
    deletedAt?: DateTimeNullableFilter<"JadwalShift"> | Date | string | null
    userId?: IntFilter<"JadwalShift"> | number
    siteId?: IntFilter<"JadwalShift"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }

  export type JadwalShiftOrderByWithRelationInput = {
    id?: SortOrder
    shiftDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    user?: UserOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
  }

  export type JadwalShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JadwalShiftWhereInput | JadwalShiftWhereInput[]
    OR?: JadwalShiftWhereInput[]
    NOT?: JadwalShiftWhereInput | JadwalShiftWhereInput[]
    shiftDate?: DateTimeFilter<"JadwalShift"> | Date | string
    createdAt?: DateTimeFilter<"JadwalShift"> | Date | string
    updatedAt?: DateTimeFilter<"JadwalShift"> | Date | string
    deletedAt?: DateTimeNullableFilter<"JadwalShift"> | Date | string | null
    userId?: IntFilter<"JadwalShift"> | number
    siteId?: IntFilter<"JadwalShift"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
  }, "id">

  export type JadwalShiftOrderByWithAggregationInput = {
    id?: SortOrder
    shiftDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    siteId?: SortOrder
    _count?: JadwalShiftCountOrderByAggregateInput
    _avg?: JadwalShiftAvgOrderByAggregateInput
    _max?: JadwalShiftMaxOrderByAggregateInput
    _min?: JadwalShiftMinOrderByAggregateInput
    _sum?: JadwalShiftSumOrderByAggregateInput
  }

  export type JadwalShiftScalarWhereWithAggregatesInput = {
    AND?: JadwalShiftScalarWhereWithAggregatesInput | JadwalShiftScalarWhereWithAggregatesInput[]
    OR?: JadwalShiftScalarWhereWithAggregatesInput[]
    NOT?: JadwalShiftScalarWhereWithAggregatesInput | JadwalShiftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JadwalShift"> | number
    shiftDate?: DateTimeWithAggregatesFilter<"JadwalShift"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"JadwalShift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JadwalShift"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"JadwalShift"> | Date | string | null
    userId?: IntWithAggregatesFilter<"JadwalShift"> | number
    siteId?: IntWithAggregatesFilter<"JadwalShift"> | number
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    image?: StringNullableFilter<"Site"> | string | null
    status?: EnumsiteStatusFilter<"Site"> | $Enums.siteStatus
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    addressId?: IntFilter<"Site"> | number
    address?: XOR<SiteAddressScalarRelationFilter, SiteAddressWhereInput>
    users?: UserListRelationFilter
    report?: LaporanListRelationFilter
    shift?: JadwalShiftListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    addressId?: SortOrder
    address?: SiteAddressOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    report?: LaporanOrderByRelationAggregateInput
    shift?: JadwalShiftOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    addressId?: number
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    image?: StringNullableFilter<"Site"> | string | null
    status?: EnumsiteStatusFilter<"Site"> | $Enums.siteStatus
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    address?: XOR<SiteAddressScalarRelationFilter, SiteAddressWhereInput>
    users?: UserListRelationFilter
    report?: LaporanListRelationFilter
    shift?: JadwalShiftListRelationFilter
  }, "id" | "name" | "addressId">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    addressId?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Site"> | number
    name?: StringWithAggregatesFilter<"Site"> | string
    image?: StringNullableWithAggregatesFilter<"Site"> | string | null
    status?: EnumsiteStatusWithAggregatesFilter<"Site"> | $Enums.siteStatus
    createdAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Site"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Site"> | Date | string | null
    addressId?: IntWithAggregatesFilter<"Site"> | number
  }

  export type SiteAddressWhereInput = {
    AND?: SiteAddressWhereInput | SiteAddressWhereInput[]
    OR?: SiteAddressWhereInput[]
    NOT?: SiteAddressWhereInput | SiteAddressWhereInput[]
    id?: IntFilter<"SiteAddress"> | number
    address?: StringFilter<"SiteAddress"> | string
    city?: StringFilter<"SiteAddress"> | string
    province?: StringFilter<"SiteAddress"> | string
    latitude?: FloatFilter<"SiteAddress"> | number
    longitude?: FloatFilter<"SiteAddress"> | number
    createdAt?: DateTimeFilter<"SiteAddress"> | Date | string
    updatedAt?: DateTimeFilter<"SiteAddress"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SiteAddress"> | Date | string | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }

  export type SiteAddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    site?: SiteOrderByWithRelationInput
  }

  export type SiteAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteAddressWhereInput | SiteAddressWhereInput[]
    OR?: SiteAddressWhereInput[]
    NOT?: SiteAddressWhereInput | SiteAddressWhereInput[]
    address?: StringFilter<"SiteAddress"> | string
    city?: StringFilter<"SiteAddress"> | string
    province?: StringFilter<"SiteAddress"> | string
    latitude?: FloatFilter<"SiteAddress"> | number
    longitude?: FloatFilter<"SiteAddress"> | number
    createdAt?: DateTimeFilter<"SiteAddress"> | Date | string
    updatedAt?: DateTimeFilter<"SiteAddress"> | Date | string
    deletedAt?: DateTimeNullableFilter<"SiteAddress"> | Date | string | null
    site?: XOR<SiteNullableScalarRelationFilter, SiteWhereInput> | null
  }, "id">

  export type SiteAddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SiteAddressCountOrderByAggregateInput
    _avg?: SiteAddressAvgOrderByAggregateInput
    _max?: SiteAddressMaxOrderByAggregateInput
    _min?: SiteAddressMinOrderByAggregateInput
    _sum?: SiteAddressSumOrderByAggregateInput
  }

  export type SiteAddressScalarWhereWithAggregatesInput = {
    AND?: SiteAddressScalarWhereWithAggregatesInput | SiteAddressScalarWhereWithAggregatesInput[]
    OR?: SiteAddressScalarWhereWithAggregatesInput[]
    NOT?: SiteAddressScalarWhereWithAggregatesInput | SiteAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteAddress"> | number
    address?: StringWithAggregatesFilter<"SiteAddress"> | string
    city?: StringWithAggregatesFilter<"SiteAddress"> | string
    province?: StringWithAggregatesFilter<"SiteAddress"> | string
    latitude?: FloatWithAggregatesFilter<"SiteAddress"> | number
    longitude?: FloatWithAggregatesFilter<"SiteAddress"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SiteAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteAddress"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"SiteAddress"> | Date | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    birthDate?: DateTimeFilter<"Profile"> | Date | string
    image?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<UserAddressNullableScalarRelationFilter, UserAddressWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    birthDate?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    address?: UserAddressOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    birthDate?: DateTimeFilter<"Profile"> | Date | string
    image?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Profile"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    address?: XOR<UserAddressNullableScalarRelationFilter, UserAddressWhereInput> | null
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    birthDate?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    birthDate?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type UserAddressWhereInput = {
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    id?: IntFilter<"UserAddress"> | number
    address?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserAddress"> | Date | string | null
    profileId?: IntFilter<"UserAddress"> | number
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type UserAddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profileId?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    profileId?: number
    AND?: UserAddressWhereInput | UserAddressWhereInput[]
    OR?: UserAddressWhereInput[]
    NOT?: UserAddressWhereInput | UserAddressWhereInput[]
    address?: StringFilter<"UserAddress"> | string
    city?: StringFilter<"UserAddress"> | string
    province?: StringFilter<"UserAddress"> | string
    createdAt?: DateTimeFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAddress"> | Date | string
    deletedAt?: DateTimeNullableFilter<"UserAddress"> | Date | string | null
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "profileId">

  export type UserAddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    profileId?: SortOrder
    _count?: UserAddressCountOrderByAggregateInput
    _avg?: UserAddressAvgOrderByAggregateInput
    _max?: UserAddressMaxOrderByAggregateInput
    _min?: UserAddressMinOrderByAggregateInput
    _sum?: UserAddressSumOrderByAggregateInput
  }

  export type UserAddressScalarWhereWithAggregatesInput = {
    AND?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    OR?: UserAddressScalarWhereWithAggregatesInput[]
    NOT?: UserAddressScalarWhereWithAggregatesInput | UserAddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAddress"> | number
    address?: StringWithAggregatesFilter<"UserAddress"> | string
    city?: StringWithAggregatesFilter<"UserAddress"> | string
    province?: StringWithAggregatesFilter<"UserAddress"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAddress"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"UserAddress"> | Date | string | null
    profileId?: IntWithAggregatesFilter<"UserAddress"> | number
  }

  export type PresensiWhereInput = {
    AND?: PresensiWhereInput | PresensiWhereInput[]
    OR?: PresensiWhereInput[]
    NOT?: PresensiWhereInput | PresensiWhereInput[]
    id?: IntFilter<"Presensi"> | number
    presensiDate?: DateTimeFilter<"Presensi"> | Date | string
    latitude?: IntFilter<"Presensi"> | number
    longitude?: IntFilter<"Presensi"> | number
    fotoDiri?: StringNullableFilter<"Presensi"> | string | null
    statusPresensi?: EnumStatusPresensiFilter<"Presensi"> | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFilter<"Presensi"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeFilter<"Presensi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    userId?: IntFilter<"Presensi"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PresensiOrderByWithRelationInput = {
    id?: SortOrder
    presensiDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    fotoDiri?: SortOrderInput | SortOrder
    statusPresensi?: SortOrder
    statusApproval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PresensiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PresensiWhereInput | PresensiWhereInput[]
    OR?: PresensiWhereInput[]
    NOT?: PresensiWhereInput | PresensiWhereInput[]
    presensiDate?: DateTimeFilter<"Presensi"> | Date | string
    latitude?: IntFilter<"Presensi"> | number
    longitude?: IntFilter<"Presensi"> | number
    fotoDiri?: StringNullableFilter<"Presensi"> | string | null
    statusPresensi?: EnumStatusPresensiFilter<"Presensi"> | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFilter<"Presensi"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeFilter<"Presensi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    userId?: IntFilter<"Presensi"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PresensiOrderByWithAggregationInput = {
    id?: SortOrder
    presensiDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    fotoDiri?: SortOrderInput | SortOrder
    statusPresensi?: SortOrder
    statusApproval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PresensiCountOrderByAggregateInput
    _avg?: PresensiAvgOrderByAggregateInput
    _max?: PresensiMaxOrderByAggregateInput
    _min?: PresensiMinOrderByAggregateInput
    _sum?: PresensiSumOrderByAggregateInput
  }

  export type PresensiScalarWhereWithAggregatesInput = {
    AND?: PresensiScalarWhereWithAggregatesInput | PresensiScalarWhereWithAggregatesInput[]
    OR?: PresensiScalarWhereWithAggregatesInput[]
    NOT?: PresensiScalarWhereWithAggregatesInput | PresensiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Presensi"> | number
    presensiDate?: DateTimeWithAggregatesFilter<"Presensi"> | Date | string
    latitude?: IntWithAggregatesFilter<"Presensi"> | number
    longitude?: IntWithAggregatesFilter<"Presensi"> | number
    fotoDiri?: StringNullableWithAggregatesFilter<"Presensi"> | string | null
    statusPresensi?: EnumStatusPresensiWithAggregatesFilter<"Presensi"> | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalWithAggregatesFilter<"Presensi"> | $Enums.StatusApproval
    createdAt?: DateTimeWithAggregatesFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Presensi"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Presensi"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Presensi"> | number
  }

  export type LaporanWhereInput = {
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    id?: IntFilter<"Laporan"> | number
    fotoSampel?: StringNullableListFilter<"Laporan">
    flowRate?: FloatFilter<"Laporan"> | number
    volt?: FloatFilter<"Laporan"> | number
    pH?: FloatFilter<"Laporan"> | number
    ampere?: FloatFilter<"Laporan"> | number
    TDS?: FloatFilter<"Laporan"> | number
    EC?: FloatFilter<"Laporan"> | number
    laporanStatus?: EnumStatusApprovalFilter<"Laporan"> | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    notes?: StringFilter<"Laporan"> | string
    laporanDate?: DateTimeFilter<"Laporan"> | Date | string
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    siteName?: StringFilter<"Laporan"> | string
    userId?: IntFilter<"Laporan"> | number
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LaporanOrderByWithRelationInput = {
    id?: SortOrder
    fotoSampel?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    laporanStatus?: SortOrder
    agitatorStatus?: SortOrder
    settleStatus?: SortOrder
    outFilterStatus?: SortOrder
    notes?: SortOrder
    laporanDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    siteName?: SortOrder
    userId?: SortOrder
    site?: SiteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LaporanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    fotoSampel?: StringNullableListFilter<"Laporan">
    flowRate?: FloatFilter<"Laporan"> | number
    volt?: FloatFilter<"Laporan"> | number
    pH?: FloatFilter<"Laporan"> | number
    ampere?: FloatFilter<"Laporan"> | number
    TDS?: FloatFilter<"Laporan"> | number
    EC?: FloatFilter<"Laporan"> | number
    laporanStatus?: EnumStatusApprovalFilter<"Laporan"> | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    notes?: StringFilter<"Laporan"> | string
    laporanDate?: DateTimeFilter<"Laporan"> | Date | string
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    siteName?: StringFilter<"Laporan"> | string
    userId?: IntFilter<"Laporan"> | number
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LaporanOrderByWithAggregationInput = {
    id?: SortOrder
    fotoSampel?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    laporanStatus?: SortOrder
    agitatorStatus?: SortOrder
    settleStatus?: SortOrder
    outFilterStatus?: SortOrder
    notes?: SortOrder
    laporanDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    siteName?: SortOrder
    userId?: SortOrder
    _count?: LaporanCountOrderByAggregateInput
    _avg?: LaporanAvgOrderByAggregateInput
    _max?: LaporanMaxOrderByAggregateInput
    _min?: LaporanMinOrderByAggregateInput
    _sum?: LaporanSumOrderByAggregateInput
  }

  export type LaporanScalarWhereWithAggregatesInput = {
    AND?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    OR?: LaporanScalarWhereWithAggregatesInput[]
    NOT?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Laporan"> | number
    fotoSampel?: StringNullableListFilter<"Laporan">
    flowRate?: FloatWithAggregatesFilter<"Laporan"> | number
    volt?: FloatWithAggregatesFilter<"Laporan"> | number
    pH?: FloatWithAggregatesFilter<"Laporan"> | number
    ampere?: FloatWithAggregatesFilter<"Laporan"> | number
    TDS?: FloatWithAggregatesFilter<"Laporan"> | number
    EC?: FloatWithAggregatesFilter<"Laporan"> | number
    laporanStatus?: EnumStatusApprovalWithAggregatesFilter<"Laporan"> | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusWithAggregatesFilter<"Laporan"> | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusWithAggregatesFilter<"Laporan"> | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusWithAggregatesFilter<"Laporan"> | $Enums.EquipmentStatus
    notes?: StringWithAggregatesFilter<"Laporan"> | string
    laporanDate?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Laporan"> | Date | string | null
    siteName?: StringWithAggregatesFilter<"Laporan"> | string
    userId?: IntWithAggregatesFilter<"Laporan"> | number
  }

  export type IjinWhereInput = {
    AND?: IjinWhereInput | IjinWhereInput[]
    OR?: IjinWhereInput[]
    NOT?: IjinWhereInput | IjinWhereInput[]
    id?: IntFilter<"Ijin"> | number
    ijinDate?: DateTimeFilter<"Ijin"> | Date | string
    ijinStatus?: EnumStatusApprovalFilter<"Ijin"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Ijin"> | Date | string
    updatedAt?: DateTimeFilter<"Ijin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ijin"> | Date | string | null
    userId?: IntFilter<"Ijin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IjinOrderByWithRelationInput = {
    id?: SortOrder
    ijinDate?: SortOrder
    ijinStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IjinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IjinWhereInput | IjinWhereInput[]
    OR?: IjinWhereInput[]
    NOT?: IjinWhereInput | IjinWhereInput[]
    ijinDate?: DateTimeFilter<"Ijin"> | Date | string
    ijinStatus?: EnumStatusApprovalFilter<"Ijin"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Ijin"> | Date | string
    updatedAt?: DateTimeFilter<"Ijin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ijin"> | Date | string | null
    userId?: IntFilter<"Ijin"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IjinOrderByWithAggregationInput = {
    id?: SortOrder
    ijinDate?: SortOrder
    ijinStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: IjinCountOrderByAggregateInput
    _avg?: IjinAvgOrderByAggregateInput
    _max?: IjinMaxOrderByAggregateInput
    _min?: IjinMinOrderByAggregateInput
    _sum?: IjinSumOrderByAggregateInput
  }

  export type IjinScalarWhereWithAggregatesInput = {
    AND?: IjinScalarWhereWithAggregatesInput | IjinScalarWhereWithAggregatesInput[]
    OR?: IjinScalarWhereWithAggregatesInput[]
    NOT?: IjinScalarWhereWithAggregatesInput | IjinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ijin"> | number
    ijinDate?: DateTimeWithAggregatesFilter<"Ijin"> | Date | string
    ijinStatus?: EnumStatusApprovalWithAggregatesFilter<"Ijin"> | $Enums.StatusApproval
    createdAt?: DateTimeWithAggregatesFilter<"Ijin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ijin"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Ijin"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Ijin"> | number
  }

  export type LiburWhereInput = {
    AND?: LiburWhereInput | LiburWhereInput[]
    OR?: LiburWhereInput[]
    NOT?: LiburWhereInput | LiburWhereInput[]
    id?: IntFilter<"Libur"> | number
    liburDate?: DateTimeFilter<"Libur"> | Date | string
    liburStatus?: EnumStatusApprovalFilter<"Libur"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Libur"> | Date | string
    updatedAt?: DateTimeFilter<"Libur"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Libur"> | Date | string | null
    userId?: IntFilter<"Libur"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LiburOrderByWithRelationInput = {
    id?: SortOrder
    liburDate?: SortOrder
    liburStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LiburWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LiburWhereInput | LiburWhereInput[]
    OR?: LiburWhereInput[]
    NOT?: LiburWhereInput | LiburWhereInput[]
    liburDate?: DateTimeFilter<"Libur"> | Date | string
    liburStatus?: EnumStatusApprovalFilter<"Libur"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Libur"> | Date | string
    updatedAt?: DateTimeFilter<"Libur"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Libur"> | Date | string | null
    userId?: IntFilter<"Libur"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LiburOrderByWithAggregationInput = {
    id?: SortOrder
    liburDate?: SortOrder
    liburStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: LiburCountOrderByAggregateInput
    _avg?: LiburAvgOrderByAggregateInput
    _max?: LiburMaxOrderByAggregateInput
    _min?: LiburMinOrderByAggregateInput
    _sum?: LiburSumOrderByAggregateInput
  }

  export type LiburScalarWhereWithAggregatesInput = {
    AND?: LiburScalarWhereWithAggregatesInput | LiburScalarWhereWithAggregatesInput[]
    OR?: LiburScalarWhereWithAggregatesInput[]
    NOT?: LiburScalarWhereWithAggregatesInput | LiburScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Libur"> | number
    liburDate?: DateTimeWithAggregatesFilter<"Libur"> | Date | string
    liburStatus?: EnumStatusApprovalWithAggregatesFilter<"Libur"> | $Enums.StatusApproval
    createdAt?: DateTimeWithAggregatesFilter<"Libur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Libur"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Libur"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Libur"> | number
  }

  export type HelpWhereInput = {
    AND?: HelpWhereInput | HelpWhereInput[]
    OR?: HelpWhereInput[]
    NOT?: HelpWhereInput | HelpWhereInput[]
    id?: IntFilter<"Help"> | number
    deskripsi?: StringFilter<"Help"> | string
    gambar?: StringNullableFilter<"Help"> | string | null
    helpDate?: DateTimeFilter<"Help"> | Date | string
    createdAt?: DateTimeFilter<"Help"> | Date | string
    updatedAt?: DateTimeFilter<"Help"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Help"> | Date | string | null
    userId?: IntFilter<"Help"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HelpOrderByWithRelationInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrderInput | SortOrder
    helpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HelpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HelpWhereInput | HelpWhereInput[]
    OR?: HelpWhereInput[]
    NOT?: HelpWhereInput | HelpWhereInput[]
    deskripsi?: StringFilter<"Help"> | string
    gambar?: StringNullableFilter<"Help"> | string | null
    helpDate?: DateTimeFilter<"Help"> | Date | string
    createdAt?: DateTimeFilter<"Help"> | Date | string
    updatedAt?: DateTimeFilter<"Help"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Help"> | Date | string | null
    userId?: IntFilter<"Help"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HelpOrderByWithAggregationInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrderInput | SortOrder
    helpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: HelpCountOrderByAggregateInput
    _avg?: HelpAvgOrderByAggregateInput
    _max?: HelpMaxOrderByAggregateInput
    _min?: HelpMinOrderByAggregateInput
    _sum?: HelpSumOrderByAggregateInput
  }

  export type HelpScalarWhereWithAggregatesInput = {
    AND?: HelpScalarWhereWithAggregatesInput | HelpScalarWhereWithAggregatesInput[]
    OR?: HelpScalarWhereWithAggregatesInput[]
    NOT?: HelpScalarWhereWithAggregatesInput | HelpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Help"> | number
    deskripsi?: StringWithAggregatesFilter<"Help"> | string
    gambar?: StringNullableWithAggregatesFilter<"Help"> | string | null
    helpDate?: DateTimeWithAggregatesFilter<"Help"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Help"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Help"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Help"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Help"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    deskripsi?: StringFilter<"Ticket"> | string
    gambar?: StringNullableFilter<"Ticket"> | string | null
    ticketDate?: DateTimeFilter<"Ticket"> | Date | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    userId?: IntFilter<"Ticket"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrderInput | SortOrder
    ticketDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    deskripsi?: StringFilter<"Ticket"> | string
    gambar?: StringNullableFilter<"Ticket"> | string | null
    ticketDate?: DateTimeFilter<"Ticket"> | Date | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    userId?: IntFilter<"Ticket"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrderInput | SortOrder
    ticketDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    deskripsi?: StringWithAggregatesFilter<"Ticket"> | string
    gambar?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    ticketDate?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    userId?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleCreateInput = {
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalShiftCreateInput = {
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutShiftInput
    site: SiteCreateNestedOneWithoutShiftInput
  }

  export type JadwalShiftUncheckedCreateInput = {
    id?: number
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
    siteId: number
  }

  export type JadwalShiftUpdateInput = {
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutShiftNestedInput
    site?: SiteUpdateOneRequiredWithoutShiftNestedInput
  }

  export type JadwalShiftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalShiftCreateManyInput = {
    id?: number
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
    siteId: number
  }

  export type JadwalShiftUpdateManyMutationInput = {
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalShiftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
  }

  export type SiteCreateInput = {
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address: SiteAddressCreateNestedOneWithoutSiteInput
    users?: UserCreateNestedManyWithoutSitesInput
    report?: LaporanCreateNestedManyWithoutSiteInput
    shift?: JadwalShiftCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: number
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addressId: number
    users?: UserUncheckedCreateNestedManyWithoutSitesInput
    report?: LaporanUncheckedCreateNestedManyWithoutSiteInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: SiteAddressUpdateOneRequiredWithoutSiteNestedInput
    users?: UserUpdateManyWithoutSitesNestedInput
    report?: LaporanUpdateManyWithoutSiteNestedInput
    shift?: JadwalShiftUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutSitesNestedInput
    report?: LaporanUncheckedUpdateManyWithoutSiteNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: number
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addressId: number
  }

  export type SiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type SiteAddressCreateInput = {
    address: string
    city: string
    province: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    site?: SiteCreateNestedOneWithoutAddressInput
  }

  export type SiteAddressUncheckedCreateInput = {
    id?: number
    address: string
    city: string
    province: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    site?: SiteUncheckedCreateNestedOneWithoutAddressInput
  }

  export type SiteAddressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneWithoutAddressNestedInput
  }

  export type SiteAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type SiteAddressCreateManyInput = {
    id?: number
    address: string
    city: string
    province: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SiteAddressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateInput = {
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProfileInput
    address?: UserAddressCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
    address?: UserAddressUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
    address?: UserAddressUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
    address?: UserAddressUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: number
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAddressCreateInput = {
    address: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile: ProfileCreateNestedOneWithoutAddressInput
  }

  export type UserAddressUncheckedCreateInput = {
    id?: number
    address: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileId: number
  }

  export type UserAddressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneRequiredWithoutAddressNestedInput
  }

  export type UserAddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type UserAddressCreateManyInput = {
    id?: number
    address: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profileId: number
  }

  export type UserAddressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileId?: IntFieldUpdateOperationsInput | number
  }

  export type PresensiCreateInput = {
    presensiDate: Date | string
    latitude: number
    longitude: number
    fotoDiri?: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutPresensiInput
  }

  export type PresensiUncheckedCreateInput = {
    id?: number
    presensiDate: Date | string
    latitude: number
    longitude: number
    fotoDiri?: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type PresensiUpdateInput = {
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutPresensiNestedInput
  }

  export type PresensiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PresensiCreateManyInput = {
    id?: number
    presensiDate: Date | string
    latitude: number
    longitude: number
    fotoDiri?: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type PresensiUpdateManyMutationInput = {
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PresensiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanCreateInput = {
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    site: SiteCreateNestedOneWithoutReportInput
    user: UserCreateNestedOneWithoutLaporanInput
  }

  export type LaporanUncheckedCreateInput = {
    id?: number
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    siteName: string
    userId: number
  }

  export type LaporanUpdateInput = {
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneRequiredWithoutReportNestedInput
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    siteName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanCreateManyInput = {
    id?: number
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    siteName: string
    userId: number
  }

  export type LaporanUpdateManyMutationInput = {
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    siteName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IjinCreateInput = {
    ijinDate?: Date | string
    ijinStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutIjinInput
  }

  export type IjinUncheckedCreateInput = {
    id?: number
    ijinDate?: Date | string
    ijinStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type IjinUpdateInput = {
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutIjinNestedInput
  }

  export type IjinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IjinCreateManyInput = {
    id?: number
    ijinDate?: Date | string
    ijinStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type IjinUpdateManyMutationInput = {
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IjinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LiburCreateInput = {
    liburDate: Date | string
    liburStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutLiburInput
  }

  export type LiburUncheckedCreateInput = {
    id?: number
    liburDate: Date | string
    liburStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type LiburUpdateInput = {
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLiburNestedInput
  }

  export type LiburUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LiburCreateManyInput = {
    id?: number
    liburDate: Date | string
    liburStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type LiburUpdateManyMutationInput = {
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LiburUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HelpCreateInput = {
    deskripsi: string
    gambar?: string | null
    helpDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutHelpInput
  }

  export type HelpUncheckedCreateInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    helpDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type HelpUpdateInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutHelpNestedInput
  }

  export type HelpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type HelpCreateManyInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    helpDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type HelpUpdateManyMutationInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HelpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    deskripsi: string
    gambar?: string | null
    ticketDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    ticketDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type TicketUpdateInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    ticketDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type TicketUpdateManyMutationInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type JadwalShiftListRelationFilter = {
    every?: JadwalShiftWhereInput
    some?: JadwalShiftWhereInput
    none?: JadwalShiftWhereInput
  }

  export type PresensiListRelationFilter = {
    every?: PresensiWhereInput
    some?: PresensiWhereInput
    none?: PresensiWhereInput
  }

  export type LaporanListRelationFilter = {
    every?: LaporanWhereInput
    some?: LaporanWhereInput
    none?: LaporanWhereInput
  }

  export type IjinListRelationFilter = {
    every?: IjinWhereInput
    some?: IjinWhereInput
    none?: IjinWhereInput
  }

  export type LiburListRelationFilter = {
    every?: LiburWhereInput
    some?: LiburWhereInput
    none?: LiburWhereInput
  }

  export type HelpListRelationFilter = {
    every?: HelpWhereInput
    some?: HelpWhereInput
    none?: HelpWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JadwalShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaporanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IjinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LiburOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HelpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    roleId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type JadwalShiftCountOrderByAggregateInput = {
    id?: SortOrder
    shiftDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type JadwalShiftAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type JadwalShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    shiftDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type JadwalShiftMinOrderByAggregateInput = {
    id?: SortOrder
    shiftDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type JadwalShiftSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    siteId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.siteStatus | EnumsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsiteStatusFilter<$PrismaModel> | $Enums.siteStatus
  }

  export type SiteAddressScalarRelationFilter = {
    is?: SiteAddressWhereInput
    isNot?: SiteAddressWhereInput
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    addressId?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    addressId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    addressId?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    id?: SortOrder
    addressId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.siteStatus | EnumsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.siteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumsiteStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SiteNullableScalarRelationFilter = {
    is?: SiteWhereInput | null
    isNot?: SiteWhereInput | null
  }

  export type SiteAddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SiteAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SiteAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SiteAddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type SiteAddressSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserAddressNullableScalarRelationFilter = {
    is?: UserAddressWhereInput | null
    isNot?: UserAddressWhereInput | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    birthDate?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    birthDate?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    birthDate?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type UserAddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    profileId?: SortOrder
  }

  export type UserAddressAvgOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type UserAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    profileId?: SortOrder
  }

  export type UserAddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    profileId?: SortOrder
  }

  export type UserAddressSumOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
  }

  export type EnumStatusPresensiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPresensi | EnumStatusPresensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPresensiFilter<$PrismaModel> | $Enums.StatusPresensi
  }

  export type EnumStatusApprovalFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalFilter<$PrismaModel> | $Enums.StatusApproval
  }

  export type PresensiCountOrderByAggregateInput = {
    id?: SortOrder
    presensiDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    fotoDiri?: SortOrder
    statusPresensi?: SortOrder
    statusApproval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type PresensiAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    userId?: SortOrder
  }

  export type PresensiMaxOrderByAggregateInput = {
    id?: SortOrder
    presensiDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    fotoDiri?: SortOrder
    statusPresensi?: SortOrder
    statusApproval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type PresensiMinOrderByAggregateInput = {
    id?: SortOrder
    presensiDate?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    fotoDiri?: SortOrder
    statusPresensi?: SortOrder
    statusApproval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type PresensiSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusPresensiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPresensi | EnumStatusPresensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPresensiWithAggregatesFilter<$PrismaModel> | $Enums.StatusPresensi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPresensiFilter<$PrismaModel>
    _max?: NestedEnumStatusPresensiFilter<$PrismaModel>
  }

  export type EnumStatusApprovalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalWithAggregatesFilter<$PrismaModel> | $Enums.StatusApproval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusApprovalFilter<$PrismaModel>
    _max?: NestedEnumStatusApprovalFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumEquipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentStatus | EnumEquipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentStatusFilter<$PrismaModel> | $Enums.EquipmentStatus
  }

  export type LaporanCountOrderByAggregateInput = {
    id?: SortOrder
    fotoSampel?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    laporanStatus?: SortOrder
    agitatorStatus?: SortOrder
    settleStatus?: SortOrder
    outFilterStatus?: SortOrder
    notes?: SortOrder
    laporanDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    siteName?: SortOrder
    userId?: SortOrder
  }

  export type LaporanAvgOrderByAggregateInput = {
    id?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    userId?: SortOrder
  }

  export type LaporanMaxOrderByAggregateInput = {
    id?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    laporanStatus?: SortOrder
    agitatorStatus?: SortOrder
    settleStatus?: SortOrder
    outFilterStatus?: SortOrder
    notes?: SortOrder
    laporanDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    siteName?: SortOrder
    userId?: SortOrder
  }

  export type LaporanMinOrderByAggregateInput = {
    id?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    laporanStatus?: SortOrder
    agitatorStatus?: SortOrder
    settleStatus?: SortOrder
    outFilterStatus?: SortOrder
    notes?: SortOrder
    laporanDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    siteName?: SortOrder
    userId?: SortOrder
  }

  export type LaporanSumOrderByAggregateInput = {
    id?: SortOrder
    flowRate?: SortOrder
    volt?: SortOrder
    pH?: SortOrder
    ampere?: SortOrder
    TDS?: SortOrder
    EC?: SortOrder
    userId?: SortOrder
  }

  export type EnumEquipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentStatus | EnumEquipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEquipmentStatusFilter<$PrismaModel>
  }

  export type IjinCountOrderByAggregateInput = {
    id?: SortOrder
    ijinDate?: SortOrder
    ijinStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type IjinAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IjinMaxOrderByAggregateInput = {
    id?: SortOrder
    ijinDate?: SortOrder
    ijinStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type IjinMinOrderByAggregateInput = {
    id?: SortOrder
    ijinDate?: SortOrder
    ijinStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type IjinSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LiburCountOrderByAggregateInput = {
    id?: SortOrder
    liburDate?: SortOrder
    liburStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type LiburAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LiburMaxOrderByAggregateInput = {
    id?: SortOrder
    liburDate?: SortOrder
    liburStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type LiburMinOrderByAggregateInput = {
    id?: SortOrder
    liburDate?: SortOrder
    liburStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type LiburSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type HelpCountOrderByAggregateInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    helpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type HelpAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type HelpMaxOrderByAggregateInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    helpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type HelpMinOrderByAggregateInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    helpDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type HelpSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    ticketDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    ticketDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    deskripsi?: SortOrder
    gambar?: SortOrder
    ticketDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    userId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SiteCreateNestedManyWithoutUsersInput = {
    create?: XOR<SiteCreateWithoutUsersInput, SiteUncheckedCreateWithoutUsersInput> | SiteCreateWithoutUsersInput[] | SiteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUsersInput | SiteCreateOrConnectWithoutUsersInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type JadwalShiftCreateNestedManyWithoutUserInput = {
    create?: XOR<JadwalShiftCreateWithoutUserInput, JadwalShiftUncheckedCreateWithoutUserInput> | JadwalShiftCreateWithoutUserInput[] | JadwalShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutUserInput | JadwalShiftCreateOrConnectWithoutUserInput[]
    createMany?: JadwalShiftCreateManyUserInputEnvelope
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
  }

  export type PresensiCreateNestedManyWithoutUserInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
  }

  export type LaporanCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type IjinCreateNestedManyWithoutUserInput = {
    create?: XOR<IjinCreateWithoutUserInput, IjinUncheckedCreateWithoutUserInput> | IjinCreateWithoutUserInput[] | IjinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IjinCreateOrConnectWithoutUserInput | IjinCreateOrConnectWithoutUserInput[]
    createMany?: IjinCreateManyUserInputEnvelope
    connect?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
  }

  export type LiburCreateNestedManyWithoutUserInput = {
    create?: XOR<LiburCreateWithoutUserInput, LiburUncheckedCreateWithoutUserInput> | LiburCreateWithoutUserInput[] | LiburUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiburCreateOrConnectWithoutUserInput | LiburCreateOrConnectWithoutUserInput[]
    createMany?: LiburCreateManyUserInputEnvelope
    connect?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
  }

  export type HelpCreateNestedManyWithoutUserInput = {
    create?: XOR<HelpCreateWithoutUserInput, HelpUncheckedCreateWithoutUserInput> | HelpCreateWithoutUserInput[] | HelpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpCreateOrConnectWithoutUserInput | HelpCreateOrConnectWithoutUserInput[]
    createMany?: HelpCreateManyUserInputEnvelope
    connect?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SiteUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<SiteCreateWithoutUsersInput, SiteUncheckedCreateWithoutUsersInput> | SiteCreateWithoutUsersInput[] | SiteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUsersInput | SiteCreateOrConnectWithoutUsersInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type JadwalShiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JadwalShiftCreateWithoutUserInput, JadwalShiftUncheckedCreateWithoutUserInput> | JadwalShiftCreateWithoutUserInput[] | JadwalShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutUserInput | JadwalShiftCreateOrConnectWithoutUserInput[]
    createMany?: JadwalShiftCreateManyUserInputEnvelope
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
  }

  export type PresensiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type IjinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IjinCreateWithoutUserInput, IjinUncheckedCreateWithoutUserInput> | IjinCreateWithoutUserInput[] | IjinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IjinCreateOrConnectWithoutUserInput | IjinCreateOrConnectWithoutUserInput[]
    createMany?: IjinCreateManyUserInputEnvelope
    connect?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
  }

  export type LiburUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LiburCreateWithoutUserInput, LiburUncheckedCreateWithoutUserInput> | LiburCreateWithoutUserInput[] | LiburUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiburCreateOrConnectWithoutUserInput | LiburCreateOrConnectWithoutUserInput[]
    createMany?: LiburCreateManyUserInputEnvelope
    connect?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
  }

  export type HelpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HelpCreateWithoutUserInput, HelpUncheckedCreateWithoutUserInput> | HelpCreateWithoutUserInput[] | HelpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpCreateOrConnectWithoutUserInput | HelpCreateOrConnectWithoutUserInput[]
    createMany?: HelpCreateManyUserInputEnvelope
    connect?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SiteUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SiteCreateWithoutUsersInput, SiteUncheckedCreateWithoutUsersInput> | SiteCreateWithoutUsersInput[] | SiteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUsersInput | SiteCreateOrConnectWithoutUsersInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUsersInput | SiteUpsertWithWhereUniqueWithoutUsersInput[]
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUsersInput | SiteUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUsersInput | SiteUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type JadwalShiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<JadwalShiftCreateWithoutUserInput, JadwalShiftUncheckedCreateWithoutUserInput> | JadwalShiftCreateWithoutUserInput[] | JadwalShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutUserInput | JadwalShiftCreateOrConnectWithoutUserInput[]
    upsert?: JadwalShiftUpsertWithWhereUniqueWithoutUserInput | JadwalShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JadwalShiftCreateManyUserInputEnvelope
    set?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    disconnect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    delete?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    update?: JadwalShiftUpdateWithWhereUniqueWithoutUserInput | JadwalShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JadwalShiftUpdateManyWithWhereWithoutUserInput | JadwalShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JadwalShiftScalarWhereInput | JadwalShiftScalarWhereInput[]
  }

  export type PresensiUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    upsert?: PresensiUpsertWithWhereUniqueWithoutUserInput | PresensiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    set?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    disconnect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    delete?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    update?: PresensiUpdateWithWhereUniqueWithoutUserInput | PresensiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresensiUpdateManyWithWhereWithoutUserInput | PresensiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
  }

  export type LaporanUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutUserInput | LaporanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutUserInput | LaporanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutUserInput | LaporanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type IjinUpdateManyWithoutUserNestedInput = {
    create?: XOR<IjinCreateWithoutUserInput, IjinUncheckedCreateWithoutUserInput> | IjinCreateWithoutUserInput[] | IjinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IjinCreateOrConnectWithoutUserInput | IjinCreateOrConnectWithoutUserInput[]
    upsert?: IjinUpsertWithWhereUniqueWithoutUserInput | IjinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IjinCreateManyUserInputEnvelope
    set?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    disconnect?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    delete?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    connect?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    update?: IjinUpdateWithWhereUniqueWithoutUserInput | IjinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IjinUpdateManyWithWhereWithoutUserInput | IjinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IjinScalarWhereInput | IjinScalarWhereInput[]
  }

  export type LiburUpdateManyWithoutUserNestedInput = {
    create?: XOR<LiburCreateWithoutUserInput, LiburUncheckedCreateWithoutUserInput> | LiburCreateWithoutUserInput[] | LiburUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiburCreateOrConnectWithoutUserInput | LiburCreateOrConnectWithoutUserInput[]
    upsert?: LiburUpsertWithWhereUniqueWithoutUserInput | LiburUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LiburCreateManyUserInputEnvelope
    set?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    disconnect?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    delete?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    connect?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    update?: LiburUpdateWithWhereUniqueWithoutUserInput | LiburUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LiburUpdateManyWithWhereWithoutUserInput | LiburUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LiburScalarWhereInput | LiburScalarWhereInput[]
  }

  export type HelpUpdateManyWithoutUserNestedInput = {
    create?: XOR<HelpCreateWithoutUserInput, HelpUncheckedCreateWithoutUserInput> | HelpCreateWithoutUserInput[] | HelpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpCreateOrConnectWithoutUserInput | HelpCreateOrConnectWithoutUserInput[]
    upsert?: HelpUpsertWithWhereUniqueWithoutUserInput | HelpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HelpCreateManyUserInputEnvelope
    set?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    disconnect?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    delete?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    connect?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    update?: HelpUpdateWithWhereUniqueWithoutUserInput | HelpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HelpUpdateManyWithWhereWithoutUserInput | HelpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HelpScalarWhereInput | HelpScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SiteUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<SiteCreateWithoutUsersInput, SiteUncheckedCreateWithoutUsersInput> | SiteCreateWithoutUsersInput[] | SiteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutUsersInput | SiteCreateOrConnectWithoutUsersInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutUsersInput | SiteUpsertWithWhereUniqueWithoutUsersInput[]
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutUsersInput | SiteUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutUsersInput | SiteUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type JadwalShiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JadwalShiftCreateWithoutUserInput, JadwalShiftUncheckedCreateWithoutUserInput> | JadwalShiftCreateWithoutUserInput[] | JadwalShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutUserInput | JadwalShiftCreateOrConnectWithoutUserInput[]
    upsert?: JadwalShiftUpsertWithWhereUniqueWithoutUserInput | JadwalShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JadwalShiftCreateManyUserInputEnvelope
    set?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    disconnect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    delete?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    update?: JadwalShiftUpdateWithWhereUniqueWithoutUserInput | JadwalShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JadwalShiftUpdateManyWithWhereWithoutUserInput | JadwalShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JadwalShiftScalarWhereInput | JadwalShiftScalarWhereInput[]
  }

  export type PresensiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput> | PresensiCreateWithoutUserInput[] | PresensiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresensiCreateOrConnectWithoutUserInput | PresensiCreateOrConnectWithoutUserInput[]
    upsert?: PresensiUpsertWithWhereUniqueWithoutUserInput | PresensiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresensiCreateManyUserInputEnvelope
    set?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    disconnect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    delete?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    connect?: PresensiWhereUniqueInput | PresensiWhereUniqueInput[]
    update?: PresensiUpdateWithWhereUniqueWithoutUserInput | PresensiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresensiUpdateManyWithWhereWithoutUserInput | PresensiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput> | LaporanCreateWithoutUserInput[] | LaporanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutUserInput | LaporanCreateOrConnectWithoutUserInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutUserInput | LaporanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LaporanCreateManyUserInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutUserInput | LaporanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutUserInput | LaporanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type IjinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IjinCreateWithoutUserInput, IjinUncheckedCreateWithoutUserInput> | IjinCreateWithoutUserInput[] | IjinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IjinCreateOrConnectWithoutUserInput | IjinCreateOrConnectWithoutUserInput[]
    upsert?: IjinUpsertWithWhereUniqueWithoutUserInput | IjinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IjinCreateManyUserInputEnvelope
    set?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    disconnect?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    delete?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    connect?: IjinWhereUniqueInput | IjinWhereUniqueInput[]
    update?: IjinUpdateWithWhereUniqueWithoutUserInput | IjinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IjinUpdateManyWithWhereWithoutUserInput | IjinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IjinScalarWhereInput | IjinScalarWhereInput[]
  }

  export type LiburUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LiburCreateWithoutUserInput, LiburUncheckedCreateWithoutUserInput> | LiburCreateWithoutUserInput[] | LiburUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LiburCreateOrConnectWithoutUserInput | LiburCreateOrConnectWithoutUserInput[]
    upsert?: LiburUpsertWithWhereUniqueWithoutUserInput | LiburUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LiburCreateManyUserInputEnvelope
    set?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    disconnect?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    delete?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    connect?: LiburWhereUniqueInput | LiburWhereUniqueInput[]
    update?: LiburUpdateWithWhereUniqueWithoutUserInput | LiburUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LiburUpdateManyWithWhereWithoutUserInput | LiburUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LiburScalarWhereInput | LiburScalarWhereInput[]
  }

  export type HelpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HelpCreateWithoutUserInput, HelpUncheckedCreateWithoutUserInput> | HelpCreateWithoutUserInput[] | HelpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpCreateOrConnectWithoutUserInput | HelpCreateOrConnectWithoutUserInput[]
    upsert?: HelpUpsertWithWhereUniqueWithoutUserInput | HelpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HelpCreateManyUserInputEnvelope
    set?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    disconnect?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    delete?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    connect?: HelpWhereUniqueInput | HelpWhereUniqueInput[]
    update?: HelpUpdateWithWhereUniqueWithoutUserInput | HelpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HelpUpdateManyWithWhereWithoutUserInput | HelpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HelpScalarWhereInput | HelpScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShiftInput = {
    create?: XOR<UserCreateWithoutShiftInput, UserUncheckedCreateWithoutShiftInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftInput
    connect?: UserWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutShiftInput = {
    create?: XOR<SiteCreateWithoutShiftInput, SiteUncheckedCreateWithoutShiftInput>
    connectOrCreate?: SiteCreateOrConnectWithoutShiftInput
    connect?: SiteWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShiftNestedInput = {
    create?: XOR<UserCreateWithoutShiftInput, UserUncheckedCreateWithoutShiftInput>
    connectOrCreate?: UserCreateOrConnectWithoutShiftInput
    upsert?: UserUpsertWithoutShiftInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShiftInput, UserUpdateWithoutShiftInput>, UserUncheckedUpdateWithoutShiftInput>
  }

  export type SiteUpdateOneRequiredWithoutShiftNestedInput = {
    create?: XOR<SiteCreateWithoutShiftInput, SiteUncheckedCreateWithoutShiftInput>
    connectOrCreate?: SiteCreateOrConnectWithoutShiftInput
    upsert?: SiteUpsertWithoutShiftInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutShiftInput, SiteUpdateWithoutShiftInput>, SiteUncheckedUpdateWithoutShiftInput>
  }

  export type SiteAddressCreateNestedOneWithoutSiteInput = {
    create?: XOR<SiteAddressCreateWithoutSiteInput, SiteAddressUncheckedCreateWithoutSiteInput>
    connectOrCreate?: SiteAddressCreateOrConnectWithoutSiteInput
    connect?: SiteAddressWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSitesInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput> | UserCreateWithoutSitesInput[] | UserUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput | UserCreateOrConnectWithoutSitesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LaporanCreateNestedManyWithoutSiteInput = {
    create?: XOR<LaporanCreateWithoutSiteInput, LaporanUncheckedCreateWithoutSiteInput> | LaporanCreateWithoutSiteInput[] | LaporanUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSiteInput | LaporanCreateOrConnectWithoutSiteInput[]
    createMany?: LaporanCreateManySiteInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type JadwalShiftCreateNestedManyWithoutSiteInput = {
    create?: XOR<JadwalShiftCreateWithoutSiteInput, JadwalShiftUncheckedCreateWithoutSiteInput> | JadwalShiftCreateWithoutSiteInput[] | JadwalShiftUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutSiteInput | JadwalShiftCreateOrConnectWithoutSiteInput[]
    createMany?: JadwalShiftCreateManySiteInputEnvelope
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSitesInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput> | UserCreateWithoutSitesInput[] | UserUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput | UserCreateOrConnectWithoutSitesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<LaporanCreateWithoutSiteInput, LaporanUncheckedCreateWithoutSiteInput> | LaporanCreateWithoutSiteInput[] | LaporanUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSiteInput | LaporanCreateOrConnectWithoutSiteInput[]
    createMany?: LaporanCreateManySiteInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type JadwalShiftUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<JadwalShiftCreateWithoutSiteInput, JadwalShiftUncheckedCreateWithoutSiteInput> | JadwalShiftCreateWithoutSiteInput[] | JadwalShiftUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutSiteInput | JadwalShiftCreateOrConnectWithoutSiteInput[]
    createMany?: JadwalShiftCreateManySiteInputEnvelope
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.siteStatus
  }

  export type SiteAddressUpdateOneRequiredWithoutSiteNestedInput = {
    create?: XOR<SiteAddressCreateWithoutSiteInput, SiteAddressUncheckedCreateWithoutSiteInput>
    connectOrCreate?: SiteAddressCreateOrConnectWithoutSiteInput
    upsert?: SiteAddressUpsertWithoutSiteInput
    connect?: SiteAddressWhereUniqueInput
    update?: XOR<XOR<SiteAddressUpdateToOneWithWhereWithoutSiteInput, SiteAddressUpdateWithoutSiteInput>, SiteAddressUncheckedUpdateWithoutSiteInput>
  }

  export type UserUpdateManyWithoutSitesNestedInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput> | UserCreateWithoutSitesInput[] | UserUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput | UserCreateOrConnectWithoutSitesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSitesInput | UserUpsertWithWhereUniqueWithoutSitesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSitesInput | UserUpdateWithWhereUniqueWithoutSitesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSitesInput | UserUpdateManyWithWhereWithoutSitesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LaporanUpdateManyWithoutSiteNestedInput = {
    create?: XOR<LaporanCreateWithoutSiteInput, LaporanUncheckedCreateWithoutSiteInput> | LaporanCreateWithoutSiteInput[] | LaporanUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSiteInput | LaporanCreateOrConnectWithoutSiteInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutSiteInput | LaporanUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: LaporanCreateManySiteInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutSiteInput | LaporanUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutSiteInput | LaporanUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type JadwalShiftUpdateManyWithoutSiteNestedInput = {
    create?: XOR<JadwalShiftCreateWithoutSiteInput, JadwalShiftUncheckedCreateWithoutSiteInput> | JadwalShiftCreateWithoutSiteInput[] | JadwalShiftUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutSiteInput | JadwalShiftCreateOrConnectWithoutSiteInput[]
    upsert?: JadwalShiftUpsertWithWhereUniqueWithoutSiteInput | JadwalShiftUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: JadwalShiftCreateManySiteInputEnvelope
    set?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    disconnect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    delete?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    update?: JadwalShiftUpdateWithWhereUniqueWithoutSiteInput | JadwalShiftUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: JadwalShiftUpdateManyWithWhereWithoutSiteInput | JadwalShiftUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: JadwalShiftScalarWhereInput | JadwalShiftScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSitesNestedInput = {
    create?: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput> | UserCreateWithoutSitesInput[] | UserUncheckedCreateWithoutSitesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSitesInput | UserCreateOrConnectWithoutSitesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSitesInput | UserUpsertWithWhereUniqueWithoutSitesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSitesInput | UserUpdateWithWhereUniqueWithoutSitesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSitesInput | UserUpdateManyWithWhereWithoutSitesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<LaporanCreateWithoutSiteInput, LaporanUncheckedCreateWithoutSiteInput> | LaporanCreateWithoutSiteInput[] | LaporanUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutSiteInput | LaporanCreateOrConnectWithoutSiteInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutSiteInput | LaporanUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: LaporanCreateManySiteInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutSiteInput | LaporanUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutSiteInput | LaporanUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type JadwalShiftUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<JadwalShiftCreateWithoutSiteInput, JadwalShiftUncheckedCreateWithoutSiteInput> | JadwalShiftCreateWithoutSiteInput[] | JadwalShiftUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: JadwalShiftCreateOrConnectWithoutSiteInput | JadwalShiftCreateOrConnectWithoutSiteInput[]
    upsert?: JadwalShiftUpsertWithWhereUniqueWithoutSiteInput | JadwalShiftUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: JadwalShiftCreateManySiteInputEnvelope
    set?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    disconnect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    delete?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    connect?: JadwalShiftWhereUniqueInput | JadwalShiftWhereUniqueInput[]
    update?: JadwalShiftUpdateWithWhereUniqueWithoutSiteInput | JadwalShiftUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: JadwalShiftUpdateManyWithWhereWithoutSiteInput | JadwalShiftUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: JadwalShiftScalarWhereInput | JadwalShiftScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutAddressInput = {
    create?: XOR<SiteCreateWithoutAddressInput, SiteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAddressInput
    connect?: SiteWhereUniqueInput
  }

  export type SiteUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<SiteCreateWithoutAddressInput, SiteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAddressInput
    connect?: SiteWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiteUpdateOneWithoutAddressNestedInput = {
    create?: XOR<SiteCreateWithoutAddressInput, SiteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAddressInput
    upsert?: SiteUpsertWithoutAddressInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutAddressInput, SiteUpdateWithoutAddressInput>, SiteUncheckedUpdateWithoutAddressInput>
  }

  export type SiteUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<SiteCreateWithoutAddressInput, SiteUncheckedCreateWithoutAddressInput>
    connectOrCreate?: SiteCreateOrConnectWithoutAddressInput
    upsert?: SiteUpsertWithoutAddressInput
    disconnect?: SiteWhereInput | boolean
    delete?: SiteWhereInput | boolean
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutAddressInput, SiteUpdateWithoutAddressInput>, SiteUncheckedUpdateWithoutAddressInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserAddressCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserAddressCreateWithoutProfileInput, UserAddressUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutProfileInput
    connect?: UserAddressWhereUniqueInput
  }

  export type UserAddressUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserAddressCreateWithoutProfileInput, UserAddressUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutProfileInput
    connect?: UserAddressWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserAddressUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserAddressCreateWithoutProfileInput, UserAddressUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutProfileInput
    upsert?: UserAddressUpsertWithoutProfileInput
    disconnect?: UserAddressWhereInput | boolean
    delete?: UserAddressWhereInput | boolean
    connect?: UserAddressWhereUniqueInput
    update?: XOR<XOR<UserAddressUpdateToOneWithWhereWithoutProfileInput, UserAddressUpdateWithoutProfileInput>, UserAddressUncheckedUpdateWithoutProfileInput>
  }

  export type UserAddressUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserAddressCreateWithoutProfileInput, UserAddressUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserAddressCreateOrConnectWithoutProfileInput
    upsert?: UserAddressUpsertWithoutProfileInput
    disconnect?: UserAddressWhereInput | boolean
    delete?: UserAddressWhereInput | boolean
    connect?: UserAddressWhereUniqueInput
    update?: XOR<XOR<UserAddressUpdateToOneWithWhereWithoutProfileInput, UserAddressUpdateWithoutProfileInput>, UserAddressUncheckedUpdateWithoutProfileInput>
  }

  export type ProfileCreateNestedOneWithoutAddressInput = {
    create?: XOR<ProfileCreateWithoutAddressInput, ProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<ProfileCreateWithoutAddressInput, ProfileUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAddressInput
    upsert?: ProfileUpsertWithoutAddressInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAddressInput, ProfileUpdateWithoutAddressInput>, ProfileUncheckedUpdateWithoutAddressInput>
  }

  export type UserCreateNestedOneWithoutPresensiInput = {
    create?: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresensiInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusPresensiFieldUpdateOperationsInput = {
    set?: $Enums.StatusPresensi
  }

  export type EnumStatusApprovalFieldUpdateOperationsInput = {
    set?: $Enums.StatusApproval
  }

  export type UserUpdateOneRequiredWithoutPresensiNestedInput = {
    create?: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresensiInput
    upsert?: UserUpsertWithoutPresensiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresensiInput, UserUpdateWithoutPresensiInput>, UserUncheckedUpdateWithoutPresensiInput>
  }

  export type LaporanCreatefotoSampelInput = {
    set: string[]
  }

  export type SiteCreateNestedOneWithoutReportInput = {
    create?: XOR<SiteCreateWithoutReportInput, SiteUncheckedCreateWithoutReportInput>
    connectOrCreate?: SiteCreateOrConnectWithoutReportInput
    connect?: SiteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLaporanInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    connect?: UserWhereUniqueInput
  }

  export type LaporanUpdatefotoSampelInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumEquipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EquipmentStatus
  }

  export type SiteUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<SiteCreateWithoutReportInput, SiteUncheckedCreateWithoutReportInput>
    connectOrCreate?: SiteCreateOrConnectWithoutReportInput
    upsert?: SiteUpsertWithoutReportInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutReportInput, SiteUpdateWithoutReportInput>, SiteUncheckedUpdateWithoutReportInput>
  }

  export type UserUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaporanInput
    upsert?: UserUpsertWithoutLaporanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaporanInput, UserUpdateWithoutLaporanInput>, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type UserCreateNestedOneWithoutIjinInput = {
    create?: XOR<UserCreateWithoutIjinInput, UserUncheckedCreateWithoutIjinInput>
    connectOrCreate?: UserCreateOrConnectWithoutIjinInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIjinNestedInput = {
    create?: XOR<UserCreateWithoutIjinInput, UserUncheckedCreateWithoutIjinInput>
    connectOrCreate?: UserCreateOrConnectWithoutIjinInput
    upsert?: UserUpsertWithoutIjinInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIjinInput, UserUpdateWithoutIjinInput>, UserUncheckedUpdateWithoutIjinInput>
  }

  export type UserCreateNestedOneWithoutLiburInput = {
    create?: XOR<UserCreateWithoutLiburInput, UserUncheckedCreateWithoutLiburInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiburInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLiburNestedInput = {
    create?: XOR<UserCreateWithoutLiburInput, UserUncheckedCreateWithoutLiburInput>
    connectOrCreate?: UserCreateOrConnectWithoutLiburInput
    upsert?: UserUpsertWithoutLiburInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLiburInput, UserUpdateWithoutLiburInput>, UserUncheckedUpdateWithoutLiburInput>
  }

  export type UserCreateNestedOneWithoutHelpInput = {
    create?: XOR<UserCreateWithoutHelpInput, UserUncheckedCreateWithoutHelpInput>
    connectOrCreate?: UserCreateOrConnectWithoutHelpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHelpNestedInput = {
    create?: XOR<UserCreateWithoutHelpInput, UserUncheckedCreateWithoutHelpInput>
    connectOrCreate?: UserCreateOrConnectWithoutHelpInput
    upsert?: UserUpsertWithoutHelpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHelpInput, UserUpdateWithoutHelpInput>, UserUncheckedUpdateWithoutHelpInput>
  }

  export type UserCreateNestedOneWithoutTicketInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    upsert?: UserUpsertWithoutTicketInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketInput, UserUpdateWithoutTicketInput>, UserUncheckedUpdateWithoutTicketInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleName[] | ListEnumRoleNameFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.siteStatus | EnumsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsiteStatusFilter<$PrismaModel> | $Enums.siteStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.siteStatus | EnumsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.siteStatus[] | ListEnumsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.siteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumsiteStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusPresensiFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPresensi | EnumStatusPresensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPresensiFilter<$PrismaModel> | $Enums.StatusPresensi
  }

  export type NestedEnumStatusApprovalFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalFilter<$PrismaModel> | $Enums.StatusApproval
  }

  export type NestedEnumStatusPresensiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPresensi | EnumStatusPresensiFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPresensi[] | ListEnumStatusPresensiFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPresensiWithAggregatesFilter<$PrismaModel> | $Enums.StatusPresensi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPresensiFilter<$PrismaModel>
    _max?: NestedEnumStatusPresensiFilter<$PrismaModel>
  }

  export type NestedEnumStatusApprovalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusApproval | EnumStatusApprovalFieldRefInput<$PrismaModel>
    in?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusApproval[] | ListEnumStatusApprovalFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusApprovalWithAggregatesFilter<$PrismaModel> | $Enums.StatusApproval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusApprovalFilter<$PrismaModel>
    _max?: NestedEnumStatusApprovalFilter<$PrismaModel>
  }

  export type NestedEnumEquipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentStatus | EnumEquipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentStatusFilter<$PrismaModel> | $Enums.EquipmentStatus
  }

  export type NestedEnumEquipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EquipmentStatus | EnumEquipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EquipmentStatus[] | ListEnumEquipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEquipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EquipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEquipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEquipmentStatusFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: $Enums.RoleName
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type ProfileCreateWithoutUserInput = {
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: UserAddressCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address?: UserAddressUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type SiteCreateWithoutUsersInput = {
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address: SiteAddressCreateNestedOneWithoutSiteInput
    report?: LaporanCreateNestedManyWithoutSiteInput
    shift?: JadwalShiftCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addressId: number
    report?: LaporanUncheckedCreateNestedManyWithoutSiteInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutUsersInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutUsersInput, SiteUncheckedCreateWithoutUsersInput>
  }

  export type JadwalShiftCreateWithoutUserInput = {
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    site: SiteCreateNestedOneWithoutShiftInput
  }

  export type JadwalShiftUncheckedCreateWithoutUserInput = {
    id?: number
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    siteId: number
  }

  export type JadwalShiftCreateOrConnectWithoutUserInput = {
    where: JadwalShiftWhereUniqueInput
    create: XOR<JadwalShiftCreateWithoutUserInput, JadwalShiftUncheckedCreateWithoutUserInput>
  }

  export type JadwalShiftCreateManyUserInputEnvelope = {
    data: JadwalShiftCreateManyUserInput | JadwalShiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PresensiCreateWithoutUserInput = {
    presensiDate: Date | string
    latitude: number
    longitude: number
    fotoDiri?: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PresensiUncheckedCreateWithoutUserInput = {
    id?: number
    presensiDate: Date | string
    latitude: number
    longitude: number
    fotoDiri?: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PresensiCreateOrConnectWithoutUserInput = {
    where: PresensiWhereUniqueInput
    create: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput>
  }

  export type PresensiCreateManyUserInputEnvelope = {
    data: PresensiCreateManyUserInput | PresensiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LaporanCreateWithoutUserInput = {
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    site: SiteCreateNestedOneWithoutReportInput
  }

  export type LaporanUncheckedCreateWithoutUserInput = {
    id?: number
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    siteName: string
  }

  export type LaporanCreateOrConnectWithoutUserInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput>
  }

  export type LaporanCreateManyUserInputEnvelope = {
    data: LaporanCreateManyUserInput | LaporanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IjinCreateWithoutUserInput = {
    ijinDate?: Date | string
    ijinStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type IjinUncheckedCreateWithoutUserInput = {
    id?: number
    ijinDate?: Date | string
    ijinStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type IjinCreateOrConnectWithoutUserInput = {
    where: IjinWhereUniqueInput
    create: XOR<IjinCreateWithoutUserInput, IjinUncheckedCreateWithoutUserInput>
  }

  export type IjinCreateManyUserInputEnvelope = {
    data: IjinCreateManyUserInput | IjinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LiburCreateWithoutUserInput = {
    liburDate: Date | string
    liburStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LiburUncheckedCreateWithoutUserInput = {
    id?: number
    liburDate: Date | string
    liburStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LiburCreateOrConnectWithoutUserInput = {
    where: LiburWhereUniqueInput
    create: XOR<LiburCreateWithoutUserInput, LiburUncheckedCreateWithoutUserInput>
  }

  export type LiburCreateManyUserInputEnvelope = {
    data: LiburCreateManyUserInput | LiburCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HelpCreateWithoutUserInput = {
    deskripsi: string
    gambar?: string | null
    helpDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HelpUncheckedCreateWithoutUserInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    helpDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HelpCreateOrConnectWithoutUserInput = {
    where: HelpWhereUniqueInput
    create: XOR<HelpCreateWithoutUserInput, HelpUncheckedCreateWithoutUserInput>
  }

  export type HelpCreateManyUserInputEnvelope = {
    data: HelpCreateManyUserInput | HelpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUserInput = {
    deskripsi: string
    gambar?: string | null
    ticketDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    ticketDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: UserAddressUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: UserAddressUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type SiteUpsertWithWhereUniqueWithoutUsersInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutUsersInput, SiteUncheckedUpdateWithoutUsersInput>
    create: XOR<SiteCreateWithoutUsersInput, SiteUncheckedCreateWithoutUsersInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutUsersInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutUsersInput, SiteUncheckedUpdateWithoutUsersInput>
  }

  export type SiteUpdateManyWithWhereWithoutUsersInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutUsersInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    image?: StringNullableFilter<"Site"> | string | null
    status?: EnumsiteStatusFilter<"Site"> | $Enums.siteStatus
    createdAt?: DateTimeFilter<"Site"> | Date | string
    updatedAt?: DateTimeFilter<"Site"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Site"> | Date | string | null
    addressId?: IntFilter<"Site"> | number
  }

  export type JadwalShiftUpsertWithWhereUniqueWithoutUserInput = {
    where: JadwalShiftWhereUniqueInput
    update: XOR<JadwalShiftUpdateWithoutUserInput, JadwalShiftUncheckedUpdateWithoutUserInput>
    create: XOR<JadwalShiftCreateWithoutUserInput, JadwalShiftUncheckedCreateWithoutUserInput>
  }

  export type JadwalShiftUpdateWithWhereUniqueWithoutUserInput = {
    where: JadwalShiftWhereUniqueInput
    data: XOR<JadwalShiftUpdateWithoutUserInput, JadwalShiftUncheckedUpdateWithoutUserInput>
  }

  export type JadwalShiftUpdateManyWithWhereWithoutUserInput = {
    where: JadwalShiftScalarWhereInput
    data: XOR<JadwalShiftUpdateManyMutationInput, JadwalShiftUncheckedUpdateManyWithoutUserInput>
  }

  export type JadwalShiftScalarWhereInput = {
    AND?: JadwalShiftScalarWhereInput | JadwalShiftScalarWhereInput[]
    OR?: JadwalShiftScalarWhereInput[]
    NOT?: JadwalShiftScalarWhereInput | JadwalShiftScalarWhereInput[]
    id?: IntFilter<"JadwalShift"> | number
    shiftDate?: DateTimeFilter<"JadwalShift"> | Date | string
    createdAt?: DateTimeFilter<"JadwalShift"> | Date | string
    updatedAt?: DateTimeFilter<"JadwalShift"> | Date | string
    deletedAt?: DateTimeNullableFilter<"JadwalShift"> | Date | string | null
    userId?: IntFilter<"JadwalShift"> | number
    siteId?: IntFilter<"JadwalShift"> | number
  }

  export type PresensiUpsertWithWhereUniqueWithoutUserInput = {
    where: PresensiWhereUniqueInput
    update: XOR<PresensiUpdateWithoutUserInput, PresensiUncheckedUpdateWithoutUserInput>
    create: XOR<PresensiCreateWithoutUserInput, PresensiUncheckedCreateWithoutUserInput>
  }

  export type PresensiUpdateWithWhereUniqueWithoutUserInput = {
    where: PresensiWhereUniqueInput
    data: XOR<PresensiUpdateWithoutUserInput, PresensiUncheckedUpdateWithoutUserInput>
  }

  export type PresensiUpdateManyWithWhereWithoutUserInput = {
    where: PresensiScalarWhereInput
    data: XOR<PresensiUpdateManyMutationInput, PresensiUncheckedUpdateManyWithoutUserInput>
  }

  export type PresensiScalarWhereInput = {
    AND?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
    OR?: PresensiScalarWhereInput[]
    NOT?: PresensiScalarWhereInput | PresensiScalarWhereInput[]
    id?: IntFilter<"Presensi"> | number
    presensiDate?: DateTimeFilter<"Presensi"> | Date | string
    latitude?: IntFilter<"Presensi"> | number
    longitude?: IntFilter<"Presensi"> | number
    fotoDiri?: StringNullableFilter<"Presensi"> | string | null
    statusPresensi?: EnumStatusPresensiFilter<"Presensi"> | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFilter<"Presensi"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Presensi"> | Date | string
    updatedAt?: DateTimeFilter<"Presensi"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Presensi"> | Date | string | null
    userId?: IntFilter<"Presensi"> | number
  }

  export type LaporanUpsertWithWhereUniqueWithoutUserInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutUserInput, LaporanUncheckedUpdateWithoutUserInput>
    create: XOR<LaporanCreateWithoutUserInput, LaporanUncheckedCreateWithoutUserInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutUserInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutUserInput, LaporanUncheckedUpdateWithoutUserInput>
  }

  export type LaporanUpdateManyWithWhereWithoutUserInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutUserInput>
  }

  export type LaporanScalarWhereInput = {
    AND?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    OR?: LaporanScalarWhereInput[]
    NOT?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    id?: IntFilter<"Laporan"> | number
    fotoSampel?: StringNullableListFilter<"Laporan">
    flowRate?: FloatFilter<"Laporan"> | number
    volt?: FloatFilter<"Laporan"> | number
    pH?: FloatFilter<"Laporan"> | number
    ampere?: FloatFilter<"Laporan"> | number
    TDS?: FloatFilter<"Laporan"> | number
    EC?: FloatFilter<"Laporan"> | number
    laporanStatus?: EnumStatusApprovalFilter<"Laporan"> | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFilter<"Laporan"> | $Enums.EquipmentStatus
    notes?: StringFilter<"Laporan"> | string
    laporanDate?: DateTimeFilter<"Laporan"> | Date | string
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    siteName?: StringFilter<"Laporan"> | string
    userId?: IntFilter<"Laporan"> | number
  }

  export type IjinUpsertWithWhereUniqueWithoutUserInput = {
    where: IjinWhereUniqueInput
    update: XOR<IjinUpdateWithoutUserInput, IjinUncheckedUpdateWithoutUserInput>
    create: XOR<IjinCreateWithoutUserInput, IjinUncheckedCreateWithoutUserInput>
  }

  export type IjinUpdateWithWhereUniqueWithoutUserInput = {
    where: IjinWhereUniqueInput
    data: XOR<IjinUpdateWithoutUserInput, IjinUncheckedUpdateWithoutUserInput>
  }

  export type IjinUpdateManyWithWhereWithoutUserInput = {
    where: IjinScalarWhereInput
    data: XOR<IjinUpdateManyMutationInput, IjinUncheckedUpdateManyWithoutUserInput>
  }

  export type IjinScalarWhereInput = {
    AND?: IjinScalarWhereInput | IjinScalarWhereInput[]
    OR?: IjinScalarWhereInput[]
    NOT?: IjinScalarWhereInput | IjinScalarWhereInput[]
    id?: IntFilter<"Ijin"> | number
    ijinDate?: DateTimeFilter<"Ijin"> | Date | string
    ijinStatus?: EnumStatusApprovalFilter<"Ijin"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Ijin"> | Date | string
    updatedAt?: DateTimeFilter<"Ijin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ijin"> | Date | string | null
    userId?: IntFilter<"Ijin"> | number
  }

  export type LiburUpsertWithWhereUniqueWithoutUserInput = {
    where: LiburWhereUniqueInput
    update: XOR<LiburUpdateWithoutUserInput, LiburUncheckedUpdateWithoutUserInput>
    create: XOR<LiburCreateWithoutUserInput, LiburUncheckedCreateWithoutUserInput>
  }

  export type LiburUpdateWithWhereUniqueWithoutUserInput = {
    where: LiburWhereUniqueInput
    data: XOR<LiburUpdateWithoutUserInput, LiburUncheckedUpdateWithoutUserInput>
  }

  export type LiburUpdateManyWithWhereWithoutUserInput = {
    where: LiburScalarWhereInput
    data: XOR<LiburUpdateManyMutationInput, LiburUncheckedUpdateManyWithoutUserInput>
  }

  export type LiburScalarWhereInput = {
    AND?: LiburScalarWhereInput | LiburScalarWhereInput[]
    OR?: LiburScalarWhereInput[]
    NOT?: LiburScalarWhereInput | LiburScalarWhereInput[]
    id?: IntFilter<"Libur"> | number
    liburDate?: DateTimeFilter<"Libur"> | Date | string
    liburStatus?: EnumStatusApprovalFilter<"Libur"> | $Enums.StatusApproval
    createdAt?: DateTimeFilter<"Libur"> | Date | string
    updatedAt?: DateTimeFilter<"Libur"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Libur"> | Date | string | null
    userId?: IntFilter<"Libur"> | number
  }

  export type HelpUpsertWithWhereUniqueWithoutUserInput = {
    where: HelpWhereUniqueInput
    update: XOR<HelpUpdateWithoutUserInput, HelpUncheckedUpdateWithoutUserInput>
    create: XOR<HelpCreateWithoutUserInput, HelpUncheckedCreateWithoutUserInput>
  }

  export type HelpUpdateWithWhereUniqueWithoutUserInput = {
    where: HelpWhereUniqueInput
    data: XOR<HelpUpdateWithoutUserInput, HelpUncheckedUpdateWithoutUserInput>
  }

  export type HelpUpdateManyWithWhereWithoutUserInput = {
    where: HelpScalarWhereInput
    data: XOR<HelpUpdateManyMutationInput, HelpUncheckedUpdateManyWithoutUserInput>
  }

  export type HelpScalarWhereInput = {
    AND?: HelpScalarWhereInput | HelpScalarWhereInput[]
    OR?: HelpScalarWhereInput[]
    NOT?: HelpScalarWhereInput | HelpScalarWhereInput[]
    id?: IntFilter<"Help"> | number
    deskripsi?: StringFilter<"Help"> | string
    gambar?: StringNullableFilter<"Help"> | string | null
    helpDate?: DateTimeFilter<"Help"> | Date | string
    createdAt?: DateTimeFilter<"Help"> | Date | string
    updatedAt?: DateTimeFilter<"Help"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Help"> | Date | string | null
    userId?: IntFilter<"Help"> | number
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    deskripsi?: StringFilter<"Ticket"> | string
    gambar?: StringNullableFilter<"Ticket"> | string | null
    ticketDate?: DateTimeFilter<"Ticket"> | Date | string
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    userId?: IntFilter<"Ticket"> | number
  }

  export type UserCreateWithoutRoleInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    roleId?: IntFilter<"User"> | number
  }

  export type UserCreateWithoutShiftInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShiftInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShiftInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShiftInput, UserUncheckedCreateWithoutShiftInput>
  }

  export type SiteCreateWithoutShiftInput = {
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address: SiteAddressCreateNestedOneWithoutSiteInput
    users?: UserCreateNestedManyWithoutSitesInput
    report?: LaporanCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutShiftInput = {
    id?: number
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addressId: number
    users?: UserUncheckedCreateNestedManyWithoutSitesInput
    report?: LaporanUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutShiftInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutShiftInput, SiteUncheckedCreateWithoutShiftInput>
  }

  export type UserUpsertWithoutShiftInput = {
    update: XOR<UserUpdateWithoutShiftInput, UserUncheckedUpdateWithoutShiftInput>
    create: XOR<UserCreateWithoutShiftInput, UserUncheckedCreateWithoutShiftInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShiftInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShiftInput, UserUncheckedUpdateWithoutShiftInput>
  }

  export type UserUpdateWithoutShiftInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SiteUpsertWithoutShiftInput = {
    update: XOR<SiteUpdateWithoutShiftInput, SiteUncheckedUpdateWithoutShiftInput>
    create: XOR<SiteCreateWithoutShiftInput, SiteUncheckedCreateWithoutShiftInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutShiftInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutShiftInput, SiteUncheckedUpdateWithoutShiftInput>
  }

  export type SiteUpdateWithoutShiftInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: SiteAddressUpdateOneRequiredWithoutSiteNestedInput
    users?: UserUpdateManyWithoutSitesNestedInput
    report?: LaporanUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutShiftInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutSitesNestedInput
    report?: LaporanUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteAddressCreateWithoutSiteInput = {
    address: string
    city: string
    province: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SiteAddressUncheckedCreateWithoutSiteInput = {
    id?: number
    address: string
    city: string
    province: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SiteAddressCreateOrConnectWithoutSiteInput = {
    where: SiteAddressWhereUniqueInput
    create: XOR<SiteAddressCreateWithoutSiteInput, SiteAddressUncheckedCreateWithoutSiteInput>
  }

  export type UserCreateWithoutSitesInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSitesInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
  }

  export type LaporanCreateWithoutSiteInput = {
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutLaporanInput
  }

  export type LaporanUncheckedCreateWithoutSiteInput = {
    id?: number
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type LaporanCreateOrConnectWithoutSiteInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutSiteInput, LaporanUncheckedCreateWithoutSiteInput>
  }

  export type LaporanCreateManySiteInputEnvelope = {
    data: LaporanCreateManySiteInput | LaporanCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type JadwalShiftCreateWithoutSiteInput = {
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutShiftInput
  }

  export type JadwalShiftUncheckedCreateWithoutSiteInput = {
    id?: number
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type JadwalShiftCreateOrConnectWithoutSiteInput = {
    where: JadwalShiftWhereUniqueInput
    create: XOR<JadwalShiftCreateWithoutSiteInput, JadwalShiftUncheckedCreateWithoutSiteInput>
  }

  export type JadwalShiftCreateManySiteInputEnvelope = {
    data: JadwalShiftCreateManySiteInput | JadwalShiftCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type SiteAddressUpsertWithoutSiteInput = {
    update: XOR<SiteAddressUpdateWithoutSiteInput, SiteAddressUncheckedUpdateWithoutSiteInput>
    create: XOR<SiteAddressCreateWithoutSiteInput, SiteAddressUncheckedCreateWithoutSiteInput>
    where?: SiteAddressWhereInput
  }

  export type SiteAddressUpdateToOneWithWhereWithoutSiteInput = {
    where?: SiteAddressWhereInput
    data: XOR<SiteAddressUpdateWithoutSiteInput, SiteAddressUncheckedUpdateWithoutSiteInput>
  }

  export type SiteAddressUpdateWithoutSiteInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SiteAddressUncheckedUpdateWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutSitesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSitesInput, UserUncheckedUpdateWithoutSitesInput>
    create: XOR<UserCreateWithoutSitesInput, UserUncheckedCreateWithoutSitesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSitesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSitesInput, UserUncheckedUpdateWithoutSitesInput>
  }

  export type UserUpdateManyWithWhereWithoutSitesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSitesInput>
  }

  export type LaporanUpsertWithWhereUniqueWithoutSiteInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutSiteInput, LaporanUncheckedUpdateWithoutSiteInput>
    create: XOR<LaporanCreateWithoutSiteInput, LaporanUncheckedCreateWithoutSiteInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutSiteInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutSiteInput, LaporanUncheckedUpdateWithoutSiteInput>
  }

  export type LaporanUpdateManyWithWhereWithoutSiteInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutSiteInput>
  }

  export type JadwalShiftUpsertWithWhereUniqueWithoutSiteInput = {
    where: JadwalShiftWhereUniqueInput
    update: XOR<JadwalShiftUpdateWithoutSiteInput, JadwalShiftUncheckedUpdateWithoutSiteInput>
    create: XOR<JadwalShiftCreateWithoutSiteInput, JadwalShiftUncheckedCreateWithoutSiteInput>
  }

  export type JadwalShiftUpdateWithWhereUniqueWithoutSiteInput = {
    where: JadwalShiftWhereUniqueInput
    data: XOR<JadwalShiftUpdateWithoutSiteInput, JadwalShiftUncheckedUpdateWithoutSiteInput>
  }

  export type JadwalShiftUpdateManyWithWhereWithoutSiteInput = {
    where: JadwalShiftScalarWhereInput
    data: XOR<JadwalShiftUpdateManyMutationInput, JadwalShiftUncheckedUpdateManyWithoutSiteInput>
  }

  export type SiteCreateWithoutAddressInput = {
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutSitesInput
    report?: LaporanCreateNestedManyWithoutSiteInput
    shift?: JadwalShiftCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutSitesInput
    report?: LaporanUncheckedCreateNestedManyWithoutSiteInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutAddressInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutAddressInput, SiteUncheckedCreateWithoutAddressInput>
  }

  export type SiteUpsertWithoutAddressInput = {
    update: XOR<SiteUpdateWithoutAddressInput, SiteUncheckedUpdateWithoutAddressInput>
    create: XOR<SiteCreateWithoutAddressInput, SiteUncheckedCreateWithoutAddressInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutAddressInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutAddressInput, SiteUncheckedUpdateWithoutAddressInput>
  }

  export type SiteUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutSitesNestedInput
    report?: LaporanUpdateManyWithoutSiteNestedInput
    shift?: JadwalShiftUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutSitesNestedInput
    report?: LaporanUncheckedUpdateManyWithoutSiteNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserAddressCreateWithoutProfileInput = {
    address: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserAddressUncheckedCreateWithoutProfileInput = {
    id?: number
    address: string
    city: string
    province: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserAddressCreateOrConnectWithoutProfileInput = {
    where: UserAddressWhereUniqueInput
    create: XOR<UserAddressCreateWithoutProfileInput, UserAddressUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserAddressUpsertWithoutProfileInput = {
    update: XOR<UserAddressUpdateWithoutProfileInput, UserAddressUncheckedUpdateWithoutProfileInput>
    create: XOR<UserAddressCreateWithoutProfileInput, UserAddressUncheckedCreateWithoutProfileInput>
    where?: UserAddressWhereInput
  }

  export type UserAddressUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserAddressWhereInput
    data: XOR<UserAddressUpdateWithoutProfileInput, UserAddressUncheckedUpdateWithoutProfileInput>
  }

  export type UserAddressUpdateWithoutProfileInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAddressUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProfileCreateWithoutAddressInput = {
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAddressInput = {
    id?: number
    birthDate: Date | string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type ProfileCreateOrConnectWithoutAddressInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAddressInput, ProfileUncheckedCreateWithoutAddressInput>
  }

  export type ProfileUpsertWithoutAddressInput = {
    update: XOR<ProfileUpdateWithoutAddressInput, ProfileUncheckedUpdateWithoutAddressInput>
    create: XOR<ProfileCreateWithoutAddressInput, ProfileUncheckedCreateWithoutAddressInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAddressInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAddressInput, ProfileUncheckedUpdateWithoutAddressInput>
  }

  export type ProfileUpdateWithoutAddressInput = {
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutPresensiInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresensiInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresensiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
  }

  export type UserUpsertWithoutPresensiInput = {
    update: XOR<UserUpdateWithoutPresensiInput, UserUncheckedUpdateWithoutPresensiInput>
    create: XOR<UserCreateWithoutPresensiInput, UserUncheckedCreateWithoutPresensiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresensiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresensiInput, UserUncheckedUpdateWithoutPresensiInput>
  }

  export type UserUpdateWithoutPresensiInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresensiInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SiteCreateWithoutReportInput = {
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    address: SiteAddressCreateNestedOneWithoutSiteInput
    users?: UserCreateNestedManyWithoutSitesInput
    shift?: JadwalShiftCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutReportInput = {
    id?: number
    name: string
    image?: string | null
    status?: $Enums.siteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    addressId: number
    users?: UserUncheckedCreateNestedManyWithoutSitesInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutReportInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutReportInput, SiteUncheckedCreateWithoutReportInput>
  }

  export type UserCreateWithoutLaporanInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLaporanInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLaporanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
  }

  export type SiteUpsertWithoutReportInput = {
    update: XOR<SiteUpdateWithoutReportInput, SiteUncheckedUpdateWithoutReportInput>
    create: XOR<SiteCreateWithoutReportInput, SiteUncheckedCreateWithoutReportInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutReportInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutReportInput, SiteUncheckedUpdateWithoutReportInput>
  }

  export type SiteUpdateWithoutReportInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: SiteAddressUpdateOneRequiredWithoutSiteNestedInput
    users?: UserUpdateManyWithoutSitesNestedInput
    shift?: JadwalShiftUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutSitesNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type UserUpsertWithoutLaporanInput = {
    update: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
    create: XOR<UserCreateWithoutLaporanInput, UserUncheckedCreateWithoutLaporanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaporanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaporanInput, UserUncheckedUpdateWithoutLaporanInput>
  }

  export type UserUpdateWithoutLaporanInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLaporanInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIjinInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIjinInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIjinInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIjinInput, UserUncheckedCreateWithoutIjinInput>
  }

  export type UserUpsertWithoutIjinInput = {
    update: XOR<UserUpdateWithoutIjinInput, UserUncheckedUpdateWithoutIjinInput>
    create: XOR<UserCreateWithoutIjinInput, UserUncheckedCreateWithoutIjinInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIjinInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIjinInput, UserUncheckedUpdateWithoutIjinInput>
  }

  export type UserUpdateWithoutIjinInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIjinInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLiburInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLiburInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLiburInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLiburInput, UserUncheckedCreateWithoutLiburInput>
  }

  export type UserUpsertWithoutLiburInput = {
    update: XOR<UserUpdateWithoutLiburInput, UserUncheckedUpdateWithoutLiburInput>
    create: XOR<UserCreateWithoutLiburInput, UserUncheckedCreateWithoutLiburInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLiburInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLiburInput, UserUncheckedUpdateWithoutLiburInput>
  }

  export type UserUpdateWithoutLiburInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLiburInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHelpInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    ticket?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHelpInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHelpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHelpInput, UserUncheckedCreateWithoutHelpInput>
  }

  export type UserUpsertWithoutHelpInput = {
    update: XOR<UserUpdateWithoutHelpInput, UserUncheckedUpdateWithoutHelpInput>
    create: XOR<UserCreateWithoutHelpInput, UserUncheckedCreateWithoutHelpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHelpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHelpInput, UserUncheckedUpdateWithoutHelpInput>
  }

  export type UserUpdateWithoutHelpInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHelpInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTicketInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUsersInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    sites?: SiteCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftCreateNestedManyWithoutUserInput
    presensi?: PresensiCreateNestedManyWithoutUserInput
    laporan?: LaporanCreateNestedManyWithoutUserInput
    ijin?: IjinCreateNestedManyWithoutUserInput
    libur?: LiburCreateNestedManyWithoutUserInput
    help?: HelpCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    roleId: number
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    sites?: SiteUncheckedCreateNestedManyWithoutUsersInput
    shift?: JadwalShiftUncheckedCreateNestedManyWithoutUserInput
    presensi?: PresensiUncheckedCreateNestedManyWithoutUserInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutUserInput
    ijin?: IjinUncheckedCreateNestedManyWithoutUserInput
    libur?: LiburUncheckedCreateNestedManyWithoutUserInput
    help?: HelpUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
  }

  export type UserUpsertWithoutTicketInput = {
    update: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateWithoutTicketInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JadwalShiftCreateManyUserInput = {
    id?: number
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    siteId: number
  }

  export type PresensiCreateManyUserInput = {
    id?: number
    presensiDate: Date | string
    latitude: number
    longitude: number
    fotoDiri?: string | null
    statusPresensi: $Enums.StatusPresensi
    statusApproval?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LaporanCreateManyUserInput = {
    id?: number
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    siteName: string
  }

  export type IjinCreateManyUserInput = {
    id?: number
    ijinDate?: Date | string
    ijinStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type LiburCreateManyUserInput = {
    id?: number
    liburDate: Date | string
    liburStatus?: $Enums.StatusApproval
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type HelpCreateManyUserInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    helpDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketCreateManyUserInput = {
    id?: number
    deskripsi: string
    gambar?: string | null
    ticketDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SiteUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: SiteAddressUpdateOneRequiredWithoutSiteNestedInput
    report?: LaporanUpdateManyWithoutSiteNestedInput
    shift?: JadwalShiftUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: IntFieldUpdateOperationsInput | number
    report?: LaporanUncheckedUpdateManyWithoutSiteNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumsiteStatusFieldUpdateOperationsInput | $Enums.siteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalShiftUpdateWithoutUserInput = {
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneRequiredWithoutShiftNestedInput
  }

  export type JadwalShiftUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    siteId?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalShiftUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    siteId?: IntFieldUpdateOperationsInput | number
  }

  export type PresensiUpdateWithoutUserInput = {
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PresensiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PresensiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    presensiDate?: DateTimeFieldUpdateOperationsInput | Date | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    fotoDiri?: NullableStringFieldUpdateOperationsInput | string | null
    statusPresensi?: EnumStatusPresensiFieldUpdateOperationsInput | $Enums.StatusPresensi
    statusApproval?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanUpdateWithoutUserInput = {
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    site?: SiteUpdateOneRequiredWithoutReportNestedInput
  }

  export type LaporanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    siteName?: StringFieldUpdateOperationsInput | string
  }

  export type LaporanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    siteName?: StringFieldUpdateOperationsInput | string
  }

  export type IjinUpdateWithoutUserInput = {
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IjinUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IjinUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ijinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ijinStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LiburUpdateWithoutUserInput = {
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LiburUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LiburUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    liburDate?: DateTimeFieldUpdateOperationsInput | Date | string
    liburStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HelpUpdateWithoutUserInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HelpUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HelpUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    helpDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUpdateWithoutUserInput = {
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    deskripsi?: StringFieldUpdateOperationsInput | string
    gambar?: NullableStringFieldUpdateOperationsInput | string | null
    ticketDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyRoleInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUpdateOneWithoutUserNestedInput
    sites?: SiteUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    sites?: SiteUncheckedUpdateManyWithoutUsersNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LaporanCreateManySiteInput = {
    id?: number
    fotoSampel?: LaporanCreatefotoSampelInput | string[]
    flowRate: number
    volt: number
    pH: number
    ampere: number
    TDS: number
    EC: number
    laporanStatus?: $Enums.StatusApproval
    agitatorStatus?: $Enums.EquipmentStatus
    settleStatus?: $Enums.EquipmentStatus
    outFilterStatus?: $Enums.EquipmentStatus
    notes: string
    laporanDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type JadwalShiftCreateManySiteInput = {
    id?: number
    shiftDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    userId: number
  }

  export type UserUpdateWithoutSitesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    shift?: JadwalShiftUpdateManyWithoutUserNestedInput
    presensi?: PresensiUpdateManyWithoutUserNestedInput
    laporan?: LaporanUpdateManyWithoutUserNestedInput
    ijin?: IjinUpdateManyWithoutUserNestedInput
    libur?: LiburUpdateManyWithoutUserNestedInput
    help?: HelpUpdateManyWithoutUserNestedInput
    ticket?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    shift?: JadwalShiftUncheckedUpdateManyWithoutUserNestedInput
    presensi?: PresensiUncheckedUpdateManyWithoutUserNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutUserNestedInput
    ijin?: IjinUncheckedUpdateManyWithoutUserNestedInput
    libur?: LiburUncheckedUpdateManyWithoutUserNestedInput
    help?: HelpUncheckedUpdateManyWithoutUserNestedInput
    ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanUpdateWithoutSiteInput = {
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LaporanUncheckedUpdateManyWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fotoSampel?: LaporanUpdatefotoSampelInput | string[]
    flowRate?: FloatFieldUpdateOperationsInput | number
    volt?: FloatFieldUpdateOperationsInput | number
    pH?: FloatFieldUpdateOperationsInput | number
    ampere?: FloatFieldUpdateOperationsInput | number
    TDS?: FloatFieldUpdateOperationsInput | number
    EC?: FloatFieldUpdateOperationsInput | number
    laporanStatus?: EnumStatusApprovalFieldUpdateOperationsInput | $Enums.StatusApproval
    agitatorStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    settleStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    outFilterStatus?: EnumEquipmentStatusFieldUpdateOperationsInput | $Enums.EquipmentStatus
    notes?: StringFieldUpdateOperationsInput | string
    laporanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalShiftUpdateWithoutSiteInput = {
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutShiftNestedInput
  }

  export type JadwalShiftUncheckedUpdateWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type JadwalShiftUncheckedUpdateManyWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    shiftDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}