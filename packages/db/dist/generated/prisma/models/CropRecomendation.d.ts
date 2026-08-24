import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CropRecomendation
 *
 */
export type CropRecomendationModel = runtime.Types.Result.DefaultSelection<Prisma.$CropRecomendationPayload>;
export type AggregateCropRecomendation = {
    _count: CropRecomendationCountAggregateOutputType | null;
    _min: CropRecomendationMinAggregateOutputType | null;
    _max: CropRecomendationMaxAggregateOutputType | null;
};
export type CropRecomendationMinAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    modelVersion: string | null;
    createdAt: Date | null;
};
export type CropRecomendationMaxAggregateOutputType = {
    id: string | null;
    farmId: string | null;
    modelVersion: string | null;
    createdAt: Date | null;
};
export type CropRecomendationCountAggregateOutputType = {
    id: number;
    farmId: number;
    modelVersion: number;
    createdAt: number;
    _all: number;
};
export type CropRecomendationMinAggregateInputType = {
    id?: true;
    farmId?: true;
    modelVersion?: true;
    createdAt?: true;
};
export type CropRecomendationMaxAggregateInputType = {
    id?: true;
    farmId?: true;
    modelVersion?: true;
    createdAt?: true;
};
export type CropRecomendationCountAggregateInputType = {
    id?: true;
    farmId?: true;
    modelVersion?: true;
    createdAt?: true;
    _all?: true;
};
export type CropRecomendationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CropRecomendation to aggregate.
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendations to fetch.
     */
    orderBy?: Prisma.CropRecomendationOrderByWithRelationInput | Prisma.CropRecomendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CropRecomendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CropRecomendations
    **/
    _count?: true | CropRecomendationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CropRecomendationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CropRecomendationMaxAggregateInputType;
};
export type GetCropRecomendationAggregateType<T extends CropRecomendationAggregateArgs> = {
    [P in keyof T & keyof AggregateCropRecomendation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCropRecomendation[P]> : Prisma.GetScalarType<T[P], AggregateCropRecomendation[P]>;
};
export type CropRecomendationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropRecomendationWhereInput;
    orderBy?: Prisma.CropRecomendationOrderByWithAggregationInput | Prisma.CropRecomendationOrderByWithAggregationInput[];
    by: Prisma.CropRecomendationScalarFieldEnum[] | Prisma.CropRecomendationScalarFieldEnum;
    having?: Prisma.CropRecomendationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CropRecomendationCountAggregateInputType | true;
    _min?: CropRecomendationMinAggregateInputType;
    _max?: CropRecomendationMaxAggregateInputType;
};
export type CropRecomendationGroupByOutputType = {
    id: string;
    farmId: string;
    modelVersion: string;
    createdAt: Date;
    _count: CropRecomendationCountAggregateOutputType | null;
    _min: CropRecomendationMinAggregateOutputType | null;
    _max: CropRecomendationMaxAggregateOutputType | null;
};
export type GetCropRecomendationGroupByPayload<T extends CropRecomendationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CropRecomendationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CropRecomendationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CropRecomendationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CropRecomendationGroupByOutputType[P]>;
}>>;
export type CropRecomendationWhereInput = {
    AND?: Prisma.CropRecomendationWhereInput | Prisma.CropRecomendationWhereInput[];
    OR?: Prisma.CropRecomendationWhereInput[];
    NOT?: Prisma.CropRecomendationWhereInput | Prisma.CropRecomendationWhereInput[];
    id?: Prisma.StringFilter<"CropRecomendation"> | string;
    farmId?: Prisma.StringFilter<"CropRecomendation"> | string;
    modelVersion?: Prisma.StringFilter<"CropRecomendation"> | string;
    createdAt?: Prisma.DateTimeFilter<"CropRecomendation"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    items?: Prisma.CropRecomendationItemListRelationFilter;
};
export type CropRecomendationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    farm?: Prisma.FarmOrderByWithRelationInput;
    items?: Prisma.CropRecomendationItemOrderByRelationAggregateInput;
};
export type CropRecomendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CropRecomendationWhereInput | Prisma.CropRecomendationWhereInput[];
    OR?: Prisma.CropRecomendationWhereInput[];
    NOT?: Prisma.CropRecomendationWhereInput | Prisma.CropRecomendationWhereInput[];
    farmId?: Prisma.StringFilter<"CropRecomendation"> | string;
    modelVersion?: Prisma.StringFilter<"CropRecomendation"> | string;
    createdAt?: Prisma.DateTimeFilter<"CropRecomendation"> | Date | string;
    farm?: Prisma.XOR<Prisma.FarmScalarRelationFilter, Prisma.FarmWhereInput>;
    items?: Prisma.CropRecomendationItemListRelationFilter;
}, "id">;
export type CropRecomendationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CropRecomendationCountOrderByAggregateInput;
    _max?: Prisma.CropRecomendationMaxOrderByAggregateInput;
    _min?: Prisma.CropRecomendationMinOrderByAggregateInput;
};
export type CropRecomendationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CropRecomendationScalarWhereWithAggregatesInput | Prisma.CropRecomendationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CropRecomendationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CropRecomendationScalarWhereWithAggregatesInput | Prisma.CropRecomendationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CropRecomendation"> | string;
    farmId?: Prisma.StringWithAggregatesFilter<"CropRecomendation"> | string;
    modelVersion?: Prisma.StringWithAggregatesFilter<"CropRecomendation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CropRecomendation"> | Date | string;
};
export type CropRecomendationCreateInput = {
    id?: string;
    modelVersion: string;
    createdAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutRecommendationsInput;
    items?: Prisma.CropRecomendationItemCreateNestedManyWithoutRecomendationInput;
};
export type CropRecomendationUncheckedCreateInput = {
    id?: string;
    farmId: string;
    modelVersion: string;
    createdAt?: Date | string;
    items?: Prisma.CropRecomendationItemUncheckedCreateNestedManyWithoutRecomendationInput;
};
export type CropRecomendationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutRecommendationsNestedInput;
    items?: Prisma.CropRecomendationItemUpdateManyWithoutRecomendationNestedInput;
};
export type CropRecomendationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.CropRecomendationItemUncheckedUpdateManyWithoutRecomendationNestedInput;
};
export type CropRecomendationCreateManyInput = {
    id?: string;
    farmId: string;
    modelVersion: string;
    createdAt?: Date | string;
};
export type CropRecomendationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropRecomendationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropRecomendationListRelationFilter = {
    every?: Prisma.CropRecomendationWhereInput;
    some?: Prisma.CropRecomendationWhereInput;
    none?: Prisma.CropRecomendationWhereInput;
};
export type CropRecomendationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CropRecomendationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CropRecomendationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CropRecomendationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    farmId?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CropRecomendationScalarRelationFilter = {
    is?: Prisma.CropRecomendationWhereInput;
    isNot?: Prisma.CropRecomendationWhereInput;
};
export type CropRecomendationCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationCreateWithoutFarmInput, Prisma.CropRecomendationUncheckedCreateWithoutFarmInput> | Prisma.CropRecomendationCreateWithoutFarmInput[] | Prisma.CropRecomendationUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropRecomendationCreateOrConnectWithoutFarmInput | Prisma.CropRecomendationCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.CropRecomendationCreateManyFarmInputEnvelope;
    connect?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
};
export type CropRecomendationUncheckedCreateNestedManyWithoutFarmInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationCreateWithoutFarmInput, Prisma.CropRecomendationUncheckedCreateWithoutFarmInput> | Prisma.CropRecomendationCreateWithoutFarmInput[] | Prisma.CropRecomendationUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropRecomendationCreateOrConnectWithoutFarmInput | Prisma.CropRecomendationCreateOrConnectWithoutFarmInput[];
    createMany?: Prisma.CropRecomendationCreateManyFarmInputEnvelope;
    connect?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
};
export type CropRecomendationUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationCreateWithoutFarmInput, Prisma.CropRecomendationUncheckedCreateWithoutFarmInput> | Prisma.CropRecomendationCreateWithoutFarmInput[] | Prisma.CropRecomendationUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropRecomendationCreateOrConnectWithoutFarmInput | Prisma.CropRecomendationCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.CropRecomendationUpsertWithWhereUniqueWithoutFarmInput | Prisma.CropRecomendationUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.CropRecomendationCreateManyFarmInputEnvelope;
    set?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    disconnect?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    delete?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    connect?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    update?: Prisma.CropRecomendationUpdateWithWhereUniqueWithoutFarmInput | Prisma.CropRecomendationUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.CropRecomendationUpdateManyWithWhereWithoutFarmInput | Prisma.CropRecomendationUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.CropRecomendationScalarWhereInput | Prisma.CropRecomendationScalarWhereInput[];
};
export type CropRecomendationUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationCreateWithoutFarmInput, Prisma.CropRecomendationUncheckedCreateWithoutFarmInput> | Prisma.CropRecomendationCreateWithoutFarmInput[] | Prisma.CropRecomendationUncheckedCreateWithoutFarmInput[];
    connectOrCreate?: Prisma.CropRecomendationCreateOrConnectWithoutFarmInput | Prisma.CropRecomendationCreateOrConnectWithoutFarmInput[];
    upsert?: Prisma.CropRecomendationUpsertWithWhereUniqueWithoutFarmInput | Prisma.CropRecomendationUpsertWithWhereUniqueWithoutFarmInput[];
    createMany?: Prisma.CropRecomendationCreateManyFarmInputEnvelope;
    set?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    disconnect?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    delete?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    connect?: Prisma.CropRecomendationWhereUniqueInput | Prisma.CropRecomendationWhereUniqueInput[];
    update?: Prisma.CropRecomendationUpdateWithWhereUniqueWithoutFarmInput | Prisma.CropRecomendationUpdateWithWhereUniqueWithoutFarmInput[];
    updateMany?: Prisma.CropRecomendationUpdateManyWithWhereWithoutFarmInput | Prisma.CropRecomendationUpdateManyWithWhereWithoutFarmInput[];
    deleteMany?: Prisma.CropRecomendationScalarWhereInput | Prisma.CropRecomendationScalarWhereInput[];
};
export type CropRecomendationCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationCreateWithoutItemsInput, Prisma.CropRecomendationUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.CropRecomendationCreateOrConnectWithoutItemsInput;
    connect?: Prisma.CropRecomendationWhereUniqueInput;
};
export type CropRecomendationUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationCreateWithoutItemsInput, Prisma.CropRecomendationUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.CropRecomendationCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.CropRecomendationUpsertWithoutItemsInput;
    connect?: Prisma.CropRecomendationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CropRecomendationUpdateToOneWithWhereWithoutItemsInput, Prisma.CropRecomendationUpdateWithoutItemsInput>, Prisma.CropRecomendationUncheckedUpdateWithoutItemsInput>;
};
export type CropRecomendationCreateWithoutFarmInput = {
    id?: string;
    modelVersion: string;
    createdAt?: Date | string;
    items?: Prisma.CropRecomendationItemCreateNestedManyWithoutRecomendationInput;
};
export type CropRecomendationUncheckedCreateWithoutFarmInput = {
    id?: string;
    modelVersion: string;
    createdAt?: Date | string;
    items?: Prisma.CropRecomendationItemUncheckedCreateNestedManyWithoutRecomendationInput;
};
export type CropRecomendationCreateOrConnectWithoutFarmInput = {
    where: Prisma.CropRecomendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropRecomendationCreateWithoutFarmInput, Prisma.CropRecomendationUncheckedCreateWithoutFarmInput>;
};
export type CropRecomendationCreateManyFarmInputEnvelope = {
    data: Prisma.CropRecomendationCreateManyFarmInput | Prisma.CropRecomendationCreateManyFarmInput[];
    skipDuplicates?: boolean;
};
export type CropRecomendationUpsertWithWhereUniqueWithoutFarmInput = {
    where: Prisma.CropRecomendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CropRecomendationUpdateWithoutFarmInput, Prisma.CropRecomendationUncheckedUpdateWithoutFarmInput>;
    create: Prisma.XOR<Prisma.CropRecomendationCreateWithoutFarmInput, Prisma.CropRecomendationUncheckedCreateWithoutFarmInput>;
};
export type CropRecomendationUpdateWithWhereUniqueWithoutFarmInput = {
    where: Prisma.CropRecomendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CropRecomendationUpdateWithoutFarmInput, Prisma.CropRecomendationUncheckedUpdateWithoutFarmInput>;
};
export type CropRecomendationUpdateManyWithWhereWithoutFarmInput = {
    where: Prisma.CropRecomendationScalarWhereInput;
    data: Prisma.XOR<Prisma.CropRecomendationUpdateManyMutationInput, Prisma.CropRecomendationUncheckedUpdateManyWithoutFarmInput>;
};
export type CropRecomendationScalarWhereInput = {
    AND?: Prisma.CropRecomendationScalarWhereInput | Prisma.CropRecomendationScalarWhereInput[];
    OR?: Prisma.CropRecomendationScalarWhereInput[];
    NOT?: Prisma.CropRecomendationScalarWhereInput | Prisma.CropRecomendationScalarWhereInput[];
    id?: Prisma.StringFilter<"CropRecomendation"> | string;
    farmId?: Prisma.StringFilter<"CropRecomendation"> | string;
    modelVersion?: Prisma.StringFilter<"CropRecomendation"> | string;
    createdAt?: Prisma.DateTimeFilter<"CropRecomendation"> | Date | string;
};
export type CropRecomendationCreateWithoutItemsInput = {
    id?: string;
    modelVersion: string;
    createdAt?: Date | string;
    farm: Prisma.FarmCreateNestedOneWithoutRecommendationsInput;
};
export type CropRecomendationUncheckedCreateWithoutItemsInput = {
    id?: string;
    farmId: string;
    modelVersion: string;
    createdAt?: Date | string;
};
export type CropRecomendationCreateOrConnectWithoutItemsInput = {
    where: Prisma.CropRecomendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropRecomendationCreateWithoutItemsInput, Prisma.CropRecomendationUncheckedCreateWithoutItemsInput>;
};
export type CropRecomendationUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.CropRecomendationUpdateWithoutItemsInput, Prisma.CropRecomendationUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.CropRecomendationCreateWithoutItemsInput, Prisma.CropRecomendationUncheckedCreateWithoutItemsInput>;
    where?: Prisma.CropRecomendationWhereInput;
};
export type CropRecomendationUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.CropRecomendationWhereInput;
    data: Prisma.XOR<Prisma.CropRecomendationUpdateWithoutItemsInput, Prisma.CropRecomendationUncheckedUpdateWithoutItemsInput>;
};
export type CropRecomendationUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farm?: Prisma.FarmUpdateOneRequiredWithoutRecommendationsNestedInput;
};
export type CropRecomendationUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    farmId?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropRecomendationCreateManyFarmInput = {
    id?: string;
    modelVersion: string;
    createdAt?: Date | string;
};
export type CropRecomendationUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.CropRecomendationItemUpdateManyWithoutRecomendationNestedInput;
};
export type CropRecomendationUncheckedUpdateWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.CropRecomendationItemUncheckedUpdateManyWithoutRecomendationNestedInput;
};
export type CropRecomendationUncheckedUpdateManyWithoutFarmInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    modelVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CropRecomendationCountOutputType
 */
