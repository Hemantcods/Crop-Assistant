import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CropRecomendationItem
 *
 */
export type CropRecomendationItemModel = runtime.Types.Result.DefaultSelection<Prisma.$CropRecomendationItemPayload>;
export type AggregateCropRecomendationItem = {
    _count: CropRecomendationItemCountAggregateOutputType | null;
    _avg: CropRecomendationItemAvgAggregateOutputType | null;
    _sum: CropRecomendationItemSumAggregateOutputType | null;
    _min: CropRecomendationItemMinAggregateOutputType | null;
    _max: CropRecomendationItemMaxAggregateOutputType | null;
};
export type CropRecomendationItemAvgAggregateOutputType = {
    score: runtime.Decimal | null;
    rank: number | null;
};
export type CropRecomendationItemSumAggregateOutputType = {
    score: runtime.Decimal | null;
    rank: number | null;
};
export type CropRecomendationItemMinAggregateOutputType = {
    id: string | null;
    recomendationId: string | null;
    cropName: string | null;
    score: runtime.Decimal | null;
    rank: number | null;
};
export type CropRecomendationItemMaxAggregateOutputType = {
    id: string | null;
    recomendationId: string | null;
    cropName: string | null;
    score: runtime.Decimal | null;
    rank: number | null;
};
export type CropRecomendationItemCountAggregateOutputType = {
    id: number;
    recomendationId: number;
    cropName: number;
    score: number;
    rank: number;
    _all: number;
};
export type CropRecomendationItemAvgAggregateInputType = {
    score?: true;
    rank?: true;
};
export type CropRecomendationItemSumAggregateInputType = {
    score?: true;
    rank?: true;
};
export type CropRecomendationItemMinAggregateInputType = {
    id?: true;
    recomendationId?: true;
    cropName?: true;
    score?: true;
    rank?: true;
};
export type CropRecomendationItemMaxAggregateInputType = {
    id?: true;
    recomendationId?: true;
    cropName?: true;
    score?: true;
    rank?: true;
};
export type CropRecomendationItemCountAggregateInputType = {
    id?: true;
    recomendationId?: true;
    cropName?: true;
    score?: true;
    rank?: true;
    _all?: true;
};
export type CropRecomendationItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CropRecomendationItem to aggregate.
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendationItems to fetch.
     */
    orderBy?: Prisma.CropRecomendationItemOrderByWithRelationInput | Prisma.CropRecomendationItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CropRecomendationItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendationItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendationItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CropRecomendationItems
    **/
    _count?: true | CropRecomendationItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CropRecomendationItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CropRecomendationItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CropRecomendationItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CropRecomendationItemMaxAggregateInputType;
};
export type GetCropRecomendationItemAggregateType<T extends CropRecomendationItemAggregateArgs> = {
    [P in keyof T & keyof AggregateCropRecomendationItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCropRecomendationItem[P]> : Prisma.GetScalarType<T[P], AggregateCropRecomendationItem[P]>;
};
export type CropRecomendationItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropRecomendationItemWhereInput;
    orderBy?: Prisma.CropRecomendationItemOrderByWithAggregationInput | Prisma.CropRecomendationItemOrderByWithAggregationInput[];
    by: Prisma.CropRecomendationItemScalarFieldEnum[] | Prisma.CropRecomendationItemScalarFieldEnum;
    having?: Prisma.CropRecomendationItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CropRecomendationItemCountAggregateInputType | true;
    _avg?: CropRecomendationItemAvgAggregateInputType;
    _sum?: CropRecomendationItemSumAggregateInputType;
    _min?: CropRecomendationItemMinAggregateInputType;
    _max?: CropRecomendationItemMaxAggregateInputType;
};
export type CropRecomendationItemGroupByOutputType = {
    id: string;
    recomendationId: string;
    cropName: string;
    score: runtime.Decimal;
    rank: number;
    _count: CropRecomendationItemCountAggregateOutputType | null;
    _avg: CropRecomendationItemAvgAggregateOutputType | null;
    _sum: CropRecomendationItemSumAggregateOutputType | null;
    _min: CropRecomendationItemMinAggregateOutputType | null;
    _max: CropRecomendationItemMaxAggregateOutputType | null;
};
export type GetCropRecomendationItemGroupByPayload<T extends CropRecomendationItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CropRecomendationItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CropRecomendationItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CropRecomendationItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CropRecomendationItemGroupByOutputType[P]>;
}>>;
export type CropRecomendationItemWhereInput = {
    AND?: Prisma.CropRecomendationItemWhereInput | Prisma.CropRecomendationItemWhereInput[];
    OR?: Prisma.CropRecomendationItemWhereInput[];
    NOT?: Prisma.CropRecomendationItemWhereInput | Prisma.CropRecomendationItemWhereInput[];
    id?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    recomendationId?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    cropName?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    score?: Prisma.DecimalFilter<"CropRecomendationItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFilter<"CropRecomendationItem"> | number;
    recomendation?: Prisma.XOR<Prisma.CropRecomendationScalarRelationFilter, Prisma.CropRecomendationWhereInput>;
};
export type CropRecomendationItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    recomendationId?: Prisma.SortOrder;
    cropName?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    recomendation?: Prisma.CropRecomendationOrderByWithRelationInput;
};
export type CropRecomendationItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    recomendationId_rank?: Prisma.CropRecomendationItemRecomendationIdRankCompoundUniqueInput;
    AND?: Prisma.CropRecomendationItemWhereInput | Prisma.CropRecomendationItemWhereInput[];
    OR?: Prisma.CropRecomendationItemWhereInput[];
    NOT?: Prisma.CropRecomendationItemWhereInput | Prisma.CropRecomendationItemWhereInput[];
    recomendationId?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    cropName?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    score?: Prisma.DecimalFilter<"CropRecomendationItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFilter<"CropRecomendationItem"> | number;
    recomendation?: Prisma.XOR<Prisma.CropRecomendationScalarRelationFilter, Prisma.CropRecomendationWhereInput>;
}, "id" | "recomendationId_rank">;
export type CropRecomendationItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    recomendationId?: Prisma.SortOrder;
    cropName?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    _count?: Prisma.CropRecomendationItemCountOrderByAggregateInput;
    _avg?: Prisma.CropRecomendationItemAvgOrderByAggregateInput;
    _max?: Prisma.CropRecomendationItemMaxOrderByAggregateInput;
    _min?: Prisma.CropRecomendationItemMinOrderByAggregateInput;
    _sum?: Prisma.CropRecomendationItemSumOrderByAggregateInput;
};
export type CropRecomendationItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.CropRecomendationItemScalarWhereWithAggregatesInput | Prisma.CropRecomendationItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.CropRecomendationItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CropRecomendationItemScalarWhereWithAggregatesInput | Prisma.CropRecomendationItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CropRecomendationItem"> | string;
    recomendationId?: Prisma.StringWithAggregatesFilter<"CropRecomendationItem"> | string;
    cropName?: Prisma.StringWithAggregatesFilter<"CropRecomendationItem"> | string;
    score?: Prisma.DecimalWithAggregatesFilter<"CropRecomendationItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntWithAggregatesFilter<"CropRecomendationItem"> | number;
};
export type CropRecomendationItemCreateInput = {
    id?: string;
    cropName: string;
    score: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank: number;
    recomendation: Prisma.CropRecomendationCreateNestedOneWithoutItemsInput;
};
export type CropRecomendationItemUncheckedCreateInput = {
    id?: string;
    recomendationId: string;
    cropName: string;
    score: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank: number;
};
export type CropRecomendationItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    recomendation?: Prisma.CropRecomendationUpdateOneRequiredWithoutItemsNestedInput;
};
export type CropRecomendationItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recomendationId?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CropRecomendationItemCreateManyInput = {
    id?: string;
    recomendationId: string;
    cropName: string;
    score: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank: number;
};
export type CropRecomendationItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CropRecomendationItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recomendationId?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CropRecomendationItemListRelationFilter = {
    every?: Prisma.CropRecomendationItemWhereInput;
    some?: Prisma.CropRecomendationItemWhereInput;
    none?: Prisma.CropRecomendationItemWhereInput;
};
export type CropRecomendationItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CropRecomendationItemRecomendationIdRankCompoundUniqueInput = {
    recomendationId: string;
    rank: number;
};
export type CropRecomendationItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    recomendationId?: Prisma.SortOrder;
    cropName?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type CropRecomendationItemAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type CropRecomendationItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    recomendationId?: Prisma.SortOrder;
    cropName?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type CropRecomendationItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    recomendationId?: Prisma.SortOrder;
    cropName?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type CropRecomendationItemSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
};
export type CropRecomendationItemCreateNestedManyWithoutRecomendationInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationItemCreateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput> | Prisma.CropRecomendationItemCreateWithoutRecomendationInput[] | Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput[];
    connectOrCreate?: Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput | Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput[];
    createMany?: Prisma.CropRecomendationItemCreateManyRecomendationInputEnvelope;
    connect?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
};
export type CropRecomendationItemUncheckedCreateNestedManyWithoutRecomendationInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationItemCreateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput> | Prisma.CropRecomendationItemCreateWithoutRecomendationInput[] | Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput[];
    connectOrCreate?: Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput | Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput[];
    createMany?: Prisma.CropRecomendationItemCreateManyRecomendationInputEnvelope;
    connect?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
};
export type CropRecomendationItemUpdateManyWithoutRecomendationNestedInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationItemCreateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput> | Prisma.CropRecomendationItemCreateWithoutRecomendationInput[] | Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput[];
    connectOrCreate?: Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput | Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput[];
    upsert?: Prisma.CropRecomendationItemUpsertWithWhereUniqueWithoutRecomendationInput | Prisma.CropRecomendationItemUpsertWithWhereUniqueWithoutRecomendationInput[];
    createMany?: Prisma.CropRecomendationItemCreateManyRecomendationInputEnvelope;
    set?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    disconnect?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    delete?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    connect?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    update?: Prisma.CropRecomendationItemUpdateWithWhereUniqueWithoutRecomendationInput | Prisma.CropRecomendationItemUpdateWithWhereUniqueWithoutRecomendationInput[];
    updateMany?: Prisma.CropRecomendationItemUpdateManyWithWhereWithoutRecomendationInput | Prisma.CropRecomendationItemUpdateManyWithWhereWithoutRecomendationInput[];
    deleteMany?: Prisma.CropRecomendationItemScalarWhereInput | Prisma.CropRecomendationItemScalarWhereInput[];
};
export type CropRecomendationItemUncheckedUpdateManyWithoutRecomendationNestedInput = {
    create?: Prisma.XOR<Prisma.CropRecomendationItemCreateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput> | Prisma.CropRecomendationItemCreateWithoutRecomendationInput[] | Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput[];
    connectOrCreate?: Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput | Prisma.CropRecomendationItemCreateOrConnectWithoutRecomendationInput[];
    upsert?: Prisma.CropRecomendationItemUpsertWithWhereUniqueWithoutRecomendationInput | Prisma.CropRecomendationItemUpsertWithWhereUniqueWithoutRecomendationInput[];
    createMany?: Prisma.CropRecomendationItemCreateManyRecomendationInputEnvelope;
    set?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    disconnect?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    delete?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    connect?: Prisma.CropRecomendationItemWhereUniqueInput | Prisma.CropRecomendationItemWhereUniqueInput[];
    update?: Prisma.CropRecomendationItemUpdateWithWhereUniqueWithoutRecomendationInput | Prisma.CropRecomendationItemUpdateWithWhereUniqueWithoutRecomendationInput[];
    updateMany?: Prisma.CropRecomendationItemUpdateManyWithWhereWithoutRecomendationInput | Prisma.CropRecomendationItemUpdateManyWithWhereWithoutRecomendationInput[];
    deleteMany?: Prisma.CropRecomendationItemScalarWhereInput | Prisma.CropRecomendationItemScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CropRecomendationItemCreateWithoutRecomendationInput = {
    id?: string;
    cropName: string;
    score: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank: number;
};
export type CropRecomendationItemUncheckedCreateWithoutRecomendationInput = {
    id?: string;
    cropName: string;
    score: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank: number;
};
export type CropRecomendationItemCreateOrConnectWithoutRecomendationInput = {
    where: Prisma.CropRecomendationItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropRecomendationItemCreateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput>;
};
export type CropRecomendationItemCreateManyRecomendationInputEnvelope = {
    data: Prisma.CropRecomendationItemCreateManyRecomendationInput | Prisma.CropRecomendationItemCreateManyRecomendationInput[];
    skipDuplicates?: boolean;
};
export type CropRecomendationItemUpsertWithWhereUniqueWithoutRecomendationInput = {
    where: Prisma.CropRecomendationItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.CropRecomendationItemUpdateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedUpdateWithoutRecomendationInput>;
    create: Prisma.XOR<Prisma.CropRecomendationItemCreateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedCreateWithoutRecomendationInput>;
};
export type CropRecomendationItemUpdateWithWhereUniqueWithoutRecomendationInput = {
    where: Prisma.CropRecomendationItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.CropRecomendationItemUpdateWithoutRecomendationInput, Prisma.CropRecomendationItemUncheckedUpdateWithoutRecomendationInput>;
};
export type CropRecomendationItemUpdateManyWithWhereWithoutRecomendationInput = {
    where: Prisma.CropRecomendationItemScalarWhereInput;
    data: Prisma.XOR<Prisma.CropRecomendationItemUpdateManyMutationInput, Prisma.CropRecomendationItemUncheckedUpdateManyWithoutRecomendationInput>;
};
export type CropRecomendationItemScalarWhereInput = {
    AND?: Prisma.CropRecomendationItemScalarWhereInput | Prisma.CropRecomendationItemScalarWhereInput[];
    OR?: Prisma.CropRecomendationItemScalarWhereInput[];
    NOT?: Prisma.CropRecomendationItemScalarWhereInput | Prisma.CropRecomendationItemScalarWhereInput[];
    id?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    recomendationId?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    cropName?: Prisma.StringFilter<"CropRecomendationItem"> | string;
    score?: Prisma.DecimalFilter<"CropRecomendationItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFilter<"CropRecomendationItem"> | number;
};
export type CropRecomendationItemCreateManyRecomendationInput = {
    id?: string;
    cropName: string;
    score: runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank: number;
};
export type CropRecomendationItemUpdateWithoutRecomendationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CropRecomendationItemUncheckedUpdateWithoutRecomendationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CropRecomendationItemUncheckedUpdateManyWithoutRecomendationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropName?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CropRecomendationItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    recomendationId?: boolean;
    cropName?: boolean;
    score?: boolean;
    rank?: boolean;
    recomendation?: boolean | Prisma.CropRecomendationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropRecomendationItem"]>;
export type CropRecomendationItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    recomendationId?: boolean;
    cropName?: boolean;
    score?: boolean;
    rank?: boolean;
    recomendation?: boolean | Prisma.CropRecomendationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropRecomendationItem"]>;
export type CropRecomendationItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    recomendationId?: boolean;
    cropName?: boolean;
    score?: boolean;
    rank?: boolean;
    recomendation?: boolean | Prisma.CropRecomendationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropRecomendationItem"]>;
export type CropRecomendationItemSelectScalar = {
    id?: boolean;
    recomendationId?: boolean;
    cropName?: boolean;
    score?: boolean;
    rank?: boolean;
};
export type CropRecomendationItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "recomendationId" | "cropName" | "score" | "rank", ExtArgs["result"]["cropRecomendationItem"]>;
export type CropRecomendationItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recomendation?: boolean | Prisma.CropRecomendationDefaultArgs<ExtArgs>;
};
export type CropRecomendationItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recomendation?: boolean | Prisma.CropRecomendationDefaultArgs<ExtArgs>;
};
export type CropRecomendationItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recomendation?: boolean | Prisma.CropRecomendationDefaultArgs<ExtArgs>;
};
export type $CropRecomendationItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CropRecomendationItem";
    objects: {
        recomendation: Prisma.$CropRecomendationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        recomendationId: string;
        cropName: string;
        score: runtime.Decimal;
        rank: number;
    }, ExtArgs["result"]["cropRecomendationItem"]>;
    composites: {};
};
export type CropRecomendationItemGetPayload<S extends boolean | null | undefined | CropRecomendationItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload, S>;
export type CropRecomendationItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CropRecomendationItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CropRecomendationItemCountAggregateInputType | true;
};
export interface CropRecomendationItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CropRecomendationItem'];
        meta: {
            name: 'CropRecomendationItem';
        };
    };
    /**
     * Find zero or one CropRecomendationItem that matches the filter.
     * @param {CropRecomendationItemFindUniqueArgs} args - Arguments to find a CropRecomendationItem
     * @example
     * // Get one CropRecomendationItem
     * const cropRecomendationItem = await prisma.cropRecomendationItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropRecomendationItemFindUniqueArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CropRecomendationItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropRecomendationItemFindUniqueOrThrowArgs} args - Arguments to find a CropRecomendationItem
     * @example
     * // Get one CropRecomendationItem
     * const cropRecomendationItem = await prisma.cropRecomendationItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropRecomendationItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CropRecomendationItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemFindFirstArgs} args - Arguments to find a CropRecomendationItem
     * @example
     * // Get one CropRecomendationItem
     * const cropRecomendationItem = await prisma.cropRecomendationItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropRecomendationItemFindFirstArgs>(args?: Prisma.SelectSubset<T, CropRecomendationItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CropRecomendationItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemFindFirstOrThrowArgs} args - Arguments to find a CropRecomendationItem
     * @example
     * // Get one CropRecomendationItem
     * const cropRecomendationItem = await prisma.cropRecomendationItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropRecomendationItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CropRecomendationItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CropRecomendationItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CropRecomendationItems
     * const cropRecomendationItems = await prisma.cropRecomendationItem.findMany()
     *
     * // Get first 10 CropRecomendationItems
     * const cropRecomendationItems = await prisma.cropRecomendationItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cropRecomendationItemWithIdOnly = await prisma.cropRecomendationItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CropRecomendationItemFindManyArgs>(args?: Prisma.SelectSubset<T, CropRecomendationItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CropRecomendationItem.
     * @param {CropRecomendationItemCreateArgs} args - Arguments to create a CropRecomendationItem.
     * @example
     * // Create one CropRecomendationItem
     * const CropRecomendationItem = await prisma.cropRecomendationItem.create({
     *   data: {
     *     // ... data to create a CropRecomendationItem
     *   }
     * })
     *
     */
    create<T extends CropRecomendationItemCreateArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemCreateArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CropRecomendationItems.
     * @param {CropRecomendationItemCreateManyArgs} args - Arguments to create many CropRecomendationItems.
     * @example
     * // Create many CropRecomendationItems
     * const cropRecomendationItem = await prisma.cropRecomendationItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CropRecomendationItemCreateManyArgs>(args?: Prisma.SelectSubset<T, CropRecomendationItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CropRecomendationItems and returns the data saved in the database.
     * @param {CropRecomendationItemCreateManyAndReturnArgs} args - Arguments to create many CropRecomendationItems.
     * @example
     * // Create many CropRecomendationItems
     * const cropRecomendationItem = await prisma.cropRecomendationItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CropRecomendationItems and only return the `id`
     * const cropRecomendationItemWithIdOnly = await prisma.cropRecomendationItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CropRecomendationItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CropRecomendationItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CropRecomendationItem.
     * @param {CropRecomendationItemDeleteArgs} args - Arguments to delete one CropRecomendationItem.
     * @example
     * // Delete one CropRecomendationItem
     * const CropRecomendationItem = await prisma.cropRecomendationItem.delete({
     *   where: {
     *     // ... filter to delete one CropRecomendationItem
     *   }
     * })
     *
     */
    delete<T extends CropRecomendationItemDeleteArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemDeleteArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CropRecomendationItem.
     * @param {CropRecomendationItemUpdateArgs} args - Arguments to update one CropRecomendationItem.
     * @example
     * // Update one CropRecomendationItem
     * const cropRecomendationItem = await prisma.cropRecomendationItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CropRecomendationItemUpdateArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemUpdateArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CropRecomendationItems.
     * @param {CropRecomendationItemDeleteManyArgs} args - Arguments to filter CropRecomendationItems to delete.
     * @example
     * // Delete a few CropRecomendationItems
     * const { count } = await prisma.cropRecomendationItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CropRecomendationItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, CropRecomendationItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CropRecomendationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CropRecomendationItems
     * const cropRecomendationItem = await prisma.cropRecomendationItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CropRecomendationItemUpdateManyArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CropRecomendationItems and returns the data updated in the database.
     * @param {CropRecomendationItemUpdateManyAndReturnArgs} args - Arguments to update many CropRecomendationItems.
     * @example
     * // Update many CropRecomendationItems
     * const cropRecomendationItem = await prisma.cropRecomendationItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CropRecomendationItems and only return the `id`
     * const cropRecomendationItemWithIdOnly = await prisma.cropRecomendationItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CropRecomendationItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CropRecomendationItem.
     * @param {CropRecomendationItemUpsertArgs} args - Arguments to update or create a CropRecomendationItem.
     * @example
     * // Update or create a CropRecomendationItem
     * const cropRecomendationItem = await prisma.cropRecomendationItem.upsert({
     *   create: {
     *     // ... data to create a CropRecomendationItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CropRecomendationItem we want to update
     *   }
     * })
     */
    upsert<T extends CropRecomendationItemUpsertArgs>(args: Prisma.SelectSubset<T, CropRecomendationItemUpsertArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationItemClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CropRecomendationItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemCountArgs} args - Arguments to filter CropRecomendationItems to count.
     * @example
     * // Count the number of CropRecomendationItems
     * const count = await prisma.cropRecomendationItem.count({
     *   where: {
     *     // ... the filter for the CropRecomendationItems we want to count
     *   }
     * })
    **/
    count<T extends CropRecomendationItemCountArgs>(args?: Prisma.Subset<T, CropRecomendationItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CropRecomendationItemCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CropRecomendationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropRecomendationItemAggregateArgs>(args: Prisma.Subset<T, CropRecomendationItemAggregateArgs>): Prisma.PrismaPromise<GetCropRecomendationItemAggregateType<T>>;
    /**
     * Group by CropRecomendationItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropRecomendationItemGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CropRecomendationItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CropRecomendationItemGroupByArgs['orderBy'];
    } : {
        orderBy?: CropRecomendationItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CropRecomendationItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropRecomendationItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CropRecomendationItem model
     */
    readonly fields: CropRecomendationItemFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CropRecomendationItem.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CropRecomendationItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    recomendation<T extends Prisma.CropRecomendationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CropRecomendationDefaultArgs<ExtArgs>>): Prisma.Prisma__CropRecomendationClient<runtime.Types.Result.GetResult<Prisma.$CropRecomendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CropRecomendationItem model
 */
export interface CropRecomendationItemFieldRefs {
    readonly id: Prisma.FieldRef<"CropRecomendationItem", 'String'>;
    readonly recomendationId: Prisma.FieldRef<"CropRecomendationItem", 'String'>;
    readonly cropName: Prisma.FieldRef<"CropRecomendationItem", 'String'>;
    readonly score: Prisma.FieldRef<"CropRecomendationItem", 'Decimal'>;
    readonly rank: Prisma.FieldRef<"CropRecomendationItem", 'Int'>;
}
/**
 * CropRecomendationItem findUnique
 */
export type CropRecomendationItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropRecomendationItem to fetch.
     */
    where: Prisma.CropRecomendationItemWhereUniqueInput;
};
/**
 * CropRecomendationItem findUniqueOrThrow
 */
