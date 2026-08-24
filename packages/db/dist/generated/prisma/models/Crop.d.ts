import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Crop
 *
 */
export type CropModel = runtime.Types.Result.DefaultSelection<Prisma.$CropPayload>;
export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null;
    _min: CropMinAggregateOutputType | null;
    _max: CropMaxAggregateOutputType | null;
};
export type CropMinAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    name: string | null;
    variety: string | null;
    platedAt: Date | null;
    harvestedAt: Date | null;
    status: $Enums.CropStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CropMaxAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    name: string | null;
    variety: string | null;
    platedAt: Date | null;
    harvestedAt: Date | null;
    status: $Enums.CropStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CropCountAggregateOutputType = {
    id: number;
    farmId: number;
    name: number;
    variety: number;
    platedAt: number;
    harvestedAt: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CropMinAggregateInputType = {
    id?: true;
    farmId?: true;
    name?: true;
    variety?: true;
    platedAt?: true;
    harvestedAt?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CropMaxAggregateInputType = {
    id?: true;
    farmId?: true;
    name?: true;
    variety?: true;
    platedAt?: true;
    harvestedAt?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CropCountAggregateInputType = {
    id?: true;
    farmId?: true;
    name?: true;
    variety?: true;
    platedAt?: true;
    harvestedAt?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CropAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: Prisma.CropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Crops to fetch.
     */
    orderBy?: Prisma.CropOrderByWithRelationInput | Prisma.CropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Crops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType;
};
export type GetCropAggregateType<T extends CropAggregateArgs> = {
    [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCrop[P]> : Prisma.GetScalarType<T[P], AggregateCrop[P]>;
};
export type CropGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropWhereInput;
    orderBy?: Prisma.CropOrderByWithAggregationInput | Prisma.CropOrderByWithAggregationInput[];
    by: Prisma.CropScalarFieldEnum[] | Prisma.CropScalarFieldEnum;
    having?: Prisma.CropScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CropCountAggregateInputType | true;
    _min?: CropMinAggregateInputType;
    _max?: CropMaxAggregateInputType;
};
export type CropGroupByOutputType = {
    id: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date;
    harvestedAt: Date | null;
    status: $Enums.CropStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: CropCountAggregateOutputType | null;
    _min: CropMinAggregateOutputType | null;
    _max: CropMaxAggregateOutputType | null;
};
export type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CropGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CropGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CropGroupByOutputType[P]>;
}>>;
export type CropWhereInput = {
    AND?: Prisma.CropWhereInput | Prisma.CropWhereInput[];
    OR?: Prisma.CropWhereInput[];
    NOT?: Prisma.CropWhereInput | Prisma.CropWhereInput[];
    id?: Prisma.StringFilter<"Crop"> | string;
    farmId?: Prisma.StringFilter<"Crop"> | string;
    name?: Prisma.StringFilter<"Crop"> | string;
    variety?: Prisma.StringFilter<"Crop"> | string;
    platedAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    harvestedAt?: Prisma.DateTimeNullableFilter<"Crop"> | Date | string | null;
    status?: Prisma.EnumCropStatusFilter<"Crop"> | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    images?: Prisma.CropImageListRelationFilter;
    diagnoses?: Prisma.DiagnosisListRelationFilter;
    monitoringRecords?: Prisma.MonitoringRecordListRelationFilter;
    alerts?: Prisma.AlertListRelationFilter;
};
export type CropOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    variety?: Prisma.SortOrder;
    platedAt?: Prisma.SortOrder;
    harvestedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farm?: Prisma.FarmOrderByWithRelationInput;
    images?: Prisma.CropImageOrderByRelationAggregateInput;
    diagnoses?: Prisma.DiagnosisOrderByRelationAggregateInput;
    monitoringRecords?: Prisma.MonitoringRecordOrderByRelationAggregateInput;
    alerts?: Prisma.AlertOrderByRelationAggregateInput;
};
export type CropWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CropWhereInput | Prisma.CropWhereInput[];
    OR?: Prisma.CropWhereInput[];
    NOT?: Prisma.CropWhereInput | Prisma.CropWhereInput[];
    farmId?: Prisma.StringFilter<"Crop"> | string;
    name?: Prisma.StringFilter<"Crop"> | string;
    variety?: Prisma.StringFilter<"Crop"> | string;
    platedAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    harvestedAt?: Prisma.DateTimeNullableFilter<"Crop"> | Date | string | null;
    status?: Prisma.EnumCropStatusFilter<"Crop"> | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    images?: Prisma.CropImageListRelationFilter;
    diagnoses?: Prisma.DiagnosisListRelationFilter;
    monitoringRecords?: Prisma.MonitoringRecordListRelationFilter;
    alerts?: Prisma.AlertListRelationFilter;
}, "id">;
export type CropOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    variety?: Prisma.SortOrder;
    platedAt?: Prisma.SortOrder;
    harvestedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CropCountOrderByAggregateInput;
    _max?: Prisma.CropMaxOrderByAggregateInput;
    _min?: Prisma.CropMinOrderByAggregateInput;
};
export type CropScalarWhereWithAggregatesInput = {
    AND?: Prisma.CropScalarWhereWithAggregatesInput | Prisma.CropScalarWhereWithAggregatesInput[];
    OR?: Prisma.CropScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CropScalarWhereWithAggregatesInput | Prisma.CropScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Crop"> | string;
    farmId?: Prisma.StringWithAggregatesFilter<"Crop"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Crop"> | string;
    variety?: Prisma.StringWithAggregatesFilter<"Crop"> | string;
    platedAt?: Prisma.DateTimeWithAggregatesFilter<"Crop"> | Date | string;
    harvestedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Crop"> | Date | string | null;
    status?: Prisma.EnumCropStatusWithAggregatesFilter<"Crop"> | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Crop"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Crop"> | Date | string;
};
export type CropCreateInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCropsInput;
    images?: Prisma.CropImageCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertCreateNestedManyWithoutCropInput;
};
export type CropUncheckedCreateInput = {
    id?: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.CropImageUncheckedCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertUncheckedCreateNestedManyWithoutCropInput;
};
export type CropUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCropsNestedInput;
    images?: Prisma.CropImageUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CropImageUncheckedUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUncheckedUpdateManyWithoutCropNestedInput;
};
export type CropCreateManyInput = {
    id?: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CropUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropListRelationFilter = {
    every?: Prisma.CropWhereInput;
    some?: Prisma.CropWhereInput;
    none?: Prisma.CropWhereInput;
};
export type CropOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CropCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    variety?: Prisma.SortOrder;
    platedAt?: Prisma.SortOrder;
    harvestedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CropMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    variety?: Prisma.SortOrder;
    platedAt?: Prisma.SortOrder;
    harvestedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CropMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    variety?: Prisma.SortOrder;
    platedAt?: Prisma.SortOrder;
    harvestedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CropScalarRelationFilter = {
    is?: Prisma.CropWhereInput;
    isNot?: Prisma.CropWhereInput;
};
export type CropNullableScalarRelationFilter = {
    is?: Prisma.CropWhereInput | null;
    isNot?: Prisma.CropWhereInput | null;
};
export type CropCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutFarmInput, Prisma.CropUncheckedCreateWithoutFarmInput> | Prisma.CropCreateWithoutFarmInput[] | Prisma.CropUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutFarmInput | Prisma.CropCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.CropCreateManyFarmInputEnvelope;
    connect?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
};
export type CropUncheckedCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutFarmInput, Prisma.CropUncheckedCreateWithoutFarmInput> | Prisma.CropCreateWithoutFarmInput[] | Prisma.CropUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutFarmInput | Prisma.CropCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.CropCreateManyFarmInputEnvelope;
    connect?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
};
export type CropUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutFarmInput, Prisma.CropUncheckedCreateWithoutFarmInput> | Prisma.CropCreateWithoutFarmInput[] | Prisma.CropUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutFarmInput | Prisma.CropCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.CropUpsertWithWhereUniqueWithoutFarmInput | Prisma.CropUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.CropCreateManyFarmInputEnvelope;
    set?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    disconnect?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    delete?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    connect?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    update?: Prisma.CropUpdateWithWhereUniqueWithoutFarmInput | Prisma.CropUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.CropUpdateManyWithWhereWithoutFarmInput | Prisma.CropUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.CropScalarWhereInput | Prisma.CropScalarWhereInput[];
};
export type CropUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutFarmInput, Prisma.CropUncheckedCreateWithoutFarmInput> | Prisma.CropCreateWithoutFarmInput[] | Prisma.CropUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutFarmInput | Prisma.CropCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.CropUpsertWithWhereUniqueWithoutFarmInput | Prisma.CropUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.CropCreateManyFarmInputEnvelope;
    set?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    disconnect?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    delete?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    connect?: Prisma.CropWhereUniqueInput | Prisma.CropWhereUniqueInput[];
    update?: Prisma.CropUpdateWithWhereUniqueWithoutFarmInput | Prisma.CropUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.CropUpdateManyWithWhereWithoutFarmInput | Prisma.CropUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.CropScalarWhereInput | Prisma.CropScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EnumCropStatusFieldUpdateOperationsInput = {
    set?: $Enums.CropStatus;
};
export type CropCreateNestedOneWithoutImagesInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutImagesInput, Prisma.CropUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutImagesInput;
    connect?: Prisma.CropWhereUniqueInput;
};
export type CropUpdateOneRequiredWithoutImagesNestedInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutImagesInput, Prisma.CropUncheckedCreateWithoutImagesInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutImagesInput;
    upsert?: Prisma.CropUpsertWithoutImagesInput;
    connect?: Prisma.CropWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CropUpdateToOneWithWhereWithoutImagesInput, Prisma.CropUpdateWithoutImagesInput>, Prisma.CropUncheckedUpdateWithoutImagesInput>;
};
export type CropCreateNestedOneWithoutDiagnosesInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutDiagnosesInput, Prisma.CropUncheckedCreateWithoutDiagnosesInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutDiagnosesInput;
    connect?: Prisma.CropWhereUniqueInput;
};
export type CropUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutDiagnosesInput, Prisma.CropUncheckedCreateWithoutDiagnosesInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutDiagnosesInput;
    upsert?: Prisma.CropUpsertWithoutDiagnosesInput;
    connect?: Prisma.CropWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CropUpdateToOneWithWhereWithoutDiagnosesInput, Prisma.CropUpdateWithoutDiagnosesInput>, Prisma.CropUncheckedUpdateWithoutDiagnosesInput>;
};
export type CropCreateNestedOneWithoutMonitoringRecordsInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutMonitoringRecordsInput, Prisma.CropUncheckedCreateWithoutMonitoringRecordsInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutMonitoringRecordsInput;
    connect?: Prisma.CropWhereUniqueInput;
};
export type CropUpdateOneRequiredWithoutMonitoringRecordsNestedInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutMonitoringRecordsInput, Prisma.CropUncheckedCreateWithoutMonitoringRecordsInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutMonitoringRecordsInput;
    upsert?: Prisma.CropUpsertWithoutMonitoringRecordsInput;
    connect?: Prisma.CropWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CropUpdateToOneWithWhereWithoutMonitoringRecordsInput, Prisma.CropUpdateWithoutMonitoringRecordsInput>, Prisma.CropUncheckedUpdateWithoutMonitoringRecordsInput>;
};
export type CropCreateNestedOneWithoutAlertsInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutAlertsInput, Prisma.CropUncheckedCreateWithoutAlertsInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutAlertsInput;
    connect?: Prisma.CropWhereUniqueInput;
};
export type CropUpdateOneWithoutAlertsNestedInput = {
    create?: Prisma.XOR<Prisma.CropCreateWithoutAlertsInput, Prisma.CropUncheckedCreateWithoutAlertsInput>;
    connectOrCreate?: Prisma.CropCreateOrConnectWithoutAlertsInput;
    upsert?: Prisma.CropUpsertWithoutAlertsInput;
    disconnect?: Prisma.CropWhereInput | boolean;
    delete?: Prisma.CropWhereInput | boolean;
    connect?: Prisma.CropWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CropUpdateToOneWithWhereWithoutAlertsInput, Prisma.CropUpdateWithoutAlertsInput>, Prisma.CropUncheckedUpdateWithoutAlertsInput>;
};
export type CropCreateWithoutFarmInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.CropImageCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertCreateNestedManyWithoutCropInput;
};
export type CropUncheckedCreateWithoutFarmInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.CropImageUncheckedCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertUncheckedCreateNestedManyWithoutCropInput;
};
export type CropCreateOrConnectWithoutFarmInput = {
    where: Prisma.CropWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropCreateWithoutFarmInput, Prisma.CropUncheckedCreateWithoutFarmInput>;
};
export type CropCreateManyFarmInputEnvelope = {
    data: Prisma.CropCreateManyFarmInput | Prisma.CropCreateManyFarmInput[];
    skipDuplicates?: boolean;
};
export type CropUpsertWithWhereUniqueWithoutFarmInput = {
    where: Prisma.CropWhereUniqueInput;
    update: Prisma.XOR<Prisma.CropUpdateWithoutFarmInput, Prisma.CropUncheckedUpdateWithoutFarmInput>;
    create: Prisma.XOR<Prisma.CropCreateWithoutFarmInput, Prisma.CropUncheckedCreateWithoutFarmInput>;
};
export type CropUpdateWithWhereUniqueWithoutFarmInput = {
    where: Prisma.CropWhereUniqueInput;
    data: Prisma.XOR<Prisma.CropUpdateWithoutFarmInput, Prisma.CropUncheckedUpdateWithoutFarmInput>;
};
export type CropUpdateManyWithWhereWithoutFarmInput = {
    where: Prisma.CropScalarWhereInput;
    data: Prisma.XOR<Prisma.CropUpdateManyMutationInput, Prisma.CropUncheckedUpdateManyWithoutFarmInput>;
};
export type CropScalarWhereInput = {
    AND?: Prisma.CropScalarWhereInput | Prisma.CropScalarWhereInput[];
    OR?: Prisma.CropScalarWhereInput[];
    NOT?: Prisma.CropScalarWhereInput | Prisma.CropScalarWhereInput[];
    id?: Prisma.StringFilter<"Crop"> | string;
    farmId?: Prisma.StringFilter<"Crop"> | string;
    name?: Prisma.StringFilter<"Crop"> | string;
    variety?: Prisma.StringFilter<"Crop"> | string;
    platedAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    harvestedAt?: Prisma.DateTimeNullableFilter<"Crop"> | Date | string | null;
    status?: Prisma.EnumCropStatusFilter<"Crop"> | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Crop"> | Date | string;
};
export type CropCreateWithoutImagesInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCropsInput;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertCreateNestedManyWithoutCropInput;
};
export type CropUncheckedCreateWithoutImagesInput = {
    id?: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertUncheckedCreateNestedManyWithoutCropInput;
};
export type CropCreateOrConnectWithoutImagesInput = {
    where: Prisma.CropWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropCreateWithoutImagesInput, Prisma.CropUncheckedCreateWithoutImagesInput>;
};
export type CropUpsertWithoutImagesInput = {
    update: Prisma.XOR<Prisma.CropUpdateWithoutImagesInput, Prisma.CropUncheckedUpdateWithoutImagesInput>;
    create: Prisma.XOR<Prisma.CropCreateWithoutImagesInput, Prisma.CropUncheckedCreateWithoutImagesInput>;
    where?: Prisma.CropWhereInput;
};
export type CropUpdateToOneWithWhereWithoutImagesInput = {
    where?: Prisma.CropWhereInput;
    data: Prisma.XOR<Prisma.CropUpdateWithoutImagesInput, Prisma.CropUncheckedUpdateWithoutImagesInput>;
};
export type CropUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCropsNestedInput;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateWithoutImagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUncheckedUpdateManyWithoutCropNestedInput;
};
export type CropCreateWithoutDiagnosesInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCropsInput;
    images?: Prisma.CropImageCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertCreateNestedManyWithoutCropInput;
};
export type CropUncheckedCreateWithoutDiagnosesInput = {
    id?: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.CropImageUncheckedCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertUncheckedCreateNestedManyWithoutCropInput;
};
export type CropCreateOrConnectWithoutDiagnosesInput = {
    where: Prisma.CropWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropCreateWithoutDiagnosesInput, Prisma.CropUncheckedCreateWithoutDiagnosesInput>;
};
export type CropUpsertWithoutDiagnosesInput = {
    update: Prisma.XOR<Prisma.CropUpdateWithoutDiagnosesInput, Prisma.CropUncheckedUpdateWithoutDiagnosesInput>;
    create: Prisma.XOR<Prisma.CropCreateWithoutDiagnosesInput, Prisma.CropUncheckedCreateWithoutDiagnosesInput>;
    where?: Prisma.CropWhereInput;
};
export type CropUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: Prisma.CropWhereInput;
    data: Prisma.XOR<Prisma.CropUpdateWithoutDiagnosesInput, Prisma.CropUncheckedUpdateWithoutDiagnosesInput>;
};
export type CropUpdateWithoutDiagnosesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCropsNestedInput;
    images?: Prisma.CropImageUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateWithoutDiagnosesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CropImageUncheckedUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUncheckedUpdateManyWithoutCropNestedInput;
};
export type CropCreateWithoutMonitoringRecordsInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCropsInput;
    images?: Prisma.CropImageCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertCreateNestedManyWithoutCropInput;
};
export type CropUncheckedCreateWithoutMonitoringRecordsInput = {
    id?: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.CropImageUncheckedCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutCropInput;
    alerts?: Prisma.AlertUncheckedCreateNestedManyWithoutCropInput;
};
export type CropCreateOrConnectWithoutMonitoringRecordsInput = {
    where: Prisma.CropWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropCreateWithoutMonitoringRecordsInput, Prisma.CropUncheckedCreateWithoutMonitoringRecordsInput>;
};
export type CropUpsertWithoutMonitoringRecordsInput = {
    update: Prisma.XOR<Prisma.CropUpdateWithoutMonitoringRecordsInput, Prisma.CropUncheckedUpdateWithoutMonitoringRecordsInput>;
    create: Prisma.XOR<Prisma.CropCreateWithoutMonitoringRecordsInput, Prisma.CropUncheckedCreateWithoutMonitoringRecordsInput>;
    where?: Prisma.CropWhereInput;
};
export type CropUpdateToOneWithWhereWithoutMonitoringRecordsInput = {
    where?: Prisma.CropWhereInput;
    data: Prisma.XOR<Prisma.CropUpdateWithoutMonitoringRecordsInput, Prisma.CropUncheckedUpdateWithoutMonitoringRecordsInput>;
};
export type CropUpdateWithoutMonitoringRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCropsNestedInput;
    images?: Prisma.CropImageUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateWithoutMonitoringRecordsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CropImageUncheckedUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUncheckedUpdateManyWithoutCropNestedInput;
};
export type CropCreateWithoutAlertsInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutCropsInput;
    images?: Prisma.CropImageCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordCreateNestedManyWithoutCropInput;
};
export type CropUncheckedCreateWithoutAlertsInput = {
    id?: string;
    farmId: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    images?: Prisma.CropImageUncheckedCreateNestedManyWithoutCropInput;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutCropInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedCreateNestedManyWithoutCropInput;
};
export type CropCreateOrConnectWithoutAlertsInput = {
    where: Prisma.CropWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropCreateWithoutAlertsInput, Prisma.CropUncheckedCreateWithoutAlertsInput>;
};
export type CropUpsertWithoutAlertsInput = {
    update: Prisma.XOR<Prisma.CropUpdateWithoutAlertsInput, Prisma.CropUncheckedUpdateWithoutAlertsInput>;
    create: Prisma.XOR<Prisma.CropCreateWithoutAlertsInput, Prisma.CropUncheckedCreateWithoutAlertsInput>;
    where?: Prisma.CropWhereInput;
};
export type CropUpdateToOneWithWhereWithoutAlertsInput = {
    where?: Prisma.CropWhereInput;
    data: Prisma.XOR<Prisma.CropUpdateWithoutAlertsInput, Prisma.CropUncheckedUpdateWithoutAlertsInput>;
};
export type CropUpdateWithoutAlertsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutCropsNestedInput;
    images?: Prisma.CropImageUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateWithoutAlertsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CropImageUncheckedUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedUpdateManyWithoutCropNestedInput;
};
export type CropCreateManyFarmInput = {
    id?: string;
    name: string;
    variety: string;
    platedAt: Date | string;
    harvestedAt?: Date | string | null;
    status?: $Enums.CropStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CropUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CropImageUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    images?: Prisma.CropImageUncheckedUpdateManyWithoutCropNestedInput;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutCropNestedInput;
    monitoringRecords?: Prisma.MonitoringRecordUncheckedUpdateManyWithoutCropNestedInput;
    alerts?: Prisma.AlertUncheckedUpdateManyWithoutCropNestedInput;
};
export type CropUncheckedUpdateManyWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variety?: Prisma.StringFieldUpdateOperationsInput | string;
    platedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    harvestedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCropStatusFieldUpdateOperationsInput | $Enums.CropStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CropCountOutputType
 */