export type CropRecomendationCountOutputType = {
    items: number;
};
export type CropRecomendationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | CropRecomendationCountOutputTypeCountItemsArgs;
};
/**
 * CropRecomendationCountOutputType without action
 */
export type CropRecomendationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendationCountOutputType
     */
    select?: Prisma.CropRecomendationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CropRecomendationCountOutputType without action
 */
export type CropRecomendationCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropRecomendationItemWhereInput;
};
export type CropRecomendationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    modelVersion?: boolean;
    createdAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.CropRecomendation$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CropRecomendationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropRecomendation"]>;
export type CropRecomendationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    modelVersion?: boolean;
    createdAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropRecomendation"]>;
export type CropRecomendationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    farmId?: boolean;
    modelVersion?: boolean;
    createdAt?: boolean;
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropRecomendation"]>;
export type CropRecomendationSelectScalar = {
    id?: boolean;
    farmId?: boolean;
    modelVersion?: boolean;
    createdAt?: boolean;
};
export type CropRecomendationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "farmId" | "modelVersion" | "createdAt", ExtArgs["result"]["cropRecomendation"]>;
export type CropRecomendationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
    items?: boolean | Prisma.CropRecomendation$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.CropRecomendationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CropRecomendationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type CropRecomendationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farm?: boolean | Prisma.FarmDefaultArgs<ExtArgs>;
};
export type $CropRecomendationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CropRecomendation";
    objects: {
        farm: Prisma.$FarmPayload<ExtArgs>;
        items: Prisma.$CropRecomendationItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        farmId: string;
        modelVersion: string;
        createdAt: Date;
    }, ExtArgs["result"]["cropRecomendation"]>;
    composites: {};
};
export type CropRecomendationGetPayload<S extends boolean | null | undefined | CropRecomendationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload, S>;
export type CropRecomendationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CropRecomendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CropRecomendationCountAggregateInputType | true;
};
export interface CropRecomendationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CropRecomendation'];
        meta: {
            name: 'CropRecomendation';
        };
    };
    /**
     * Find zero or one CropRecomendation that matches the filter.
     * @param {CropRecomendationFindUniqueArgs} args - Arguments to find a CropRecomendation
     * @example
     * // Get one CropRecomendation
     * const cropRecomendation = await prisma.cropRecomendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropRecomendationFindUniqueArgs>(args: Prisma.SelectSubset<T, CropRecomendationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CropRecomendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropRecomendationFindUniqueOrThrowArgs} args - Arguments to find a CropRecomendation
     * @example
     * // Get one CropRecomendation
     * const cropRecomendation = await prisma.cropRecomendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropRecomendationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CropRecomendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CropRecomendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationFindFirstArgs} args - Arguments to find a CropRecomendation
     * @example
     * // Get one CropRecomendation
     * const cropRecomendation = await prisma.cropRecomendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropRecomendationFindFirstArgs>(args?: Prisma.SelectSubset<T, CropRecomendationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CropRecomendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationFindFirstOrThrowArgs} args - Arguments to find a CropRecomendation
     * @example
     * // Get one CropRecomendation
     * const cropRecomendation = await prisma.cropRecomendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropRecomendationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CropRecomendationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CropRecomendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CropRecomendations
     * const cropRecomendations = await prisma.cropRecomendation.findMany()
     *
     * // Get first 10 CropRecomendations
     * const cropRecomendations = await prisma.cropRecomendation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cropRecomendationWithIdOnly = await prisma.cropRecomendation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CropRecomendationFindManyArgs>(args?: Prisma.SelectSubset<T, CropRecomendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CropRecomendation.
     * @param {CropRecomendationCreateArgs} args - Arguments to create a CropRecomendation.
     * @example
     * // Create one CropRecomendation
     * const CropRecomendation = await prisma.cropRecomendation.create({
     *   data: {
     *     // ... data to create a CropRecomendation
     *   }
     * })
     *
     */
    create<T extends CropRecomendationCreateArgs>(args: Prisma.SelectSubset<T, CropRecomendationCreateArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CropRecomendations.
     * @param {CropRecomendationCreateManyArgs} args - Arguments to create many CropRecomendations.
     * @example
     * // Create many CropRecomendations
     * const cropRecomendation = await prisma.cropRecomendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CropRecomendationCreateManyArgs>(args?: Prisma.SelectSubset<T, CropRecomendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CropRecomendations and returns the data saved in the database.
     * @param {CropRecomendationCreateManyAndReturnArgs} args - Arguments to create many CropRecomendations.
     * @example
     * // Create many CropRecomendations
     * const cropRecomendation = await prisma.cropRecomendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CropRecomendations and only return the `id`
     * const cropRecomendationWithIdOnly = await prisma.cropRecomendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CropRecomendationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CropRecomendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CropRecomendation.
     * @param {CropRecomendationDeleteArgs} args - Arguments to delete one CropRecomendation.
     * @example
     * // Delete one CropRecomendation
     * const CropRecomendation = await prisma.cropRecomendation.delete({
     *   where: {
     *     // ... filter to delete one CropRecomendation
     *   }
     * })
     *
     */
    delete<T extends CropRecomendationDeleteArgs>(args: Prisma.SelectSubset<T, CropRecomendationDeleteArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CropRecomendation.
     * @param {CropRecomendationUpdateArgs} args - Arguments to update one CropRecomendation.
     * @example
     * // Update one CropRecomendation
     * const cropRecomendation = await prisma.cropRecomendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CropRecomendationUpdateArgs>(args: Prisma.SelectSubset<T, CropRecomendationUpdateArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CropRecomendations.
     * @param {CropRecomendationDeleteManyArgs} args - Arguments to filter CropRecomendations to delete.
     * @example
     * // Delete a few CropRecomendations
     * const { count } = await prisma.cropRecomendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CropRecomendationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CropRecomendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CropRecomendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CropRecomendations
     * const cropRecomendation = await prisma.cropRecomendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CropRecomendationUpdateManyArgs>(args: Prisma.SelectSubset<T, CropRecomendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CropRecomendations and returns the data updated in the database.
     * @param {CropRecomendationUpdateManyAndReturnArgs} args - Arguments to update many CropRecomendations.
     * @example
     * // Update many CropRecomendations
     * const cropRecomendation = await prisma.cropRecomendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CropRecomendations and only return the `id`
     * const cropRecomendationWithIdOnly = await prisma.cropRecomendation.updateManyAndReturn({
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
    updateManyAndReturn<T extends CropRecomendationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CropRecomendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CropRecomendation.
     * @param {CropRecomendationUpsertArgs} args - Arguments to update or create a CropRecomendation.
     * @example
     * // Update or create a CropRecomendation
     * const cropRecomendation = await prisma.cropRecomendation.upsert({
     *   create: {
     *     // ... data to create a CropRecomendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CropRecomendation we want to update
     *   }
     * })
     */
    upsert<T extends CropRecomendationUpsertArgs>(args: Prisma.SelectSubset<T, CropRecomendationUpsertArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CropRecomendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationCountArgs} args - Arguments to filter CropRecomendations to count.
     * @example
     * // Count the number of CropRecomendations
     * const count = await prisma.cropRecomendation.count({
     *   where: {
     *     // ... the filter for the CropRecomendations we want to count
     *   }
     * })
    **/
    count<T extends CropRecomendationCountArgs>(args?: Prisma.Subset<T, CropRecomendationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CropRecomendationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CropRecomendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropRecomendationAggregateArgs>(args: Prisma.Subset<T, CropRecomendationAggregateArgs>): Prisma.PrismaPromise<GetCropRecomendationAggregateType<T>>;
    /**
     * Group by CropRecomendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CropRecomendationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CropRecomendationGroupByArgs['orderBy'];
    } : {
        orderBy?: CropRecomendationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CropRecomendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropRecomendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CropRecomendation model
     */
    readonly fields: CropRecomendationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CropRecomendation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CropRecomendationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farm<T extends Prisma.FarmDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FarmDefaultArgs<ExtArgs>>): Prisma.Prisma__FarmClient<runtime.Types.Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.CropRecomendation$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CropRecomendation$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the CropRecomendation model
 */
export interface CropRecomendationFieldRefs {
    readonly id: Prisma.FieldRef<"CropRecomendation", 'String'>;
    readonly farmId: Prisma.FieldRef<"CropRecomendation", 'String'>;
    readonly modelVersion: Prisma.FieldRef<"CropRecomendation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CropRecomendation", 'DateTime'>;
}
/**
 * CropRecomendation findUnique
 */
export type CropRecomendationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * Filter, which CropRecomendation to fetch.
     */
    where: Prisma.CropRecomendationWhereUniqueInput;
};
/**
 * CropRecomendation findUniqueOrThrow
 */
export type CropRecomendationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * Filter, which CropRecomendation to fetch.
     */
    where: Prisma.CropRecomendationWhereUniqueInput;
};
/**
 * CropRecomendation findFirst
 */
export type CropRecomendationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * Filter, which CropRecomendation to fetch.
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendations to fetch.
     */
    orderBy?: Prisma.CropRecomendationOrderByWithRelationInput | Prisma.CropRecomendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CropRecomendations.
     */
    cursor?: Prisma.CropRecomendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropRecomendations.
     */
    distinct?: Prisma.CropRecomendationScalarFieldEnum | Prisma.CropRecomendationScalarFieldEnum[];
};
/**
 * CropRecomendation findFirstOrThrow
 */
export type CropRecomendationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * Filter, which CropRecomendation to fetch.
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendations to fetch.
     */
    orderBy?: Prisma.CropRecomendationOrderByWithRelationInput | Prisma.CropRecomendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CropRecomendations.
     */
    cursor?: Prisma.CropRecomendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropRecomendations.
     */
    distinct?: Prisma.CropRecomendationScalarFieldEnum | Prisma.CropRecomendationScalarFieldEnum[];
};
/**
 * CropRecomendation findMany
 */
export type CropRecomendationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * Filter, which CropRecomendations to fetch.
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendations to fetch.
     */
    orderBy?: Prisma.CropRecomendationOrderByWithRelationInput | Prisma.CropRecomendationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CropRecomendations.
     */
    cursor?: Prisma.CropRecomendationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropRecomendations.
     */
    distinct?: Prisma.CropRecomendationScalarFieldEnum | Prisma.CropRecomendationScalarFieldEnum[];
};
/**
 * CropRecomendation create
 */
export type CropRecomendationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * The data needed to create a CropRecomendation.
     */
    data: Prisma.XOR<Prisma.CropRecomendationCreateInput, Prisma.CropRecomendationUncheckedCreateInput>;
};
/**
 * CropRecomendation createMany
 */
export type CropRecomendationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CropRecomendations.
     */
    data: Prisma.CropRecomendationCreateManyInput | Prisma.CropRecomendationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CropRecomendation createManyAndReturn
 */
export type CropRecomendationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * The data used to create many CropRecomendations.
     */
    data: Prisma.CropRecomendationCreateManyInput | Prisma.CropRecomendationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CropRecomendation update
 */
export type CropRecomendationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * The data needed to update a CropRecomendation.
     */
    data: Prisma.XOR<Prisma.CropRecomendationUpdateInput, Prisma.CropRecomendationUncheckedUpdateInput>;
    /**
     * Choose, which CropRecomendation to update.
     */
    where: Prisma.CropRecomendationWhereUniqueInput;
};
/**
 * CropRecomendation updateMany
 */