export type CropRecomendationItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropRecomendationItem to fetch.
     */
    where: Prisma.CropRecomendationItemWhereUniqueInput;
};
/**
 * CropRecomendationItem findFirst
 */
export type CropRecomendationItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropRecomendationItem to fetch.
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendationItems to fetch.
     */
    orderBy?: Prisma.CropRecomendationItemOrderByWithRelationInput | Prisma.CropRecomendationItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CropRecomendationItems.
     */
    cursor?: Prisma.CropRecomendationItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendationItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendationItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropRecomendationItems.
     */
    distinct?: Prisma.CropRecomendationItemScalarFieldEnum | Prisma.CropRecomendationItemScalarFieldEnum[];
};
/**
 * CropRecomendationItem findFirstOrThrow
 */
export type CropRecomendationItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropRecomendationItem to fetch.
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendationItems to fetch.
     */
    orderBy?: Prisma.CropRecomendationItemOrderByWithRelationInput | Prisma.CropRecomendationItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CropRecomendationItems.
     */
    cursor?: Prisma.CropRecomendationItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendationItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendationItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropRecomendationItems.
     */
    distinct?: Prisma.CropRecomendationItemScalarFieldEnum | Prisma.CropRecomendationItemScalarFieldEnum[];
};
/**
 * CropRecomendationItem findMany
 */