export type CropCountOutputType = {
    images: number;
    diagnoses: number;
    monitoringRecords: number;
    alerts: number;
};
export type CropCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    images?: boolean | CropCountOutputTypeCountImagesArgs;
    diagnoses?: boolean | CropCountOutputTypeCountDiagnosesArgs;
    monitoringRecords?: boolean | CropCountOutputTypeCountMonitoringRecordsArgs;
    alerts?: boolean | CropCountOutputTypeCountAlertsArgs;
};
/**
 * CropCountOutputType without action
 */
export type CropCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropCountOutputType
     */
    select?: Prisma.CropCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CropCountOutputType without action
 */
export type CropCountOutputTypeCountImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropImageWhereInput;
};
/**
 * CropCountOutputType without action
 */
export type CropCountOutputTypeCountDiagnosesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DiagnosisWhereInput;
};
/**
 * CropCountOutputType without action
 */
export type CropCountOutputTypeCountMonitoringRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoringRecordWhereInput;
};
/**
 * CropCountOutputType without action
 */
export type CropCountOutputTypeCountAlertsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AlertWhereInput;
};
export type CropSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    name?: boolean;
    variety?: boolean;
    platedAt?: boolean;
    harvestedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Crop$imagesArgs<ExtArgs>;
    diagnoses?: boolean | Prisma.Crop$diagnosesArgs<ExtArgs>;
    monitoringRecords?: boolean | Prisma.Crop$monitoringRecordsArgs<ExtArgs>;
    alerts?: boolean | Prisma.Crop$alertsArgs<ExtArgs>;
    _count?: boolean | Prisma.CropCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crop"]>;
