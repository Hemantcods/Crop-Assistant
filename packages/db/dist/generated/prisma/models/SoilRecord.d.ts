import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model SoilRecord
 *
 */
export type SoilRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$SoilRecordPayload>;
export type AggregateSoilRecord = {
    _count: SoilRecordCountAggregateOutputType | null;
    _avg: SoilRecordAvgAggregateOutputType | null;
    _sum: SoilRecordSumAggregateOutputType | null;
    _min: SoilRecordMinAggregateOutputType | null;
    _max: SoilRecordMaxAggregateOutputType | null;
};
export type SoilRecordAvgAggregateOutputType = {
    nitrogen: runtime.Decimal | null;
    phosphorous: runtime.Decimal | null;
    potassium: runtime.Decimal | null;
    ph: runtime.Decimal | null;
};
export type SoilRecordSumAggregateOutputType = {
    nitrogen: runtime.Decimal | null;
    phosphorous: runtime.Decimal | null;
    potassium: runtime.Decimal | null;
    ph: runtime.Decimal | null;
};
export type SoilRecordMinAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    nitrogen: runtime.Decimal | null;
    phosphorous: runtime.Decimal | null;
    potassium: runtime.Decimal | null;
    ph: runtime.Decimal | null;
    source: $Enums.SoilRecordSource | null;
    createdAt: Date | null;
};
export type SoilRecordMaxAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    nitrogen: runtime.Decimal | null;
    phosphorous: runtime.Decimal | null;
    potassium: runtime.Decimal | null;
    ph: runtime.Decimal | null;
    source: $Enums.SoilRecordSource | null;
    createdAt: Date | null;
};
export type SoilRecordCountAggregateOutputType = {
    id: number;
    farmId: number;
    nitrogen: number;
    phosphorous: number;
    potassium: number;
    ph: number;
    source: number;
    createdAt: number;
    _all: number;
};
export type SoilRecordAvgAggregateInputType = {
    nitrogen?: true;
    phosphorous?: true;
    potassium?: true;
    ph?: true;
};
export type SoilRecordSumAggregateInputType = {
    nitrogen?: true;
    phosphorous?: true;
    potassium?: true;
    ph?: true;
};
export type SoilRecordMinAggregateInputType = {
    id?: true;
    farmId?: true;
    nitrogen?: true;
    phosphorous?: true;
    potassium?: true;
    ph?: true;
    source?: true;
    createdAt?: true;
};
export type SoilRecordMaxAggregateInputType = {
    id?: true;
    farmId?: true;
    nitrogen?: true;
    phosphorous?: true;
    potassium?: true;
    ph?: true;
    source?: true;
    createdAt?: true;
};
export type SoilRecordCountAggregateInputType = {
    id?: true;
    farmId?: true;
    nitrogen?: true;
    phosphorous?: true;
    potassium?: true;
    ph?: true;
    source?: true;
    createdAt?: true;
    _all?: true;
};
export type SoilRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SoilRecord to aggregate.
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SoilRecords to fetch.
     */
    orderBy?: Prisma.SoilRecordOrderByWithRelationInput | Prisma.SoilRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SoilRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SoilRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SoilRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SoilRecords
    **/
    _count?: true | SoilRecordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SoilRecordAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SoilRecordSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SoilRecordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SoilRecordMaxAggregateInputType;
};
export type GetSoilRecordAggregateType<T extends SoilRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateSoilRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSoilRecord[P]> : Prisma.GetScalarType<T[P], AggregateSoilRecord[P]>;
};
export type SoilRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SoilRecordWhereInput;
    orderBy?: Prisma.SoilRecordOrderByWithAggregationInput | Prisma.SoilRecordOrderByWithAggregationInput[];
    by: Prisma.SoilRecordScalarFieldEnum[] | Prisma.SoilRecordScalarFieldEnum;
    having?: Prisma.SoilRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SoilRecordCountAggregateInputType | true;
    _avg?: SoilRecordAvgAggregateInputType;
    _sum?: SoilRecordSumAggregateInputType;
    _min?: SoilRecordMinAggregateInputType;
    _max?: SoilRecordMaxAggregateInputType;
};
export type SoilRecordGroupByOutputType = {
    id: string;
    farmId: string;
    nitrogen: runtime.Decimal | null;
    phosphorous: runtime.Decimal | null;
    potassium: runtime.Decimal | null;
    ph: runtime.Decimal | null;
    source: $Enums.SoilRecordSource;
    createdAt: Date;
    _count: SoilRecordCountAggregateOutputType | null;
    _avg: SoilRecordAvgAggregateOutputType | null;
    _sum: SoilRecordSumAggregateOutputType | null;
    _min: SoilRecordMinAggregateOutputType | null;
    _max: SoilRecordMaxAggregateOutputType | null;
};
export type GetSoilRecordGroupByPayload<T extends SoilRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SoilRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SoilRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SoilRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SoilRecordGroupByOutputType[P]>;
}>>;
export type SoilRecordWhereInput = {
    AND?: Prisma.SoilRecordWhereInput | Prisma.SoilRecordWhereInput[];
    OR?: Prisma.SoilRecordWhereInput[];
    NOT?: Prisma.SoilRecordWhereInput | Prisma.SoilRecordWhereInput[];
    id?: Prisma.StringFilter<"SoilRecord"> | string;
    farmId?: Prisma.StringFilter<"SoilRecord"> | string;
    nitrogen?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFilter<"SoilRecord"> | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFilter<"SoilRecord"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
};
export type SoilRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    nitrogen?: Prisma.SortOrderInput | Prisma.SortOrder;
    phosphorous?: Prisma.SortOrderInput | Prisma.SortOrder;
    potassium?: Prisma.SortOrderInput | Prisma.SortOrder;
    ph?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    farm?: Prisma.FarmOrderByWithRelationInput;
};
export type SoilRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SoilRecordWhereInput | Prisma.SoilRecordWhereInput[];
    OR?: Prisma.SoilRecordWhereInput[];
    NOT?: Prisma.SoilRecordWhereInput | Prisma.SoilRecordWhereInput[];
    farmId?: Prisma.StringFilter<"SoilRecord"> | string;
    nitrogen?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFilter<"SoilRecord"> | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFilter<"SoilRecord"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
}, "id">;
export type SoilRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    nitrogen?: Prisma.SortOrderInput | Prisma.SortOrder;
    phosphorous?: Prisma.SortOrderInput | Prisma.SortOrder;
    potassium?: Prisma.SortOrderInput | Prisma.SortOrder;
    ph?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SoilRecordCountOrderByAggregateInput;
    _avg?: Prisma.SoilRecordAvgOrderByAggregateInput;
    _max?: Prisma.SoilRecordMaxOrderByAggregateInput;
    _min?: Prisma.SoilRecordMinOrderByAggregateInput;
    _sum?: Prisma.SoilRecordSumOrderByAggregateInput;
};
export type SoilRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.SoilRecordScalarWhereWithAggregatesInput | Prisma.SoilRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.SoilRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SoilRecordScalarWhereWithAggregatesInput | Prisma.SoilRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SoilRecord"> | string;
    farmId?: Prisma.StringWithAggregatesFilter<"SoilRecord"> | string;
    nitrogen?: Prisma.DecimalNullableWithAggregatesFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.DecimalNullableWithAggregatesFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.DecimalNullableWithAggregatesFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.DecimalNullableWithAggregatesFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceWithAggregatesFilter<"SoilRecord"> | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SoilRecord"> | Date | string;
};
export type SoilRecordCreateInput = {
    id?: string;
    nitrogen?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source: $Enums.SoilRecordSource;
    createdAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutSoilRecordsInput;
};
export type SoilRecordUncheckedCreateInput = {
    id?: string;
    farmId: string;
    nitrogen?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source: $Enums.SoilRecordSource;
    createdAt?: Date | string;
};
export type SoilRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutSoilRecordsNestedInput;
};
export type SoilRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SoilRecordCreateManyInput = {
    id?: string;
    farmId: string;
    nitrogen?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source: $Enums.SoilRecordSource;
    createdAt?: Date | string;
};
export type SoilRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SoilRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SoilRecordListRelationFilter = {
    every?: Prisma.SoilRecordWhereInput;
    some?: Prisma.SoilRecordWhereInput;
    none?: Prisma.SoilRecordWhereInput;
};
export type SoilRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SoilRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    nitrogen?: Prisma.SortOrder;
    phosphorous?: Prisma.SortOrder;
    potassium?: Prisma.SortOrder;
    ph?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SoilRecordAvgOrderByAggregateInput = {
    nitrogen?: Prisma.SortOrder;
    phosphorous?: Prisma.SortOrder;
    potassium?: Prisma.SortOrder;
    ph?: Prisma.SortOrder;
};
export type SoilRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    nitrogen?: Prisma.SortOrder;
    phosphorous?: Prisma.SortOrder;
    potassium?: Prisma.SortOrder;
    ph?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SoilRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    nitrogen?: Prisma.SortOrder;
    phosphorous?: Prisma.SortOrder;
    potassium?: Prisma.SortOrder;
    ph?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SoilRecordSumOrderByAggregateInput = {
    nitrogen?: Prisma.SortOrder;
    phosphorous?: Prisma.SortOrder;
    potassium?: Prisma.SortOrder;
    ph?: Prisma.SortOrder;
};
export type SoilRecordCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.SoilRecordCreateWithoutFarmInput, Prisma.SoilRecordUncheckedCreateWithoutFarmInput> | Prisma.SoilRecordCreateWithoutFarmInput[] | Prisma.SoilRecordUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.SoilRecordCreateOrConnectWithoutFarmInput | Prisma.SoilRecordCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.SoilRecordCreateManyFarmInputEnvelope;
    connect?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
};
export type SoilRecordUncheckedCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.SoilRecordCreateWithoutFarmInput, Prisma.SoilRecordUncheckedCreateWithoutFarmInput> | Prisma.SoilRecordCreateWithoutFarmInput[] | Prisma.SoilRecordUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.SoilRecordCreateOrConnectWithoutFarmInput | Prisma.SoilRecordCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.SoilRecordCreateManyFarmInputEnvelope;
    connect?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
};
export type SoilRecordUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.SoilRecordCreateWithoutFarmInput, Prisma.SoilRecordUncheckedCreateWithoutFarmInput> | Prisma.SoilRecordCreateWithoutFarmInput[] | Prisma.SoilRecordUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.SoilRecordCreateOrConnectWithoutFarmInput | Prisma.SoilRecordCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.SoilRecordUpsertWithWhereUniqueWithoutFarmInput | Prisma.SoilRecordUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.SoilRecordCreateManyFarmInputEnvelope;
    set?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    disconnect?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    delete?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    connect?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    update?: Prisma.SoilRecordUpdateWithWhereUniqueWithoutFarmInput | Prisma.SoilRecordUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.SoilRecordUpdateManyWithWhereWithoutFarmInput | Prisma.SoilRecordUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.SoilRecordScalarWhereInput | Prisma.SoilRecordScalarWhereInput[];
};
export type SoilRecordUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.SoilRecordCreateWithoutFarmInput, Prisma.SoilRecordUncheckedCreateWithoutFarmInput> | Prisma.SoilRecordCreateWithoutFarmInput[] | Prisma.SoilRecordUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.SoilRecordCreateOrConnectWithoutFarmInput | Prisma.SoilRecordCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.SoilRecordUpsertWithWhereUniqueWithoutFarmInput | Prisma.SoilRecordUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.SoilRecordCreateManyFarmInputEnvelope;
    set?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    disconnect?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    delete?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    connect?: Prisma.SoilRecordWhereUniqueInput | Prisma.SoilRecordWhereUniqueInput[];
    update?: Prisma.SoilRecordUpdateWithWhereUniqueWithoutFarmInput | Prisma.SoilRecordUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.SoilRecordUpdateManyWithWhereWithoutFarmInput | Prisma.SoilRecordUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.SoilRecordScalarWhereInput | Prisma.SoilRecordScalarWhereInput[];
};
export type EnumSoilRecordSourceFieldUpdateOperationsInput = {
    set?: $Enums.SoilRecordSource;
};
export type SoilRecordCreateWithoutFarmInput = {
    id?: string;
    nitrogen?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source: $Enums.SoilRecordSource;
    createdAt?: Date | string;
};
export type SoilRecordUncheckedCreateWithoutFarmInput = {
    id?: string;
    nitrogen?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source: $Enums.SoilRecordSource;
    createdAt?: Date | string;
};
export type SoilRecordCreateOrConnectWithoutFarmInput = {
    where: Prisma.SoilRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.SoilRecordCreateWithoutFarmInput, Prisma.SoilRecordUncheckedCreateWithoutFarmInput>;
};
export type SoilRecordCreateManyFarmInputEnvelope = {
    data: Prisma.SoilRecordCreateManyFarmInput | Prisma.SoilRecordCreateManyFarmInput[];
    skipDuplicates?: boolean;
};
export type SoilRecordUpsertWithWhereUniqueWithoutFarmInput = {
    where: Prisma.SoilRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.SoilRecordUpdateWithoutFarmInput, Prisma.SoilRecordUncheckedUpdateWithoutFarmInput>;
    create: Prisma.XOR<Prisma.SoilRecordCreateWithoutFarmInput, Prisma.SoilRecordUncheckedCreateWithoutFarmInput>;
};
export type SoilRecordUpdateWithWhereUniqueWithoutFarmInput = {
    where: Prisma.SoilRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.SoilRecordUpdateWithoutFarmInput, Prisma.SoilRecordUncheckedUpdateWithoutFarmInput>;
};
export type SoilRecordUpdateManyWithWhereWithoutFarmInput = {
    where: Prisma.SoilRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.SoilRecordUpdateManyMutationInput, Prisma.SoilRecordUncheckedUpdateManyWithoutFarmInput>;
};
export type SoilRecordScalarWhereInput = {
    AND?: Prisma.SoilRecordScalarWhereInput | Prisma.SoilRecordScalarWhereInput[];
    OR?: Prisma.SoilRecordScalarWhereInput[];
    NOT?: Prisma.SoilRecordScalarWhereInput | Prisma.SoilRecordScalarWhereInput[];
    id?: Prisma.StringFilter<"SoilRecord"> | string;
    farmId?: Prisma.StringFilter<"SoilRecord"> | string;
    nitrogen?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.DecimalNullableFilter<"SoilRecord"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFilter<"SoilRecord"> | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFilter<"SoilRecord"> | Date | string;
};
export type SoilRecordCreateManyFarmInput = {
    id?: string;
    nitrogen?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source: $Enums.SoilRecordSource;
    createdAt?: Date | string;
};
export type SoilRecordUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SoilRecordUncheckedUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SoilRecordUncheckedUpdateManyWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nitrogen?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    phosphorous?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    potassium?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ph?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    source?: Prisma.EnumSoilRecordSourceFieldUpdateOperationsInput | $Enums.SoilRecordSource;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SoilRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    nitrogen?: boolean;
    phosphorous?: boolean;
    potassium?: boolean;
    ph?: boolean;
    source?: boolean;
    createdAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["soilRecord"]>;
