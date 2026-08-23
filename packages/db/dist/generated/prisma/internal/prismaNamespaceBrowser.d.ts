import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: 'User';
    readonly Farm: 'Farm';
    readonly Crop: 'Crop';
    readonly CropImage: 'CropImage';
    readonly Diagnosis: 'Diagnosis';
    readonly SoilRecord: 'SoilRecord';
    readonly WeatherSnapShot: 'WeatherSnapShot';
    readonly CropRecomendation: 'CropRecomendation';
    readonly CropRecomendationItem: 'CropRecomendationItem';
    readonly MonitoringRecord: 'MonitoringRecord';
    readonly Alert: 'Alert';
    readonly NotificationPreference: 'NotificationPreference';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly phone: 'phone';
    readonly email: 'email';
    readonly passwordHash: 'passwordHash';
    readonly googleId: 'googleId';
    readonly language: 'language';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const FarmScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly name: 'name';
    readonly latitide: 'latitide';
    readonly longitude: 'longitude';
    readonly area: 'area';
    readonly areaUnit: 'areaUnit';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum];
export declare const CropScalarFieldEnum: {
    readonly id: 'id';
    readonly farmId: 'farmId';
    readonly name: 'name';
    readonly variety: 'variety';
    readonly platedAt: 'platedAt';
    readonly harvestedAt: 'harvestedAt';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum];
export declare const CropImageScalarFieldEnum: {
    readonly id: 'id';
    readonly cropId: 'cropId';
    readonly url: 'url';
    readonly uploadedAt: 'uploadedAt';
};
export type CropImageScalarFieldEnum = (typeof CropImageScalarFieldEnum)[keyof typeof CropImageScalarFieldEnum];
export declare const DiagnosisScalarFieldEnum: {
    readonly id: 'id';
    readonly cropId: 'cropId';
    readonly imageId: 'imageId';
    readonly disease: 'disease';
    readonly confidence: 'confidence';
    readonly modelVersion: 'modelVersion';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
};
export type DiagnosisScalarFieldEnum = (typeof DiagnosisScalarFieldEnum)[keyof typeof DiagnosisScalarFieldEnum];
export declare const SoilRecordScalarFieldEnum: {
    readonly id: 'id';
    readonly farmId: 'farmId';
    readonly nitrogen: 'nitrogen';
    readonly phosphorous: 'phosphorous';
    readonly potassium: 'potassium';
    readonly ph: 'ph';
    readonly source: 'source';
    readonly createdAt: 'createdAt';
};
export type SoilRecordScalarFieldEnum = (typeof SoilRecordScalarFieldEnum)[keyof typeof SoilRecordScalarFieldEnum];
export declare const WeatherSnapShotScalarFieldEnum: {
    readonly id: 'id';
    readonly farmId: 'farmId';
    readonly temperature: 'temperature';
    readonly humidity: 'humidity';
    readonly rainfall: 'rainfall';
    readonly recordedAt: 'recordedAt';
};
export type WeatherSnapShotScalarFieldEnum = (typeof WeatherSnapShotScalarFieldEnum)[keyof typeof WeatherSnapShotScalarFieldEnum];
export declare const CropRecomendationScalarFieldEnum: {
    readonly id: 'id';
    readonly farmId: 'farmId';
    readonly modelVersion: 'modelVersion';
    readonly createdAt: 'createdAt';
};
export type CropRecomendationScalarFieldEnum = (typeof CropRecomendationScalarFieldEnum)[keyof typeof CropRecomendationScalarFieldEnum];
export declare const CropRecomendationItemScalarFieldEnum: {
    readonly id: 'id';
    readonly recomendationId: 'recomendationId';
    readonly cropName: 'cropName';
    readonly score: 'score';
    readonly rank: 'rank';
};
export type CropRecomendationItemScalarFieldEnum = (typeof CropRecomendationItemScalarFieldEnum)[keyof typeof CropRecomendationItemScalarFieldEnum];
export declare const MonitoringRecordScalarFieldEnum: {
    readonly id: 'id';
    readonly cropId: 'cropId';
    readonly healthScore: 'healthScore';
    readonly growthStage: 'growthStage';
    readonly notes: 'notes';
    readonly imageUrl: 'imageUrl';
    readonly createdAt: 'createdAt';
};
export type MonitoringRecordScalarFieldEnum = (typeof MonitoringRecordScalarFieldEnum)[keyof typeof MonitoringRecordScalarFieldEnum];
export declare const AlertScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly cropId: 'cropId';
    readonly diagnosisId: 'diagnosisId';
    readonly type: 'type';
    readonly severity: 'severity';
    readonly title: 'title';
    readonly message: 'message';
    readonly readAt: 'readAt';
    readonly createdAt: 'createdAt';
};
export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum];
export declare const NotificationPreferenceScalarFieldEnum: {
    readonly id: 'id';
    readonly userId: 'userId';
    readonly whatsappEnabled: 'whatsappEnabled';
    readonly diseaseAlerts: 'diseaseAlerts';
    readonly weatherAlerts: 'weatherAlerts';
    readonly cropHealthAlerts: 'cropHealthAlerts';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type NotificationPreferenceScalarFieldEnum = (typeof NotificationPreferenceScalarFieldEnum)[keyof typeof NotificationPreferenceScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map