export declare const CropStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly HARVESTED: 'HARVESTED';
    readonly FAILED: 'FAILED';
};
export type CropStatus = (typeof CropStatus)[keyof typeof CropStatus];
export declare const SoilRecordSource: {
    readonly MANULAL: 'MANULAL';
    readonly SOIL_REPORT: 'SOIL_REPORT';
    readonly SENSOR: 'SENSOR';
};
export type SoilRecordSource = (typeof SoilRecordSource)[keyof typeof SoilRecordSource];
export declare const DiagnosisStatus: {
    readonly PENDING: 'PENDING';
    readonly COMPLETED: 'COMPLETED';
    readonly FAILED: 'FAILED';
};
export type DiagnosisStatus = (typeof DiagnosisStatus)[keyof typeof DiagnosisStatus];
export declare const AlertType: {
    readonly DISEASE: 'DISEASE';
    readonly WEATHER: 'WEATHER';
    readonly CROP_HEALTH: 'CROP_HEALTH';
    readonly IRRIGATION: 'IRRIGATION';
    readonly GENERAL: 'GENERAL';
};
export type AlertType = (typeof AlertType)[keyof typeof AlertType];
export declare const AlertSeverity: {
    readonly INFO: 'INFO';
    readonly WARNING: 'WARNING';
    readonly CRITICAL: 'CRITICAL';
};
export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity];
//# sourceMappingURL=enums.d.ts.map