export type CropSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    name?: boolean;
    variety?: boolean;
    platedAt?: boolean;
    harvestedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crop"]>;
export type CropSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    name?: boolean;
    variety?: boolean;
    platedAt?: boolean;
    harvestedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["crop"]>;
export type CropSelectScalar = {
    id?: boolean;
    farmId?: boolean;
    name?: boolean;
    variety?: boolean;
    platedAt?: boolean;
    harvestedAt?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CropOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "farmId" | "name" | "variety" | "platedAt" | "harvestedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["crop"]>;
export type CropInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    images?: boolean | Prisma.Crop$imagesArgs<ExtArgs>;
    diagnoses?: boolean | Prisma.Crop$diagnosesArgs<ExtArgs>;
    monitoringRecords?: boolean | Prisma.Crop$monitoringRecordsArgs<ExtArgs>;
    alerts?: boolean | Prisma.Crop$alertsArgs<ExtArgs>;
    _count?: boolean | Prisma.CropCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CropIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type CropIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type $CropPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Crop";
    objects: {
        farm: Prisma.$FarmPayload<ExtArgs>;
        images: Prisma.$CropImagePayload<ExtArgs>[];
        diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[];
        monitoringRecords: Prisma.$MonitoringRecordPayload<ExtArgs>[];
        alerts: Prisma.$AlertPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        farmId: string;
        name: string;
        variety: string;
        platedAt: Date;
        harvestedAt: Date | null;
        status: $Enums.CropStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["crop"]>;
    composites: {};
};
export type CropGetPayload<S extends boolean | null | undefined | CropDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CropPayload, S>;
export type CropCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CropFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CropCountAggregateInputType | true;
};
export interface CropDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Crop'];
        meta: {
            name: 'Crop';
        };
    };
    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropFindUniqueArgs>(args: Prisma.SelectSubset<T, CropFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Crop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CropFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropFindFirstArgs>(args?: Prisma.SelectSubset<T, CropFindFirstArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Crop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CropFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     *
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cropWithIdOnly = await prisma.crop.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CropFindManyArgs>(args?: Prisma.SelectSubset<T, CropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     *
     */
    create<T extends CropCreateArgs>(args: Prisma.SelectSubset<T, CropCreateArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Crops.
     * @param {CropCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CropCreateManyArgs>(args?: Prisma.SelectSubset<T, CropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CropCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     *
     */
    delete<T extends CropDeleteArgs>(args: Prisma.SelectSubset<T, CropDeleteArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CropUpdateArgs>(args: Prisma.SelectSubset<T, CropUpdateArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CropDeleteManyArgs>(args?: Prisma.SelectSubset<T, CropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CropUpdateManyArgs>(args: Prisma.SelectSubset<T, CropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Crops and returns the data updated in the database.
     * @param {CropUpdateManyAndReturnArgs} args - Arguments to update many Crops.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.updateManyAndReturn({
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
    updateManyAndReturn<T extends CropUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CropUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
     */
    upsert<T extends CropUpsertArgs>(args: Prisma.SelectSubset<T, CropUpsertArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(args?: Prisma.Subset<T, CropCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CropCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropAggregateArgs>(args: Prisma.Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>;
    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CropGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CropGroupByArgs['orderBy'];
    } : {
        orderBy?: CropGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Crop model
     */
    readonly fields: CropFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Crop.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CropClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farm<T extends Prisma.FarmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    images<T extends Prisma.Crop$imagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Crop$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    diagnoses<T extends Prisma.Crop$diagnosesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Crop$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    monitoringRecords<T extends Prisma.Crop$monitoringRecordsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Crop$monitoringRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoringRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    alerts<T extends Prisma.Crop$alertsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Crop$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Crop model
 */
export interface CropFieldRefs {
    readonly id: Prisma.FieldRef<"Crop", 'String'>;
    readonly farmId: Prisma.FieldRef<"Crop", 'String'>;
    readonly name: Prisma.FieldRef<"Crop", 'String'>;
    readonly variety: Prisma.FieldRef<"Crop", 'String'>;
    readonly platedAt: Prisma.FieldRef<"Crop", 'DateTime'>;
    readonly harvestedAt: Prisma.FieldRef<"Crop", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Crop", 'CropStatus'>;
    readonly createdAt: Prisma.FieldRef<"Crop", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Crop", 'DateTime'>;
}
/**
 * Crop findUnique
 */
export type CropFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * Filter, which Crop to fetch.
     */
    where: Prisma.CropWhereUniqueInput;
};
/**
 * Crop findUniqueOrThrow
 */
export type CropFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * Filter, which Crop to fetch.
     */
    where: Prisma.CropWhereUniqueInput;
};
/**
 * Crop findFirst
 */
export type CropFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * Filter, which Crop to fetch.
     */
    where?: Prisma.CropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Crops to fetch.
     */
    orderBy?: Prisma.CropOrderByWithRelationInput | Prisma.CropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Crops.
     */
    cursor?: Prisma.CropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Crops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Crops.
     */
    distinct?: Prisma.CropScalarFieldEnum | Prisma.CropScalarFieldEnum[];
};
/**
 * Crop findFirstOrThrow
 */
export type CropFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * Filter, which Crop to fetch.
     */
    where?: Prisma.CropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Crops to fetch.
     */
    orderBy?: Prisma.CropOrderByWithRelationInput | Prisma.CropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Crops.
     */
    cursor?: Prisma.CropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Crops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Crops.
     */
    distinct?: Prisma.CropScalarFieldEnum | Prisma.CropScalarFieldEnum[];
};
/**
 * Crop findMany
 */
export type CropFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * Filter, which Crops to fetch.
     */
    where?: Prisma.CropWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Crops to fetch.
     */
    orderBy?: Prisma.CropOrderByWithRelationInput | Prisma.CropOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Crops.
     */
    cursor?: Prisma.CropWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Crops.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Crops.
     */
    distinct?: Prisma.CropScalarFieldEnum | Prisma.CropScalarFieldEnum[];
};
/**
 * Crop create
 */
export type CropCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * The data needed to create a Crop.
     */
    data: Prisma.XOR<Prisma.CropCreateInput, Prisma.CropUncheckedCreateInput>;
};
/**
 * Crop createMany
 */
export type CropCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: Prisma.CropCreateManyInput | Prisma.CropCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Crop createManyAndReturn
 */
export type CropCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * The data used to create many Crops.
     */
    data: Prisma.CropCreateManyInput | Prisma.CropCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Crop update
 */
export type CropUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * The data needed to update a Crop.
     */
    data: Prisma.XOR<Prisma.CropUpdateInput, Prisma.CropUncheckedUpdateInput>;
    /**
     * Choose, which Crop to update.
     */
    where: Prisma.CropWhereUniqueInput;
};
/**
 * Crop updateMany
 */
export type CropUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: Prisma.XOR<Prisma.CropUpdateManyMutationInput, Prisma.CropUncheckedUpdateManyInput>;
    /**
     * Filter which Crops to update
     */
    where?: Prisma.CropWhereInput;
    /**
     * Limit how many Crops to update.
     */
    limit?: number;
};
/**
 * Crop updateManyAndReturn
 */
export type CropUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * The data used to update Crops.
     */
    data: Prisma.XOR<Prisma.CropUpdateManyMutationInput, Prisma.CropUncheckedUpdateManyInput>;
    /**
     * Filter which Crops to update
     */
    where?: Prisma.CropWhereInput;
    /**
     * Limit how many Crops to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Crop upsert
 */
export type CropUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: Prisma.CropWhereUniqueInput;
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: Prisma.XOR<Prisma.CropCreateInput, Prisma.CropUncheckedCreateInput>;
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CropUpdateInput, Prisma.CropUncheckedUpdateInput>;
};
/**
 * Crop delete
 */
export type CropDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
    /**
     * Filter which Crop to delete.
     */
    where: Prisma.CropWhereUniqueInput;
};
/**
 * Crop deleteMany
 */
export type CropDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: Prisma.CropWhereInput;
    /**
     * Limit how many Crops to delete.
     */
    limit?: number;
};
/**
 * Crop.images
 */
export type Crop$imagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropImage
     */
    select?: Prisma.CropImageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropImage
     */
    omit?: Prisma.CropImageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropImageInclude<ExtArgs> | null;
    where?: Prisma.CropImageWhereInput;
    orderBy?: Prisma.CropImageOrderByWithRelationInput | Prisma.CropImageOrderByWithRelationInput[];
    cursor?: Prisma.CropImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CropImageScalarFieldEnum | Prisma.CropImageScalarFieldEnum[];
};
/**
 * Crop.diagnoses
 */
export type Crop$diagnosesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diagnosis
     */
    select?: Prisma.DiagnosisSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Diagnosis
     */
    omit?: Prisma.DiagnosisOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DiagnosisInclude<ExtArgs> | null;
    where?: Prisma.DiagnosisWhereInput;
    orderBy?: Prisma.DiagnosisOrderByWithRelationInput | Prisma.DiagnosisOrderByWithRelationInput[];
    cursor?: Prisma.DiagnosisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DiagnosisScalarFieldEnum | Prisma.DiagnosisScalarFieldEnum[];
};
/**
 * Crop.monitoringRecords
 */
export type Crop$monitoringRecordsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitoringRecord
     */
    select?: Prisma.MonitoringRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonitoringRecord
     */
    omit?: Prisma.MonitoringRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MonitoringRecordInclude<ExtArgs> | null;
    where?: Prisma.MonitoringRecordWhereInput;
    orderBy?: Prisma.MonitoringRecordOrderByWithRelationInput | Prisma.MonitoringRecordOrderByWithRelationInput[];
    cursor?: Prisma.MonitoringRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MonitoringRecordScalarFieldEnum | Prisma.MonitoringRecordScalarFieldEnum[];
};
/**
 * Crop.alerts
 */
export type Crop$alertsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: Prisma.AlertSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Alert
     */
    omit?: Prisma.AlertOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AlertInclude<ExtArgs> | null;
    where?: Prisma.AlertWhereInput;
    orderBy?: Prisma.AlertOrderByWithRelationInput | Prisma.AlertOrderByWithRelationInput[];
    cursor?: Prisma.AlertWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlertScalarFieldEnum | Prisma.AlertScalarFieldEnum[];
};
/**
 * Crop without action
 */
export type CropDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: Prisma.CropSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Crop
     */
    omit?: Prisma.CropOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropInclude<ExtArgs> | null;
};
//# sourceMappingURL=Crop.d.ts.map