export type CropRecomendationItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropRecomendationItems to fetch.
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropRecomendationItems to fetch.
     */
    orderBy?: Prisma.CropRecomendationItemOrderByWithRelationInput | Prisma.CropRecomendationItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CropRecomendationItems.
     */
    cursor?: Prisma.CropRecomendationItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropRecomendationItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropRecomendationItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropRecomendationItems.
     */
    distinct?: Prisma.CropRecomendationItemScalarFieldEnum | Prisma.CropRecomendationItemScalarFieldEnum[];
};
/**
 * CropRecomendationItem create
 */
export type CropRecomendationItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CropRecomendationItem.
     */
    data: Prisma.XOR<Prisma.CropRecomendationItemCreateInput, Prisma.CropRecomendationItemUncheckedCreateInput>;
};
/**
 * CropRecomendationItem createMany
 */
export type CropRecomendationItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CropRecomendationItems.
     */
    data: Prisma.CropRecomendationItemCreateManyInput | Prisma.CropRecomendationItemCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CropRecomendationItem createManyAndReturn
 */
export type CropRecomendationItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendationItem
     */
    select?: Prisma.CropRecomendationItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendationItem
     */
    omit?: Prisma.CropRecomendationItemOmit<ExtArgs> | null;
    /**
     * The data used to create many CropRecomendationItems.
     */
    data: Prisma.CropRecomendationItemCreateManyInput | Prisma.CropRecomendationItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CropRecomendationItem update
 */
