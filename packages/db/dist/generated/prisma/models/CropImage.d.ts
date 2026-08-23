import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CropImage
 *
 */
export type CropImageModel = runtime.Types.Result.DefaultSelection<Prisma.$CropImagePayload>;
export type AggregateCropImage = {
    _count: CropImageCountAggregateOutputType | null;
    _min: CropImageMinAggregateOutputType | null;
    _max: CropImageMaxAggregateOutputType | null;
};
export type CropImageMinAggregateOutputType = {
    id: string | null;
    cropId: string | null;
    url: string | null;
    uploadedAt: Date | null;
};
export type CropImageMaxAggregateOutputType = {
    id: string | null;
    cropId: string | null;
    url: string | null;
    uploadedAt: Date | null;
};
export type CropImageCountAggregateOutputType = {
    id: number;
    cropId: number;
    url: number;
    uploadedAt: number;
    _all: number;
};
export type CropImageMinAggregateInputType = {
    id?: true;
    cropId?: true;
    url?: true;
    uploadedAt?: true;
};
export type CropImageMaxAggregateInputType = {
    id?: true;
    cropId?: true;
    url?: true;
    uploadedAt?: true;
};
export type CropImageCountAggregateInputType = {
    id?: true;
    cropId?: true;
    url?: true;
    uploadedAt?: true;
    _all?: true;
};
export type CropImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CropImage to aggregate.
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropImages to fetch.
     */
    orderBy?: Prisma.CropImageOrderByWithRelationInput | Prisma.CropImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CropImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CropImages
    **/
    _count?: true | CropImageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CropImageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CropImageMaxAggregateInputType;
};
export type GetCropImageAggregateType<T extends CropImageAggregateArgs> = {
    [P in keyof T & keyof AggregateCropImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCropImage[P]> : Prisma.GetScalarType<T[P], AggregateCropImage[P]>;
};
export type CropImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CropImageWhereInput;
    orderBy?: Prisma.CropImageOrderByWithAggregationInput | Prisma.CropImageOrderByWithAggregationInput[];
    by: Prisma.CropImageScalarFieldEnum[] | Prisma.CropImageScalarFieldEnum;
    having?: Prisma.CropImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CropImageCountAggregateInputType | true;
    _min?: CropImageMinAggregateInputType;
    _max?: CropImageMaxAggregateInputType;
};
export type CropImageGroupByOutputType = {
    id: string;
    cropId: string;
    url: string;
    uploadedAt: Date;
    _count: CropImageCountAggregateOutputType | null;
    _min: CropImageMinAggregateOutputType | null;
    _max: CropImageMaxAggregateOutputType | null;
};
export type GetCropImageGroupByPayload<T extends CropImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CropImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CropImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CropImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CropImageGroupByOutputType[P]>;
}>>;
export type CropImageWhereInput = {
    AND?: Prisma.CropImageWhereInput | Prisma.CropImageWhereInput[];
    OR?: Prisma.CropImageWhereInput[];
    NOT?: Prisma.CropImageWhereInput | Prisma.CropImageWhereInput[];
    id?: Prisma.StringFilter<"CropImage"> | string;
    cropId?: Prisma.StringFilter<"CropImage"> | string;
    url?: Prisma.StringFilter<"CropImage"> | string;
    uploadedAt?: Prisma.DateTimeFilter<"CropImage"> | Date | string;
    crop?: Prisma.XOR<Prisma.CropScalarRelationFilter, Prisma.CropWhereInput>;
    diagnoses?: Prisma.DiagnosisListRelationFilter;
};
export type CropImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cropId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    crop?: Prisma.CropOrderByWithRelationInput;
    diagnoses?: Prisma.DiagnosisOrderByRelationAggregateInput;
};
export type CropImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CropImageWhereInput | Prisma.CropImageWhereInput[];
    OR?: Prisma.CropImageWhereInput[];
    NOT?: Prisma.CropImageWhereInput | Prisma.CropImageWhereInput[];
    cropId?: Prisma.StringFilter<"CropImage"> | string;
    url?: Prisma.StringFilter<"CropImage"> | string;
    uploadedAt?: Prisma.DateTimeFilter<"CropImage"> | Date | string;
    crop?: Prisma.XOR<Prisma.CropScalarRelationFilter, Prisma.CropWhereInput>;
    diagnoses?: Prisma.DiagnosisListRelationFilter;
}, "id">;
export type CropImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cropId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
    _count?: Prisma.CropImageCountOrderByAggregateInput;
    _max?: Prisma.CropImageMaxOrderByAggregateInput;
    _min?: Prisma.CropImageMinOrderByAggregateInput;
};
export type CropImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.CropImageScalarWhereWithAggregatesInput | Prisma.CropImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.CropImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CropImageScalarWhereWithAggregatesInput | Prisma.CropImageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CropImage"> | string;
    cropId?: Prisma.StringWithAggregatesFilter<"CropImage"> | string;
    url?: Prisma.StringWithAggregatesFilter<"CropImage"> | string;
    uploadedAt?: Prisma.DateTimeWithAggregatesFilter<"CropImage"> | Date | string;
};
export type CropImageCreateInput = {
    id?: string;
    url: string;
    uploadedAt?: Date | string;
    crop: Prisma.CropCreateNestedOneWithoutImagesInput;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutImageInput;
};
export type CropImageUncheckedCreateInput = {
    id?: string;
    cropId: string;
    url: string;
    uploadedAt?: Date | string;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutImageInput;
};
export type CropImageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crop?: Prisma.CropUpdateOneRequiredWithoutImagesNestedInput;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutImageNestedInput;
};
export type CropImageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutImageNestedInput;
};
export type CropImageCreateManyInput = {
    id?: string;
    cropId: string;
    url: string;
    uploadedAt?: Date | string;
};
export type CropImageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropImageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropImageListRelationFilter = {
    every?: Prisma.CropImageWhereInput;
    some?: Prisma.CropImageWhereInput;
    none?: Prisma.CropImageWhereInput;
};
export type CropImageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CropImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cropId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
};
export type CropImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cropId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
};
export type CropImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cropId?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    uploadedAt?: Prisma.SortOrder;
};
export type CropImageScalarRelationFilter = {
    is?: Prisma.CropImageWhereInput;
    isNot?: Prisma.CropImageWhereInput;
};
export type CropImageCreateNestedManyWithoutCropInput = {
    create?: Prisma.XOR<Prisma.CropImageCreateWithoutCropInput, Prisma.CropImageUncheckedCreateWithoutCropInput> | Prisma.CropImageCreateWithoutCropInput[] | Prisma.CropImageUncheckedCreateWithoutCropInput[];
    connectOrCreate?: Prisma.CropImageCreateOrConnectWithoutCropInput | Prisma.CropImageCreateOrConnectWithoutCropInput[];
    createMany?: Prisma.CropImageCreateManyCropInputEnvelope;
    connect?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
};
export type CropImageUncheckedCreateNestedManyWithoutCropInput = {
    create?: Prisma.XOR<Prisma.CropImageCreateWithoutCropInput, Prisma.CropImageUncheckedCreateWithoutCropInput> | Prisma.CropImageCreateWithoutCropInput[] | Prisma.CropImageUncheckedCreateWithoutCropInput[];
    connectOrCreate?: Prisma.CropImageCreateOrConnectWithoutCropInput | Prisma.CropImageCreateOrConnectWithoutCropInput[];
    createMany?: Prisma.CropImageCreateManyCropInputEnvelope;
    connect?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
};
export type CropImageUpdateManyWithoutCropNestedInput = {
    create?: Prisma.XOR<Prisma.CropImageCreateWithoutCropInput, Prisma.CropImageUncheckedCreateWithoutCropInput> | Prisma.CropImageCreateWithoutCropInput[] | Prisma.CropImageUncheckedCreateWithoutCropInput[];
    connectOrCreate?: Prisma.CropImageCreateOrConnectWithoutCropInput | Prisma.CropImageCreateOrConnectWithoutCropInput[];
    upsert?: Prisma.CropImageUpsertWithWhereUniqueWithoutCropInput | Prisma.CropImageUpsertWithWhereUniqueWithoutCropInput[];
    createMany?: Prisma.CropImageCreateManyCropInputEnvelope;
    set?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    disconnect?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    delete?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    connect?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    update?: Prisma.CropImageUpdateWithWhereUniqueWithoutCropInput | Prisma.CropImageUpdateWithWhereUniqueWithoutCropInput[];
    updateMany?: Prisma.CropImageUpdateManyWithWhereWithoutCropInput | Prisma.CropImageUpdateManyWithWhereWithoutCropInput[];
    deleteMany?: Prisma.CropImageScalarWhereInput | Prisma.CropImageScalarWhereInput[];
};
export type CropImageUncheckedUpdateManyWithoutCropNestedInput = {
    create?: Prisma.XOR<Prisma.CropImageCreateWithoutCropInput, Prisma.CropImageUncheckedCreateWithoutCropInput> | Prisma.CropImageCreateWithoutCropInput[] | Prisma.CropImageUncheckedCreateWithoutCropInput[];
    connectOrCreate?: Prisma.CropImageCreateOrConnectWithoutCropInput | Prisma.CropImageCreateOrConnectWithoutCropInput[];
    upsert?: Prisma.CropImageUpsertWithWhereUniqueWithoutCropInput | Prisma.CropImageUpsertWithWhereUniqueWithoutCropInput[];
    createMany?: Prisma.CropImageCreateManyCropInputEnvelope;
    set?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    disconnect?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    delete?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    connect?: Prisma.CropImageWhereUniqueInput | Prisma.CropImageWhereUniqueInput[];
    update?: Prisma.CropImageUpdateWithWhereUniqueWithoutCropInput | Prisma.CropImageUpdateWithWhereUniqueWithoutCropInput[];
    updateMany?: Prisma.CropImageUpdateManyWithWhereWithoutCropInput | Prisma.CropImageUpdateManyWithWhereWithoutCropInput[];
    deleteMany?: Prisma.CropImageScalarWhereInput | Prisma.CropImageScalarWhereInput[];
};
export type CropImageCreateNestedOneWithoutDiagnosesInput = {
    create?: Prisma.XOR<Prisma.CropImageCreateWithoutDiagnosesInput, Prisma.CropImageUncheckedCreateWithoutDiagnosesInput>;
    connectOrCreate?: Prisma.CropImageCreateOrConnectWithoutDiagnosesInput;
    connect?: Prisma.CropImageWhereUniqueInput;
};
export type CropImageUpdateOneRequiredWithoutDiagnosesNestedInput = {
    create?: Prisma.XOR<Prisma.CropImageCreateWithoutDiagnosesInput, Prisma.CropImageUncheckedCreateWithoutDiagnosesInput>;
    connectOrCreate?: Prisma.CropImageCreateOrConnectWithoutDiagnosesInput;
    upsert?: Prisma.CropImageUpsertWithoutDiagnosesInput;
    connect?: Prisma.CropImageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CropImageUpdateToOneWithWhereWithoutDiagnosesInput, Prisma.CropImageUpdateWithoutDiagnosesInput>, Prisma.CropImageUncheckedUpdateWithoutDiagnosesInput>;
};
export type CropImageCreateWithoutCropInput = {
    id?: string;
    url: string;
    uploadedAt?: Date | string;
    diagnoses?: Prisma.DiagnosisCreateNestedManyWithoutImageInput;
};
export type CropImageUncheckedCreateWithoutCropInput = {
    id?: string;
    url: string;
    uploadedAt?: Date | string;
    diagnoses?: Prisma.DiagnosisUncheckedCreateNestedManyWithoutImageInput;
};
export type CropImageCreateOrConnectWithoutCropInput = {
    where: Prisma.CropImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropImageCreateWithoutCropInput, Prisma.CropImageUncheckedCreateWithoutCropInput>;
};
export type CropImageCreateManyCropInputEnvelope = {
    data: Prisma.CropImageCreateManyCropInput | Prisma.CropImageCreateManyCropInput[];
    skipDuplicates?: boolean;
};
export type CropImageUpsertWithWhereUniqueWithoutCropInput = {
    where: Prisma.CropImageWhereUniqueInput;
    update: Prisma.XOR<Prisma.CropImageUpdateWithoutCropInput, Prisma.CropImageUncheckedUpdateWithoutCropInput>;
    create: Prisma.XOR<Prisma.CropImageCreateWithoutCropInput, Prisma.CropImageUncheckedCreateWithoutCropInput>;
};
export type CropImageUpdateWithWhereUniqueWithoutCropInput = {
    where: Prisma.CropImageWhereUniqueInput;
    data: Prisma.XOR<Prisma.CropImageUpdateWithoutCropInput, Prisma.CropImageUncheckedUpdateWithoutCropInput>;
};
export type CropImageUpdateManyWithWhereWithoutCropInput = {
    where: Prisma.CropImageScalarWhereInput;
    data: Prisma.XOR<Prisma.CropImageUpdateManyMutationInput, Prisma.CropImageUncheckedUpdateManyWithoutCropInput>;
};
export type CropImageScalarWhereInput = {
    AND?: Prisma.CropImageScalarWhereInput | Prisma.CropImageScalarWhereInput[];
    OR?: Prisma.CropImageScalarWhereInput[];
    NOT?: Prisma.CropImageScalarWhereInput | Prisma.CropImageScalarWhereInput[];
    id?: Prisma.StringFilter<"CropImage"> | string;
    cropId?: Prisma.StringFilter<"CropImage"> | string;
    url?: Prisma.StringFilter<"CropImage"> | string;
    uploadedAt?: Prisma.DateTimeFilter<"CropImage"> | Date | string;
};
export type CropImageCreateWithoutDiagnosesInput = {
    id?: string;
    url: string;
    uploadedAt?: Date | string;
    crop: Prisma.CropCreateNestedOneWithoutImagesInput;
};
export type CropImageUncheckedCreateWithoutDiagnosesInput = {
    id?: string;
    cropId: string;
    url: string;
    uploadedAt?: Date | string;
};
export type CropImageCreateOrConnectWithoutDiagnosesInput = {
    where: Prisma.CropImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.CropImageCreateWithoutDiagnosesInput, Prisma.CropImageUncheckedCreateWithoutDiagnosesInput>;
};
export type CropImageUpsertWithoutDiagnosesInput = {
    update: Prisma.XOR<Prisma.CropImageUpdateWithoutDiagnosesInput, Prisma.CropImageUncheckedUpdateWithoutDiagnosesInput>;
    create: Prisma.XOR<Prisma.CropImageCreateWithoutDiagnosesInput, Prisma.CropImageUncheckedCreateWithoutDiagnosesInput>;
    where?: Prisma.CropImageWhereInput;
};
export type CropImageUpdateToOneWithWhereWithoutDiagnosesInput = {
    where?: Prisma.CropImageWhereInput;
    data: Prisma.XOR<Prisma.CropImageUpdateWithoutDiagnosesInput, Prisma.CropImageUncheckedUpdateWithoutDiagnosesInput>;
};
export type CropImageUpdateWithoutDiagnosesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    crop?: Prisma.CropUpdateOneRequiredWithoutImagesNestedInput;
};
export type CropImageUncheckedUpdateWithoutDiagnosesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cropId?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CropImageCreateManyCropInput = {
    id?: string;
    url: string;
    uploadedAt?: Date | string;
};
export type CropImageUpdateWithoutCropInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    diagnoses?: Prisma.DiagnosisUpdateManyWithoutImageNestedInput;
};
export type CropImageUncheckedUpdateWithoutCropInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    diagnoses?: Prisma.DiagnosisUncheckedUpdateManyWithoutImageNestedInput;
};
export type CropImageUncheckedUpdateManyWithoutCropInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CropImageCountOutputType
 */