export type CropRecomendationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CropRecomendations.
     */
    data: Prisma.XOR<Prisma.CropRecomendationUpdateManyMutationInput, Prisma.CropRecomendationUncheckedUpdateManyInput>;
    /**
     * Filter which CropRecomendations to update
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * Limit how many CropRecomendations to update.
     */
    limit?: number;
};
/**
 * CropRecomendation updateManyAndReturn
 */
export type CropRecomendationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * The data used to update CropRecomendations.
     */
    data: Prisma.XOR<Prisma.CropRecomendationUpdateManyMutationInput, Prisma.CropRecomendationUncheckedUpdateManyInput>;
    /**
     * Filter which CropRecomendations to update
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * Limit how many CropRecomendations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CropRecomendation upsert
 */
export type CropRecomendationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * The filter to search for the CropRecomendation to update in case it exists.
     */
    where: Prisma.CropRecomendationWhereUniqueInput;
    /**
     * In case the CropRecomendation found by the `where` argument doesn't exist, create a new CropRecomendation with this data.
     */
    create: Prisma.XOR<Prisma.CropRecomendationCreateInput, Prisma.CropRecomendationUncheckedCreateInput>;
    /**
     * In case the CropRecomendation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CropRecomendationUpdateInput, Prisma.CropRecomendationUncheckedUpdateInput>;
};
/**
 * CropRecomendation delete
 */