export type SoilRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    nitrogen?: boolean;
    phosphorous?: boolean;
    potassium?: boolean;
    ph?: boolean;
    source?: boolean;
    createdAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["soilRecord"]>;
export type SoilRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    nitrogen?: boolean;
    phosphorous?: boolean;
    potassium?: boolean;
    ph?: boolean;
    source?: boolean;
    createdAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["soilRecord"]>;
export type SoilRecordSelectScalar = {
    id?: boolean;
    farmId?: boolean;
    nitrogen?: boolean;
    phosphorous?: boolean;
    potassium?: boolean;
    ph?: boolean;
    source?: boolean;
    createdAt?: boolean;
};
export type SoilRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "farmId" | "nitrogen" | "phosphorous" | "potassium" | "ph" | "source" | "createdAt", ExtArgs["result"]["soilRecord"]>;
export type SoilRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type SoilRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type SoilRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type $SoilRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SoilRecord";
    objects: {
        farm: Prisma.$FarmPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        farmId: string;
        nitrogen: runtime.Decimal | null;
        phosphorous: runtime.Decimal | null;
        potassium: runtime.Decimal | null;
        ph: runtime.Decimal | null;
        source: $Enums.SoilRecordSource;
        createdAt: Date;
    }, ExtArgs["result"]["soilRecord"]>;
    composites: {};
};
export type SoilRecordGetPayload<S extends boolean | null | undefined | SoilRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload, S>;
export type SoilRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SoilRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SoilRecordCountAggregateInputType | true;
};
export interface SoilRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SoilRecord'];
        meta: {
            name: 'SoilRecord';
        };
    };
    /**
     * Find zero or one SoilRecord that matches the filter.
     * @param {SoilRecordFindUniqueArgs} args - Arguments to find a SoilRecord
     * @example
     * // Get one SoilRecord
     * const soilRecord = await prisma.soilRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SoilRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, SoilRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SoilRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SoilRecordFindUniqueOrThrowArgs} args - Arguments to find a SoilRecord
     * @example
     * // Get one SoilRecord
     * const soilRecord = await prisma.soilRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SoilRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SoilRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SoilRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordFindFirstArgs} args - Arguments to find a SoilRecord
     * @example
     * // Get one SoilRecord
     * const soilRecord = await prisma.soilRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SoilRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, SoilRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SoilRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordFindFirstOrThrowArgs} args - Arguments to find a SoilRecord
     * @example
     * // Get one SoilRecord
     * const soilRecord = await prisma.soilRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SoilRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SoilRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SoilRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SoilRecords
     * const soilRecords = await prisma.soilRecord.findMany()
     *
     * // Get first 10 SoilRecords
     * const soilRecords = await prisma.soilRecord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const soilRecordWithIdOnly = await prisma.soilRecord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SoilRecordFindManyArgs>(args?: Prisma.SelectSubset<T, SoilRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SoilRecord.
     * @param {SoilRecordCreateArgs} args - Arguments to create a SoilRecord.
     * @example
     * // Create one SoilRecord
     * const SoilRecord = await prisma.soilRecord.create({
     *   data: {
     *     // ... data to create a SoilRecord
     *   }
     * })
     *
     */
    create<T extends SoilRecordCreateArgs>(args: Prisma.SelectSubset<T, SoilRecordCreateArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SoilRecords.
     * @param {SoilRecordCreateManyArgs} args - Arguments to create many SoilRecords.
     * @example
     * // Create many SoilRecords
     * const soilRecord = await prisma.soilRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SoilRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, SoilRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SoilRecords and returns the data saved in the database.
     * @param {SoilRecordCreateManyAndReturnArgs} args - Arguments to create many SoilRecords.
     * @example
     * // Create many SoilRecords
     * const soilRecord = await prisma.soilRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SoilRecords and only return the `id`
     * const soilRecordWithIdOnly = await prisma.soilRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SoilRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SoilRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SoilRecord.
     * @param {SoilRecordDeleteArgs} args - Arguments to delete one SoilRecord.
     * @example
     * // Delete one SoilRecord
     * const SoilRecord = await prisma.soilRecord.delete({
     *   where: {
     *     // ... filter to delete one SoilRecord
     *   }
     * })
     *
     */
    delete<T extends SoilRecordDeleteArgs>(args: Prisma.SelectSubset<T, SoilRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SoilRecord.
     * @param {SoilRecordUpdateArgs} args - Arguments to update one SoilRecord.
     * @example
     * // Update one SoilRecord
     * const soilRecord = await prisma.soilRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SoilRecordUpdateArgs>(args: Prisma.SelectSubset<T, SoilRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SoilRecords.
     * @param {SoilRecordDeleteManyArgs} args - Arguments to filter SoilRecords to delete.
     * @example
     * // Delete a few SoilRecords
     * const { count } = await prisma.soilRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SoilRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, SoilRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SoilRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SoilRecords
     * const soilRecord = await prisma.soilRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SoilRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, SoilRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SoilRecords and returns the data updated in the database.
     * @param {SoilRecordUpdateManyAndReturnArgs} args - Arguments to update many SoilRecords.
     * @example
     * // Update many SoilRecords
     * const soilRecord = await prisma.soilRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SoilRecords and only return the `id`
     * const soilRecordWithIdOnly = await prisma.soilRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends SoilRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SoilRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SoilRecord.
     * @param {SoilRecordUpsertArgs} args - Arguments to update or create a SoilRecord.
     * @example
     * // Update or create a SoilRecord
     * const soilRecord = await prisma.soilRecord.upsert({
     *   create: {
     *     // ... data to create a SoilRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SoilRecord we want to update
     *   }
     * })
     */
    upsert<T extends SoilRecordUpsertArgs>(args: Prisma.SelectSubset<T, SoilRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__SoilRecordClient<runtime.Types.Result.GetResult<Prisma.$SoilRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SoilRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordCountArgs} args - Arguments to filter SoilRecords to count.
     * @example
     * // Count the number of SoilRecords
     * const count = await prisma.soilRecord.count({
     *   where: {
     *     // ... the filter for the SoilRecords we want to count
     *   }
     * })
    **/
    count<T extends SoilRecordCountArgs>(args?: Prisma.Subset<T, SoilRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SoilRecordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SoilRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SoilRecordAggregateArgs>(args: Prisma.Subset<T, SoilRecordAggregateArgs>): Prisma.PrismaPromise<GetSoilRecordAggregateType<T>>;
    /**
     * Group by SoilRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SoilRecordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SoilRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SoilRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: SoilRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SoilRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoilRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SoilRecord model
     */
    readonly fields: SoilRecordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SoilRecord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SoilRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farm<T extends Prisma.FarmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SoilRecord model
 */
export interface SoilRecordFieldRefs {
    readonly id: Prisma.FieldRef<"SoilRecord", 'String'>;
    readonly farmId: Prisma.FieldRef<"SoilRecord", 'String'>;
    readonly nitrogen: Prisma.FieldRef<"SoilRecord", 'Decimal'>;
    readonly phosphorous: Prisma.FieldRef<"SoilRecord", 'Decimal'>;
    readonly potassium: Prisma.FieldRef<"SoilRecord", 'Decimal'>;
    readonly ph: Prisma.FieldRef<"SoilRecord", 'Decimal'>;
    readonly source: Prisma.FieldRef<"SoilRecord", 'SoilRecordSource'>;
    readonly createdAt: Prisma.FieldRef<"SoilRecord", 'DateTime'>;
}
/**
 * SoilRecord findUnique
 */
export type SoilRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * Filter, which SoilRecord to fetch.
     */
    where: Prisma.SoilRecordWhereUniqueInput;
};
/**
 * SoilRecord findUniqueOrThrow
 */
export type SoilRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * Filter, which SoilRecord to fetch.
     */
    where: Prisma.SoilRecordWhereUniqueInput;
};
/**
 * SoilRecord findFirst
 */
export type SoilRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * Filter, which SoilRecord to fetch.
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SoilRecords to fetch.
     */
    orderBy?: Prisma.SoilRecordOrderByWithRelationInput | Prisma.SoilRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SoilRecords.
     */
    cursor?: Prisma.SoilRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SoilRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SoilRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SoilRecords.
     */
    distinct?: Prisma.SoilRecordScalarFieldEnum | Prisma.SoilRecordScalarFieldEnum[];
};
/**
 * SoilRecord findFirstOrThrow
 */
export type SoilRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * Filter, which SoilRecord to fetch.
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SoilRecords to fetch.
     */
    orderBy?: Prisma.SoilRecordOrderByWithRelationInput | Prisma.SoilRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SoilRecords.
     */
    cursor?: Prisma.SoilRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SoilRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SoilRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SoilRecords.
     */
    distinct?: Prisma.SoilRecordScalarFieldEnum | Prisma.SoilRecordScalarFieldEnum[];
};
/**
 * SoilRecord findMany
 */