export type CropImageCountOutputType = {
    diagnoses: number;
};
export type CropImageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    diagnoses?: boolean | CropImageCountOutputTypeCountDiagnosesArgs;
};
/**
 * CropImageCountOutputType without action
 */
export type CropImageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropImageCountOutputType
     */
    select?: Prisma.CropImageCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CropImageCountOutputType without action
 */
export type CropImageCountOutputTypeCountDiagnosesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DiagnosisWhereInput;
};
export type CropImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cropId?: boolean;
    url?: boolean;
    uploadedAt?: boolean;
    crop?: boolean | Prisma.CropDefaultArgs<ExtArgs>;
    diagnoses?: boolean | Prisma.CropImage$diagnosesArgs<ExtArgs>;
    _count?: boolean | Prisma.CropImageCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropImage"]>;
export type CropImageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cropId?: boolean;
    url?: boolean;
    uploadedAt?: boolean;
    crop?: boolean | Prisma.CropDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropImage"]>;
export type CropImageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cropId?: boolean;
    url?: boolean;
    uploadedAt?: boolean;
    crop?: boolean | Prisma.CropDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cropImage"]>;
export type CropImageSelectScalar = {
    id?: boolean;
    cropId?: boolean;
    url?: boolean;
    uploadedAt?: boolean;
};
export type CropImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cropId" | "url" | "uploadedAt", ExtArgs["result"]["cropImage"]>;
export type CropImageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crop?: boolean | Prisma.CropDefaultArgs<ExtArgs>;
    diagnoses?: boolean | Prisma.CropImage$diagnosesArgs<ExtArgs>;
    _count?: boolean | Prisma.CropImageCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CropImageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crop?: boolean | Prisma.CropDefaultArgs<ExtArgs>;
};
export type CropImageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    crop?: boolean | Prisma.CropDefaultArgs<ExtArgs>;
};
export type $CropImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CropImage";
    objects: {
        crop: Prisma.$CropPayload<ExtArgs>;
        diagnoses: Prisma.$DiagnosisPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cropId: string;
        url: string;
        uploadedAt: Date;
    }, ExtArgs["result"]["cropImage"]>;
    composites: {};
};
export type CropImageGetPayload<S extends boolean | null | undefined | CropImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CropImagePayload, S>;
export type CropImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CropImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CropImageCountAggregateInputType | true;
};
export interface CropImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CropImage'];
        meta: {
            name: 'CropImage';
        };
    };
    /**
     * Find zero or one CropImage that matches the filter.
     * @param {CropImageFindUniqueArgs} args - Arguments to find a CropImage
     * @example
     * // Get one CropImage
     * const cropImage = await prisma.cropImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropImageFindUniqueArgs>(args: Prisma.SelectSubset<T, CropImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CropImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CropImageFindUniqueOrThrowArgs} args - Arguments to find a CropImage
     * @example
     * // Get one CropImage
     * const cropImage = await prisma.cropImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CropImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CropImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageFindFirstArgs} args - Arguments to find a CropImage
     * @example
     * // Get one CropImage
     * const cropImage = await prisma.cropImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropImageFindFirstArgs>(args?: Prisma.SelectSubset<T, CropImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CropImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageFindFirstOrThrowArgs} args - Arguments to find a CropImage
     * @example
     * // Get one CropImage
     * const cropImage = await prisma.cropImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CropImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CropImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CropImages
     * const cropImages = await prisma.cropImage.findMany()
     *
     * // Get first 10 CropImages
     * const cropImages = await prisma.cropImage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cropImageWithIdOnly = await prisma.cropImage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CropImageFindManyArgs>(args?: Prisma.SelectSubset<T, CropImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CropImage.
     * @param {CropImageCreateArgs} args - Arguments to create a CropImage.
     * @example
     * // Create one CropImage
     * const CropImage = await prisma.cropImage.create({
     *   data: {
     *     // ... data to create a CropImage
     *   }
     * })
     *
     */
    create<T extends CropImageCreateArgs>(args: Prisma.SelectSubset<T, CropImageCreateArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CropImages.
     * @param {CropImageCreateManyArgs} args - Arguments to create many CropImages.
     * @example
     * // Create many CropImages
     * const cropImage = await prisma.cropImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CropImageCreateManyArgs>(args?: Prisma.SelectSubset<T, CropImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CropImages and returns the data saved in the database.
     * @param {CropImageCreateManyAndReturnArgs} args - Arguments to create many CropImages.
     * @example
     * // Create many CropImages
     * const cropImage = await prisma.cropImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CropImages and only return the `id`
     * const cropImageWithIdOnly = await prisma.cropImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CropImageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CropImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CropImage.
     * @param {CropImageDeleteArgs} args - Arguments to delete one CropImage.
     * @example
     * // Delete one CropImage
     * const CropImage = await prisma.cropImage.delete({
     *   where: {
     *     // ... filter to delete one CropImage
     *   }
     * })
     *
     */
    delete<T extends CropImageDeleteArgs>(args: Prisma.SelectSubset<T, CropImageDeleteArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CropImage.
     * @param {CropImageUpdateArgs} args - Arguments to update one CropImage.
     * @example
     * // Update one CropImage
     * const cropImage = await prisma.cropImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CropImageUpdateArgs>(args: Prisma.SelectSubset<T, CropImageUpdateArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CropImages.
     * @param {CropImageDeleteManyArgs} args - Arguments to filter CropImages to delete.
     * @example
     * // Delete a few CropImages
     * const { count } = await prisma.cropImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CropImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, CropImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CropImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CropImages
     * const cropImage = await prisma.cropImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CropImageUpdateManyArgs>(args: Prisma.SelectSubset<T, CropImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CropImages and returns the data updated in the database.
     * @param {CropImageUpdateManyAndReturnArgs} args - Arguments to update many CropImages.
     * @example
     * // Update many CropImages
     * const cropImage = await prisma.cropImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CropImages and only return the `id`
     * const cropImageWithIdOnly = await prisma.cropImage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CropImageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CropImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CropImage.
     * @param {CropImageUpsertArgs} args - Arguments to update or create a CropImage.
     * @example
     * // Update or create a CropImage
     * const cropImage = await prisma.cropImage.upsert({
     *   create: {
     *     // ... data to create a CropImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CropImage we want to update
     *   }
     * })
     */
    upsert<T extends CropImageUpsertArgs>(args: Prisma.SelectSubset<T, CropImageUpsertArgs<ExtArgs>>): Prisma.Prisma__CropImageClient<runtime.Types.Result.GetResult<Prisma.$CropImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CropImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageCountArgs} args - Arguments to filter CropImages to count.
     * @example
     * // Count the number of CropImages
     * const count = await prisma.cropImage.count({
     *   where: {
     *     // ... the filter for the CropImages we want to count
     *   }
     * })
    **/
    count<T extends CropImageCountArgs>(args?: Prisma.Subset<T, CropImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CropImageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CropImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CropImageAggregateArgs>(args: Prisma.Subset<T, CropImageAggregateArgs>): Prisma.PrismaPromise<GetCropImageAggregateType<T>>;
    /**
     * Group by CropImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropImageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CropImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CropImageGroupByArgs['orderBy'];
    } : {
        orderBy?: CropImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CropImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CropImage model
     */
    readonly fields: CropImageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CropImage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CropImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    crop<T extends Prisma.CropDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CropDefaultArgs<ExtArgs>>): Prisma.Prisma__CropClient<runtime.Types.Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    diagnoses<T extends Prisma.CropImage$diagnosesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CropImage$diagnosesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DiagnosisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the CropImage model
 */
export interface CropImageFieldRefs {
    readonly id: Prisma.FieldRef<"CropImage", 'String'>;
    readonly cropId: Prisma.FieldRef<"CropImage", 'String'>;
    readonly url: Prisma.FieldRef<"CropImage", 'String'>;
    readonly uploadedAt: Prisma.FieldRef<"CropImage", 'DateTime'>;
}
/**
 * CropImage findUnique
 */
export type CropImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropImage to fetch.
     */
    where: Prisma.CropImageWhereUniqueInput;
};
/**
 * CropImage findUniqueOrThrow
 */
export type CropImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropImage to fetch.
     */
    where: Prisma.CropImageWhereUniqueInput;
};
/**
 * CropImage findFirst
 */
export type CropImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropImage to fetch.
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropImages to fetch.
     */
    orderBy?: Prisma.CropImageOrderByWithRelationInput | Prisma.CropImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CropImages.
     */
    cursor?: Prisma.CropImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropImages.
     */
    distinct?: Prisma.CropImageScalarFieldEnum | Prisma.CropImageScalarFieldEnum[];
};
/**
 * CropImage findFirstOrThrow
 */
export type CropImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropImage to fetch.
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropImages to fetch.
     */
    orderBy?: Prisma.CropImageOrderByWithRelationInput | Prisma.CropImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CropImages.
     */
    cursor?: Prisma.CropImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropImages.
     */
    distinct?: Prisma.CropImageScalarFieldEnum | Prisma.CropImageScalarFieldEnum[];
};
/**
 * CropImage findMany
 */