export type CropRecomendationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
    /**
     * Filter which CropRecomendation to delete.
     */
    where: Prisma.CropRecomendationWhereUniqueInput;
};
/**
 * CropRecomendation deleteMany
 */
export type CropRecomendationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CropRecomendations to delete
     */
    where?: Prisma.CropRecomendationWhereInput;
    /**
     * Limit how many CropRecomendations to delete.
     */
    limit?: number;
};
/**
 * CropRecomendation.items
 */
export type CropRecomendation$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendationItem
     */
    select?: Prisma.CropRecomendationItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendationItem
     */
    omit?: Prisma.CropRecomendationItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationItemInclude<ExtArgs> | null;
    where?: Prisma.CropRecomendationItemWhereInput;
    orderBy?: Prisma.CropRecomendationItemOrderByWithRelationInput | Prisma.CropRecomendationItemOrderByWithRelationInput[];
    cursor?: Prisma.CropRecomendationItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CropRecomendationItemScalarFieldEnum | Prisma.CropRecomendationItemScalarFieldEnum[];
};
/**
 * CropRecomendation without action
 */
export type CropRecomendationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendation
     */
    select?: Prisma.CropRecomendationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendation
     */
    omit?: Prisma.CropRecomendationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationInclude<ExtArgs> | null;
};
//# sourceMappingURL=CropRecomendation.d.ts.map