export type SoilRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * Filter, which SoilRecords to fetch.
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SoilRecords to fetch.
     */
    orderBy?: Prisma.SoilRecordOrderByWithRelationInput | Prisma.SoilRecordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SoilRecords.
     */
    cursor?: Prisma.SoilRecordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SoilRecords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SoilRecords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SoilRecords.
     */
    distinct?: Prisma.SoilRecordScalarFieldEnum | Prisma.SoilRecordScalarFieldEnum[];
};
/**
 * SoilRecord create
 */
export type SoilRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * The data needed to create a SoilRecord.
     */
    data: Prisma.XOR<Prisma.SoilRecordCreateInput, Prisma.SoilRecordUncheckedCreateInput>;
};
/**
 * SoilRecord createMany
 */
export type SoilRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SoilRecords.
     */
    data: Prisma.SoilRecordCreateManyInput | Prisma.SoilRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SoilRecord createManyAndReturn
 */
export type SoilRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * The data used to create many SoilRecords.
     */
    data: Prisma.SoilRecordCreateManyInput | Prisma.SoilRecordCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SoilRecord update
 */
export type SoilRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * The data needed to update a SoilRecord.
     */
    data: Prisma.XOR<Prisma.SoilRecordUpdateInput, Prisma.SoilRecordUncheckedUpdateInput>;
    /**
     * Choose, which SoilRecord to update.
     */
    where: Prisma.SoilRecordWhereUniqueInput;
};
/**
 * SoilRecord updateMany
 */