export type CropImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which CropImages to fetch.
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CropImages to fetch.
     */
    orderBy?: Prisma.CropImageOrderByWithRelationInput | Prisma.CropImageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CropImages.
     */
    cursor?: Prisma.CropImageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CropImages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CropImages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CropImages.
     */
    distinct?: Prisma.CropImageScalarFieldEnum | Prisma.CropImageScalarFieldEnum[];
};
/**
 * CropImage create
 */
export type CropImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a CropImage.
     */
    data: Prisma.XOR<Prisma.CropImageCreateInput, Prisma.CropImageUncheckedCreateInput>;
};
/**
 * CropImage createMany
 */
export type CropImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CropImages.
     */
    data: Prisma.CropImageCreateManyInput | Prisma.CropImageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CropImage createManyAndReturn
 */
export type CropImageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropImage
     */
    select?: Prisma.CropImageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CropImage
     */
    omit?: Prisma.CropImageOmit<ExtArgs> | null;
    /**
     * The data used to create many CropImages.
     */
    data: Prisma.CropImageCreateManyInput | Prisma.CropImageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropImageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CropImage update
 */
export type CropImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a CropImage.
     */
    data: Prisma.XOR<Prisma.CropImageUpdateInput, Prisma.CropImageUncheckedUpdateInput>;
    /**
     * Choose, which CropImage to update.
     */
    where: Prisma.CropImageWhereUniqueInput;
};
/**
 * CropImage updateMany
 */