export type CropRecomendationItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CropRecomendationItem.
     */
    data: Prisma.XOR<Prisma.CropRecomendationItemUpdateInput, Prisma.CropRecomendationItemUncheckedUpdateInput>;
    /**
     * Choose, which CropRecomendationItem to update.
     */
    where: Prisma.CropRecomendationItemWhereUniqueInput;
};
/**
 * CropRecomendationItem updateMany
 */
export type CropRecomendationItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CropRecomendationItems.
     */
    data: Prisma.XOR<Prisma.CropRecomendationItemUpdateManyMutationInput, Prisma.CropRecomendationItemUncheckedUpdateManyInput>;
    /**
     * Filter which CropRecomendationItems to update
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * Limit how many CropRecomendationItems to update.
     */
    limit?: number;
};
/**
 * CropRecomendationItem updateManyAndReturn
 */
export type CropRecomendationItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropRecomendationItem
     */
    select?: Prisma.CropRecomendationItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CropRecomendationItem
     */
    omit?: Prisma.CropRecomendationItemOmit<ExtArgs> | null;
    /**
     * The data used to update CropRecomendationItems.
     */
    data: Prisma.XOR<Prisma.CropRecomendationItemUpdateManyMutationInput, Prisma.CropRecomendationItemUncheckedUpdateManyInput>;
    /**
     * Filter which CropRecomendationItems to update
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * Limit how many CropRecomendationItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropRecomendationItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CropRecomendationItem upsert
 */
export type CropRecomendationItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CropRecomendationItem to update in case it exists.
     */
    where: Prisma.CropRecomendationItemWhereUniqueInput;
    /**
     * In case the CropRecomendationItem found by the `where` argument doesn't exist, create a new CropRecomendationItem with this data.
     */
    create: Prisma.XOR<Prisma.CropRecomendationItemCreateInput, Prisma.CropRecomendationItemUncheckedCreateInput>;
    /**
     * In case the CropRecomendationItem was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CropRecomendationItemUpdateInput, Prisma.CropRecomendationItemUncheckedUpdateInput>;
};
/**
 * CropRecomendationItem delete
 */
export type CropRecomendationItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CropRecomendationItem to delete.
     */
    where: Prisma.CropRecomendationItemWhereUniqueInput;
};
/**
 * CropRecomendationItem deleteMany
 */
export type CropRecomendationItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CropRecomendationItems to delete
     */
    where?: Prisma.CropRecomendationItemWhereInput;
    /**
     * Limit how many CropRecomendationItems to delete.
     */
    limit?: number;
};
/**
 * CropRecomendationItem without action
 */
export type CropRecomendationItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=CropRecomendationItem.d.ts.map