export type SoilRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SoilRecords.
     */
    data: Prisma.XOR<Prisma.SoilRecordUpdateManyMutationInput, Prisma.SoilRecordUncheckedUpdateManyInput>;
    /**
     * Filter which SoilRecords to update
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * Limit how many SoilRecords to update.
     */
    limit?: number;
};
/**
 * SoilRecord updateManyAndReturn
 */
export type SoilRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * The data used to update SoilRecords.
     */
    data: Prisma.XOR<Prisma.SoilRecordUpdateManyMutationInput, Prisma.SoilRecordUncheckedUpdateManyInput>;
    /**
     * Filter which SoilRecords to update
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * Limit how many SoilRecords to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SoilRecord upsert
 */
export type SoilRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * The filter to search for the SoilRecord to update in case it exists.
     */
    where: Prisma.SoilRecordWhereUniqueInput;
    /**
     * In case the SoilRecord found by the `where` argument doesn't exist, create a new SoilRecord with this data.
     */
    create: Prisma.XOR<Prisma.SoilRecordCreateInput, Prisma.SoilRecordUncheckedCreateInput>;
    /**
     * In case the SoilRecord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SoilRecordUpdateInput, Prisma.SoilRecordUncheckedUpdateInput>;
};
/**
 * SoilRecord delete
 */
export type SoilRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
    /**
     * Filter which SoilRecord to delete.
     */
    where: Prisma.SoilRecordWhereUniqueInput;
};
/**
 * SoilRecord deleteMany
 */
export type SoilRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SoilRecords to delete
     */
    where?: Prisma.SoilRecordWhereInput;
    /**
     * Limit how many SoilRecords to delete.
     */
    limit?: number;
};
/**
 * SoilRecord without action
 */
export type SoilRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SoilRecord
     */
    select?: Prisma.SoilRecordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SoilRecord
     */
    omit?: Prisma.SoilRecordOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SoilRecordInclude<ExtArgs> | null;
};
//# sourceMappingURL=SoilRecord.d.ts.map