export type CropImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CropImages.
     */
    data: Prisma.XOR<Prisma.CropImageUpdateManyMutationInput, Prisma.CropImageUncheckedUpdateManyInput>;
    /**
     * Filter which CropImages to update
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * Limit how many CropImages to update.
     */
    limit?: number;
};
/**
 * CropImage updateManyAndReturn
 */
export type CropImageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropImage
     */
    select?: Prisma.CropImageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CropImage
     */
    omit?: Prisma.CropImageOmit<ExtArgs> | null;
    /**
     * The data used to update CropImages.
     */
    data: Prisma.XOR<Prisma.CropImageUpdateManyMutationInput, Prisma.CropImageUncheckedUpdateManyInput>;
    /**
     * Filter which CropImages to update
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * Limit how many CropImages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CropImageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CropImage upsert
 */
export type CropImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the CropImage to update in case it exists.
     */
    where: Prisma.CropImageWhereUniqueInput;
    /**
     * In case the CropImage found by the `where` argument doesn't exist, create a new CropImage with this data.
     */
    create: Prisma.XOR<Prisma.CropImageCreateInput, Prisma.CropImageUncheckedCreateInput>;
    /**
     * In case the CropImage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CropImageUpdateInput, Prisma.CropImageUncheckedUpdateInput>;
};
/**
 * CropImage delete
 */
export type CropImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which CropImage to delete.
     */
    where: Prisma.CropImageWhereUniqueInput;
};
/**
 * CropImage deleteMany
 */
export type CropImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CropImages to delete
     */
    where?: Prisma.CropImageWhereInput;
    /**
     * Limit how many CropImages to delete.
     */
    limit?: number;
};
/**
 * CropImage.diagnoses
 */
export type CropImage$diagnosesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * CropImage without action
 */
export type CropImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=CropImage.d.ts.map