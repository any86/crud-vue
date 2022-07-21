import { type PropType } from "vue";
import type { CProps, DProps, RProps, UProps, KV } from './types';
declare const _sfc_main: import("vue").DefineComponent<{
    primaryKey: {
        type: StringConstructor;
        required: true;
    };
    r: {
        type: PropType<RProps>;
        required: true;
    };
    c: PropType<CProps>;
    u: PropType<UProps>;
    d: PropType<DProps>;
    onBeforeMount: PropType<() => Promise<unknown>>;
    exportExcel: PropType<{
        done: (condition: KV) => Promise<KV[]>;
    }>;
}, {
    props: Readonly<import("_@vue_shared@3.2.37@@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        primaryKey: {
            type: StringConstructor;
            required: true;
        };
        r: {
            type: PropType<RProps>;
            required: true;
        };
        c: PropType<CProps>;
        u: PropType<UProps>;
        d: PropType<DProps>;
        onBeforeMount: PropType<() => Promise<unknown>>;
        exportExcel: PropType<{
            done: (condition: KV) => Promise<KV[]>;
        }>;
    }>> & {
        "onRemove-fail"?: ((...args: any[]) => any) | undefined;
        "onShow-one"?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: {
        (type: "remove-fail", error: unknown): void;
        (type: "show-one", one: KV): void;
    };
    tableRef: import("vue").Ref<any>;
    toggleTableFull: () => void;
    isLoading: import("vue").Ref<boolean>;
    columnConfig: import("vue").Ref<({
        children: (any | {
            title?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined) | JSX.Element | ((props: import("ant-design-vue/lib/table/interface").ColumnTitleProps<any>) => import("ant-design-vue/lib/_util/type").VueNode) | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined)[];
            sorter?: boolean | import("ant-design-vue/lib/table/interface").CompareFn<any> | {
                compare?: import("ant-design-vue/lib/table/interface").CompareFn<any> | undefined;
                multiple?: number | undefined;
            } | undefined;
            sortOrder?: import("ant-design-vue/lib/table/interface").SortOrder | undefined;
            defaultSortOrder?: import("ant-design-vue/lib/table/interface").SortOrder | undefined;
            sortDirections?: import("ant-design-vue/lib/table/interface").SortOrder[] | undefined;
            showSorterTooltip?: boolean | {
                align?: {
                    points?: string[] | undefined;
                    offset?: number[] | undefined;
                    targetOffset?: number[] | undefined;
                    overflow?: {
                        adjustX?: number | boolean | undefined;
                        adjustY?: number | boolean | undefined;
                    } | undefined;
                    useCssRight?: boolean | undefined;
                    useCssBottom?: boolean | undefined;
                    useCssTransform?: boolean | undefined;
                    ignoreShake?: boolean | undefined;
                } | undefined;
                overlayStyle?: {
                    [x: `--${string}`]: string | number | undefined;
                    accentColor?: string | undefined;
                    alignContent?: string | undefined;
                    alignItems?: string | undefined;
                    alignSelf?: string | undefined;
                    alignTracks?: string | undefined;
                    animationDelay?: string | undefined;
                    animationDirection?: string | undefined;
                    animationDuration?: string | undefined;
                    animationFillMode?: string | undefined;
                    animationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    animationName?: string | undefined;
                    animationPlayState?: string | undefined;
                    animationTimeline?: string | undefined;
                    animationTimingFunction?: string | undefined;
                    appearance?: import("_csstype@2.6.20@csstype").AppearanceProperty | undefined;
                    aspectRatio?: string | undefined;
                    backdropFilter?: string | undefined;
                    backfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                    backgroundAttachment?: string | undefined;
                    backgroundBlendMode?: string | undefined;
                    backgroundClip?: string | undefined;
                    backgroundColor?: string | undefined;
                    backgroundImage?: string | undefined;
                    backgroundOrigin?: string | undefined;
                    backgroundPositionX?: import("_csstype@2.6.20@csstype").BackgroundPositionXProperty<string | number> | undefined;
                    backgroundPositionY?: import("_csstype@2.6.20@csstype").BackgroundPositionYProperty<string | number> | undefined;
                    backgroundRepeat?: string | undefined;
                    backgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    blockOverflow?: string | undefined;
                    blockSize?: import("_csstype@2.6.20@csstype").BlockSizeProperty<string | number> | undefined;
                    borderBlockColor?: string | undefined;
                    borderBlockEndColor?: string | undefined;
                    borderBlockEndStyle?: import("_csstype@2.6.20@csstype").BorderBlockEndStyleProperty | undefined;
                    borderBlockEndWidth?: import("_csstype@2.6.20@csstype").BorderBlockEndWidthProperty<string | number> | undefined;
                    borderBlockStartColor?: string | undefined;
                    borderBlockStartStyle?: import("_csstype@2.6.20@csstype").BorderBlockStartStyleProperty | undefined;
                    borderBlockStartWidth?: import("_csstype@2.6.20@csstype").BorderBlockStartWidthProperty<string | number> | undefined;
                    borderBlockStyle?: import("_csstype@2.6.20@csstype").BorderBlockStyleProperty | undefined;
                    borderBlockWidth?: import("_csstype@2.6.20@csstype").BorderBlockWidthProperty<string | number> | undefined;
                    borderBottomColor?: string | undefined;
                    borderBottomLeftRadius?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                    borderBottomRightRadius?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                    borderBottomStyle?: import("_csstype@2.6.20@csstype").BorderBottomStyleProperty | undefined;
                    borderBottomWidth?: import("_csstype@2.6.20@csstype").BorderBottomWidthProperty<string | number> | undefined;
                    borderCollapse?: import("_csstype@2.6.20@csstype").BorderCollapseProperty | undefined;
                    borderEndEndRadius?: import("_csstype@2.6.20@csstype").BorderEndEndRadiusProperty<string | number> | undefined;
                    borderEndStartRadius?: import("_csstype@2.6.20@csstype").BorderEndStartRadiusProperty<string | number> | undefined;
                    borderImageOutset?: import("_csstype@2.6.20@csstype").BorderImageOutsetProperty<string | number> | undefined;
                    borderImageRepeat?: string | undefined;
                    borderImageSlice?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                    borderImageSource?: string | undefined;
                    borderImageWidth?: import("_csstype@2.6.20@csstype").BorderImageWidthProperty<string | number> | undefined;
                    borderInlineColor?: string | undefined;
                    borderInlineEndColor?: string | undefined;
                    borderInlineEndStyle?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                    borderInlineEndWidth?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                    borderInlineStartColor?: string | undefined;
                    borderInlineStartStyle?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                    borderInlineStartWidth?: import("_csstype@2.6.20@csstype").BorderInlineStartWidthProperty<string | number> | undefined;
                    borderInlineStyle?: import("_csstype@2.6.20@csstype").BorderInlineStyleProperty | undefined;
                    borderInlineWidth?: import("_csstype@2.6.20@csstype").BorderInlineWidthProperty<string | number> | undefined;
                    borderLeftColor?: string | undefined;
                    borderLeftStyle?: import("_csstype@2.6.20@csstype").BorderLeftStyleProperty | undefined;
                    borderLeftWidth?: import("_csstype@2.6.20@csstype").BorderLeftWidthProperty<string | number> | undefined;
                    borderRightColor?: string | undefined;
                    borderRightStyle?: import("_csstype@2.6.20@csstype").BorderRightStyleProperty | undefined;
                    borderRightWidth?: import("_csstype@2.6.20@csstype").BorderRightWidthProperty<string | number> | undefined;
                    borderSpacing?: import("_csstype@2.6.20@csstype").BorderSpacingProperty<string | number> | undefined;
                    borderStartEndRadius?: import("_csstype@2.6.20@csstype").BorderStartEndRadiusProperty<string | number> | undefined;
                    borderStartStartRadius?: import("_csstype@2.6.20@csstype").BorderStartStartRadiusProperty<string | number> | undefined;
                    borderTopColor?: string | undefined;
                    borderTopLeftRadius?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                    borderTopRightRadius?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                    borderTopStyle?: import("_csstype@2.6.20@csstype").BorderTopStyleProperty | undefined;
                    borderTopWidth?: import("_csstype@2.6.20@csstype").BorderTopWidthProperty<string | number> | undefined;
                    bottom?: import("_csstype@2.6.20@csstype").BottomProperty<string | number> | undefined;
                    boxDecorationBreak?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                    boxShadow?: string | undefined;
                    boxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                    breakAfter?: import("_csstype@2.6.20@csstype").BreakAfterProperty | undefined;
                    breakBefore?: import("_csstype@2.6.20@csstype").BreakBeforeProperty | undefined;
                    breakInside?: import("_csstype@2.6.20@csstype").BreakInsideProperty | undefined;
                    captionSide?: import("_csstype@2.6.20@csstype").CaptionSideProperty | undefined;
                    caretColor?: string | undefined;
                    clear?: import("_csstype@2.6.20@csstype").ClearProperty | undefined;
                    clipPath?: string | undefined;
                    color?: string | undefined;
                    colorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                    colorScheme?: string | undefined;
                    columnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                    columnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                    columnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                    columnRuleColor?: string | undefined;
                    columnRuleStyle?: string | undefined;
                    columnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                    columnSpan?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                    columnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                    contain?: string | undefined;
                    content?: string | undefined;
                    contentVisibility?: import("_csstype@2.6.20@csstype").ContentVisibilityProperty | undefined;
                    counterIncrement?: string | undefined;
                    counterReset?: string | undefined;
                    counterSet?: string | undefined;
                    cursor?: string | undefined;
                    direction?: import("_csstype@2.6.20@csstype").DirectionProperty | undefined;
                    display?: string | undefined;
                    emptyCells?: import("_csstype@2.6.20@csstype").EmptyCellsProperty | undefined;
                    filter?: string | undefined;
                    flexBasis?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                    flexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                    flexGrow?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    flexShrink?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    flexWrap?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                    float?: import("_csstype@2.6.20@csstype").FloatProperty | undefined;
                    fontFamily?: string | undefined;
                    fontFeatureSettings?: string | undefined;
                    fontKerning?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                    fontLanguageOverride?: string | undefined;
                    fontOpticalSizing?: import("_csstype@2.6.20@csstype").FontOpticalSizingProperty | undefined;
                    fontSize?: import("_csstype@2.6.20@csstype").FontSizeProperty<string | number> | undefined;
                    fontSizeAdjust?: import("_csstype@2.6.20@csstype").FontSizeAdjustProperty | undefined;
                    fontSmooth?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                    fontStretch?: string | undefined;
                    fontStyle?: string | undefined;
                    fontSynthesis?: string | undefined;
                    fontVariant?: string | undefined;
                    fontVariantAlternates?: string | undefined;
                    fontVariantCaps?: import("_csstype@2.6.20@csstype").FontVariantCapsProperty | undefined;
                    fontVariantEastAsian?: string | undefined;
                    fontVariantLigatures?: string | undefined;
                    fontVariantNumeric?: string | undefined;
                    fontVariantPosition?: import("_csstype@2.6.20@csstype").FontVariantPositionProperty | undefined;
                    fontVariationSettings?: string | undefined;
                    fontWeight?: import("_csstype@2.6.20@csstype").FontWeightProperty | undefined;
                    forcedColorAdjust?: import("_csstype@2.6.20@csstype").ForcedColorAdjustProperty | undefined;
                    gridAutoColumns?: import("_csstype@2.6.20@csstype").GridAutoColumnsProperty<string | number> | undefined;
                    gridAutoFlow?: string | undefined;
                    gridAutoRows?: import("_csstype@2.6.20@csstype").GridAutoRowsProperty<string | number> | undefined;
                    gridColumnEnd?: import("_csstype@2.6.20@csstype").GridColumnEndProperty | undefined;
                    gridColumnStart?: import("_csstype@2.6.20@csstype").GridColumnStartProperty | undefined;
                    gridRowEnd?: import("_csstype@2.6.20@csstype").GridRowEndProperty | undefined;
                    gridRowStart?: import("_csstype@2.6.20@csstype").GridRowStartProperty | undefined;
                    gridTemplateAreas?: string | undefined;
                    gridTemplateColumns?: import("_csstype@2.6.20@csstype").GridTemplateColumnsProperty<string | number> | undefined;
                    gridTemplateRows?: import("_csstype@2.6.20@csstype").GridTemplateRowsProperty<string | number> | undefined;
                    hangingPunctuation?: string | undefined;
                    height?: import("_csstype@2.6.20@csstype").HeightProperty<string | number> | undefined;
                    hyphenateCharacter?: string | undefined;
                    hyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    imageOrientation?: string | undefined;
                    imageRendering?: import("_csstype@2.6.20@csstype").ImageRenderingProperty | undefined;
                    imageResolution?: string | undefined;
                    initialLetter?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                    inlineSize?: import("_csstype@2.6.20@csstype").InlineSizeProperty<string | number> | undefined;
                    inputSecurity?: import("_csstype@2.6.20@csstype").InputSecurityProperty | undefined;
                    inset?: import("_csstype@2.6.20@csstype").InsetProperty<string | number> | undefined;
                    insetBlock?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                    insetBlockEnd?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                    insetBlockStart?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                    insetInline?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                    insetInlineEnd?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                    insetInlineStart?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                    isolation?: import("_csstype@2.6.20@csstype").IsolationProperty | undefined;
                    justifyContent?: string | undefined;
                    justifyItems?: string | undefined;
                    justifySelf?: string | undefined;
                    justifyTracks?: string | undefined;
                    left?: import("_csstype@2.6.20@csstype").LeftProperty<string | number> | undefined;
                    letterSpacing?: import("_csstype@2.6.20@csstype").LetterSpacingProperty<string | number> | undefined;
                    lineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    lineHeight?: import("_csstype@2.6.20@csstype").LineHeightProperty<string | number> | undefined;
                    lineHeightStep?: import("_csstype@2.6.20@csstype").LineHeightStepProperty<string | number> | undefined;
                    listStyleImage?: string | undefined;
                    listStylePosition?: import("_csstype@2.6.20@csstype").ListStylePositionProperty | undefined;
                    listStyleType?: string | undefined;
                    marginBlock?: import("_csstype@2.6.20@csstype").MarginBlockProperty<string | number> | undefined;
                    marginBlockEnd?: import("_csstype@2.6.20@csstype").MarginBlockEndProperty<string | number> | undefined;
                    marginBlockStart?: import("_csstype@2.6.20@csstype").MarginBlockStartProperty<string | number> | undefined;
                    marginBottom?: import("_csstype@2.6.20@csstype").MarginBottomProperty<string | number> | undefined;
                    marginInline?: import("_csstype@2.6.20@csstype").MarginInlineProperty<string | number> | undefined;
                    marginInlineEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                    marginInlineStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                    marginLeft?: import("_csstype@2.6.20@csstype").MarginLeftProperty<string | number> | undefined;
                    marginRight?: import("_csstype@2.6.20@csstype").MarginRightProperty<string | number> | undefined;
                    marginTop?: import("_csstype@2.6.20@csstype").MarginTopProperty<string | number> | undefined;
                    maskBorderMode?: import("_csstype@2.6.20@csstype").MaskBorderModeProperty | undefined;
                    maskBorderOutset?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                    maskBorderRepeat?: string | undefined;
                    maskBorderSlice?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                    maskBorderSource?: string | undefined;
                    maskBorderWidth?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                    maskClip?: string | undefined;
                    maskComposite?: string | undefined;
                    maskImage?: string | undefined;
                    maskMode?: string | undefined;
                    maskOrigin?: string | undefined;
                    maskPosition?: import("_csstype@2.6.20@csstype").MaskPositionProperty<string | number> | undefined;
                    maskRepeat?: string | undefined;
                    maskSize?: import("_csstype@2.6.20@csstype").MaskSizeProperty<string | number> | undefined;
                    maskType?: import("_csstype@2.6.20@csstype").MaskTypeProperty | undefined;
                    mathStyle?: import("_csstype@2.6.20@csstype").MathStyleProperty | undefined;
                    maxBlockSize?: import("_csstype@2.6.20@csstype").MaxBlockSizeProperty<string | number> | undefined;
                    maxHeight?: import("_csstype@2.6.20@csstype").MaxHeightProperty<string | number> | undefined;
                    maxInlineSize?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                    maxLines?: import("_csstype@2.6.20@csstype").MaxLinesProperty | undefined;
                    maxWidth?: import("_csstype@2.6.20@csstype").MaxWidthProperty<string | number> | undefined;
                    minBlockSize?: import("_csstype@2.6.20@csstype").MinBlockSizeProperty<string | number> | undefined;
                    minHeight?: import("_csstype@2.6.20@csstype").MinHeightProperty<string | number> | undefined;
                    minInlineSize?: import("_csstype@2.6.20@csstype").MinInlineSizeProperty<string | number> | undefined;
                    minWidth?: import("_csstype@2.6.20@csstype").MinWidthProperty<string | number> | undefined;
                    mixBlendMode?: import("_csstype@2.6.20@csstype").MixBlendModeProperty | undefined;
                    motionDistance?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                    motionPath?: string | undefined;
                    motionRotation?: string | undefined;
                    objectFit?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                    objectPosition?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                    offsetAnchor?: import("_csstype@2.6.20@csstype").OffsetAnchorProperty<string | number> | undefined;
                    offsetDistance?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                    offsetPath?: string | undefined;
                    offsetRotate?: string | undefined;
                    offsetRotation?: string | undefined;
                    opacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                    order?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    orphans?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    outlineColor?: string | undefined;
                    outlineOffset?: import("_csstype@2.6.20@csstype").OutlineOffsetProperty<string | number> | undefined;
                    outlineStyle?: string | undefined;
                    outlineWidth?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                    overflowAnchor?: import("_csstype@2.6.20@csstype").OverflowAnchorProperty | undefined;
                    overflowBlock?: import("_csstype@2.6.20@csstype").OverflowBlockProperty | undefined;
                    overflowClipBox?: import("_csstype@2.6.20@csstype").OverflowClipBoxProperty | undefined;
                    overflowClipMargin?: import("_csstype@2.6.20@csstype").OverflowClipMarginProperty<string | number> | undefined;
                    overflowInline?: import("_csstype@2.6.20@csstype").OverflowInlineProperty | undefined;
                    overflowWrap?: import("_csstype@2.6.20@csstype").OverflowWrapProperty | undefined;
                    overflowX?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                    overflowY?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                    overscrollBehaviorBlock?: import("_csstype@2.6.20@csstype").OverscrollBehaviorBlockProperty | undefined;
                    overscrollBehaviorInline?: import("_csstype@2.6.20@csstype").OverscrollBehaviorInlineProperty | undefined;
                    overscrollBehaviorX?: import("_csstype@2.6.20@csstype").OverscrollBehaviorXProperty | undefined;
                    overscrollBehaviorY?: import("_csstype@2.6.20@csstype").OverscrollBehaviorYProperty | undefined;
                    paddingBlock?: import("_csstype@2.6.20@csstype").PaddingBlockProperty<string | number> | undefined;
                    paddingBlockEnd?: import("_csstype@2.6.20@csstype").PaddingBlockEndProperty<string | number> | undefined;
                    paddingBlockStart?: import("_csstype@2.6.20@csstype").PaddingBlockStartProperty<string | number> | undefined;
                    paddingBottom?: import("_csstype@2.6.20@csstype").PaddingBottomProperty<string | number> | undefined;
                    paddingInline?: import("_csstype@2.6.20@csstype").PaddingInlineProperty<string | number> | undefined;
                    paddingInlineEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                    paddingInlineStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                    paddingLeft?: import("_csstype@2.6.20@csstype").PaddingLeftProperty<string | number> | undefined;
                    paddingRight?: import("_csstype@2.6.20@csstype").PaddingRightProperty<string | number> | undefined;
                    paddingTop?: import("_csstype@2.6.20@csstype").PaddingTopProperty<string | number> | undefined;
                    pageBreakAfter?: import("_csstype@2.6.20@csstype").PageBreakAfterProperty | undefined;
                    pageBreakBefore?: import("_csstype@2.6.20@csstype").PageBreakBeforeProperty | undefined;
                    pageBreakInside?: import("_csstype@2.6.20@csstype").PageBreakInsideProperty | undefined;
                    paintOrder?: string | undefined;
                    perspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                    perspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                    placeContent?: string | undefined;
                    pointerEvents?: import("_csstype@2.6.20@csstype").PointerEventsProperty | undefined;
                    position?: import("_csstype@2.6.20@csstype").PositionProperty | undefined;
                    printColorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                    quotes?: string | undefined;
                    resize?: import("_csstype@2.6.20@csstype").ResizeProperty | undefined;
                    right?: import("_csstype@2.6.20@csstype").RightProperty<string | number> | undefined;
                    rotate?: string | undefined;
                    rowGap?: import("_csstype@2.6.20@csstype").RowGapProperty<string | number> | undefined;
                    rubyAlign?: import("_csstype@2.6.20@csstype").RubyAlignProperty | undefined;
                    rubyMerge?: import("_csstype@2.6.20@csstype").RubyMergeProperty | undefined;
                    rubyPosition?: string | undefined;
                    scale?: import("_csstype@2.6.20@csstype").ScaleProperty | undefined;
                    scrollBehavior?: import("_csstype@2.6.20@csstype").ScrollBehaviorProperty | undefined;
                    scrollMargin?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                    scrollMarginBlock?: import("_csstype@2.6.20@csstype").ScrollMarginBlockProperty<string | number> | undefined;
                    scrollMarginBlockEnd?: import("_csstype@2.6.20@csstype").ScrollMarginBlockEndProperty<string | number> | undefined;
                    scrollMarginBlockStart?: import("_csstype@2.6.20@csstype").ScrollMarginBlockStartProperty<string | number> | undefined;
                    scrollMarginBottom?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                    scrollMarginInline?: import("_csstype@2.6.20@csstype").ScrollMarginInlineProperty<string | number> | undefined;
                    scrollMarginInlineEnd?: import("_csstype@2.6.20@csstype").ScrollMarginInlineEndProperty<string | number> | undefined;
                    scrollMarginInlineStart?: import("_csstype@2.6.20@csstype").ScrollMarginInlineStartProperty<string | number> | undefined;
                    scrollMarginLeft?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                    scrollMarginRight?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                    scrollMarginTop?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                    scrollPadding?: import("_csstype@2.6.20@csstype").ScrollPaddingProperty<string | number> | undefined;
                    scrollPaddingBlock?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockProperty<string | number> | undefined;
                    scrollPaddingBlockEnd?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockEndProperty<string | number> | undefined;
                    scrollPaddingBlockStart?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockStartProperty<string | number> | undefined;
                    scrollPaddingBottom?: import("_csstype@2.6.20@csstype").ScrollPaddingBottomProperty<string | number> | undefined;
                    scrollPaddingInline?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineProperty<string | number> | undefined;
                    scrollPaddingInlineEnd?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineEndProperty<string | number> | undefined;
                    scrollPaddingInlineStart?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineStartProperty<string | number> | undefined;
                    scrollPaddingLeft?: import("_csstype@2.6.20@csstype").ScrollPaddingLeftProperty<string | number> | undefined;
                    scrollPaddingRight?: import("_csstype@2.6.20@csstype").ScrollPaddingRightProperty<string | number> | undefined;
                    scrollPaddingTop?: import("_csstype@2.6.20@csstype").ScrollPaddingTopProperty<string | number> | undefined;
                    scrollSnapAlign?: string | undefined;
                    scrollSnapMargin?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                    scrollSnapMarginBottom?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                    scrollSnapMarginLeft?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                    scrollSnapMarginRight?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                    scrollSnapMarginTop?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                    scrollSnapStop?: import("_csstype@2.6.20@csstype").ScrollSnapStopProperty | undefined;
                    scrollSnapType?: string | undefined;
                    scrollbarColor?: string | undefined;
                    scrollbarGutter?: string | undefined;
                    scrollbarWidth?: import("_csstype@2.6.20@csstype").ScrollbarWidthProperty | undefined;
                    shapeImageThreshold?: import("_csstype@2.6.20@csstype").ShapeImageThresholdProperty | undefined;
                    shapeMargin?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                    shapeOutside?: string | undefined;
                    tabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                    tableLayout?: import("_csstype@2.6.20@csstype").TableLayoutProperty | undefined;
                    textAlign?: import("_csstype@2.6.20@csstype").TextAlignProperty | undefined;
                    textAlignLast?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                    textCombineUpright?: string | undefined;
                    textDecorationColor?: string | undefined;
                    textDecorationLine?: string | undefined;
                    textDecorationSkip?: string | undefined;
                    textDecorationSkipInk?: import("_csstype@2.6.20@csstype").TextDecorationSkipInkProperty | undefined;
                    textDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                    textDecorationThickness?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                    textDecorationWidth?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                    textEmphasisColor?: string | undefined;
                    textEmphasisPosition?: string | undefined;
                    textEmphasisStyle?: string | undefined;
                    textIndent?: import("_csstype@2.6.20@csstype").TextIndentProperty<string | number> | undefined;
                    textJustify?: import("_csstype@2.6.20@csstype").TextJustifyProperty | undefined;
                    textOrientation?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                    textOverflow?: string | undefined;
                    textRendering?: import("_csstype@2.6.20@csstype").TextRenderingProperty | undefined;
                    textShadow?: string | undefined;
                    textSizeAdjust?: string | undefined;
                    textTransform?: import("_csstype@2.6.20@csstype").TextTransformProperty | undefined;
                    textUnderlineOffset?: import("_csstype@2.6.20@csstype").TextUnderlineOffsetProperty<string | number> | undefined;
                    textUnderlinePosition?: string | undefined;
                    top?: import("_csstype@2.6.20@csstype").TopProperty<string | number> | undefined;
                    touchAction?: string | undefined;
                    transform?: string | undefined;
                    transformBox?: import("_csstype@2.6.20@csstype").TransformBoxProperty | undefined;
                    transformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    transformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                    transitionDelay?: string | undefined;
                    transitionDuration?: string | undefined;
                    transitionProperty?: string | undefined;
                    transitionTimingFunction?: string | undefined;
                    translate?: import("_csstype@2.6.20@csstype").TranslateProperty<string | number> | undefined;
                    unicodeBidi?: import("_csstype@2.6.20@csstype").UnicodeBidiProperty | undefined;
                    userSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    verticalAlign?: import("_csstype@2.6.20@csstype").VerticalAlignProperty<string | number> | undefined;
                    visibility?: import("_csstype@2.6.20@csstype").VisibilityProperty | undefined;
                    whiteSpace?: import("_csstype@2.6.20@csstype").WhiteSpaceProperty | undefined;
                    widows?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    width?: import("_csstype@2.6.20@csstype").WidthProperty<string | number> | undefined;
                    willChange?: string | undefined;
                    wordBreak?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                    wordSpacing?: import("_csstype@2.6.20@csstype").WordSpacingProperty<string | number> | undefined;
                    wordWrap?: import("_csstype@2.6.20@csstype").WordWrapProperty | undefined;
                    writingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                    zIndex?: import("_csstype@2.6.20@csstype").ZIndexProperty | undefined;
                    zoom?: import("_csstype@2.6.20@csstype").ZoomProperty | undefined;
                    all?: import("_csstype@2.6.20@csstype").Globals | undefined;
                    animation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    background?: import("_csstype@2.6.20@csstype").BackgroundProperty<string | number> | undefined;
                    backgroundPosition?: import("_csstype@2.6.20@csstype").BackgroundPositionProperty<string | number> | undefined;
                    border?: import("_csstype@2.6.20@csstype").BorderProperty<string | number> | undefined;
                    borderBlock?: import("_csstype@2.6.20@csstype").BorderBlockProperty<string | number> | undefined;
                    borderBlockEnd?: import("_csstype@2.6.20@csstype").BorderBlockEndProperty<string | number> | undefined;
                    borderBlockStart?: import("_csstype@2.6.20@csstype").BorderBlockStartProperty<string | number> | undefined;
                    borderBottom?: import("_csstype@2.6.20@csstype").BorderBottomProperty<string | number> | undefined;
                    borderColor?: string | undefined;
                    borderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    borderInline?: import("_csstype@2.6.20@csstype").BorderInlineProperty<string | number> | undefined;
                    borderInlineEnd?: import("_csstype@2.6.20@csstype").BorderInlineEndProperty<string | number> | undefined;
                    borderInlineStart?: import("_csstype@2.6.20@csstype").BorderInlineStartProperty<string | number> | undefined;
                    borderLeft?: import("_csstype@2.6.20@csstype").BorderLeftProperty<string | number> | undefined;
                    borderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                    borderRight?: import("_csstype@2.6.20@csstype").BorderRightProperty<string | number> | undefined;
                    borderStyle?: string | undefined;
                    borderTop?: import("_csstype@2.6.20@csstype").BorderTopProperty<string | number> | undefined;
                    borderWidth?: import("_csstype@2.6.20@csstype").BorderWidthProperty<string | number> | undefined;
                    columnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                    columns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                    flex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                    flexFlow?: string | undefined;
                    font?: string | undefined;
                    gap?: import("_csstype@2.6.20@csstype").GapProperty<string | number> | undefined;
                    grid?: string | undefined;
                    gridArea?: import("_csstype@2.6.20@csstype").GridAreaProperty | undefined;
                    gridColumn?: import("_csstype@2.6.20@csstype").GridColumnProperty | undefined;
                    gridRow?: import("_csstype@2.6.20@csstype").GridRowProperty | undefined;
                    gridTemplate?: string | undefined;
                    lineClamp?: import("_csstype@2.6.20@csstype").LineClampProperty | undefined;
                    listStyle?: string | undefined;
                    margin?: import("_csstype@2.6.20@csstype").MarginProperty<string | number> | undefined;
                    mask?: import("_csstype@2.6.20@csstype").MaskProperty<string | number> | undefined;
                    maskBorder?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                    motion?: import("_csstype@2.6.20@csstype").OffsetProperty<string | number> | undefined;
                    offset?: import("_csstype@2.6.20@csstype").OffsetProperty<string | number> | undefined;
                    outline?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                    overflow?: string | undefined;
                    overscrollBehavior?: string | undefined;
                    padding?: import("_csstype@2.6.20@csstype").PaddingProperty<string | number> | undefined;
                    placeItems?: string | undefined;
                    placeSelf?: string | undefined;
                    textDecoration?: import("_csstype@2.6.20@csstype").TextDecorationProperty<string | number> | undefined;
                    textEmphasis?: string | undefined;
                    transition?: string | undefined;
                    MozAnimationDelay?: string | undefined;
                    MozAnimationDirection?: string | undefined;
                    MozAnimationDuration?: string | undefined;
                    MozAnimationFillMode?: string | undefined;
                    MozAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    MozAnimationName?: string | undefined;
                    MozAnimationPlayState?: string | undefined;
                    MozAnimationTimingFunction?: string | undefined;
                    MozAppearance?: import("_csstype@2.6.20@csstype").MozAppearanceProperty | undefined;
                    MozBackfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                    MozBorderBottomColors?: string | undefined;
                    MozBorderEndColor?: string | undefined;
                    MozBorderEndStyle?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                    MozBorderEndWidth?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                    MozBorderLeftColors?: string | undefined;
                    MozBorderRightColors?: string | undefined;
                    MozBorderStartColor?: string | undefined;
                    MozBorderStartStyle?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                    MozBorderTopColors?: string | undefined;
                    MozBoxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                    MozColumnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                    MozColumnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                    MozColumnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                    MozColumnRuleColor?: string | undefined;
                    MozColumnRuleStyle?: string | undefined;
                    MozColumnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                    MozColumnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                    MozContextProperties?: string | undefined;
                    MozFontFeatureSettings?: string | undefined;
                    MozFontLanguageOverride?: string | undefined;
                    MozHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    MozImageRegion?: string | undefined;
                    MozMarginEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                    MozMarginStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                    MozOrient?: import("_csstype@2.6.20@csstype").MozOrientProperty | undefined;
                    MozOsxFontSmoothing?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                    MozPaddingEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                    MozPaddingStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                    MozPerspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                    MozPerspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                    MozStackSizing?: import("_csstype@2.6.20@csstype").MozStackSizingProperty | undefined;
                    MozTabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                    MozTextBlink?: import("_csstype@2.6.20@csstype").MozTextBlinkProperty | undefined;
                    MozTextSizeAdjust?: string | undefined;
                    MozTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    MozTransformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                    MozTransitionDelay?: string | undefined;
                    MozTransitionDuration?: string | undefined;
                    MozTransitionProperty?: string | undefined;
                    MozTransitionTimingFunction?: string | undefined;
                    MozUserFocus?: import("_csstype@2.6.20@csstype").MozUserFocusProperty | undefined;
                    MozUserModify?: import("_csstype@2.6.20@csstype").MozUserModifyProperty | undefined;
                    MozUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    MozWindowDragging?: import("_csstype@2.6.20@csstype").MozWindowDraggingProperty | undefined;
                    MozWindowShadow?: import("_csstype@2.6.20@csstype").MozWindowShadowProperty | undefined;
                    msAccelerator?: import("_csstype@2.6.20@csstype").MsAcceleratorProperty | undefined;
                    msAlignSelf?: string | undefined;
                    msBlockProgression?: import("_csstype@2.6.20@csstype").MsBlockProgressionProperty | undefined;
                    msContentZoomChaining?: import("_csstype@2.6.20@csstype").MsContentZoomChainingProperty | undefined;
                    msContentZoomLimitMax?: string | undefined;
                    msContentZoomLimitMin?: string | undefined;
                    msContentZoomSnapPoints?: string | undefined;
                    msContentZoomSnapType?: import("_csstype@2.6.20@csstype").MsContentZoomSnapTypeProperty | undefined;
                    msContentZooming?: import("_csstype@2.6.20@csstype").MsContentZoomingProperty | undefined;
                    msFilter?: string | undefined;
                    msFlexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                    msFlexPositive?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    msFlowFrom?: string | undefined;
                    msFlowInto?: string | undefined;
                    msGridColumns?: import("_csstype@2.6.20@csstype").MsGridColumnsProperty<string | number> | undefined;
                    msGridRows?: import("_csstype@2.6.20@csstype").MsGridRowsProperty<string | number> | undefined;
                    msHighContrastAdjust?: import("_csstype@2.6.20@csstype").MsHighContrastAdjustProperty | undefined;
                    msHyphenateLimitChars?: import("_csstype@2.6.20@csstype").MsHyphenateLimitCharsProperty | undefined;
                    msHyphenateLimitLines?: import("_csstype@2.6.20@csstype").MsHyphenateLimitLinesProperty | undefined;
                    msHyphenateLimitZone?: import("_csstype@2.6.20@csstype").MsHyphenateLimitZoneProperty<string | number> | undefined;
                    msHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    msImeAlign?: import("_csstype@2.6.20@csstype").MsImeAlignProperty | undefined;
                    msJustifySelf?: string | undefined;
                    msLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    msOrder?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    msOverflowStyle?: import("_csstype@2.6.20@csstype").MsOverflowStyleProperty | undefined;
                    msOverflowX?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                    msOverflowY?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                    msScrollChaining?: import("_csstype@2.6.20@csstype").MsScrollChainingProperty | undefined;
                    msScrollLimitXMax?: import("_csstype@2.6.20@csstype").MsScrollLimitXMaxProperty<string | number> | undefined;
                    msScrollLimitXMin?: import("_csstype@2.6.20@csstype").MsScrollLimitXMinProperty<string | number> | undefined;
                    msScrollLimitYMax?: import("_csstype@2.6.20@csstype").MsScrollLimitYMaxProperty<string | number> | undefined;
                    msScrollLimitYMin?: import("_csstype@2.6.20@csstype").MsScrollLimitYMinProperty<string | number> | undefined;
                    msScrollRails?: import("_csstype@2.6.20@csstype").MsScrollRailsProperty | undefined;
                    msScrollSnapPointsX?: string | undefined;
                    msScrollSnapPointsY?: string | undefined;
                    msScrollSnapType?: import("_csstype@2.6.20@csstype").MsScrollSnapTypeProperty | undefined;
                    msScrollTranslation?: import("_csstype@2.6.20@csstype").MsScrollTranslationProperty | undefined;
                    msScrollbar3dlightColor?: string | undefined;
                    msScrollbarArrowColor?: string | undefined;
                    msScrollbarBaseColor?: string | undefined;
                    msScrollbarDarkshadowColor?: string | undefined;
                    msScrollbarFaceColor?: string | undefined;
                    msScrollbarHighlightColor?: string | undefined;
                    msScrollbarShadowColor?: string | undefined;
                    msTextAutospace?: import("_csstype@2.6.20@csstype").MsTextAutospaceProperty | undefined;
                    msTextCombineHorizontal?: string | undefined;
                    msTextOverflow?: string | undefined;
                    msTouchAction?: string | undefined;
                    msTouchSelect?: import("_csstype@2.6.20@csstype").MsTouchSelectProperty | undefined;
                    msTransform?: string | undefined;
                    msTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    msTransitionDelay?: string | undefined;
                    msTransitionDuration?: string | undefined;
                    msTransitionProperty?: string | undefined;
                    msTransitionTimingFunction?: string | undefined;
                    msUserSelect?: import("_csstype@2.6.20@csstype").MsUserSelectProperty | undefined;
                    msWordBreak?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                    msWrapFlow?: import("_csstype@2.6.20@csstype").MsWrapFlowProperty | undefined;
                    msWrapMargin?: import("_csstype@2.6.20@csstype").MsWrapMarginProperty<string | number> | undefined;
                    msWrapThrough?: import("_csstype@2.6.20@csstype").MsWrapThroughProperty | undefined;
                    msWritingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                    WebkitAlignContent?: string | undefined;
                    WebkitAlignItems?: string | undefined;
                    WebkitAlignSelf?: string | undefined;
                    WebkitAnimationDelay?: string | undefined;
                    WebkitAnimationDirection?: string | undefined;
                    WebkitAnimationDuration?: string | undefined;
                    WebkitAnimationFillMode?: string | undefined;
                    WebkitAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    WebkitAnimationName?: string | undefined;
                    WebkitAnimationPlayState?: string | undefined;
                    WebkitAnimationTimingFunction?: string | undefined;
                    WebkitAppearance?: import("_csstype@2.6.20@csstype").WebkitAppearanceProperty | undefined;
                    WebkitBackdropFilter?: string | undefined;
                    WebkitBackfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                    WebkitBackgroundClip?: string | undefined;
                    WebkitBackgroundOrigin?: string | undefined;
                    WebkitBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    WebkitBorderBeforeColor?: string | undefined;
                    WebkitBorderBeforeStyle?: string | undefined;
                    WebkitBorderBeforeWidth?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeWidthProperty<string | number> | undefined;
                    WebkitBorderBottomLeftRadius?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                    WebkitBorderBottomRightRadius?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                    WebkitBorderImageSlice?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                    WebkitBorderTopLeftRadius?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                    WebkitBorderTopRightRadius?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                    WebkitBoxDecorationBreak?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                    WebkitBoxReflect?: import("_csstype@2.6.20@csstype").WebkitBoxReflectProperty<string | number> | undefined;
                    WebkitBoxShadow?: string | undefined;
                    WebkitBoxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                    WebkitClipPath?: string | undefined;
                    WebkitColumnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                    WebkitColumnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                    WebkitColumnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                    WebkitColumnRuleColor?: string | undefined;
                    WebkitColumnRuleStyle?: string | undefined;
                    WebkitColumnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                    WebkitColumnSpan?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                    WebkitColumnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                    WebkitFilter?: string | undefined;
                    WebkitFlexBasis?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                    WebkitFlexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                    WebkitFlexGrow?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    WebkitFlexShrink?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    WebkitFlexWrap?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                    WebkitFontFeatureSettings?: string | undefined;
                    WebkitFontKerning?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                    WebkitFontSmoothing?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                    WebkitFontVariantLigatures?: string | undefined;
                    WebkitHyphenateCharacter?: string | undefined;
                    WebkitHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    WebkitInitialLetter?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                    WebkitJustifyContent?: string | undefined;
                    WebkitLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    WebkitLineClamp?: import("_csstype@2.6.20@csstype").WebkitLineClampProperty | undefined;
                    WebkitMarginEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                    WebkitMarginStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                    WebkitMaskAttachment?: string | undefined;
                    WebkitMaskBoxImageOutset?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                    WebkitMaskBoxImageRepeat?: string | undefined;
                    WebkitMaskBoxImageSlice?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                    WebkitMaskBoxImageSource?: string | undefined;
                    WebkitMaskBoxImageWidth?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                    WebkitMaskClip?: string | undefined;
                    WebkitMaskComposite?: string | undefined;
                    WebkitMaskImage?: string | undefined;
                    WebkitMaskOrigin?: string | undefined;
                    WebkitMaskPosition?: import("_csstype@2.6.20@csstype").WebkitMaskPositionProperty<string | number> | undefined;
                    WebkitMaskPositionX?: import("_csstype@2.6.20@csstype").WebkitMaskPositionXProperty<string | number> | undefined;
                    WebkitMaskPositionY?: import("_csstype@2.6.20@csstype").WebkitMaskPositionYProperty<string | number> | undefined;
                    WebkitMaskRepeat?: string | undefined;
                    WebkitMaskRepeatX?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatXProperty | undefined;
                    WebkitMaskRepeatY?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatYProperty | undefined;
                    WebkitMaskSize?: import("_csstype@2.6.20@csstype").WebkitMaskSizeProperty<string | number> | undefined;
                    WebkitMaxInlineSize?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                    WebkitOrder?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    WebkitOverflowScrolling?: import("_csstype@2.6.20@csstype").WebkitOverflowScrollingProperty | undefined;
                    WebkitPaddingEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                    WebkitPaddingStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                    WebkitPerspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                    WebkitPerspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                    WebkitPrintColorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                    WebkitRubyPosition?: string | undefined;
                    WebkitScrollSnapType?: string | undefined;
                    WebkitShapeMargin?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                    WebkitTapHighlightColor?: string | undefined;
                    WebkitTextCombine?: string | undefined;
                    WebkitTextDecorationColor?: string | undefined;
                    WebkitTextDecorationLine?: string | undefined;
                    WebkitTextDecorationSkip?: string | undefined;
                    WebkitTextDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                    WebkitTextEmphasisColor?: string | undefined;
                    WebkitTextEmphasisPosition?: string | undefined;
                    WebkitTextEmphasisStyle?: string | undefined;
                    WebkitTextFillColor?: string | undefined;
                    WebkitTextOrientation?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                    WebkitTextSizeAdjust?: string | undefined;
                    WebkitTextStrokeColor?: string | undefined;
                    WebkitTextStrokeWidth?: import("_csstype@2.6.20@csstype").WebkitTextStrokeWidthProperty<string | number> | undefined;
                    WebkitTextUnderlinePosition?: string | undefined;
                    WebkitTouchCallout?: import("_csstype@2.6.20@csstype").WebkitTouchCalloutProperty | undefined;
                    WebkitTransform?: string | undefined;
                    WebkitTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    WebkitTransformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                    WebkitTransitionDelay?: string | undefined;
                    WebkitTransitionDuration?: string | undefined;
                    WebkitTransitionProperty?: string | undefined;
                    WebkitTransitionTimingFunction?: string | undefined;
                    WebkitUserModify?: import("_csstype@2.6.20@csstype").WebkitUserModifyProperty | undefined;
                    WebkitUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    WebkitWritingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                    MozAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    MozBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    MozColumnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                    MozColumns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                    MozTransition?: string | undefined;
                    msContentZoomLimit?: string | undefined;
                    msContentZoomSnap?: string | undefined;
                    msFlex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                    msScrollLimit?: string | undefined;
                    msScrollSnapX?: string | undefined;
                    msScrollSnapY?: string | undefined;
                    msTransition?: string | undefined;
                    WebkitAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    WebkitBorderBefore?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeProperty<string | number> | undefined;
                    WebkitBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    WebkitBorderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                    WebkitColumnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                    WebkitColumns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                    WebkitFlex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                    WebkitFlexFlow?: string | undefined;
                    WebkitMask?: import("_csstype@2.6.20@csstype").WebkitMaskProperty<string | number> | undefined;
                    WebkitMaskBoxImage?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                    WebkitTextEmphasis?: string | undefined;
                    WebkitTextStroke?: import("_csstype@2.6.20@csstype").WebkitTextStrokeProperty<string | number> | undefined;
                    WebkitTransition?: string | undefined;
                    azimuth?: string | undefined;
                    boxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    boxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    boxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    boxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    boxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                    boxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    boxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    boxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    clip?: string | undefined;
                    gridColumnGap?: import("_csstype@2.6.20@csstype").GridColumnGapProperty<string | number> | undefined;
                    gridGap?: import("_csstype@2.6.20@csstype").GridGapProperty<string | number> | undefined;
                    gridRowGap?: import("_csstype@2.6.20@csstype").GridRowGapProperty<string | number> | undefined;
                    imeMode?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                    offsetBlock?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                    offsetBlockEnd?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                    offsetBlockStart?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                    offsetInline?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                    offsetInlineEnd?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                    offsetInlineStart?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                    scrollSnapCoordinate?: import("_csstype@2.6.20@csstype").ScrollSnapCoordinateProperty<string | number> | undefined;
                    scrollSnapDestination?: import("_csstype@2.6.20@csstype").ScrollSnapDestinationProperty<string | number> | undefined;
                    scrollSnapPointsX?: string | undefined;
                    scrollSnapPointsY?: string | undefined;
                    scrollSnapTypeX?: import("_csstype@2.6.20@csstype").ScrollSnapTypeXProperty | undefined;
                    scrollSnapTypeY?: import("_csstype@2.6.20@csstype").ScrollSnapTypeYProperty | undefined;
                    scrollbarTrackColor?: string | undefined;
                    KhtmlBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    KhtmlBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    KhtmlBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    KhtmlBoxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    KhtmlBoxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                    KhtmlBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    KhtmlBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    KhtmlBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    KhtmlLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    KhtmlOpacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                    KhtmlUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    MozBackgroundClip?: string | undefined;
                    MozBackgroundInlinePolicy?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                    MozBackgroundOrigin?: string | undefined;
                    MozBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    MozBinding?: string | undefined;
                    MozBorderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                    MozBorderRadiusBottomleft?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                    MozBorderRadiusBottomright?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                    MozBorderRadiusTopleft?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                    MozBorderRadiusTopright?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                    MozBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    MozBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    MozBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    MozBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    MozBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    MozBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    MozBoxShadow?: string | undefined;
                    MozFloatEdge?: import("_csstype@2.6.20@csstype").MozFloatEdgeProperty | undefined;
                    MozForceBrokenImageIcon?: import("_csstype@2.6.20@csstype").MozForceBrokenImageIconProperty | undefined;
                    MozOpacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                    MozOutline?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                    MozOutlineColor?: string | undefined;
                    MozOutlineRadius?: import("_csstype@2.6.20@csstype").MozOutlineRadiusProperty<string | number> | undefined;
                    MozOutlineRadiusBottomleft?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomleftProperty<string | number> | undefined;
                    MozOutlineRadiusBottomright?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomrightProperty<string | number> | undefined;
                    MozOutlineRadiusTopleft?: import("_csstype@2.6.20@csstype").MozOutlineRadiusTopleftProperty<string | number> | undefined;
                    MozOutlineRadiusTopright?: import("_csstype@2.6.20@csstype").MozOutlineRadiusToprightProperty<string | number> | undefined;
                    MozOutlineStyle?: string | undefined;
                    MozOutlineWidth?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                    MozTextAlignLast?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                    MozTextDecorationColor?: string | undefined;
                    MozTextDecorationLine?: string | undefined;
                    MozTextDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                    MozUserInput?: import("_csstype@2.6.20@csstype").MozUserInputProperty | undefined;
                    msImeMode?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                    msScrollbarTrackColor?: string | undefined;
                    OAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    OAnimationDelay?: string | undefined;
                    OAnimationDirection?: string | undefined;
                    OAnimationDuration?: string | undefined;
                    OAnimationFillMode?: string | undefined;
                    OAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    OAnimationName?: string | undefined;
                    OAnimationPlayState?: string | undefined;
                    OAnimationTimingFunction?: string | undefined;
                    OBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    OBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    OObjectFit?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                    OObjectPosition?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                    OTabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                    OTextOverflow?: string | undefined;
                    OTransform?: string | undefined;
                    OTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    OTransition?: string | undefined;
                    OTransitionDelay?: string | undefined;
                    OTransitionDuration?: string | undefined;
                    OTransitionProperty?: string | undefined;
                    OTransitionTimingFunction?: string | undefined;
                    WebkitBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    WebkitBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    WebkitBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    WebkitBoxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    WebkitBoxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                    WebkitBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    WebkitBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    WebkitBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    WebkitScrollSnapPointsX?: string | undefined;
                    WebkitScrollSnapPointsY?: string | undefined;
                    alignmentBaseline?: import("_csstype@2.6.20@csstype").AlignmentBaselineProperty | undefined;
                    baselineShift?: import("_csstype@2.6.20@csstype").BaselineShiftProperty<string | number> | undefined;
                    clipRule?: import("_csstype@2.6.20@csstype").ClipRuleProperty | undefined;
                    colorInterpolation?: import("_csstype@2.6.20@csstype").ColorInterpolationProperty | undefined;
                    colorRendering?: import("_csstype@2.6.20@csstype").ColorRenderingProperty | undefined;
                    dominantBaseline?: import("_csstype@2.6.20@csstype").DominantBaselineProperty | undefined;
                    fill?: string | undefined;
                    fillOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    fillRule?: import("_csstype@2.6.20@csstype").FillRuleProperty | undefined;
                    floodColor?: string | undefined;
                    floodOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    glyphOrientationVertical?: import("_csstype@2.6.20@csstype").GlyphOrientationVerticalProperty | undefined;
                    lightingColor?: string | undefined;
                    marker?: string | undefined;
                    markerEnd?: string | undefined;
                    markerMid?: string | undefined;
                    markerStart?: string | undefined;
                    shapeRendering?: import("_csstype@2.6.20@csstype").ShapeRenderingProperty | undefined;
                    stopColor?: string | undefined;
                    stopOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    stroke?: string | undefined;
                    strokeDasharray?: import("_csstype@2.6.20@csstype").StrokeDasharrayProperty<string | number> | undefined;
                    strokeDashoffset?: import("_csstype@2.6.20@csstype").StrokeDashoffsetProperty<string | number> | undefined;
                    strokeLinecap?: import("_csstype@2.6.20@csstype").StrokeLinecapProperty | undefined;
                    strokeLinejoin?: import("_csstype@2.6.20@csstype").StrokeLinejoinProperty | undefined;
                    strokeMiterlimit?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    strokeOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    strokeWidth?: import("_csstype@2.6.20@csstype").StrokeWidthProperty<string | number> | undefined;
                    textAnchor?: import("_csstype@2.6.20@csstype").TextAnchorProperty | undefined;
                    vectorEffect?: import("_csstype@2.6.20@csstype").VectorEffectProperty | undefined;
                    "accent-color"?: string | undefined;
                    "align-content"?: string | undefined;
                    "align-items"?: string | undefined;
                    "align-self"?: string | undefined;
                    "align-tracks"?: string | undefined;
                    "animation-delay"?: string | undefined;
                    "animation-direction"?: string | undefined;
                    "animation-duration"?: string | undefined;
                    "animation-fill-mode"?: string | undefined;
                    "animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    "animation-name"?: string | undefined;
                    "animation-play-state"?: string | undefined;
                    "animation-timeline"?: string | undefined;
                    "animation-timing-function"?: string | undefined;
                    "aspect-ratio"?: string | undefined;
                    "backdrop-filter"?: string | undefined;
                    "backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                    "background-attachment"?: string | undefined;
                    "background-blend-mode"?: string | undefined;
                    "background-clip"?: string | undefined;
                    "background-color"?: string | undefined;
                    "background-image"?: string | undefined;
                    "background-origin"?: string | undefined;
                    "background-position-x"?: import("_csstype@2.6.20@csstype").BackgroundPositionXProperty<string | number> | undefined;
                    "background-position-y"?: import("_csstype@2.6.20@csstype").BackgroundPositionYProperty<string | number> | undefined;
                    "background-repeat"?: string | undefined;
                    "background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    "block-overflow"?: string | undefined;
                    "block-size"?: import("_csstype@2.6.20@csstype").BlockSizeProperty<string | number> | undefined;
                    "border-block-color"?: string | undefined;
                    "border-block-end-color"?: string | undefined;
                    "border-block-end-style"?: import("_csstype@2.6.20@csstype").BorderBlockEndStyleProperty | undefined;
                    "border-block-end-width"?: import("_csstype@2.6.20@csstype").BorderBlockEndWidthProperty<string | number> | undefined;
                    "border-block-start-color"?: string | undefined;
                    "border-block-start-style"?: import("_csstype@2.6.20@csstype").BorderBlockStartStyleProperty | undefined;
                    "border-block-start-width"?: import("_csstype@2.6.20@csstype").BorderBlockStartWidthProperty<string | number> | undefined;
                    "border-block-style"?: import("_csstype@2.6.20@csstype").BorderBlockStyleProperty | undefined;
                    "border-block-width"?: import("_csstype@2.6.20@csstype").BorderBlockWidthProperty<string | number> | undefined;
                    "border-bottom-color"?: string | undefined;
                    "border-bottom-left-radius"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                    "border-bottom-right-radius"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                    "border-bottom-style"?: import("_csstype@2.6.20@csstype").BorderBottomStyleProperty | undefined;
                    "border-bottom-width"?: import("_csstype@2.6.20@csstype").BorderBottomWidthProperty<string | number> | undefined;
                    "border-collapse"?: import("_csstype@2.6.20@csstype").BorderCollapseProperty | undefined;
                    "border-end-end-radius"?: import("_csstype@2.6.20@csstype").BorderEndEndRadiusProperty<string | number> | undefined;
                    "border-end-start-radius"?: import("_csstype@2.6.20@csstype").BorderEndStartRadiusProperty<string | number> | undefined;
                    "border-image-outset"?: import("_csstype@2.6.20@csstype").BorderImageOutsetProperty<string | number> | undefined;
                    "border-image-repeat"?: string | undefined;
                    "border-image-slice"?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                    "border-image-source"?: string | undefined;
                    "border-image-width"?: import("_csstype@2.6.20@csstype").BorderImageWidthProperty<string | number> | undefined;
                    "border-inline-color"?: string | undefined;
                    "border-inline-end-color"?: string | undefined;
                    "border-inline-end-style"?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                    "border-inline-end-width"?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                    "border-inline-start-color"?: string | undefined;
                    "border-inline-start-style"?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                    "border-inline-start-width"?: import("_csstype@2.6.20@csstype").BorderInlineStartWidthProperty<string | number> | undefined;
                    "border-inline-style"?: import("_csstype@2.6.20@csstype").BorderInlineStyleProperty | undefined;
                    "border-inline-width"?: import("_csstype@2.6.20@csstype").BorderInlineWidthProperty<string | number> | undefined;
                    "border-left-color"?: string | undefined;
                    "border-left-style"?: import("_csstype@2.6.20@csstype").BorderLeftStyleProperty | undefined;
                    "border-left-width"?: import("_csstype@2.6.20@csstype").BorderLeftWidthProperty<string | number> | undefined;
                    "border-right-color"?: string | undefined;
                    "border-right-style"?: import("_csstype@2.6.20@csstype").BorderRightStyleProperty | undefined;
                    "border-right-width"?: import("_csstype@2.6.20@csstype").BorderRightWidthProperty<string | number> | undefined;
                    "border-spacing"?: import("_csstype@2.6.20@csstype").BorderSpacingProperty<string | number> | undefined;
                    "border-start-end-radius"?: import("_csstype@2.6.20@csstype").BorderStartEndRadiusProperty<string | number> | undefined;
                    "border-start-start-radius"?: import("_csstype@2.6.20@csstype").BorderStartStartRadiusProperty<string | number> | undefined;
                    "border-top-color"?: string | undefined;
                    "border-top-left-radius"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                    "border-top-right-radius"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                    "border-top-style"?: import("_csstype@2.6.20@csstype").BorderTopStyleProperty | undefined;
                    "border-top-width"?: import("_csstype@2.6.20@csstype").BorderTopWidthProperty<string | number> | undefined;
                    "box-decoration-break"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                    "box-shadow"?: string | undefined;
                    "box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                    "break-after"?: import("_csstype@2.6.20@csstype").BreakAfterProperty | undefined;
                    "break-before"?: import("_csstype@2.6.20@csstype").BreakBeforeProperty | undefined;
                    "break-inside"?: import("_csstype@2.6.20@csstype").BreakInsideProperty | undefined;
                    "caption-side"?: import("_csstype@2.6.20@csstype").CaptionSideProperty | undefined;
                    "caret-color"?: string | undefined;
                    "clip-path"?: string | undefined;
                    "color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                    "color-scheme"?: string | undefined;
                    "column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                    "column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                    "column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                    "column-rule-color"?: string | undefined;
                    "column-rule-style"?: string | undefined;
                    "column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                    "column-span"?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                    "column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                    "content-visibility"?: import("_csstype@2.6.20@csstype").ContentVisibilityProperty | undefined;
                    "counter-increment"?: string | undefined;
                    "counter-reset"?: string | undefined;
                    "counter-set"?: string | undefined;
                    "empty-cells"?: import("_csstype@2.6.20@csstype").EmptyCellsProperty | undefined;
                    "flex-basis"?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                    "flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                    "flex-grow"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "flex-shrink"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "flex-wrap"?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                    "font-family"?: string | undefined;
                    "font-feature-settings"?: string | undefined;
                    "font-kerning"?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                    "font-language-override"?: string | undefined;
                    "font-optical-sizing"?: import("_csstype@2.6.20@csstype").FontOpticalSizingProperty | undefined;
                    "font-size"?: import("_csstype@2.6.20@csstype").FontSizeProperty<string | number> | undefined;
                    "font-size-adjust"?: import("_csstype@2.6.20@csstype").FontSizeAdjustProperty | undefined;
                    "font-smooth"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                    "font-stretch"?: string | undefined;
                    "font-style"?: string | undefined;
                    "font-synthesis"?: string | undefined;
                    "font-variant"?: string | undefined;
                    "font-variant-alternates"?: string | undefined;
                    "font-variant-caps"?: import("_csstype@2.6.20@csstype").FontVariantCapsProperty | undefined;
                    "font-variant-east-asian"?: string | undefined;
                    "font-variant-ligatures"?: string | undefined;
                    "font-variant-numeric"?: string | undefined;
                    "font-variant-position"?: import("_csstype@2.6.20@csstype").FontVariantPositionProperty | undefined;
                    "font-variation-settings"?: string | undefined;
                    "font-weight"?: import("_csstype@2.6.20@csstype").FontWeightProperty | undefined;
                    "forced-color-adjust"?: import("_csstype@2.6.20@csstype").ForcedColorAdjustProperty | undefined;
                    "grid-auto-columns"?: import("_csstype@2.6.20@csstype").GridAutoColumnsProperty<string | number> | undefined;
                    "grid-auto-flow"?: string | undefined;
                    "grid-auto-rows"?: import("_csstype@2.6.20@csstype").GridAutoRowsProperty<string | number> | undefined;
                    "grid-column-end"?: import("_csstype@2.6.20@csstype").GridColumnEndProperty | undefined;
                    "grid-column-start"?: import("_csstype@2.6.20@csstype").GridColumnStartProperty | undefined;
                    "grid-row-end"?: import("_csstype@2.6.20@csstype").GridRowEndProperty | undefined;
                    "grid-row-start"?: import("_csstype@2.6.20@csstype").GridRowStartProperty | undefined;
                    "grid-template-areas"?: string | undefined;
                    "grid-template-columns"?: import("_csstype@2.6.20@csstype").GridTemplateColumnsProperty<string | number> | undefined;
                    "grid-template-rows"?: import("_csstype@2.6.20@csstype").GridTemplateRowsProperty<string | number> | undefined;
                    "hanging-punctuation"?: string | undefined;
                    "hyphenate-character"?: string | undefined;
                    "image-orientation"?: string | undefined;
                    "image-rendering"?: import("_csstype@2.6.20@csstype").ImageRenderingProperty | undefined;
                    "image-resolution"?: string | undefined;
                    "initial-letter"?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                    "inline-size"?: import("_csstype@2.6.20@csstype").InlineSizeProperty<string | number> | undefined;
                    "input-security"?: import("_csstype@2.6.20@csstype").InputSecurityProperty | undefined;
                    "inset-block"?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                    "inset-block-end"?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                    "inset-block-start"?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                    "inset-inline"?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                    "inset-inline-end"?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                    "inset-inline-start"?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                    "justify-content"?: string | undefined;
                    "justify-items"?: string | undefined;
                    "justify-self"?: string | undefined;
                    "justify-tracks"?: string | undefined;
                    "letter-spacing"?: import("_csstype@2.6.20@csstype").LetterSpacingProperty<string | number> | undefined;
                    "line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    "line-height"?: import("_csstype@2.6.20@csstype").LineHeightProperty<string | number> | undefined;
                    "line-height-step"?: import("_csstype@2.6.20@csstype").LineHeightStepProperty<string | number> | undefined;
                    "list-style-image"?: string | undefined;
                    "list-style-position"?: import("_csstype@2.6.20@csstype").ListStylePositionProperty | undefined;
                    "list-style-type"?: string | undefined;
                    "margin-block"?: import("_csstype@2.6.20@csstype").MarginBlockProperty<string | number> | undefined;
                    "margin-block-end"?: import("_csstype@2.6.20@csstype").MarginBlockEndProperty<string | number> | undefined;
                    "margin-block-start"?: import("_csstype@2.6.20@csstype").MarginBlockStartProperty<string | number> | undefined;
                    "margin-bottom"?: import("_csstype@2.6.20@csstype").MarginBottomProperty<string | number> | undefined;
                    "margin-inline"?: import("_csstype@2.6.20@csstype").MarginInlineProperty<string | number> | undefined;
                    "margin-inline-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                    "margin-inline-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                    "margin-left"?: import("_csstype@2.6.20@csstype").MarginLeftProperty<string | number> | undefined;
                    "margin-right"?: import("_csstype@2.6.20@csstype").MarginRightProperty<string | number> | undefined;
                    "margin-top"?: import("_csstype@2.6.20@csstype").MarginTopProperty<string | number> | undefined;
                    "mask-border-mode"?: import("_csstype@2.6.20@csstype").MaskBorderModeProperty | undefined;
                    "mask-border-outset"?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                    "mask-border-repeat"?: string | undefined;
                    "mask-border-slice"?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                    "mask-border-source"?: string | undefined;
                    "mask-border-width"?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                    "mask-clip"?: string | undefined;
                    "mask-composite"?: string | undefined;
                    "mask-image"?: string | undefined;
                    "mask-mode"?: string | undefined;
                    "mask-origin"?: string | undefined;
                    "mask-position"?: import("_csstype@2.6.20@csstype").MaskPositionProperty<string | number> | undefined;
                    "mask-repeat"?: string | undefined;
                    "mask-size"?: import("_csstype@2.6.20@csstype").MaskSizeProperty<string | number> | undefined;
                    "mask-type"?: import("_csstype@2.6.20@csstype").MaskTypeProperty | undefined;
                    "math-style"?: import("_csstype@2.6.20@csstype").MathStyleProperty | undefined;
                    "max-block-size"?: import("_csstype@2.6.20@csstype").MaxBlockSizeProperty<string | number> | undefined;
                    "max-height"?: import("_csstype@2.6.20@csstype").MaxHeightProperty<string | number> | undefined;
                    "max-inline-size"?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                    "max-lines"?: import("_csstype@2.6.20@csstype").MaxLinesProperty | undefined;
                    "max-width"?: import("_csstype@2.6.20@csstype").MaxWidthProperty<string | number> | undefined;
                    "min-block-size"?: import("_csstype@2.6.20@csstype").MinBlockSizeProperty<string | number> | undefined;
                    "min-height"?: import("_csstype@2.6.20@csstype").MinHeightProperty<string | number> | undefined;
                    "min-inline-size"?: import("_csstype@2.6.20@csstype").MinInlineSizeProperty<string | number> | undefined;
                    "min-width"?: import("_csstype@2.6.20@csstype").MinWidthProperty<string | number> | undefined;
                    "mix-blend-mode"?: import("_csstype@2.6.20@csstype").MixBlendModeProperty | undefined;
                    "motion-distance"?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                    "motion-path"?: string | undefined;
                    "motion-rotation"?: string | undefined;
                    "object-fit"?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                    "object-position"?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                    "offset-anchor"?: import("_csstype@2.6.20@csstype").OffsetAnchorProperty<string | number> | undefined;
                    "offset-distance"?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                    "offset-path"?: string | undefined;
                    "offset-rotate"?: string | undefined;
                    "offset-rotation"?: string | undefined;
                    "outline-color"?: string | undefined;
                    "outline-offset"?: import("_csstype@2.6.20@csstype").OutlineOffsetProperty<string | number> | undefined;
                    "outline-style"?: string | undefined;
                    "outline-width"?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                    "overflow-anchor"?: import("_csstype@2.6.20@csstype").OverflowAnchorProperty | undefined;
                    "overflow-block"?: import("_csstype@2.6.20@csstype").OverflowBlockProperty | undefined;
                    "overflow-clip-box"?: import("_csstype@2.6.20@csstype").OverflowClipBoxProperty | undefined;
                    "overflow-clip-margin"?: import("_csstype@2.6.20@csstype").OverflowClipMarginProperty<string | number> | undefined;
                    "overflow-inline"?: import("_csstype@2.6.20@csstype").OverflowInlineProperty | undefined;
                    "overflow-wrap"?: import("_csstype@2.6.20@csstype").OverflowWrapProperty | undefined;
                    "overflow-x"?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                    "overflow-y"?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                    "overscroll-behavior-block"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorBlockProperty | undefined;
                    "overscroll-behavior-inline"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorInlineProperty | undefined;
                    "overscroll-behavior-x"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorXProperty | undefined;
                    "overscroll-behavior-y"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorYProperty | undefined;
                    "padding-block"?: import("_csstype@2.6.20@csstype").PaddingBlockProperty<string | number> | undefined;
                    "padding-block-end"?: import("_csstype@2.6.20@csstype").PaddingBlockEndProperty<string | number> | undefined;
                    "padding-block-start"?: import("_csstype@2.6.20@csstype").PaddingBlockStartProperty<string | number> | undefined;
                    "padding-bottom"?: import("_csstype@2.6.20@csstype").PaddingBottomProperty<string | number> | undefined;
                    "padding-inline"?: import("_csstype@2.6.20@csstype").PaddingInlineProperty<string | number> | undefined;
                    "padding-inline-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                    "padding-inline-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                    "padding-left"?: import("_csstype@2.6.20@csstype").PaddingLeftProperty<string | number> | undefined;
                    "padding-right"?: import("_csstype@2.6.20@csstype").PaddingRightProperty<string | number> | undefined;
                    "padding-top"?: import("_csstype@2.6.20@csstype").PaddingTopProperty<string | number> | undefined;
                    "page-break-after"?: import("_csstype@2.6.20@csstype").PageBreakAfterProperty | undefined;
                    "page-break-before"?: import("_csstype@2.6.20@csstype").PageBreakBeforeProperty | undefined;
                    "page-break-inside"?: import("_csstype@2.6.20@csstype").PageBreakInsideProperty | undefined;
                    "paint-order"?: string | undefined;
                    "perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                    "place-content"?: string | undefined;
                    "pointer-events"?: import("_csstype@2.6.20@csstype").PointerEventsProperty | undefined;
                    "print-color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                    "row-gap"?: import("_csstype@2.6.20@csstype").RowGapProperty<string | number> | undefined;
                    "ruby-align"?: import("_csstype@2.6.20@csstype").RubyAlignProperty | undefined;
                    "ruby-merge"?: import("_csstype@2.6.20@csstype").RubyMergeProperty | undefined;
                    "ruby-position"?: string | undefined;
                    "scroll-behavior"?: import("_csstype@2.6.20@csstype").ScrollBehaviorProperty | undefined;
                    "scroll-margin"?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                    "scroll-margin-block"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockProperty<string | number> | undefined;
                    "scroll-margin-block-end"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockEndProperty<string | number> | undefined;
                    "scroll-margin-block-start"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockStartProperty<string | number> | undefined;
                    "scroll-margin-bottom"?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                    "scroll-margin-inline"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineProperty<string | number> | undefined;
                    "scroll-margin-inline-end"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineEndProperty<string | number> | undefined;
                    "scroll-margin-inline-start"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineStartProperty<string | number> | undefined;
                    "scroll-margin-left"?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                    "scroll-margin-right"?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                    "scroll-margin-top"?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                    "scroll-padding"?: import("_csstype@2.6.20@csstype").ScrollPaddingProperty<string | number> | undefined;
                    "scroll-padding-block"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockProperty<string | number> | undefined;
                    "scroll-padding-block-end"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockEndProperty<string | number> | undefined;
                    "scroll-padding-block-start"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockStartProperty<string | number> | undefined;
                    "scroll-padding-bottom"?: import("_csstype@2.6.20@csstype").ScrollPaddingBottomProperty<string | number> | undefined;
                    "scroll-padding-inline"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineProperty<string | number> | undefined;
                    "scroll-padding-inline-end"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineEndProperty<string | number> | undefined;
                    "scroll-padding-inline-start"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineStartProperty<string | number> | undefined;
                    "scroll-padding-left"?: import("_csstype@2.6.20@csstype").ScrollPaddingLeftProperty<string | number> | undefined;
                    "scroll-padding-right"?: import("_csstype@2.6.20@csstype").ScrollPaddingRightProperty<string | number> | undefined;
                    "scroll-padding-top"?: import("_csstype@2.6.20@csstype").ScrollPaddingTopProperty<string | number> | undefined;
                    "scroll-snap-align"?: string | undefined;
                    "scroll-snap-margin"?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                    "scroll-snap-margin-bottom"?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                    "scroll-snap-margin-left"?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                    "scroll-snap-margin-right"?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                    "scroll-snap-margin-top"?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                    "scroll-snap-stop"?: import("_csstype@2.6.20@csstype").ScrollSnapStopProperty | undefined;
                    "scroll-snap-type"?: string | undefined;
                    "scrollbar-color"?: string | undefined;
                    "scrollbar-gutter"?: string | undefined;
                    "scrollbar-width"?: import("_csstype@2.6.20@csstype").ScrollbarWidthProperty | undefined;
                    "shape-image-threshold"?: import("_csstype@2.6.20@csstype").ShapeImageThresholdProperty | undefined;
                    "shape-margin"?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                    "shape-outside"?: string | undefined;
                    "tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                    "table-layout"?: import("_csstype@2.6.20@csstype").TableLayoutProperty | undefined;
                    "text-align"?: import("_csstype@2.6.20@csstype").TextAlignProperty | undefined;
                    "text-align-last"?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                    "text-combine-upright"?: string | undefined;
                    "text-decoration-color"?: string | undefined;
                    "text-decoration-line"?: string | undefined;
                    "text-decoration-skip"?: string | undefined;
                    "text-decoration-skip-ink"?: import("_csstype@2.6.20@csstype").TextDecorationSkipInkProperty | undefined;
                    "text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                    "text-decoration-thickness"?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                    "text-decoration-width"?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                    "text-emphasis-color"?: string | undefined;
                    "text-emphasis-position"?: string | undefined;
                    "text-emphasis-style"?: string | undefined;
                    "text-indent"?: import("_csstype@2.6.20@csstype").TextIndentProperty<string | number> | undefined;
                    "text-justify"?: import("_csstype@2.6.20@csstype").TextJustifyProperty | undefined;
                    "text-orientation"?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                    "text-overflow"?: string | undefined;
                    "text-rendering"?: import("_csstype@2.6.20@csstype").TextRenderingProperty | undefined;
                    "text-shadow"?: string | undefined;
                    "text-size-adjust"?: string | undefined;
                    "text-transform"?: import("_csstype@2.6.20@csstype").TextTransformProperty | undefined;
                    "text-underline-offset"?: import("_csstype@2.6.20@csstype").TextUnderlineOffsetProperty<string | number> | undefined;
                    "text-underline-position"?: string | undefined;
                    "touch-action"?: string | undefined;
                    "transform-box"?: import("_csstype@2.6.20@csstype").TransformBoxProperty | undefined;
                    "transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    "transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                    "transition-delay"?: string | undefined;
                    "transition-duration"?: string | undefined;
                    "transition-property"?: string | undefined;
                    "transition-timing-function"?: string | undefined;
                    "unicode-bidi"?: import("_csstype@2.6.20@csstype").UnicodeBidiProperty | undefined;
                    "user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    "vertical-align"?: import("_csstype@2.6.20@csstype").VerticalAlignProperty<string | number> | undefined;
                    "white-space"?: import("_csstype@2.6.20@csstype").WhiteSpaceProperty | undefined;
                    "will-change"?: string | undefined;
                    "word-break"?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                    "word-spacing"?: import("_csstype@2.6.20@csstype").WordSpacingProperty<string | number> | undefined;
                    "word-wrap"?: import("_csstype@2.6.20@csstype").WordWrapProperty | undefined;
                    "writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                    "z-index"?: import("_csstype@2.6.20@csstype").ZIndexProperty | undefined;
                    "background-position"?: import("_csstype@2.6.20@csstype").BackgroundPositionProperty<string | number> | undefined;
                    "border-block"?: import("_csstype@2.6.20@csstype").BorderBlockProperty<string | number> | undefined;
                    "border-block-end"?: import("_csstype@2.6.20@csstype").BorderBlockEndProperty<string | number> | undefined;
                    "border-block-start"?: import("_csstype@2.6.20@csstype").BorderBlockStartProperty<string | number> | undefined;
                    "border-bottom"?: import("_csstype@2.6.20@csstype").BorderBottomProperty<string | number> | undefined;
                    "border-color"?: string | undefined;
                    "border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    "border-inline"?: import("_csstype@2.6.20@csstype").BorderInlineProperty<string | number> | undefined;
                    "border-inline-end"?: import("_csstype@2.6.20@csstype").BorderInlineEndProperty<string | number> | undefined;
                    "border-inline-start"?: import("_csstype@2.6.20@csstype").BorderInlineStartProperty<string | number> | undefined;
                    "border-left"?: import("_csstype@2.6.20@csstype").BorderLeftProperty<string | number> | undefined;
                    "border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                    "border-right"?: import("_csstype@2.6.20@csstype").BorderRightProperty<string | number> | undefined;
                    "border-style"?: string | undefined;
                    "border-top"?: import("_csstype@2.6.20@csstype").BorderTopProperty<string | number> | undefined;
                    "border-width"?: import("_csstype@2.6.20@csstype").BorderWidthProperty<string | number> | undefined;
                    "column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                    "flex-flow"?: string | undefined;
                    "grid-area"?: import("_csstype@2.6.20@csstype").GridAreaProperty | undefined;
                    "grid-column"?: import("_csstype@2.6.20@csstype").GridColumnProperty | undefined;
                    "grid-row"?: import("_csstype@2.6.20@csstype").GridRowProperty | undefined;
                    "grid-template"?: string | undefined;
                    "line-clamp"?: import("_csstype@2.6.20@csstype").LineClampProperty | undefined;
                    "list-style"?: string | undefined;
                    "mask-border"?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                    "overscroll-behavior"?: string | undefined;
                    "place-items"?: string | undefined;
                    "place-self"?: string | undefined;
                    "text-decoration"?: import("_csstype@2.6.20@csstype").TextDecorationProperty<string | number> | undefined;
                    "text-emphasis"?: string | undefined;
                    "-moz-animation-delay"?: string | undefined;
                    "-moz-animation-direction"?: string | undefined;
                    "-moz-animation-duration"?: string | undefined;
                    "-moz-animation-fill-mode"?: string | undefined;
                    "-moz-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    "-moz-animation-name"?: string | undefined;
                    "-moz-animation-play-state"?: string | undefined;
                    "-moz-animation-timing-function"?: string | undefined;
                    "-moz-appearance"?: import("_csstype@2.6.20@csstype").MozAppearanceProperty | undefined;
                    "-moz-backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                    "-moz-border-bottom-colors"?: string | undefined;
                    "-moz-border-end-color"?: string | undefined;
                    "-moz-border-end-style"?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                    "-moz-border-end-width"?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                    "-moz-border-left-colors"?: string | undefined;
                    "-moz-border-right-colors"?: string | undefined;
                    "-moz-border-start-color"?: string | undefined;
                    "-moz-border-start-style"?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                    "-moz-border-top-colors"?: string | undefined;
                    "-moz-box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                    "-moz-column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                    "-moz-column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                    "-moz-column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                    "-moz-column-rule-color"?: string | undefined;
                    "-moz-column-rule-style"?: string | undefined;
                    "-moz-column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                    "-moz-column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                    "-moz-context-properties"?: string | undefined;
                    "-moz-font-feature-settings"?: string | undefined;
                    "-moz-font-language-override"?: string | undefined;
                    "-moz-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    "-moz-image-region"?: string | undefined;
                    "-moz-margin-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                    "-moz-margin-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                    "-moz-orient"?: import("_csstype@2.6.20@csstype").MozOrientProperty | undefined;
                    "-moz-osx-font-smoothing"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                    "-moz-padding-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                    "-moz-padding-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                    "-moz-perspective"?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                    "-moz-perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                    "-moz-stack-sizing"?: import("_csstype@2.6.20@csstype").MozStackSizingProperty | undefined;
                    "-moz-tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                    "-moz-text-blink"?: import("_csstype@2.6.20@csstype").MozTextBlinkProperty | undefined;
                    "-moz-text-size-adjust"?: string | undefined;
                    "-moz-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    "-moz-transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                    "-moz-transition-delay"?: string | undefined;
                    "-moz-transition-duration"?: string | undefined;
                    "-moz-transition-property"?: string | undefined;
                    "-moz-transition-timing-function"?: string | undefined;
                    "-moz-user-focus"?: import("_csstype@2.6.20@csstype").MozUserFocusProperty | undefined;
                    "-moz-user-modify"?: import("_csstype@2.6.20@csstype").MozUserModifyProperty | undefined;
                    "-moz-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    "-moz-window-dragging"?: import("_csstype@2.6.20@csstype").MozWindowDraggingProperty | undefined;
                    "-moz-window-shadow"?: import("_csstype@2.6.20@csstype").MozWindowShadowProperty | undefined;
                    "-ms-accelerator"?: import("_csstype@2.6.20@csstype").MsAcceleratorProperty | undefined;
                    "-ms-align-self"?: string | undefined;
                    "-ms-block-progression"?: import("_csstype@2.6.20@csstype").MsBlockProgressionProperty | undefined;
                    "-ms-content-zoom-chaining"?: import("_csstype@2.6.20@csstype").MsContentZoomChainingProperty | undefined;
                    "-ms-content-zoom-limit-max"?: string | undefined;
                    "-ms-content-zoom-limit-min"?: string | undefined;
                    "-ms-content-zoom-snap-points"?: string | undefined;
                    "-ms-content-zoom-snap-type"?: import("_csstype@2.6.20@csstype").MsContentZoomSnapTypeProperty | undefined;
                    "-ms-content-zooming"?: import("_csstype@2.6.20@csstype").MsContentZoomingProperty | undefined;
                    "-ms-filter"?: string | undefined;
                    "-ms-flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                    "-ms-flex-positive"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-ms-flow-from"?: string | undefined;
                    "-ms-flow-into"?: string | undefined;
                    "-ms-grid-columns"?: import("_csstype@2.6.20@csstype").MsGridColumnsProperty<string | number> | undefined;
                    "-ms-grid-rows"?: import("_csstype@2.6.20@csstype").MsGridRowsProperty<string | number> | undefined;
                    "-ms-high-contrast-adjust"?: import("_csstype@2.6.20@csstype").MsHighContrastAdjustProperty | undefined;
                    "-ms-hyphenate-limit-chars"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitCharsProperty | undefined;
                    "-ms-hyphenate-limit-lines"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitLinesProperty | undefined;
                    "-ms-hyphenate-limit-zone"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitZoneProperty<string | number> | undefined;
                    "-ms-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    "-ms-ime-align"?: import("_csstype@2.6.20@csstype").MsImeAlignProperty | undefined;
                    "-ms-justify-self"?: string | undefined;
                    "-ms-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    "-ms-order"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-ms-overflow-style"?: import("_csstype@2.6.20@csstype").MsOverflowStyleProperty | undefined;
                    "-ms-overflow-x"?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                    "-ms-overflow-y"?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                    "-ms-scroll-chaining"?: import("_csstype@2.6.20@csstype").MsScrollChainingProperty | undefined;
                    "-ms-scroll-limit-x-max"?: import("_csstype@2.6.20@csstype").MsScrollLimitXMaxProperty<string | number> | undefined;
                    "-ms-scroll-limit-x-min"?: import("_csstype@2.6.20@csstype").MsScrollLimitXMinProperty<string | number> | undefined;
                    "-ms-scroll-limit-y-max"?: import("_csstype@2.6.20@csstype").MsScrollLimitYMaxProperty<string | number> | undefined;
                    "-ms-scroll-limit-y-min"?: import("_csstype@2.6.20@csstype").MsScrollLimitYMinProperty<string | number> | undefined;
                    "-ms-scroll-rails"?: import("_csstype@2.6.20@csstype").MsScrollRailsProperty | undefined;
                    "-ms-scroll-snap-points-x"?: string | undefined;
                    "-ms-scroll-snap-points-y"?: string | undefined;
                    "-ms-scroll-snap-type"?: import("_csstype@2.6.20@csstype").MsScrollSnapTypeProperty | undefined;
                    "-ms-scroll-translation"?: import("_csstype@2.6.20@csstype").MsScrollTranslationProperty | undefined;
                    "-ms-scrollbar-3dlight-color"?: string | undefined;
                    "-ms-scrollbar-arrow-color"?: string | undefined;
                    "-ms-scrollbar-base-color"?: string | undefined;
                    "-ms-scrollbar-darkshadow-color"?: string | undefined;
                    "-ms-scrollbar-face-color"?: string | undefined;
                    "-ms-scrollbar-highlight-color"?: string | undefined;
                    "-ms-scrollbar-shadow-color"?: string | undefined;
                    "-ms-text-autospace"?: import("_csstype@2.6.20@csstype").MsTextAutospaceProperty | undefined;
                    "-ms-text-combine-horizontal"?: string | undefined;
                    "-ms-text-overflow"?: string | undefined;
                    "-ms-touch-action"?: string | undefined;
                    "-ms-touch-select"?: import("_csstype@2.6.20@csstype").MsTouchSelectProperty | undefined;
                    "-ms-transform"?: string | undefined;
                    "-ms-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    "-ms-transition-delay"?: string | undefined;
                    "-ms-transition-duration"?: string | undefined;
                    "-ms-transition-property"?: string | undefined;
                    "-ms-transition-timing-function"?: string | undefined;
                    "-ms-user-select"?: import("_csstype@2.6.20@csstype").MsUserSelectProperty | undefined;
                    "-ms-word-break"?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                    "-ms-wrap-flow"?: import("_csstype@2.6.20@csstype").MsWrapFlowProperty | undefined;
                    "-ms-wrap-margin"?: import("_csstype@2.6.20@csstype").MsWrapMarginProperty<string | number> | undefined;
                    "-ms-wrap-through"?: import("_csstype@2.6.20@csstype").MsWrapThroughProperty | undefined;
                    "-ms-writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                    "-webkit-align-content"?: string | undefined;
                    "-webkit-align-items"?: string | undefined;
                    "-webkit-align-self"?: string | undefined;
                    "-webkit-animation-delay"?: string | undefined;
                    "-webkit-animation-direction"?: string | undefined;
                    "-webkit-animation-duration"?: string | undefined;
                    "-webkit-animation-fill-mode"?: string | undefined;
                    "-webkit-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    "-webkit-animation-name"?: string | undefined;
                    "-webkit-animation-play-state"?: string | undefined;
                    "-webkit-animation-timing-function"?: string | undefined;
                    "-webkit-appearance"?: import("_csstype@2.6.20@csstype").WebkitAppearanceProperty | undefined;
                    "-webkit-backdrop-filter"?: string | undefined;
                    "-webkit-backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                    "-webkit-background-clip"?: string | undefined;
                    "-webkit-background-origin"?: string | undefined;
                    "-webkit-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    "-webkit-border-before-color"?: string | undefined;
                    "-webkit-border-before-style"?: string | undefined;
                    "-webkit-border-before-width"?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeWidthProperty<string | number> | undefined;
                    "-webkit-border-bottom-left-radius"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                    "-webkit-border-bottom-right-radius"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                    "-webkit-border-image-slice"?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                    "-webkit-border-top-left-radius"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                    "-webkit-border-top-right-radius"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                    "-webkit-box-decoration-break"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                    "-webkit-box-reflect"?: import("_csstype@2.6.20@csstype").WebkitBoxReflectProperty<string | number> | undefined;
                    "-webkit-box-shadow"?: string | undefined;
                    "-webkit-box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                    "-webkit-clip-path"?: string | undefined;
                    "-webkit-column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                    "-webkit-column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                    "-webkit-column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                    "-webkit-column-rule-color"?: string | undefined;
                    "-webkit-column-rule-style"?: string | undefined;
                    "-webkit-column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                    "-webkit-column-span"?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                    "-webkit-column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                    "-webkit-filter"?: string | undefined;
                    "-webkit-flex-basis"?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                    "-webkit-flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                    "-webkit-flex-grow"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-webkit-flex-shrink"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-webkit-flex-wrap"?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                    "-webkit-font-feature-settings"?: string | undefined;
                    "-webkit-font-kerning"?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                    "-webkit-font-smoothing"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                    "-webkit-font-variant-ligatures"?: string | undefined;
                    "-webkit-hyphenate-character"?: string | undefined;
                    "-webkit-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                    "-webkit-initial-letter"?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                    "-webkit-justify-content"?: string | undefined;
                    "-webkit-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    "-webkit-line-clamp"?: import("_csstype@2.6.20@csstype").WebkitLineClampProperty | undefined;
                    "-webkit-margin-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                    "-webkit-margin-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                    "-webkit-mask-attachment"?: string | undefined;
                    "-webkit-mask-box-image-outset"?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                    "-webkit-mask-box-image-repeat"?: string | undefined;
                    "-webkit-mask-box-image-slice"?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                    "-webkit-mask-box-image-source"?: string | undefined;
                    "-webkit-mask-box-image-width"?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                    "-webkit-mask-clip"?: string | undefined;
                    "-webkit-mask-composite"?: string | undefined;
                    "-webkit-mask-image"?: string | undefined;
                    "-webkit-mask-origin"?: string | undefined;
                    "-webkit-mask-position"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionProperty<string | number> | undefined;
                    "-webkit-mask-position-x"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionXProperty<string | number> | undefined;
                    "-webkit-mask-position-y"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionYProperty<string | number> | undefined;
                    "-webkit-mask-repeat"?: string | undefined;
                    "-webkit-mask-repeat-x"?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatXProperty | undefined;
                    "-webkit-mask-repeat-y"?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatYProperty | undefined;
                    "-webkit-mask-size"?: import("_csstype@2.6.20@csstype").WebkitMaskSizeProperty<string | number> | undefined;
                    "-webkit-max-inline-size"?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                    "-webkit-order"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-webkit-overflow-scrolling"?: import("_csstype@2.6.20@csstype").WebkitOverflowScrollingProperty | undefined;
                    "-webkit-padding-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                    "-webkit-padding-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                    "-webkit-perspective"?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                    "-webkit-perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                    "-webkit-print-color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                    "-webkit-ruby-position"?: string | undefined;
                    "-webkit-scroll-snap-type"?: string | undefined;
                    "-webkit-shape-margin"?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                    "-webkit-tap-highlight-color"?: string | undefined;
                    "-webkit-text-combine"?: string | undefined;
                    "-webkit-text-decoration-color"?: string | undefined;
                    "-webkit-text-decoration-line"?: string | undefined;
                    "-webkit-text-decoration-skip"?: string | undefined;
                    "-webkit-text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                    "-webkit-text-emphasis-color"?: string | undefined;
                    "-webkit-text-emphasis-position"?: string | undefined;
                    "-webkit-text-emphasis-style"?: string | undefined;
                    "-webkit-text-fill-color"?: string | undefined;
                    "-webkit-text-orientation"?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                    "-webkit-text-size-adjust"?: string | undefined;
                    "-webkit-text-stroke-color"?: string | undefined;
                    "-webkit-text-stroke-width"?: import("_csstype@2.6.20@csstype").WebkitTextStrokeWidthProperty<string | number> | undefined;
                    "-webkit-text-underline-position"?: string | undefined;
                    "-webkit-touch-callout"?: import("_csstype@2.6.20@csstype").WebkitTouchCalloutProperty | undefined;
                    "-webkit-transform"?: string | undefined;
                    "-webkit-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    "-webkit-transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                    "-webkit-transition-delay"?: string | undefined;
                    "-webkit-transition-duration"?: string | undefined;
                    "-webkit-transition-property"?: string | undefined;
                    "-webkit-transition-timing-function"?: string | undefined;
                    "-webkit-user-modify"?: import("_csstype@2.6.20@csstype").WebkitUserModifyProperty | undefined;
                    "-webkit-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    "-webkit-writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                    "-moz-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    "-moz-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    "-moz-column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                    "-moz-columns"?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                    "-moz-transition"?: string | undefined;
                    "-ms-content-zoom-limit"?: string | undefined;
                    "-ms-content-zoom-snap"?: string | undefined;
                    "-ms-flex"?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                    "-ms-scroll-limit"?: string | undefined;
                    "-ms-scroll-snap-x"?: string | undefined;
                    "-ms-scroll-snap-y"?: string | undefined;
                    "-ms-transition"?: string | undefined;
                    "-webkit-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    "-webkit-border-before"?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeProperty<string | number> | undefined;
                    "-webkit-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    "-webkit-border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                    "-webkit-column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                    "-webkit-columns"?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                    "-webkit-flex"?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                    "-webkit-flex-flow"?: string | undefined;
                    "-webkit-mask"?: import("_csstype@2.6.20@csstype").WebkitMaskProperty<string | number> | undefined;
                    "-webkit-mask-box-image"?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                    "-webkit-text-emphasis"?: string | undefined;
                    "-webkit-text-stroke"?: import("_csstype@2.6.20@csstype").WebkitTextStrokeProperty<string | number> | undefined;
                    "-webkit-transition"?: string | undefined;
                    "box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    "box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    "box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                    "box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    "box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    "grid-column-gap"?: import("_csstype@2.6.20@csstype").GridColumnGapProperty<string | number> | undefined;
                    "grid-gap"?: import("_csstype@2.6.20@csstype").GridGapProperty<string | number> | undefined;
                    "grid-row-gap"?: import("_csstype@2.6.20@csstype").GridRowGapProperty<string | number> | undefined;
                    "ime-mode"?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                    "offset-block"?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                    "offset-block-end"?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                    "offset-block-start"?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                    "offset-inline"?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                    "offset-inline-end"?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                    "offset-inline-start"?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                    "scroll-snap-coordinate"?: import("_csstype@2.6.20@csstype").ScrollSnapCoordinateProperty<string | number> | undefined;
                    "scroll-snap-destination"?: import("_csstype@2.6.20@csstype").ScrollSnapDestinationProperty<string | number> | undefined;
                    "scroll-snap-points-x"?: string | undefined;
                    "scroll-snap-points-y"?: string | undefined;
                    "scroll-snap-type-x"?: import("_csstype@2.6.20@csstype").ScrollSnapTypeXProperty | undefined;
                    "scroll-snap-type-y"?: import("_csstype@2.6.20@csstype").ScrollSnapTypeYProperty | undefined;
                    "scrollbar-track-color"?: string | undefined;
                    "-khtml-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    "-khtml-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    "-khtml-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-khtml-box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-khtml-box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                    "-khtml-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-khtml-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    "-khtml-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    "-khtml-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                    "-khtml-opacity"?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                    "-khtml-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                    "-moz-background-clip"?: string | undefined;
                    "-moz-background-inline-policy"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                    "-moz-background-origin"?: string | undefined;
                    "-moz-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    "-moz-binding"?: string | undefined;
                    "-moz-border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                    "-moz-border-radius-bottomleft"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                    "-moz-border-radius-bottomright"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                    "-moz-border-radius-topleft"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                    "-moz-border-radius-topright"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                    "-moz-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    "-moz-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    "-moz-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-moz-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-moz-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    "-moz-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    "-moz-box-shadow"?: string | undefined;
                    "-moz-float-edge"?: import("_csstype@2.6.20@csstype").MozFloatEdgeProperty | undefined;
                    "-moz-force-broken-image-icon"?: import("_csstype@2.6.20@csstype").MozForceBrokenImageIconProperty | undefined;
                    "-moz-opacity"?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                    "-moz-outline"?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                    "-moz-outline-color"?: string | undefined;
                    "-moz-outline-radius"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusProperty<string | number> | undefined;
                    "-moz-outline-radius-bottomleft"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomleftProperty<string | number> | undefined;
                    "-moz-outline-radius-bottomright"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomrightProperty<string | number> | undefined;
                    "-moz-outline-radius-topleft"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusTopleftProperty<string | number> | undefined;
                    "-moz-outline-radius-topright"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusToprightProperty<string | number> | undefined;
                    "-moz-outline-style"?: string | undefined;
                    "-moz-outline-width"?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                    "-moz-text-align-last"?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                    "-moz-text-decoration-color"?: string | undefined;
                    "-moz-text-decoration-line"?: string | undefined;
                    "-moz-text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                    "-moz-user-input"?: import("_csstype@2.6.20@csstype").MozUserInputProperty | undefined;
                    "-ms-ime-mode"?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                    "-ms-scrollbar-track-color"?: string | undefined;
                    "-o-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                    "-o-animation-delay"?: string | undefined;
                    "-o-animation-direction"?: string | undefined;
                    "-o-animation-duration"?: string | undefined;
                    "-o-animation-fill-mode"?: string | undefined;
                    "-o-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                    "-o-animation-name"?: string | undefined;
                    "-o-animation-play-state"?: string | undefined;
                    "-o-animation-timing-function"?: string | undefined;
                    "-o-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                    "-o-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                    "-o-object-fit"?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                    "-o-object-position"?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                    "-o-tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                    "-o-text-overflow"?: string | undefined;
                    "-o-transform"?: string | undefined;
                    "-o-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                    "-o-transition"?: string | undefined;
                    "-o-transition-delay"?: string | undefined;
                    "-o-transition-duration"?: string | undefined;
                    "-o-transition-property"?: string | undefined;
                    "-o-transition-timing-function"?: string | undefined;
                    "-webkit-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                    "-webkit-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                    "-webkit-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-webkit-box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-webkit-box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                    "-webkit-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "-webkit-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                    "-webkit-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                    "-webkit-scroll-snap-points-x"?: string | undefined;
                    "-webkit-scroll-snap-points-y"?: string | undefined;
                    "alignment-baseline"?: import("_csstype@2.6.20@csstype").AlignmentBaselineProperty | undefined;
                    "baseline-shift"?: import("_csstype@2.6.20@csstype").BaselineShiftProperty<string | number> | undefined;
                    "clip-rule"?: import("_csstype@2.6.20@csstype").ClipRuleProperty | undefined;
                    "color-interpolation"?: import("_csstype@2.6.20@csstype").ColorInterpolationProperty | undefined;
                    "color-rendering"?: import("_csstype@2.6.20@csstype").ColorRenderingProperty | undefined;
                    "dominant-baseline"?: import("_csstype@2.6.20@csstype").DominantBaselineProperty | undefined;
                    "fill-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "fill-rule"?: import("_csstype@2.6.20@csstype").FillRuleProperty | undefined;
                    "flood-color"?: string | undefined;
                    "flood-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "glyph-orientation-vertical"?: import("_csstype@2.6.20@csstype").GlyphOrientationVerticalProperty | undefined;
                    "lighting-color"?: string | undefined;
                    "marker-end"?: string | undefined;
                    "marker-mid"?: string | undefined;
                    "marker-start"?: string | undefined;
                    "shape-rendering"?: import("_csstype@2.6.20@csstype").ShapeRenderingProperty | undefined;
                    "stop-color"?: string | undefined;
                    "stop-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "stroke-dasharray"?: import("_csstype@2.6.20@csstype").StrokeDasharrayProperty<string | number> | undefined;
                    "stroke-dashoffset"?: import("_csstype@2.6.20@csstype").StrokeDashoffsetProperty<string | number> | undefined;
                    "stroke-linecap"?: import("_csstype@2.6.20@csstype").StrokeLinecapProperty | undefined;
                    "stroke-linejoin"?: import("_csstype@2.6.20@csstype").StrokeLinejoinProperty | undefined;
                    "stroke-miterlimit"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "stroke-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                    "stroke-width"?: import("_csstype@2.6.20@csstype").StrokeWidthProperty<string | number> | undefined;
                    "text-anchor"?: import("_csstype@2.6.20@csstype").TextAnchorProperty | undefined;
                    "vector-effect"?: import("_csstype@2.6.20@csstype").VectorEffectProperty | undefined;
                } | undefined;
                autoAdjustOverflow?: boolean | {
                    adjustX?: 0 | 1 | undefined;
                    adjustY?: 0 | 1 | undefined;
                } | undefined;
                builtinPlacements?: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements | undefined;
                prefixCls?: string | undefined;
                title?: any;
                children?: unknown[] | undefined;
                trigger?: import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[] | undefined;
                visible?: boolean | undefined;
                defaultVisible?: boolean | undefined;
                placement?: import("ant-design-vue/lib/tooltip").TooltipPlacement | undefined;
                color?: string | undefined;
                transitionName?: string | undefined;
                overlayClassName?: string | undefined;
                openClassName?: string | undefined;
                mouseEnterDelay?: number | undefined;
                mouseLeaveDelay?: number | undefined;
                getPopupContainer?: ((triggerNode: HTMLElement) => HTMLElement) | undefined;
                arrowPointAtCenter?: boolean | undefined;
                destroyTooltipOnHide?: boolean | undefined;
                onVisibleChange?: ((vis: boolean) => void) | undefined;
                'onUpdate:visible'?: ((vis: boolean) => void) | undefined;
            } | undefined;
            filtered?: boolean | undefined;
            filters?: {
                text: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                    [key: string]: any;
                }> | null | undefined)[];
                value: string | number | boolean;
                children?: any[] | undefined;
            }[] | undefined;
            filterDropdown?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined)[] | ((props: import("ant-design-vue/lib/table/interface").FilterDropdownProps<any>) => import("ant-design-vue/lib/_util/type").VueNode);
            filterMultiple?: boolean | undefined;
            filteredValue?: (boolean | import("ant-design-vue/lib/table/interface").Key)[] | null | undefined;
            defaultFilteredValue?: (boolean | import("ant-design-vue/lib/table/interface").Key)[] | null | undefined;
            filterIcon?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined)[] | ((opt: {
                filtered: boolean;
                column: import("ant-design-vue").TableColumnType<any>;
            }) => import("ant-design-vue/lib/_util/type").VueNode);
            filterMode?: "menu" | "tree" | undefined;
            filterSearch?: boolean | undefined;
            onFilter?: ((value: string | number | boolean, record: any) => boolean) | undefined;
            filterDropdownVisible?: boolean | undefined;
            onFilterDropdownVisibleChange?: ((visible: boolean) => void) | undefined;
            responsive?: import("ant-design-vue/lib/_util/responsiveObserve").Breakpoint[] | undefined;
            colSpan?: number | undefined;
            dataIndex?: import("ant-design-vue/lib/vc-table/interface").DataIndex | undefined;
            customRender?: ((opt: {
                value: any;
                text: any;
                record: any;
                index: number;
                renderIndex: number;
                column: import("ant-design-vue/lib/vc-table/interface").ColumnType<any>;
            }) => any) | undefined;
            rowSpan?: number | undefined;
            width?: string | number | undefined;
            minWidth?: number | undefined;
            maxWidth?: number | undefined;
            resizable?: boolean | undefined;
            customCell?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<any> | undefined;
            onCellClick?: ((record: any, e: MouseEvent) => void) | undefined;
            key?: import("ant-design-vue/lib/vc-table/interface").Key | undefined;
            class?: string | undefined;
            className?: string | undefined;
            fixed?: import("ant-design-vue/lib/vc-table/interface").FixedType | undefined;
            customHeaderCell?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<import("ant-design-vue/lib/vc-table/interface").ColumnType<any> | import("ant-design-vue/lib/vc-table/interface").ColumnGroupType<any>> | undefined;
            ellipsis?: boolean | {
                showTitle?: boolean | undefined;
            } | undefined;
            align?: import("ant-design-vue/lib/vc-table/interface").AlignType | undefined;
            customFilterDropdown?: boolean | undefined;
            slots?: {
                filterIcon?: string | undefined;
                filterDropdown?: string | undefined;
                customRender?: string | undefined;
                title?: string | undefined;
            } | undefined;
            __originColumn__?: any;
        })[];
        title?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined) | JSX.Element | ((props: import("ant-design-vue/lib/table/interface").ColumnTitleProps<any>) => import("ant-design-vue/lib/_util/type").VueNode) | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined)[];
        fixed?: import("ant-design-vue/lib/vc-table/interface").FixedType | undefined;
        sorter?: boolean | import("ant-design-vue/lib/table/interface").CompareFn<any> | {
            compare?: import("ant-design-vue/lib/table/interface").CompareFn<any> | undefined;
            multiple?: number | undefined;
        } | undefined;
        sortOrder?: import("ant-design-vue/lib/table/interface").SortOrder | undefined;
        defaultSortOrder?: import("ant-design-vue/lib/table/interface").SortOrder | undefined;
        sortDirections?: import("ant-design-vue/lib/table/interface").SortOrder[] | undefined;
        showSorterTooltip?: boolean | {
            align?: {
                points?: string[] | undefined;
                offset?: number[] | undefined;
                targetOffset?: number[] | undefined;
                overflow?: {
                    adjustX?: number | boolean | undefined;
                    adjustY?: number | boolean | undefined;
                } | undefined;
                useCssRight?: boolean | undefined;
                useCssBottom?: boolean | undefined;
                useCssTransform?: boolean | undefined;
                ignoreShake?: boolean | undefined;
            } | undefined;
            overlayStyle?: {
                [x: `--${string}`]: string | number | undefined;
                accentColor?: string | undefined;
                alignContent?: string | undefined;
                alignItems?: string | undefined;
                alignSelf?: string | undefined;
                alignTracks?: string | undefined;
                animationDelay?: string | undefined;
                animationDirection?: string | undefined;
                animationDuration?: string | undefined;
                animationFillMode?: string | undefined;
                animationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                animationName?: string | undefined;
                animationPlayState?: string | undefined;
                animationTimeline?: string | undefined;
                animationTimingFunction?: string | undefined;
                appearance?: import("_csstype@2.6.20@csstype").AppearanceProperty | undefined;
                aspectRatio?: string | undefined;
                backdropFilter?: string | undefined;
                backfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                backgroundAttachment?: string | undefined;
                backgroundBlendMode?: string | undefined;
                backgroundClip?: string | undefined;
                backgroundColor?: string | undefined;
                backgroundImage?: string | undefined;
                backgroundOrigin?: string | undefined;
                backgroundPositionX?: import("_csstype@2.6.20@csstype").BackgroundPositionXProperty<string | number> | undefined;
                backgroundPositionY?: import("_csstype@2.6.20@csstype").BackgroundPositionYProperty<string | number> | undefined;
                backgroundRepeat?: string | undefined;
                backgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                blockOverflow?: string | undefined;
                blockSize?: import("_csstype@2.6.20@csstype").BlockSizeProperty<string | number> | undefined;
                borderBlockColor?: string | undefined;
                borderBlockEndColor?: string | undefined;
                borderBlockEndStyle?: import("_csstype@2.6.20@csstype").BorderBlockEndStyleProperty | undefined;
                borderBlockEndWidth?: import("_csstype@2.6.20@csstype").BorderBlockEndWidthProperty<string | number> | undefined;
                borderBlockStartColor?: string | undefined;
                borderBlockStartStyle?: import("_csstype@2.6.20@csstype").BorderBlockStartStyleProperty | undefined;
                borderBlockStartWidth?: import("_csstype@2.6.20@csstype").BorderBlockStartWidthProperty<string | number> | undefined;
                borderBlockStyle?: import("_csstype@2.6.20@csstype").BorderBlockStyleProperty | undefined;
                borderBlockWidth?: import("_csstype@2.6.20@csstype").BorderBlockWidthProperty<string | number> | undefined;
                borderBottomColor?: string | undefined;
                borderBottomLeftRadius?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                borderBottomRightRadius?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                borderBottomStyle?: import("_csstype@2.6.20@csstype").BorderBottomStyleProperty | undefined;
                borderBottomWidth?: import("_csstype@2.6.20@csstype").BorderBottomWidthProperty<string | number> | undefined;
                borderCollapse?: import("_csstype@2.6.20@csstype").BorderCollapseProperty | undefined;
                borderEndEndRadius?: import("_csstype@2.6.20@csstype").BorderEndEndRadiusProperty<string | number> | undefined;
                borderEndStartRadius?: import("_csstype@2.6.20@csstype").BorderEndStartRadiusProperty<string | number> | undefined;
                borderImageOutset?: import("_csstype@2.6.20@csstype").BorderImageOutsetProperty<string | number> | undefined;
                borderImageRepeat?: string | undefined;
                borderImageSlice?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                borderImageSource?: string | undefined;
                borderImageWidth?: import("_csstype@2.6.20@csstype").BorderImageWidthProperty<string | number> | undefined;
                borderInlineColor?: string | undefined;
                borderInlineEndColor?: string | undefined;
                borderInlineEndStyle?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                borderInlineEndWidth?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                borderInlineStartColor?: string | undefined;
                borderInlineStartStyle?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                borderInlineStartWidth?: import("_csstype@2.6.20@csstype").BorderInlineStartWidthProperty<string | number> | undefined;
                borderInlineStyle?: import("_csstype@2.6.20@csstype").BorderInlineStyleProperty | undefined;
                borderInlineWidth?: import("_csstype@2.6.20@csstype").BorderInlineWidthProperty<string | number> | undefined;
                borderLeftColor?: string | undefined;
                borderLeftStyle?: import("_csstype@2.6.20@csstype").BorderLeftStyleProperty | undefined;
                borderLeftWidth?: import("_csstype@2.6.20@csstype").BorderLeftWidthProperty<string | number> | undefined;
                borderRightColor?: string | undefined;
                borderRightStyle?: import("_csstype@2.6.20@csstype").BorderRightStyleProperty | undefined;
                borderRightWidth?: import("_csstype@2.6.20@csstype").BorderRightWidthProperty<string | number> | undefined;
                borderSpacing?: import("_csstype@2.6.20@csstype").BorderSpacingProperty<string | number> | undefined;
                borderStartEndRadius?: import("_csstype@2.6.20@csstype").BorderStartEndRadiusProperty<string | number> | undefined;
                borderStartStartRadius?: import("_csstype@2.6.20@csstype").BorderStartStartRadiusProperty<string | number> | undefined;
                borderTopColor?: string | undefined;
                borderTopLeftRadius?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                borderTopRightRadius?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                borderTopStyle?: import("_csstype@2.6.20@csstype").BorderTopStyleProperty | undefined;
                borderTopWidth?: import("_csstype@2.6.20@csstype").BorderTopWidthProperty<string | number> | undefined;
                bottom?: import("_csstype@2.6.20@csstype").BottomProperty<string | number> | undefined;
                boxDecorationBreak?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                boxShadow?: string | undefined;
                boxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                breakAfter?: import("_csstype@2.6.20@csstype").BreakAfterProperty | undefined;
                breakBefore?: import("_csstype@2.6.20@csstype").BreakBeforeProperty | undefined;
                breakInside?: import("_csstype@2.6.20@csstype").BreakInsideProperty | undefined;
                captionSide?: import("_csstype@2.6.20@csstype").CaptionSideProperty | undefined;
                caretColor?: string | undefined;
                clear?: import("_csstype@2.6.20@csstype").ClearProperty | undefined;
                clipPath?: string | undefined;
                color?: string | undefined;
                colorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                colorScheme?: string | undefined;
                columnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                columnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                columnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                columnRuleColor?: string | undefined;
                columnRuleStyle?: string | undefined;
                columnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                columnSpan?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                columnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                contain?: string | undefined;
                content?: string | undefined;
                contentVisibility?: import("_csstype@2.6.20@csstype").ContentVisibilityProperty | undefined;
                counterIncrement?: string | undefined;
                counterReset?: string | undefined;
                counterSet?: string | undefined;
                cursor?: string | undefined;
                direction?: import("_csstype@2.6.20@csstype").DirectionProperty | undefined;
                display?: string | undefined;
                emptyCells?: import("_csstype@2.6.20@csstype").EmptyCellsProperty | undefined;
                filter?: string | undefined;
                flexBasis?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                flexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                flexGrow?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                flexShrink?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                flexWrap?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                float?: import("_csstype@2.6.20@csstype").FloatProperty | undefined;
                fontFamily?: string | undefined;
                fontFeatureSettings?: string | undefined;
                fontKerning?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                fontLanguageOverride?: string | undefined;
                fontOpticalSizing?: import("_csstype@2.6.20@csstype").FontOpticalSizingProperty | undefined;
                fontSize?: import("_csstype@2.6.20@csstype").FontSizeProperty<string | number> | undefined;
                fontSizeAdjust?: import("_csstype@2.6.20@csstype").FontSizeAdjustProperty | undefined;
                fontSmooth?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                fontStretch?: string | undefined;
                fontStyle?: string | undefined;
                fontSynthesis?: string | undefined;
                fontVariant?: string | undefined;
                fontVariantAlternates?: string | undefined;
                fontVariantCaps?: import("_csstype@2.6.20@csstype").FontVariantCapsProperty | undefined;
                fontVariantEastAsian?: string | undefined;
                fontVariantLigatures?: string | undefined;
                fontVariantNumeric?: string | undefined;
                fontVariantPosition?: import("_csstype@2.6.20@csstype").FontVariantPositionProperty | undefined;
                fontVariationSettings?: string | undefined;
                fontWeight?: import("_csstype@2.6.20@csstype").FontWeightProperty | undefined;
                forcedColorAdjust?: import("_csstype@2.6.20@csstype").ForcedColorAdjustProperty | undefined;
                gridAutoColumns?: import("_csstype@2.6.20@csstype").GridAutoColumnsProperty<string | number> | undefined;
                gridAutoFlow?: string | undefined;
                gridAutoRows?: import("_csstype@2.6.20@csstype").GridAutoRowsProperty<string | number> | undefined;
                gridColumnEnd?: import("_csstype@2.6.20@csstype").GridColumnEndProperty | undefined;
                gridColumnStart?: import("_csstype@2.6.20@csstype").GridColumnStartProperty | undefined;
                gridRowEnd?: import("_csstype@2.6.20@csstype").GridRowEndProperty | undefined;
                gridRowStart?: import("_csstype@2.6.20@csstype").GridRowStartProperty | undefined;
                gridTemplateAreas?: string | undefined;
                gridTemplateColumns?: import("_csstype@2.6.20@csstype").GridTemplateColumnsProperty<string | number> | undefined;
                gridTemplateRows?: import("_csstype@2.6.20@csstype").GridTemplateRowsProperty<string | number> | undefined;
                hangingPunctuation?: string | undefined;
                height?: import("_csstype@2.6.20@csstype").HeightProperty<string | number> | undefined;
                hyphenateCharacter?: string | undefined;
                hyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                imageOrientation?: string | undefined;
                imageRendering?: import("_csstype@2.6.20@csstype").ImageRenderingProperty | undefined;
                imageResolution?: string | undefined;
                initialLetter?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                inlineSize?: import("_csstype@2.6.20@csstype").InlineSizeProperty<string | number> | undefined;
                inputSecurity?: import("_csstype@2.6.20@csstype").InputSecurityProperty | undefined;
                inset?: import("_csstype@2.6.20@csstype").InsetProperty<string | number> | undefined;
                insetBlock?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                insetBlockEnd?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                insetBlockStart?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                insetInline?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                insetInlineEnd?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                insetInlineStart?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                isolation?: import("_csstype@2.6.20@csstype").IsolationProperty | undefined;
                justifyContent?: string | undefined;
                justifyItems?: string | undefined;
                justifySelf?: string | undefined;
                justifyTracks?: string | undefined;
                left?: import("_csstype@2.6.20@csstype").LeftProperty<string | number> | undefined;
                letterSpacing?: import("_csstype@2.6.20@csstype").LetterSpacingProperty<string | number> | undefined;
                lineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                lineHeight?: import("_csstype@2.6.20@csstype").LineHeightProperty<string | number> | undefined;
                lineHeightStep?: import("_csstype@2.6.20@csstype").LineHeightStepProperty<string | number> | undefined;
                listStyleImage?: string | undefined;
                listStylePosition?: import("_csstype@2.6.20@csstype").ListStylePositionProperty | undefined;
                listStyleType?: string | undefined;
                marginBlock?: import("_csstype@2.6.20@csstype").MarginBlockProperty<string | number> | undefined;
                marginBlockEnd?: import("_csstype@2.6.20@csstype").MarginBlockEndProperty<string | number> | undefined;
                marginBlockStart?: import("_csstype@2.6.20@csstype").MarginBlockStartProperty<string | number> | undefined;
                marginBottom?: import("_csstype@2.6.20@csstype").MarginBottomProperty<string | number> | undefined;
                marginInline?: import("_csstype@2.6.20@csstype").MarginInlineProperty<string | number> | undefined;
                marginInlineEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                marginInlineStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                marginLeft?: import("_csstype@2.6.20@csstype").MarginLeftProperty<string | number> | undefined;
                marginRight?: import("_csstype@2.6.20@csstype").MarginRightProperty<string | number> | undefined;
                marginTop?: import("_csstype@2.6.20@csstype").MarginTopProperty<string | number> | undefined;
                maskBorderMode?: import("_csstype@2.6.20@csstype").MaskBorderModeProperty | undefined;
                maskBorderOutset?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                maskBorderRepeat?: string | undefined;
                maskBorderSlice?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                maskBorderSource?: string | undefined;
                maskBorderWidth?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                maskClip?: string | undefined;
                maskComposite?: string | undefined;
                maskImage?: string | undefined;
                maskMode?: string | undefined;
                maskOrigin?: string | undefined;
                maskPosition?: import("_csstype@2.6.20@csstype").MaskPositionProperty<string | number> | undefined;
                maskRepeat?: string | undefined;
                maskSize?: import("_csstype@2.6.20@csstype").MaskSizeProperty<string | number> | undefined;
                maskType?: import("_csstype@2.6.20@csstype").MaskTypeProperty | undefined;
                mathStyle?: import("_csstype@2.6.20@csstype").MathStyleProperty | undefined;
                maxBlockSize?: import("_csstype@2.6.20@csstype").MaxBlockSizeProperty<string | number> | undefined;
                maxHeight?: import("_csstype@2.6.20@csstype").MaxHeightProperty<string | number> | undefined;
                maxInlineSize?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                maxLines?: import("_csstype@2.6.20@csstype").MaxLinesProperty | undefined;
                maxWidth?: import("_csstype@2.6.20@csstype").MaxWidthProperty<string | number> | undefined;
                minBlockSize?: import("_csstype@2.6.20@csstype").MinBlockSizeProperty<string | number> | undefined;
                minHeight?: import("_csstype@2.6.20@csstype").MinHeightProperty<string | number> | undefined;
                minInlineSize?: import("_csstype@2.6.20@csstype").MinInlineSizeProperty<string | number> | undefined;
                minWidth?: import("_csstype@2.6.20@csstype").MinWidthProperty<string | number> | undefined;
                mixBlendMode?: import("_csstype@2.6.20@csstype").MixBlendModeProperty | undefined;
                motionDistance?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                motionPath?: string | undefined;
                motionRotation?: string | undefined;
                objectFit?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                objectPosition?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                offsetAnchor?: import("_csstype@2.6.20@csstype").OffsetAnchorProperty<string | number> | undefined;
                offsetDistance?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                offsetPath?: string | undefined;
                offsetRotate?: string | undefined;
                offsetRotation?: string | undefined;
                opacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                order?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                orphans?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                outlineColor?: string | undefined;
                outlineOffset?: import("_csstype@2.6.20@csstype").OutlineOffsetProperty<string | number> | undefined;
                outlineStyle?: string | undefined;
                outlineWidth?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                overflowAnchor?: import("_csstype@2.6.20@csstype").OverflowAnchorProperty | undefined;
                overflowBlock?: import("_csstype@2.6.20@csstype").OverflowBlockProperty | undefined;
                overflowClipBox?: import("_csstype@2.6.20@csstype").OverflowClipBoxProperty | undefined;
                overflowClipMargin?: import("_csstype@2.6.20@csstype").OverflowClipMarginProperty<string | number> | undefined;
                overflowInline?: import("_csstype@2.6.20@csstype").OverflowInlineProperty | undefined;
                overflowWrap?: import("_csstype@2.6.20@csstype").OverflowWrapProperty | undefined;
                overflowX?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                overflowY?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                overscrollBehaviorBlock?: import("_csstype@2.6.20@csstype").OverscrollBehaviorBlockProperty | undefined;
                overscrollBehaviorInline?: import("_csstype@2.6.20@csstype").OverscrollBehaviorInlineProperty | undefined;
                overscrollBehaviorX?: import("_csstype@2.6.20@csstype").OverscrollBehaviorXProperty | undefined;
                overscrollBehaviorY?: import("_csstype@2.6.20@csstype").OverscrollBehaviorYProperty | undefined;
                paddingBlock?: import("_csstype@2.6.20@csstype").PaddingBlockProperty<string | number> | undefined;
                paddingBlockEnd?: import("_csstype@2.6.20@csstype").PaddingBlockEndProperty<string | number> | undefined;
                paddingBlockStart?: import("_csstype@2.6.20@csstype").PaddingBlockStartProperty<string | number> | undefined;
                paddingBottom?: import("_csstype@2.6.20@csstype").PaddingBottomProperty<string | number> | undefined;
                paddingInline?: import("_csstype@2.6.20@csstype").PaddingInlineProperty<string | number> | undefined;
                paddingInlineEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                paddingInlineStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                paddingLeft?: import("_csstype@2.6.20@csstype").PaddingLeftProperty<string | number> | undefined;
                paddingRight?: import("_csstype@2.6.20@csstype").PaddingRightProperty<string | number> | undefined;
                paddingTop?: import("_csstype@2.6.20@csstype").PaddingTopProperty<string | number> | undefined;
                pageBreakAfter?: import("_csstype@2.6.20@csstype").PageBreakAfterProperty | undefined;
                pageBreakBefore?: import("_csstype@2.6.20@csstype").PageBreakBeforeProperty | undefined;
                pageBreakInside?: import("_csstype@2.6.20@csstype").PageBreakInsideProperty | undefined;
                paintOrder?: string | undefined;
                perspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                perspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                placeContent?: string | undefined;
                pointerEvents?: import("_csstype@2.6.20@csstype").PointerEventsProperty | undefined;
                position?: import("_csstype@2.6.20@csstype").PositionProperty | undefined;
                printColorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                quotes?: string | undefined;
                resize?: import("_csstype@2.6.20@csstype").ResizeProperty | undefined;
                right?: import("_csstype@2.6.20@csstype").RightProperty<string | number> | undefined;
                rotate?: string | undefined;
                rowGap?: import("_csstype@2.6.20@csstype").RowGapProperty<string | number> | undefined;
                rubyAlign?: import("_csstype@2.6.20@csstype").RubyAlignProperty | undefined;
                rubyMerge?: import("_csstype@2.6.20@csstype").RubyMergeProperty | undefined;
                rubyPosition?: string | undefined;
                scale?: import("_csstype@2.6.20@csstype").ScaleProperty | undefined;
                scrollBehavior?: import("_csstype@2.6.20@csstype").ScrollBehaviorProperty | undefined;
                scrollMargin?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                scrollMarginBlock?: import("_csstype@2.6.20@csstype").ScrollMarginBlockProperty<string | number> | undefined;
                scrollMarginBlockEnd?: import("_csstype@2.6.20@csstype").ScrollMarginBlockEndProperty<string | number> | undefined;
                scrollMarginBlockStart?: import("_csstype@2.6.20@csstype").ScrollMarginBlockStartProperty<string | number> | undefined;
                scrollMarginBottom?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                scrollMarginInline?: import("_csstype@2.6.20@csstype").ScrollMarginInlineProperty<string | number> | undefined;
                scrollMarginInlineEnd?: import("_csstype@2.6.20@csstype").ScrollMarginInlineEndProperty<string | number> | undefined;
                scrollMarginInlineStart?: import("_csstype@2.6.20@csstype").ScrollMarginInlineStartProperty<string | number> | undefined;
                scrollMarginLeft?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                scrollMarginRight?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                scrollMarginTop?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                scrollPadding?: import("_csstype@2.6.20@csstype").ScrollPaddingProperty<string | number> | undefined;
                scrollPaddingBlock?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockProperty<string | number> | undefined;
                scrollPaddingBlockEnd?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockEndProperty<string | number> | undefined;
                scrollPaddingBlockStart?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockStartProperty<string | number> | undefined;
                scrollPaddingBottom?: import("_csstype@2.6.20@csstype").ScrollPaddingBottomProperty<string | number> | undefined;
                scrollPaddingInline?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineProperty<string | number> | undefined;
                scrollPaddingInlineEnd?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineEndProperty<string | number> | undefined;
                scrollPaddingInlineStart?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineStartProperty<string | number> | undefined;
                scrollPaddingLeft?: import("_csstype@2.6.20@csstype").ScrollPaddingLeftProperty<string | number> | undefined;
                scrollPaddingRight?: import("_csstype@2.6.20@csstype").ScrollPaddingRightProperty<string | number> | undefined;
                scrollPaddingTop?: import("_csstype@2.6.20@csstype").ScrollPaddingTopProperty<string | number> | undefined;
                scrollSnapAlign?: string | undefined;
                scrollSnapMargin?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                scrollSnapMarginBottom?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                scrollSnapMarginLeft?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                scrollSnapMarginRight?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                scrollSnapMarginTop?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                scrollSnapStop?: import("_csstype@2.6.20@csstype").ScrollSnapStopProperty | undefined;
                scrollSnapType?: string | undefined;
                scrollbarColor?: string | undefined;
                scrollbarGutter?: string | undefined;
                scrollbarWidth?: import("_csstype@2.6.20@csstype").ScrollbarWidthProperty | undefined;
                shapeImageThreshold?: import("_csstype@2.6.20@csstype").ShapeImageThresholdProperty | undefined;
                shapeMargin?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                shapeOutside?: string | undefined;
                tabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                tableLayout?: import("_csstype@2.6.20@csstype").TableLayoutProperty | undefined;
                textAlign?: import("_csstype@2.6.20@csstype").TextAlignProperty | undefined;
                textAlignLast?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                textCombineUpright?: string | undefined;
                textDecorationColor?: string | undefined;
                textDecorationLine?: string | undefined;
                textDecorationSkip?: string | undefined;
                textDecorationSkipInk?: import("_csstype@2.6.20@csstype").TextDecorationSkipInkProperty | undefined;
                textDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                textDecorationThickness?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                textDecorationWidth?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                textEmphasisColor?: string | undefined;
                textEmphasisPosition?: string | undefined;
                textEmphasisStyle?: string | undefined;
                textIndent?: import("_csstype@2.6.20@csstype").TextIndentProperty<string | number> | undefined;
                textJustify?: import("_csstype@2.6.20@csstype").TextJustifyProperty | undefined;
                textOrientation?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                textOverflow?: string | undefined;
                textRendering?: import("_csstype@2.6.20@csstype").TextRenderingProperty | undefined;
                textShadow?: string | undefined;
                textSizeAdjust?: string | undefined;
                textTransform?: import("_csstype@2.6.20@csstype").TextTransformProperty | undefined;
                textUnderlineOffset?: import("_csstype@2.6.20@csstype").TextUnderlineOffsetProperty<string | number> | undefined;
                textUnderlinePosition?: string | undefined;
                top?: import("_csstype@2.6.20@csstype").TopProperty<string | number> | undefined;
                touchAction?: string | undefined;
                transform?: string | undefined;
                transformBox?: import("_csstype@2.6.20@csstype").TransformBoxProperty | undefined;
                transformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                transformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                transitionDelay?: string | undefined;
                transitionDuration?: string | undefined;
                transitionProperty?: string | undefined;
                transitionTimingFunction?: string | undefined;
                translate?: import("_csstype@2.6.20@csstype").TranslateProperty<string | number> | undefined;
                unicodeBidi?: import("_csstype@2.6.20@csstype").UnicodeBidiProperty | undefined;
                userSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                verticalAlign?: import("_csstype@2.6.20@csstype").VerticalAlignProperty<string | number> | undefined;
                visibility?: import("_csstype@2.6.20@csstype").VisibilityProperty | undefined;
                whiteSpace?: import("_csstype@2.6.20@csstype").WhiteSpaceProperty | undefined;
                widows?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                width?: import("_csstype@2.6.20@csstype").WidthProperty<string | number> | undefined;
                willChange?: string | undefined;
                wordBreak?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                wordSpacing?: import("_csstype@2.6.20@csstype").WordSpacingProperty<string | number> | undefined;
                wordWrap?: import("_csstype@2.6.20@csstype").WordWrapProperty | undefined;
                writingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                zIndex?: import("_csstype@2.6.20@csstype").ZIndexProperty | undefined;
                zoom?: import("_csstype@2.6.20@csstype").ZoomProperty | undefined;
                all?: import("_csstype@2.6.20@csstype").Globals | undefined;
                animation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                background?: import("_csstype@2.6.20@csstype").BackgroundProperty<string | number> | undefined;
                backgroundPosition?: import("_csstype@2.6.20@csstype").BackgroundPositionProperty<string | number> | undefined;
                border?: import("_csstype@2.6.20@csstype").BorderProperty<string | number> | undefined;
                borderBlock?: import("_csstype@2.6.20@csstype").BorderBlockProperty<string | number> | undefined;
                borderBlockEnd?: import("_csstype@2.6.20@csstype").BorderBlockEndProperty<string | number> | undefined;
                borderBlockStart?: import("_csstype@2.6.20@csstype").BorderBlockStartProperty<string | number> | undefined;
                borderBottom?: import("_csstype@2.6.20@csstype").BorderBottomProperty<string | number> | undefined;
                borderColor?: string | undefined;
                borderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                borderInline?: import("_csstype@2.6.20@csstype").BorderInlineProperty<string | number> | undefined;
                borderInlineEnd?: import("_csstype@2.6.20@csstype").BorderInlineEndProperty<string | number> | undefined;
                borderInlineStart?: import("_csstype@2.6.20@csstype").BorderInlineStartProperty<string | number> | undefined;
                borderLeft?: import("_csstype@2.6.20@csstype").BorderLeftProperty<string | number> | undefined;
                borderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                borderRight?: import("_csstype@2.6.20@csstype").BorderRightProperty<string | number> | undefined;
                borderStyle?: string | undefined;
                borderTop?: import("_csstype@2.6.20@csstype").BorderTopProperty<string | number> | undefined;
                borderWidth?: import("_csstype@2.6.20@csstype").BorderWidthProperty<string | number> | undefined;
                columnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                columns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                flex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                flexFlow?: string | undefined;
                font?: string | undefined;
                gap?: import("_csstype@2.6.20@csstype").GapProperty<string | number> | undefined;
                grid?: string | undefined;
                gridArea?: import("_csstype@2.6.20@csstype").GridAreaProperty | undefined;
                gridColumn?: import("_csstype@2.6.20@csstype").GridColumnProperty | undefined;
                gridRow?: import("_csstype@2.6.20@csstype").GridRowProperty | undefined;
                gridTemplate?: string | undefined;
                lineClamp?: import("_csstype@2.6.20@csstype").LineClampProperty | undefined;
                listStyle?: string | undefined;
                margin?: import("_csstype@2.6.20@csstype").MarginProperty<string | number> | undefined;
                mask?: import("_csstype@2.6.20@csstype").MaskProperty<string | number> | undefined;
                maskBorder?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                motion?: import("_csstype@2.6.20@csstype").OffsetProperty<string | number> | undefined;
                offset?: import("_csstype@2.6.20@csstype").OffsetProperty<string | number> | undefined;
                outline?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                overflow?: string | undefined;
                overscrollBehavior?: string | undefined;
                padding?: import("_csstype@2.6.20@csstype").PaddingProperty<string | number> | undefined;
                placeItems?: string | undefined;
                placeSelf?: string | undefined;
                textDecoration?: import("_csstype@2.6.20@csstype").TextDecorationProperty<string | number> | undefined;
                textEmphasis?: string | undefined;
                transition?: string | undefined;
                MozAnimationDelay?: string | undefined;
                MozAnimationDirection?: string | undefined;
                MozAnimationDuration?: string | undefined;
                MozAnimationFillMode?: string | undefined;
                MozAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                MozAnimationName?: string | undefined;
                MozAnimationPlayState?: string | undefined;
                MozAnimationTimingFunction?: string | undefined;
                MozAppearance?: import("_csstype@2.6.20@csstype").MozAppearanceProperty | undefined;
                MozBackfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                MozBorderBottomColors?: string | undefined;
                MozBorderEndColor?: string | undefined;
                MozBorderEndStyle?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                MozBorderEndWidth?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                MozBorderLeftColors?: string | undefined;
                MozBorderRightColors?: string | undefined;
                MozBorderStartColor?: string | undefined;
                MozBorderStartStyle?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                MozBorderTopColors?: string | undefined;
                MozBoxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                MozColumnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                MozColumnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                MozColumnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                MozColumnRuleColor?: string | undefined;
                MozColumnRuleStyle?: string | undefined;
                MozColumnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                MozColumnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                MozContextProperties?: string | undefined;
                MozFontFeatureSettings?: string | undefined;
                MozFontLanguageOverride?: string | undefined;
                MozHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                MozImageRegion?: string | undefined;
                MozMarginEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                MozMarginStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                MozOrient?: import("_csstype@2.6.20@csstype").MozOrientProperty | undefined;
                MozOsxFontSmoothing?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                MozPaddingEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                MozPaddingStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                MozPerspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                MozPerspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                MozStackSizing?: import("_csstype@2.6.20@csstype").MozStackSizingProperty | undefined;
                MozTabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                MozTextBlink?: import("_csstype@2.6.20@csstype").MozTextBlinkProperty | undefined;
                MozTextSizeAdjust?: string | undefined;
                MozTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                MozTransformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                MozTransitionDelay?: string | undefined;
                MozTransitionDuration?: string | undefined;
                MozTransitionProperty?: string | undefined;
                MozTransitionTimingFunction?: string | undefined;
                MozUserFocus?: import("_csstype@2.6.20@csstype").MozUserFocusProperty | undefined;
                MozUserModify?: import("_csstype@2.6.20@csstype").MozUserModifyProperty | undefined;
                MozUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                MozWindowDragging?: import("_csstype@2.6.20@csstype").MozWindowDraggingProperty | undefined;
                MozWindowShadow?: import("_csstype@2.6.20@csstype").MozWindowShadowProperty | undefined;
                msAccelerator?: import("_csstype@2.6.20@csstype").MsAcceleratorProperty | undefined;
                msAlignSelf?: string | undefined;
                msBlockProgression?: import("_csstype@2.6.20@csstype").MsBlockProgressionProperty | undefined;
                msContentZoomChaining?: import("_csstype@2.6.20@csstype").MsContentZoomChainingProperty | undefined;
                msContentZoomLimitMax?: string | undefined;
                msContentZoomLimitMin?: string | undefined;
                msContentZoomSnapPoints?: string | undefined;
                msContentZoomSnapType?: import("_csstype@2.6.20@csstype").MsContentZoomSnapTypeProperty | undefined;
                msContentZooming?: import("_csstype@2.6.20@csstype").MsContentZoomingProperty | undefined;
                msFilter?: string | undefined;
                msFlexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                msFlexPositive?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                msFlowFrom?: string | undefined;
                msFlowInto?: string | undefined;
                msGridColumns?: import("_csstype@2.6.20@csstype").MsGridColumnsProperty<string | number> | undefined;
                msGridRows?: import("_csstype@2.6.20@csstype").MsGridRowsProperty<string | number> | undefined;
                msHighContrastAdjust?: import("_csstype@2.6.20@csstype").MsHighContrastAdjustProperty | undefined;
                msHyphenateLimitChars?: import("_csstype@2.6.20@csstype").MsHyphenateLimitCharsProperty | undefined;
                msHyphenateLimitLines?: import("_csstype@2.6.20@csstype").MsHyphenateLimitLinesProperty | undefined;
                msHyphenateLimitZone?: import("_csstype@2.6.20@csstype").MsHyphenateLimitZoneProperty<string | number> | undefined;
                msHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                msImeAlign?: import("_csstype@2.6.20@csstype").MsImeAlignProperty | undefined;
                msJustifySelf?: string | undefined;
                msLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                msOrder?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                msOverflowStyle?: import("_csstype@2.6.20@csstype").MsOverflowStyleProperty | undefined;
                msOverflowX?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                msOverflowY?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                msScrollChaining?: import("_csstype@2.6.20@csstype").MsScrollChainingProperty | undefined;
                msScrollLimitXMax?: import("_csstype@2.6.20@csstype").MsScrollLimitXMaxProperty<string | number> | undefined;
                msScrollLimitXMin?: import("_csstype@2.6.20@csstype").MsScrollLimitXMinProperty<string | number> | undefined;
                msScrollLimitYMax?: import("_csstype@2.6.20@csstype").MsScrollLimitYMaxProperty<string | number> | undefined;
                msScrollLimitYMin?: import("_csstype@2.6.20@csstype").MsScrollLimitYMinProperty<string | number> | undefined;
                msScrollRails?: import("_csstype@2.6.20@csstype").MsScrollRailsProperty | undefined;
                msScrollSnapPointsX?: string | undefined;
                msScrollSnapPointsY?: string | undefined;
                msScrollSnapType?: import("_csstype@2.6.20@csstype").MsScrollSnapTypeProperty | undefined;
                msScrollTranslation?: import("_csstype@2.6.20@csstype").MsScrollTranslationProperty | undefined;
                msScrollbar3dlightColor?: string | undefined;
                msScrollbarArrowColor?: string | undefined;
                msScrollbarBaseColor?: string | undefined;
                msScrollbarDarkshadowColor?: string | undefined;
                msScrollbarFaceColor?: string | undefined;
                msScrollbarHighlightColor?: string | undefined;
                msScrollbarShadowColor?: string | undefined;
                msTextAutospace?: import("_csstype@2.6.20@csstype").MsTextAutospaceProperty | undefined;
                msTextCombineHorizontal?: string | undefined;
                msTextOverflow?: string | undefined;
                msTouchAction?: string | undefined;
                msTouchSelect?: import("_csstype@2.6.20@csstype").MsTouchSelectProperty | undefined;
                msTransform?: string | undefined;
                msTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                msTransitionDelay?: string | undefined;
                msTransitionDuration?: string | undefined;
                msTransitionProperty?: string | undefined;
                msTransitionTimingFunction?: string | undefined;
                msUserSelect?: import("_csstype@2.6.20@csstype").MsUserSelectProperty | undefined;
                msWordBreak?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                msWrapFlow?: import("_csstype@2.6.20@csstype").MsWrapFlowProperty | undefined;
                msWrapMargin?: import("_csstype@2.6.20@csstype").MsWrapMarginProperty<string | number> | undefined;
                msWrapThrough?: import("_csstype@2.6.20@csstype").MsWrapThroughProperty | undefined;
                msWritingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                WebkitAlignContent?: string | undefined;
                WebkitAlignItems?: string | undefined;
                WebkitAlignSelf?: string | undefined;
                WebkitAnimationDelay?: string | undefined;
                WebkitAnimationDirection?: string | undefined;
                WebkitAnimationDuration?: string | undefined;
                WebkitAnimationFillMode?: string | undefined;
                WebkitAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                WebkitAnimationName?: string | undefined;
                WebkitAnimationPlayState?: string | undefined;
                WebkitAnimationTimingFunction?: string | undefined;
                WebkitAppearance?: import("_csstype@2.6.20@csstype").WebkitAppearanceProperty | undefined;
                WebkitBackdropFilter?: string | undefined;
                WebkitBackfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                WebkitBackgroundClip?: string | undefined;
                WebkitBackgroundOrigin?: string | undefined;
                WebkitBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                WebkitBorderBeforeColor?: string | undefined;
                WebkitBorderBeforeStyle?: string | undefined;
                WebkitBorderBeforeWidth?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeWidthProperty<string | number> | undefined;
                WebkitBorderBottomLeftRadius?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                WebkitBorderBottomRightRadius?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                WebkitBorderImageSlice?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                WebkitBorderTopLeftRadius?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                WebkitBorderTopRightRadius?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                WebkitBoxDecorationBreak?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                WebkitBoxReflect?: import("_csstype@2.6.20@csstype").WebkitBoxReflectProperty<string | number> | undefined;
                WebkitBoxShadow?: string | undefined;
                WebkitBoxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                WebkitClipPath?: string | undefined;
                WebkitColumnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                WebkitColumnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                WebkitColumnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                WebkitColumnRuleColor?: string | undefined;
                WebkitColumnRuleStyle?: string | undefined;
                WebkitColumnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                WebkitColumnSpan?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                WebkitColumnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                WebkitFilter?: string | undefined;
                WebkitFlexBasis?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                WebkitFlexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                WebkitFlexGrow?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitFlexShrink?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitFlexWrap?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                WebkitFontFeatureSettings?: string | undefined;
                WebkitFontKerning?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                WebkitFontSmoothing?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                WebkitFontVariantLigatures?: string | undefined;
                WebkitHyphenateCharacter?: string | undefined;
                WebkitHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                WebkitInitialLetter?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                WebkitJustifyContent?: string | undefined;
                WebkitLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                WebkitLineClamp?: import("_csstype@2.6.20@csstype").WebkitLineClampProperty | undefined;
                WebkitMarginEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                WebkitMarginStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                WebkitMaskAttachment?: string | undefined;
                WebkitMaskBoxImageOutset?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                WebkitMaskBoxImageRepeat?: string | undefined;
                WebkitMaskBoxImageSlice?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                WebkitMaskBoxImageSource?: string | undefined;
                WebkitMaskBoxImageWidth?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                WebkitMaskClip?: string | undefined;
                WebkitMaskComposite?: string | undefined;
                WebkitMaskImage?: string | undefined;
                WebkitMaskOrigin?: string | undefined;
                WebkitMaskPosition?: import("_csstype@2.6.20@csstype").WebkitMaskPositionProperty<string | number> | undefined;
                WebkitMaskPositionX?: import("_csstype@2.6.20@csstype").WebkitMaskPositionXProperty<string | number> | undefined;
                WebkitMaskPositionY?: import("_csstype@2.6.20@csstype").WebkitMaskPositionYProperty<string | number> | undefined;
                WebkitMaskRepeat?: string | undefined;
                WebkitMaskRepeatX?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatXProperty | undefined;
                WebkitMaskRepeatY?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatYProperty | undefined;
                WebkitMaskSize?: import("_csstype@2.6.20@csstype").WebkitMaskSizeProperty<string | number> | undefined;
                WebkitMaxInlineSize?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                WebkitOrder?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitOverflowScrolling?: import("_csstype@2.6.20@csstype").WebkitOverflowScrollingProperty | undefined;
                WebkitPaddingEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                WebkitPaddingStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                WebkitPerspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                WebkitPerspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                WebkitPrintColorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                WebkitRubyPosition?: string | undefined;
                WebkitScrollSnapType?: string | undefined;
                WebkitShapeMargin?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                WebkitTapHighlightColor?: string | undefined;
                WebkitTextCombine?: string | undefined;
                WebkitTextDecorationColor?: string | undefined;
                WebkitTextDecorationLine?: string | undefined;
                WebkitTextDecorationSkip?: string | undefined;
                WebkitTextDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                WebkitTextEmphasisColor?: string | undefined;
                WebkitTextEmphasisPosition?: string | undefined;
                WebkitTextEmphasisStyle?: string | undefined;
                WebkitTextFillColor?: string | undefined;
                WebkitTextOrientation?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                WebkitTextSizeAdjust?: string | undefined;
                WebkitTextStrokeColor?: string | undefined;
                WebkitTextStrokeWidth?: import("_csstype@2.6.20@csstype").WebkitTextStrokeWidthProperty<string | number> | undefined;
                WebkitTextUnderlinePosition?: string | undefined;
                WebkitTouchCallout?: import("_csstype@2.6.20@csstype").WebkitTouchCalloutProperty | undefined;
                WebkitTransform?: string | undefined;
                WebkitTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                WebkitTransformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                WebkitTransitionDelay?: string | undefined;
                WebkitTransitionDuration?: string | undefined;
                WebkitTransitionProperty?: string | undefined;
                WebkitTransitionTimingFunction?: string | undefined;
                WebkitUserModify?: import("_csstype@2.6.20@csstype").WebkitUserModifyProperty | undefined;
                WebkitUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                WebkitWritingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                MozAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                MozBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                MozColumnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                MozColumns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                MozTransition?: string | undefined;
                msContentZoomLimit?: string | undefined;
                msContentZoomSnap?: string | undefined;
                msFlex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                msScrollLimit?: string | undefined;
                msScrollSnapX?: string | undefined;
                msScrollSnapY?: string | undefined;
                msTransition?: string | undefined;
                WebkitAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                WebkitBorderBefore?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeProperty<string | number> | undefined;
                WebkitBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                WebkitBorderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                WebkitColumnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                WebkitColumns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                WebkitFlex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                WebkitFlexFlow?: string | undefined;
                WebkitMask?: import("_csstype@2.6.20@csstype").WebkitMaskProperty<string | number> | undefined;
                WebkitMaskBoxImage?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                WebkitTextEmphasis?: string | undefined;
                WebkitTextStroke?: import("_csstype@2.6.20@csstype").WebkitTextStrokeProperty<string | number> | undefined;
                WebkitTransition?: string | undefined;
                azimuth?: string | undefined;
                boxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                boxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                boxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                boxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                boxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                boxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                boxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                boxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                clip?: string | undefined;
                gridColumnGap?: import("_csstype@2.6.20@csstype").GridColumnGapProperty<string | number> | undefined;
                gridGap?: import("_csstype@2.6.20@csstype").GridGapProperty<string | number> | undefined;
                gridRowGap?: import("_csstype@2.6.20@csstype").GridRowGapProperty<string | number> | undefined;
                imeMode?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                offsetBlock?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                offsetBlockEnd?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                offsetBlockStart?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                offsetInline?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                offsetInlineEnd?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                offsetInlineStart?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                scrollSnapCoordinate?: import("_csstype@2.6.20@csstype").ScrollSnapCoordinateProperty<string | number> | undefined;
                scrollSnapDestination?: import("_csstype@2.6.20@csstype").ScrollSnapDestinationProperty<string | number> | undefined;
                scrollSnapPointsX?: string | undefined;
                scrollSnapPointsY?: string | undefined;
                scrollSnapTypeX?: import("_csstype@2.6.20@csstype").ScrollSnapTypeXProperty | undefined;
                scrollSnapTypeY?: import("_csstype@2.6.20@csstype").ScrollSnapTypeYProperty | undefined;
                scrollbarTrackColor?: string | undefined;
                KhtmlBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                KhtmlBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                KhtmlBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                KhtmlBoxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                KhtmlBoxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                KhtmlBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                KhtmlBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                KhtmlBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                KhtmlLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                KhtmlOpacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                KhtmlUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                MozBackgroundClip?: string | undefined;
                MozBackgroundInlinePolicy?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                MozBackgroundOrigin?: string | undefined;
                MozBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                MozBinding?: string | undefined;
                MozBorderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                MozBorderRadiusBottomleft?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                MozBorderRadiusBottomright?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                MozBorderRadiusTopleft?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                MozBorderRadiusTopright?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                MozBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                MozBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                MozBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                MozBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                MozBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                MozBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                MozBoxShadow?: string | undefined;
                MozFloatEdge?: import("_csstype@2.6.20@csstype").MozFloatEdgeProperty | undefined;
                MozForceBrokenImageIcon?: import("_csstype@2.6.20@csstype").MozForceBrokenImageIconProperty | undefined;
                MozOpacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                MozOutline?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                MozOutlineColor?: string | undefined;
                MozOutlineRadius?: import("_csstype@2.6.20@csstype").MozOutlineRadiusProperty<string | number> | undefined;
                MozOutlineRadiusBottomleft?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomleftProperty<string | number> | undefined;
                MozOutlineRadiusBottomright?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomrightProperty<string | number> | undefined;
                MozOutlineRadiusTopleft?: import("_csstype@2.6.20@csstype").MozOutlineRadiusTopleftProperty<string | number> | undefined;
                MozOutlineRadiusTopright?: import("_csstype@2.6.20@csstype").MozOutlineRadiusToprightProperty<string | number> | undefined;
                MozOutlineStyle?: string | undefined;
                MozOutlineWidth?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                MozTextAlignLast?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                MozTextDecorationColor?: string | undefined;
                MozTextDecorationLine?: string | undefined;
                MozTextDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                MozUserInput?: import("_csstype@2.6.20@csstype").MozUserInputProperty | undefined;
                msImeMode?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                msScrollbarTrackColor?: string | undefined;
                OAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                OAnimationDelay?: string | undefined;
                OAnimationDirection?: string | undefined;
                OAnimationDuration?: string | undefined;
                OAnimationFillMode?: string | undefined;
                OAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                OAnimationName?: string | undefined;
                OAnimationPlayState?: string | undefined;
                OAnimationTimingFunction?: string | undefined;
                OBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                OBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                OObjectFit?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                OObjectPosition?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                OTabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                OTextOverflow?: string | undefined;
                OTransform?: string | undefined;
                OTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                OTransition?: string | undefined;
                OTransitionDelay?: string | undefined;
                OTransitionDuration?: string | undefined;
                OTransitionProperty?: string | undefined;
                OTransitionTimingFunction?: string | undefined;
                WebkitBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                WebkitBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                WebkitBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitBoxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitBoxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                WebkitBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                WebkitBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                WebkitScrollSnapPointsX?: string | undefined;
                WebkitScrollSnapPointsY?: string | undefined;
                alignmentBaseline?: import("_csstype@2.6.20@csstype").AlignmentBaselineProperty | undefined;
                baselineShift?: import("_csstype@2.6.20@csstype").BaselineShiftProperty<string | number> | undefined;
                clipRule?: import("_csstype@2.6.20@csstype").ClipRuleProperty | undefined;
                colorInterpolation?: import("_csstype@2.6.20@csstype").ColorInterpolationProperty | undefined;
                colorRendering?: import("_csstype@2.6.20@csstype").ColorRenderingProperty | undefined;
                dominantBaseline?: import("_csstype@2.6.20@csstype").DominantBaselineProperty | undefined;
                fill?: string | undefined;
                fillOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                fillRule?: import("_csstype@2.6.20@csstype").FillRuleProperty | undefined;
                floodColor?: string | undefined;
                floodOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                glyphOrientationVertical?: import("_csstype@2.6.20@csstype").GlyphOrientationVerticalProperty | undefined;
                lightingColor?: string | undefined;
                marker?: string | undefined;
                markerEnd?: string | undefined;
                markerMid?: string | undefined;
                markerStart?: string | undefined;
                shapeRendering?: import("_csstype@2.6.20@csstype").ShapeRenderingProperty | undefined;
                stopColor?: string | undefined;
                stopOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                stroke?: string | undefined;
                strokeDasharray?: import("_csstype@2.6.20@csstype").StrokeDasharrayProperty<string | number> | undefined;
                strokeDashoffset?: import("_csstype@2.6.20@csstype").StrokeDashoffsetProperty<string | number> | undefined;
                strokeLinecap?: import("_csstype@2.6.20@csstype").StrokeLinecapProperty | undefined;
                strokeLinejoin?: import("_csstype@2.6.20@csstype").StrokeLinejoinProperty | undefined;
                strokeMiterlimit?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                strokeOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                strokeWidth?: import("_csstype@2.6.20@csstype").StrokeWidthProperty<string | number> | undefined;
                textAnchor?: import("_csstype@2.6.20@csstype").TextAnchorProperty | undefined;
                vectorEffect?: import("_csstype@2.6.20@csstype").VectorEffectProperty | undefined;
                "accent-color"?: string | undefined;
                "align-content"?: string | undefined;
                "align-items"?: string | undefined;
                "align-self"?: string | undefined;
                "align-tracks"?: string | undefined;
                "animation-delay"?: string | undefined;
                "animation-direction"?: string | undefined;
                "animation-duration"?: string | undefined;
                "animation-fill-mode"?: string | undefined;
                "animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "animation-name"?: string | undefined;
                "animation-play-state"?: string | undefined;
                "animation-timeline"?: string | undefined;
                "animation-timing-function"?: string | undefined;
                "aspect-ratio"?: string | undefined;
                "backdrop-filter"?: string | undefined;
                "backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                "background-attachment"?: string | undefined;
                "background-blend-mode"?: string | undefined;
                "background-clip"?: string | undefined;
                "background-color"?: string | undefined;
                "background-image"?: string | undefined;
                "background-origin"?: string | undefined;
                "background-position-x"?: import("_csstype@2.6.20@csstype").BackgroundPositionXProperty<string | number> | undefined;
                "background-position-y"?: import("_csstype@2.6.20@csstype").BackgroundPositionYProperty<string | number> | undefined;
                "background-repeat"?: string | undefined;
                "background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "block-overflow"?: string | undefined;
                "block-size"?: import("_csstype@2.6.20@csstype").BlockSizeProperty<string | number> | undefined;
                "border-block-color"?: string | undefined;
                "border-block-end-color"?: string | undefined;
                "border-block-end-style"?: import("_csstype@2.6.20@csstype").BorderBlockEndStyleProperty | undefined;
                "border-block-end-width"?: import("_csstype@2.6.20@csstype").BorderBlockEndWidthProperty<string | number> | undefined;
                "border-block-start-color"?: string | undefined;
                "border-block-start-style"?: import("_csstype@2.6.20@csstype").BorderBlockStartStyleProperty | undefined;
                "border-block-start-width"?: import("_csstype@2.6.20@csstype").BorderBlockStartWidthProperty<string | number> | undefined;
                "border-block-style"?: import("_csstype@2.6.20@csstype").BorderBlockStyleProperty | undefined;
                "border-block-width"?: import("_csstype@2.6.20@csstype").BorderBlockWidthProperty<string | number> | undefined;
                "border-bottom-color"?: string | undefined;
                "border-bottom-left-radius"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                "border-bottom-right-radius"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                "border-bottom-style"?: import("_csstype@2.6.20@csstype").BorderBottomStyleProperty | undefined;
                "border-bottom-width"?: import("_csstype@2.6.20@csstype").BorderBottomWidthProperty<string | number> | undefined;
                "border-collapse"?: import("_csstype@2.6.20@csstype").BorderCollapseProperty | undefined;
                "border-end-end-radius"?: import("_csstype@2.6.20@csstype").BorderEndEndRadiusProperty<string | number> | undefined;
                "border-end-start-radius"?: import("_csstype@2.6.20@csstype").BorderEndStartRadiusProperty<string | number> | undefined;
                "border-image-outset"?: import("_csstype@2.6.20@csstype").BorderImageOutsetProperty<string | number> | undefined;
                "border-image-repeat"?: string | undefined;
                "border-image-slice"?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                "border-image-source"?: string | undefined;
                "border-image-width"?: import("_csstype@2.6.20@csstype").BorderImageWidthProperty<string | number> | undefined;
                "border-inline-color"?: string | undefined;
                "border-inline-end-color"?: string | undefined;
                "border-inline-end-style"?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                "border-inline-end-width"?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                "border-inline-start-color"?: string | undefined;
                "border-inline-start-style"?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                "border-inline-start-width"?: import("_csstype@2.6.20@csstype").BorderInlineStartWidthProperty<string | number> | undefined;
                "border-inline-style"?: import("_csstype@2.6.20@csstype").BorderInlineStyleProperty | undefined;
                "border-inline-width"?: import("_csstype@2.6.20@csstype").BorderInlineWidthProperty<string | number> | undefined;
                "border-left-color"?: string | undefined;
                "border-left-style"?: import("_csstype@2.6.20@csstype").BorderLeftStyleProperty | undefined;
                "border-left-width"?: import("_csstype@2.6.20@csstype").BorderLeftWidthProperty<string | number> | undefined;
                "border-right-color"?: string | undefined;
                "border-right-style"?: import("_csstype@2.6.20@csstype").BorderRightStyleProperty | undefined;
                "border-right-width"?: import("_csstype@2.6.20@csstype").BorderRightWidthProperty<string | number> | undefined;
                "border-spacing"?: import("_csstype@2.6.20@csstype").BorderSpacingProperty<string | number> | undefined;
                "border-start-end-radius"?: import("_csstype@2.6.20@csstype").BorderStartEndRadiusProperty<string | number> | undefined;
                "border-start-start-radius"?: import("_csstype@2.6.20@csstype").BorderStartStartRadiusProperty<string | number> | undefined;
                "border-top-color"?: string | undefined;
                "border-top-left-radius"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                "border-top-right-radius"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                "border-top-style"?: import("_csstype@2.6.20@csstype").BorderTopStyleProperty | undefined;
                "border-top-width"?: import("_csstype@2.6.20@csstype").BorderTopWidthProperty<string | number> | undefined;
                "box-decoration-break"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                "box-shadow"?: string | undefined;
                "box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                "break-after"?: import("_csstype@2.6.20@csstype").BreakAfterProperty | undefined;
                "break-before"?: import("_csstype@2.6.20@csstype").BreakBeforeProperty | undefined;
                "break-inside"?: import("_csstype@2.6.20@csstype").BreakInsideProperty | undefined;
                "caption-side"?: import("_csstype@2.6.20@csstype").CaptionSideProperty | undefined;
                "caret-color"?: string | undefined;
                "clip-path"?: string | undefined;
                "color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                "color-scheme"?: string | undefined;
                "column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                "column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                "column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                "column-rule-color"?: string | undefined;
                "column-rule-style"?: string | undefined;
                "column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                "column-span"?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                "column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                "content-visibility"?: import("_csstype@2.6.20@csstype").ContentVisibilityProperty | undefined;
                "counter-increment"?: string | undefined;
                "counter-reset"?: string | undefined;
                "counter-set"?: string | undefined;
                "empty-cells"?: import("_csstype@2.6.20@csstype").EmptyCellsProperty | undefined;
                "flex-basis"?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                "flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                "flex-grow"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "flex-shrink"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "flex-wrap"?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                "font-family"?: string | undefined;
                "font-feature-settings"?: string | undefined;
                "font-kerning"?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                "font-language-override"?: string | undefined;
                "font-optical-sizing"?: import("_csstype@2.6.20@csstype").FontOpticalSizingProperty | undefined;
                "font-size"?: import("_csstype@2.6.20@csstype").FontSizeProperty<string | number> | undefined;
                "font-size-adjust"?: import("_csstype@2.6.20@csstype").FontSizeAdjustProperty | undefined;
                "font-smooth"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                "font-stretch"?: string | undefined;
                "font-style"?: string | undefined;
                "font-synthesis"?: string | undefined;
                "font-variant"?: string | undefined;
                "font-variant-alternates"?: string | undefined;
                "font-variant-caps"?: import("_csstype@2.6.20@csstype").FontVariantCapsProperty | undefined;
                "font-variant-east-asian"?: string | undefined;
                "font-variant-ligatures"?: string | undefined;
                "font-variant-numeric"?: string | undefined;
                "font-variant-position"?: import("_csstype@2.6.20@csstype").FontVariantPositionProperty | undefined;
                "font-variation-settings"?: string | undefined;
                "font-weight"?: import("_csstype@2.6.20@csstype").FontWeightProperty | undefined;
                "forced-color-adjust"?: import("_csstype@2.6.20@csstype").ForcedColorAdjustProperty | undefined;
                "grid-auto-columns"?: import("_csstype@2.6.20@csstype").GridAutoColumnsProperty<string | number> | undefined;
                "grid-auto-flow"?: string | undefined;
                "grid-auto-rows"?: import("_csstype@2.6.20@csstype").GridAutoRowsProperty<string | number> | undefined;
                "grid-column-end"?: import("_csstype@2.6.20@csstype").GridColumnEndProperty | undefined;
                "grid-column-start"?: import("_csstype@2.6.20@csstype").GridColumnStartProperty | undefined;
                "grid-row-end"?: import("_csstype@2.6.20@csstype").GridRowEndProperty | undefined;
                "grid-row-start"?: import("_csstype@2.6.20@csstype").GridRowStartProperty | undefined;
                "grid-template-areas"?: string | undefined;
                "grid-template-columns"?: import("_csstype@2.6.20@csstype").GridTemplateColumnsProperty<string | number> | undefined;
                "grid-template-rows"?: import("_csstype@2.6.20@csstype").GridTemplateRowsProperty<string | number> | undefined;
                "hanging-punctuation"?: string | undefined;
                "hyphenate-character"?: string | undefined;
                "image-orientation"?: string | undefined;
                "image-rendering"?: import("_csstype@2.6.20@csstype").ImageRenderingProperty | undefined;
                "image-resolution"?: string | undefined;
                "initial-letter"?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                "inline-size"?: import("_csstype@2.6.20@csstype").InlineSizeProperty<string | number> | undefined;
                "input-security"?: import("_csstype@2.6.20@csstype").InputSecurityProperty | undefined;
                "inset-block"?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                "inset-block-end"?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                "inset-block-start"?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                "inset-inline"?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                "inset-inline-end"?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                "inset-inline-start"?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                "justify-content"?: string | undefined;
                "justify-items"?: string | undefined;
                "justify-self"?: string | undefined;
                "justify-tracks"?: string | undefined;
                "letter-spacing"?: import("_csstype@2.6.20@csstype").LetterSpacingProperty<string | number> | undefined;
                "line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "line-height"?: import("_csstype@2.6.20@csstype").LineHeightProperty<string | number> | undefined;
                "line-height-step"?: import("_csstype@2.6.20@csstype").LineHeightStepProperty<string | number> | undefined;
                "list-style-image"?: string | undefined;
                "list-style-position"?: import("_csstype@2.6.20@csstype").ListStylePositionProperty | undefined;
                "list-style-type"?: string | undefined;
                "margin-block"?: import("_csstype@2.6.20@csstype").MarginBlockProperty<string | number> | undefined;
                "margin-block-end"?: import("_csstype@2.6.20@csstype").MarginBlockEndProperty<string | number> | undefined;
                "margin-block-start"?: import("_csstype@2.6.20@csstype").MarginBlockStartProperty<string | number> | undefined;
                "margin-bottom"?: import("_csstype@2.6.20@csstype").MarginBottomProperty<string | number> | undefined;
                "margin-inline"?: import("_csstype@2.6.20@csstype").MarginInlineProperty<string | number> | undefined;
                "margin-inline-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                "margin-inline-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                "margin-left"?: import("_csstype@2.6.20@csstype").MarginLeftProperty<string | number> | undefined;
                "margin-right"?: import("_csstype@2.6.20@csstype").MarginRightProperty<string | number> | undefined;
                "margin-top"?: import("_csstype@2.6.20@csstype").MarginTopProperty<string | number> | undefined;
                "mask-border-mode"?: import("_csstype@2.6.20@csstype").MaskBorderModeProperty | undefined;
                "mask-border-outset"?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                "mask-border-repeat"?: string | undefined;
                "mask-border-slice"?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                "mask-border-source"?: string | undefined;
                "mask-border-width"?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                "mask-clip"?: string | undefined;
                "mask-composite"?: string | undefined;
                "mask-image"?: string | undefined;
                "mask-mode"?: string | undefined;
                "mask-origin"?: string | undefined;
                "mask-position"?: import("_csstype@2.6.20@csstype").MaskPositionProperty<string | number> | undefined;
                "mask-repeat"?: string | undefined;
                "mask-size"?: import("_csstype@2.6.20@csstype").MaskSizeProperty<string | number> | undefined;
                "mask-type"?: import("_csstype@2.6.20@csstype").MaskTypeProperty | undefined;
                "math-style"?: import("_csstype@2.6.20@csstype").MathStyleProperty | undefined;
                "max-block-size"?: import("_csstype@2.6.20@csstype").MaxBlockSizeProperty<string | number> | undefined;
                "max-height"?: import("_csstype@2.6.20@csstype").MaxHeightProperty<string | number> | undefined;
                "max-inline-size"?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                "max-lines"?: import("_csstype@2.6.20@csstype").MaxLinesProperty | undefined;
                "max-width"?: import("_csstype@2.6.20@csstype").MaxWidthProperty<string | number> | undefined;
                "min-block-size"?: import("_csstype@2.6.20@csstype").MinBlockSizeProperty<string | number> | undefined;
                "min-height"?: import("_csstype@2.6.20@csstype").MinHeightProperty<string | number> | undefined;
                "min-inline-size"?: import("_csstype@2.6.20@csstype").MinInlineSizeProperty<string | number> | undefined;
                "min-width"?: import("_csstype@2.6.20@csstype").MinWidthProperty<string | number> | undefined;
                "mix-blend-mode"?: import("_csstype@2.6.20@csstype").MixBlendModeProperty | undefined;
                "motion-distance"?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                "motion-path"?: string | undefined;
                "motion-rotation"?: string | undefined;
                "object-fit"?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                "object-position"?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                "offset-anchor"?: import("_csstype@2.6.20@csstype").OffsetAnchorProperty<string | number> | undefined;
                "offset-distance"?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                "offset-path"?: string | undefined;
                "offset-rotate"?: string | undefined;
                "offset-rotation"?: string | undefined;
                "outline-color"?: string | undefined;
                "outline-offset"?: import("_csstype@2.6.20@csstype").OutlineOffsetProperty<string | number> | undefined;
                "outline-style"?: string | undefined;
                "outline-width"?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                "overflow-anchor"?: import("_csstype@2.6.20@csstype").OverflowAnchorProperty | undefined;
                "overflow-block"?: import("_csstype@2.6.20@csstype").OverflowBlockProperty | undefined;
                "overflow-clip-box"?: import("_csstype@2.6.20@csstype").OverflowClipBoxProperty | undefined;
                "overflow-clip-margin"?: import("_csstype@2.6.20@csstype").OverflowClipMarginProperty<string | number> | undefined;
                "overflow-inline"?: import("_csstype@2.6.20@csstype").OverflowInlineProperty | undefined;
                "overflow-wrap"?: import("_csstype@2.6.20@csstype").OverflowWrapProperty | undefined;
                "overflow-x"?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                "overflow-y"?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                "overscroll-behavior-block"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorBlockProperty | undefined;
                "overscroll-behavior-inline"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorInlineProperty | undefined;
                "overscroll-behavior-x"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorXProperty | undefined;
                "overscroll-behavior-y"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorYProperty | undefined;
                "padding-block"?: import("_csstype@2.6.20@csstype").PaddingBlockProperty<string | number> | undefined;
                "padding-block-end"?: import("_csstype@2.6.20@csstype").PaddingBlockEndProperty<string | number> | undefined;
                "padding-block-start"?: import("_csstype@2.6.20@csstype").PaddingBlockStartProperty<string | number> | undefined;
                "padding-bottom"?: import("_csstype@2.6.20@csstype").PaddingBottomProperty<string | number> | undefined;
                "padding-inline"?: import("_csstype@2.6.20@csstype").PaddingInlineProperty<string | number> | undefined;
                "padding-inline-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                "padding-inline-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                "padding-left"?: import("_csstype@2.6.20@csstype").PaddingLeftProperty<string | number> | undefined;
                "padding-right"?: import("_csstype@2.6.20@csstype").PaddingRightProperty<string | number> | undefined;
                "padding-top"?: import("_csstype@2.6.20@csstype").PaddingTopProperty<string | number> | undefined;
                "page-break-after"?: import("_csstype@2.6.20@csstype").PageBreakAfterProperty | undefined;
                "page-break-before"?: import("_csstype@2.6.20@csstype").PageBreakBeforeProperty | undefined;
                "page-break-inside"?: import("_csstype@2.6.20@csstype").PageBreakInsideProperty | undefined;
                "paint-order"?: string | undefined;
                "perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                "place-content"?: string | undefined;
                "pointer-events"?: import("_csstype@2.6.20@csstype").PointerEventsProperty | undefined;
                "print-color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                "row-gap"?: import("_csstype@2.6.20@csstype").RowGapProperty<string | number> | undefined;
                "ruby-align"?: import("_csstype@2.6.20@csstype").RubyAlignProperty | undefined;
                "ruby-merge"?: import("_csstype@2.6.20@csstype").RubyMergeProperty | undefined;
                "ruby-position"?: string | undefined;
                "scroll-behavior"?: import("_csstype@2.6.20@csstype").ScrollBehaviorProperty | undefined;
                "scroll-margin"?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                "scroll-margin-block"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockProperty<string | number> | undefined;
                "scroll-margin-block-end"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockEndProperty<string | number> | undefined;
                "scroll-margin-block-start"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockStartProperty<string | number> | undefined;
                "scroll-margin-bottom"?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                "scroll-margin-inline"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineProperty<string | number> | undefined;
                "scroll-margin-inline-end"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineEndProperty<string | number> | undefined;
                "scroll-margin-inline-start"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineStartProperty<string | number> | undefined;
                "scroll-margin-left"?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                "scroll-margin-right"?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                "scroll-margin-top"?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                "scroll-padding"?: import("_csstype@2.6.20@csstype").ScrollPaddingProperty<string | number> | undefined;
                "scroll-padding-block"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockProperty<string | number> | undefined;
                "scroll-padding-block-end"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockEndProperty<string | number> | undefined;
                "scroll-padding-block-start"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockStartProperty<string | number> | undefined;
                "scroll-padding-bottom"?: import("_csstype@2.6.20@csstype").ScrollPaddingBottomProperty<string | number> | undefined;
                "scroll-padding-inline"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineProperty<string | number> | undefined;
                "scroll-padding-inline-end"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineEndProperty<string | number> | undefined;
                "scroll-padding-inline-start"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineStartProperty<string | number> | undefined;
                "scroll-padding-left"?: import("_csstype@2.6.20@csstype").ScrollPaddingLeftProperty<string | number> | undefined;
                "scroll-padding-right"?: import("_csstype@2.6.20@csstype").ScrollPaddingRightProperty<string | number> | undefined;
                "scroll-padding-top"?: import("_csstype@2.6.20@csstype").ScrollPaddingTopProperty<string | number> | undefined;
                "scroll-snap-align"?: string | undefined;
                "scroll-snap-margin"?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                "scroll-snap-margin-bottom"?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                "scroll-snap-margin-left"?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                "scroll-snap-margin-right"?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                "scroll-snap-margin-top"?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                "scroll-snap-stop"?: import("_csstype@2.6.20@csstype").ScrollSnapStopProperty | undefined;
                "scroll-snap-type"?: string | undefined;
                "scrollbar-color"?: string | undefined;
                "scrollbar-gutter"?: string | undefined;
                "scrollbar-width"?: import("_csstype@2.6.20@csstype").ScrollbarWidthProperty | undefined;
                "shape-image-threshold"?: import("_csstype@2.6.20@csstype").ShapeImageThresholdProperty | undefined;
                "shape-margin"?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                "shape-outside"?: string | undefined;
                "tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                "table-layout"?: import("_csstype@2.6.20@csstype").TableLayoutProperty | undefined;
                "text-align"?: import("_csstype@2.6.20@csstype").TextAlignProperty | undefined;
                "text-align-last"?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                "text-combine-upright"?: string | undefined;
                "text-decoration-color"?: string | undefined;
                "text-decoration-line"?: string | undefined;
                "text-decoration-skip"?: string | undefined;
                "text-decoration-skip-ink"?: import("_csstype@2.6.20@csstype").TextDecorationSkipInkProperty | undefined;
                "text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                "text-decoration-thickness"?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                "text-decoration-width"?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                "text-emphasis-color"?: string | undefined;
                "text-emphasis-position"?: string | undefined;
                "text-emphasis-style"?: string | undefined;
                "text-indent"?: import("_csstype@2.6.20@csstype").TextIndentProperty<string | number> | undefined;
                "text-justify"?: import("_csstype@2.6.20@csstype").TextJustifyProperty | undefined;
                "text-orientation"?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                "text-overflow"?: string | undefined;
                "text-rendering"?: import("_csstype@2.6.20@csstype").TextRenderingProperty | undefined;
                "text-shadow"?: string | undefined;
                "text-size-adjust"?: string | undefined;
                "text-transform"?: import("_csstype@2.6.20@csstype").TextTransformProperty | undefined;
                "text-underline-offset"?: import("_csstype@2.6.20@csstype").TextUnderlineOffsetProperty<string | number> | undefined;
                "text-underline-position"?: string | undefined;
                "touch-action"?: string | undefined;
                "transform-box"?: import("_csstype@2.6.20@csstype").TransformBoxProperty | undefined;
                "transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                "transition-delay"?: string | undefined;
                "transition-duration"?: string | undefined;
                "transition-property"?: string | undefined;
                "transition-timing-function"?: string | undefined;
                "unicode-bidi"?: import("_csstype@2.6.20@csstype").UnicodeBidiProperty | undefined;
                "user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "vertical-align"?: import("_csstype@2.6.20@csstype").VerticalAlignProperty<string | number> | undefined;
                "white-space"?: import("_csstype@2.6.20@csstype").WhiteSpaceProperty | undefined;
                "will-change"?: string | undefined;
                "word-break"?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                "word-spacing"?: import("_csstype@2.6.20@csstype").WordSpacingProperty<string | number> | undefined;
                "word-wrap"?: import("_csstype@2.6.20@csstype").WordWrapProperty | undefined;
                "writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                "z-index"?: import("_csstype@2.6.20@csstype").ZIndexProperty | undefined;
                "background-position"?: import("_csstype@2.6.20@csstype").BackgroundPositionProperty<string | number> | undefined;
                "border-block"?: import("_csstype@2.6.20@csstype").BorderBlockProperty<string | number> | undefined;
                "border-block-end"?: import("_csstype@2.6.20@csstype").BorderBlockEndProperty<string | number> | undefined;
                "border-block-start"?: import("_csstype@2.6.20@csstype").BorderBlockStartProperty<string | number> | undefined;
                "border-bottom"?: import("_csstype@2.6.20@csstype").BorderBottomProperty<string | number> | undefined;
                "border-color"?: string | undefined;
                "border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "border-inline"?: import("_csstype@2.6.20@csstype").BorderInlineProperty<string | number> | undefined;
                "border-inline-end"?: import("_csstype@2.6.20@csstype").BorderInlineEndProperty<string | number> | undefined;
                "border-inline-start"?: import("_csstype@2.6.20@csstype").BorderInlineStartProperty<string | number> | undefined;
                "border-left"?: import("_csstype@2.6.20@csstype").BorderLeftProperty<string | number> | undefined;
                "border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                "border-right"?: import("_csstype@2.6.20@csstype").BorderRightProperty<string | number> | undefined;
                "border-style"?: string | undefined;
                "border-top"?: import("_csstype@2.6.20@csstype").BorderTopProperty<string | number> | undefined;
                "border-width"?: import("_csstype@2.6.20@csstype").BorderWidthProperty<string | number> | undefined;
                "column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                "flex-flow"?: string | undefined;
                "grid-area"?: import("_csstype@2.6.20@csstype").GridAreaProperty | undefined;
                "grid-column"?: import("_csstype@2.6.20@csstype").GridColumnProperty | undefined;
                "grid-row"?: import("_csstype@2.6.20@csstype").GridRowProperty | undefined;
                "grid-template"?: string | undefined;
                "line-clamp"?: import("_csstype@2.6.20@csstype").LineClampProperty | undefined;
                "list-style"?: string | undefined;
                "mask-border"?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                "overscroll-behavior"?: string | undefined;
                "place-items"?: string | undefined;
                "place-self"?: string | undefined;
                "text-decoration"?: import("_csstype@2.6.20@csstype").TextDecorationProperty<string | number> | undefined;
                "text-emphasis"?: string | undefined;
                "-moz-animation-delay"?: string | undefined;
                "-moz-animation-direction"?: string | undefined;
                "-moz-animation-duration"?: string | undefined;
                "-moz-animation-fill-mode"?: string | undefined;
                "-moz-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "-moz-animation-name"?: string | undefined;
                "-moz-animation-play-state"?: string | undefined;
                "-moz-animation-timing-function"?: string | undefined;
                "-moz-appearance"?: import("_csstype@2.6.20@csstype").MozAppearanceProperty | undefined;
                "-moz-backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                "-moz-border-bottom-colors"?: string | undefined;
                "-moz-border-end-color"?: string | undefined;
                "-moz-border-end-style"?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                "-moz-border-end-width"?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                "-moz-border-left-colors"?: string | undefined;
                "-moz-border-right-colors"?: string | undefined;
                "-moz-border-start-color"?: string | undefined;
                "-moz-border-start-style"?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                "-moz-border-top-colors"?: string | undefined;
                "-moz-box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                "-moz-column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                "-moz-column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                "-moz-column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                "-moz-column-rule-color"?: string | undefined;
                "-moz-column-rule-style"?: string | undefined;
                "-moz-column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                "-moz-column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                "-moz-context-properties"?: string | undefined;
                "-moz-font-feature-settings"?: string | undefined;
                "-moz-font-language-override"?: string | undefined;
                "-moz-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                "-moz-image-region"?: string | undefined;
                "-moz-margin-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                "-moz-margin-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                "-moz-orient"?: import("_csstype@2.6.20@csstype").MozOrientProperty | undefined;
                "-moz-osx-font-smoothing"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                "-moz-padding-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                "-moz-padding-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                "-moz-perspective"?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                "-moz-perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                "-moz-stack-sizing"?: import("_csstype@2.6.20@csstype").MozStackSizingProperty | undefined;
                "-moz-tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                "-moz-text-blink"?: import("_csstype@2.6.20@csstype").MozTextBlinkProperty | undefined;
                "-moz-text-size-adjust"?: string | undefined;
                "-moz-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-moz-transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                "-moz-transition-delay"?: string | undefined;
                "-moz-transition-duration"?: string | undefined;
                "-moz-transition-property"?: string | undefined;
                "-moz-transition-timing-function"?: string | undefined;
                "-moz-user-focus"?: import("_csstype@2.6.20@csstype").MozUserFocusProperty | undefined;
                "-moz-user-modify"?: import("_csstype@2.6.20@csstype").MozUserModifyProperty | undefined;
                "-moz-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "-moz-window-dragging"?: import("_csstype@2.6.20@csstype").MozWindowDraggingProperty | undefined;
                "-moz-window-shadow"?: import("_csstype@2.6.20@csstype").MozWindowShadowProperty | undefined;
                "-ms-accelerator"?: import("_csstype@2.6.20@csstype").MsAcceleratorProperty | undefined;
                "-ms-align-self"?: string | undefined;
                "-ms-block-progression"?: import("_csstype@2.6.20@csstype").MsBlockProgressionProperty | undefined;
                "-ms-content-zoom-chaining"?: import("_csstype@2.6.20@csstype").MsContentZoomChainingProperty | undefined;
                "-ms-content-zoom-limit-max"?: string | undefined;
                "-ms-content-zoom-limit-min"?: string | undefined;
                "-ms-content-zoom-snap-points"?: string | undefined;
                "-ms-content-zoom-snap-type"?: import("_csstype@2.6.20@csstype").MsContentZoomSnapTypeProperty | undefined;
                "-ms-content-zooming"?: import("_csstype@2.6.20@csstype").MsContentZoomingProperty | undefined;
                "-ms-filter"?: string | undefined;
                "-ms-flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                "-ms-flex-positive"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-ms-flow-from"?: string | undefined;
                "-ms-flow-into"?: string | undefined;
                "-ms-grid-columns"?: import("_csstype@2.6.20@csstype").MsGridColumnsProperty<string | number> | undefined;
                "-ms-grid-rows"?: import("_csstype@2.6.20@csstype").MsGridRowsProperty<string | number> | undefined;
                "-ms-high-contrast-adjust"?: import("_csstype@2.6.20@csstype").MsHighContrastAdjustProperty | undefined;
                "-ms-hyphenate-limit-chars"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitCharsProperty | undefined;
                "-ms-hyphenate-limit-lines"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitLinesProperty | undefined;
                "-ms-hyphenate-limit-zone"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitZoneProperty<string | number> | undefined;
                "-ms-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                "-ms-ime-align"?: import("_csstype@2.6.20@csstype").MsImeAlignProperty | undefined;
                "-ms-justify-self"?: string | undefined;
                "-ms-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "-ms-order"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-ms-overflow-style"?: import("_csstype@2.6.20@csstype").MsOverflowStyleProperty | undefined;
                "-ms-overflow-x"?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                "-ms-overflow-y"?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                "-ms-scroll-chaining"?: import("_csstype@2.6.20@csstype").MsScrollChainingProperty | undefined;
                "-ms-scroll-limit-x-max"?: import("_csstype@2.6.20@csstype").MsScrollLimitXMaxProperty<string | number> | undefined;
                "-ms-scroll-limit-x-min"?: import("_csstype@2.6.20@csstype").MsScrollLimitXMinProperty<string | number> | undefined;
                "-ms-scroll-limit-y-max"?: import("_csstype@2.6.20@csstype").MsScrollLimitYMaxProperty<string | number> | undefined;
                "-ms-scroll-limit-y-min"?: import("_csstype@2.6.20@csstype").MsScrollLimitYMinProperty<string | number> | undefined;
                "-ms-scroll-rails"?: import("_csstype@2.6.20@csstype").MsScrollRailsProperty | undefined;
                "-ms-scroll-snap-points-x"?: string | undefined;
                "-ms-scroll-snap-points-y"?: string | undefined;
                "-ms-scroll-snap-type"?: import("_csstype@2.6.20@csstype").MsScrollSnapTypeProperty | undefined;
                "-ms-scroll-translation"?: import("_csstype@2.6.20@csstype").MsScrollTranslationProperty | undefined;
                "-ms-scrollbar-3dlight-color"?: string | undefined;
                "-ms-scrollbar-arrow-color"?: string | undefined;
                "-ms-scrollbar-base-color"?: string | undefined;
                "-ms-scrollbar-darkshadow-color"?: string | undefined;
                "-ms-scrollbar-face-color"?: string | undefined;
                "-ms-scrollbar-highlight-color"?: string | undefined;
                "-ms-scrollbar-shadow-color"?: string | undefined;
                "-ms-text-autospace"?: import("_csstype@2.6.20@csstype").MsTextAutospaceProperty | undefined;
                "-ms-text-combine-horizontal"?: string | undefined;
                "-ms-text-overflow"?: string | undefined;
                "-ms-touch-action"?: string | undefined;
                "-ms-touch-select"?: import("_csstype@2.6.20@csstype").MsTouchSelectProperty | undefined;
                "-ms-transform"?: string | undefined;
                "-ms-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-ms-transition-delay"?: string | undefined;
                "-ms-transition-duration"?: string | undefined;
                "-ms-transition-property"?: string | undefined;
                "-ms-transition-timing-function"?: string | undefined;
                "-ms-user-select"?: import("_csstype@2.6.20@csstype").MsUserSelectProperty | undefined;
                "-ms-word-break"?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                "-ms-wrap-flow"?: import("_csstype@2.6.20@csstype").MsWrapFlowProperty | undefined;
                "-ms-wrap-margin"?: import("_csstype@2.6.20@csstype").MsWrapMarginProperty<string | number> | undefined;
                "-ms-wrap-through"?: import("_csstype@2.6.20@csstype").MsWrapThroughProperty | undefined;
                "-ms-writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                "-webkit-align-content"?: string | undefined;
                "-webkit-align-items"?: string | undefined;
                "-webkit-align-self"?: string | undefined;
                "-webkit-animation-delay"?: string | undefined;
                "-webkit-animation-direction"?: string | undefined;
                "-webkit-animation-duration"?: string | undefined;
                "-webkit-animation-fill-mode"?: string | undefined;
                "-webkit-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "-webkit-animation-name"?: string | undefined;
                "-webkit-animation-play-state"?: string | undefined;
                "-webkit-animation-timing-function"?: string | undefined;
                "-webkit-appearance"?: import("_csstype@2.6.20@csstype").WebkitAppearanceProperty | undefined;
                "-webkit-backdrop-filter"?: string | undefined;
                "-webkit-backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                "-webkit-background-clip"?: string | undefined;
                "-webkit-background-origin"?: string | undefined;
                "-webkit-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "-webkit-border-before-color"?: string | undefined;
                "-webkit-border-before-style"?: string | undefined;
                "-webkit-border-before-width"?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeWidthProperty<string | number> | undefined;
                "-webkit-border-bottom-left-radius"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                "-webkit-border-bottom-right-radius"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                "-webkit-border-image-slice"?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                "-webkit-border-top-left-radius"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                "-webkit-border-top-right-radius"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                "-webkit-box-decoration-break"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                "-webkit-box-reflect"?: import("_csstype@2.6.20@csstype").WebkitBoxReflectProperty<string | number> | undefined;
                "-webkit-box-shadow"?: string | undefined;
                "-webkit-box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                "-webkit-clip-path"?: string | undefined;
                "-webkit-column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                "-webkit-column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                "-webkit-column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                "-webkit-column-rule-color"?: string | undefined;
                "-webkit-column-rule-style"?: string | undefined;
                "-webkit-column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                "-webkit-column-span"?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                "-webkit-column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                "-webkit-filter"?: string | undefined;
                "-webkit-flex-basis"?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                "-webkit-flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                "-webkit-flex-grow"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-flex-shrink"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-flex-wrap"?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                "-webkit-font-feature-settings"?: string | undefined;
                "-webkit-font-kerning"?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                "-webkit-font-smoothing"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                "-webkit-font-variant-ligatures"?: string | undefined;
                "-webkit-hyphenate-character"?: string | undefined;
                "-webkit-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                "-webkit-initial-letter"?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                "-webkit-justify-content"?: string | undefined;
                "-webkit-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "-webkit-line-clamp"?: import("_csstype@2.6.20@csstype").WebkitLineClampProperty | undefined;
                "-webkit-margin-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                "-webkit-margin-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                "-webkit-mask-attachment"?: string | undefined;
                "-webkit-mask-box-image-outset"?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                "-webkit-mask-box-image-repeat"?: string | undefined;
                "-webkit-mask-box-image-slice"?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                "-webkit-mask-box-image-source"?: string | undefined;
                "-webkit-mask-box-image-width"?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                "-webkit-mask-clip"?: string | undefined;
                "-webkit-mask-composite"?: string | undefined;
                "-webkit-mask-image"?: string | undefined;
                "-webkit-mask-origin"?: string | undefined;
                "-webkit-mask-position"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionProperty<string | number> | undefined;
                "-webkit-mask-position-x"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionXProperty<string | number> | undefined;
                "-webkit-mask-position-y"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionYProperty<string | number> | undefined;
                "-webkit-mask-repeat"?: string | undefined;
                "-webkit-mask-repeat-x"?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatXProperty | undefined;
                "-webkit-mask-repeat-y"?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatYProperty | undefined;
                "-webkit-mask-size"?: import("_csstype@2.6.20@csstype").WebkitMaskSizeProperty<string | number> | undefined;
                "-webkit-max-inline-size"?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                "-webkit-order"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-overflow-scrolling"?: import("_csstype@2.6.20@csstype").WebkitOverflowScrollingProperty | undefined;
                "-webkit-padding-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                "-webkit-padding-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                "-webkit-perspective"?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                "-webkit-perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                "-webkit-print-color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                "-webkit-ruby-position"?: string | undefined;
                "-webkit-scroll-snap-type"?: string | undefined;
                "-webkit-shape-margin"?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                "-webkit-tap-highlight-color"?: string | undefined;
                "-webkit-text-combine"?: string | undefined;
                "-webkit-text-decoration-color"?: string | undefined;
                "-webkit-text-decoration-line"?: string | undefined;
                "-webkit-text-decoration-skip"?: string | undefined;
                "-webkit-text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                "-webkit-text-emphasis-color"?: string | undefined;
                "-webkit-text-emphasis-position"?: string | undefined;
                "-webkit-text-emphasis-style"?: string | undefined;
                "-webkit-text-fill-color"?: string | undefined;
                "-webkit-text-orientation"?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                "-webkit-text-size-adjust"?: string | undefined;
                "-webkit-text-stroke-color"?: string | undefined;
                "-webkit-text-stroke-width"?: import("_csstype@2.6.20@csstype").WebkitTextStrokeWidthProperty<string | number> | undefined;
                "-webkit-text-underline-position"?: string | undefined;
                "-webkit-touch-callout"?: import("_csstype@2.6.20@csstype").WebkitTouchCalloutProperty | undefined;
                "-webkit-transform"?: string | undefined;
                "-webkit-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-webkit-transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                "-webkit-transition-delay"?: string | undefined;
                "-webkit-transition-duration"?: string | undefined;
                "-webkit-transition-property"?: string | undefined;
                "-webkit-transition-timing-function"?: string | undefined;
                "-webkit-user-modify"?: import("_csstype@2.6.20@csstype").WebkitUserModifyProperty | undefined;
                "-webkit-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "-webkit-writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                "-moz-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                "-moz-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "-moz-column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                "-moz-columns"?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                "-moz-transition"?: string | undefined;
                "-ms-content-zoom-limit"?: string | undefined;
                "-ms-content-zoom-snap"?: string | undefined;
                "-ms-flex"?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                "-ms-scroll-limit"?: string | undefined;
                "-ms-scroll-snap-x"?: string | undefined;
                "-ms-scroll-snap-y"?: string | undefined;
                "-ms-transition"?: string | undefined;
                "-webkit-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                "-webkit-border-before"?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeProperty<string | number> | undefined;
                "-webkit-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "-webkit-border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                "-webkit-column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                "-webkit-columns"?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                "-webkit-flex"?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                "-webkit-flex-flow"?: string | undefined;
                "-webkit-mask"?: import("_csstype@2.6.20@csstype").WebkitMaskProperty<string | number> | undefined;
                "-webkit-mask-box-image"?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                "-webkit-text-emphasis"?: string | undefined;
                "-webkit-text-stroke"?: import("_csstype@2.6.20@csstype").WebkitTextStrokeProperty<string | number> | undefined;
                "-webkit-transition"?: string | undefined;
                "box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                "box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "grid-column-gap"?: import("_csstype@2.6.20@csstype").GridColumnGapProperty<string | number> | undefined;
                "grid-gap"?: import("_csstype@2.6.20@csstype").GridGapProperty<string | number> | undefined;
                "grid-row-gap"?: import("_csstype@2.6.20@csstype").GridRowGapProperty<string | number> | undefined;
                "ime-mode"?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                "offset-block"?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                "offset-block-end"?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                "offset-block-start"?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                "offset-inline"?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                "offset-inline-end"?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                "offset-inline-start"?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                "scroll-snap-coordinate"?: import("_csstype@2.6.20@csstype").ScrollSnapCoordinateProperty<string | number> | undefined;
                "scroll-snap-destination"?: import("_csstype@2.6.20@csstype").ScrollSnapDestinationProperty<string | number> | undefined;
                "scroll-snap-points-x"?: string | undefined;
                "scroll-snap-points-y"?: string | undefined;
                "scroll-snap-type-x"?: import("_csstype@2.6.20@csstype").ScrollSnapTypeXProperty | undefined;
                "scroll-snap-type-y"?: import("_csstype@2.6.20@csstype").ScrollSnapTypeYProperty | undefined;
                "scrollbar-track-color"?: string | undefined;
                "-khtml-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "-khtml-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "-khtml-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-khtml-box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-khtml-box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                "-khtml-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-khtml-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "-khtml-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "-khtml-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "-khtml-opacity"?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                "-khtml-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "-moz-background-clip"?: string | undefined;
                "-moz-background-inline-policy"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                "-moz-background-origin"?: string | undefined;
                "-moz-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "-moz-binding"?: string | undefined;
                "-moz-border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                "-moz-border-radius-bottomleft"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                "-moz-border-radius-bottomright"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                "-moz-border-radius-topleft"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                "-moz-border-radius-topright"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                "-moz-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "-moz-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "-moz-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-moz-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-moz-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "-moz-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "-moz-box-shadow"?: string | undefined;
                "-moz-float-edge"?: import("_csstype@2.6.20@csstype").MozFloatEdgeProperty | undefined;
                "-moz-force-broken-image-icon"?: import("_csstype@2.6.20@csstype").MozForceBrokenImageIconProperty | undefined;
                "-moz-opacity"?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                "-moz-outline"?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                "-moz-outline-color"?: string | undefined;
                "-moz-outline-radius"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusProperty<string | number> | undefined;
                "-moz-outline-radius-bottomleft"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomleftProperty<string | number> | undefined;
                "-moz-outline-radius-bottomright"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomrightProperty<string | number> | undefined;
                "-moz-outline-radius-topleft"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusTopleftProperty<string | number> | undefined;
                "-moz-outline-radius-topright"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusToprightProperty<string | number> | undefined;
                "-moz-outline-style"?: string | undefined;
                "-moz-outline-width"?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                "-moz-text-align-last"?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                "-moz-text-decoration-color"?: string | undefined;
                "-moz-text-decoration-line"?: string | undefined;
                "-moz-text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                "-moz-user-input"?: import("_csstype@2.6.20@csstype").MozUserInputProperty | undefined;
                "-ms-ime-mode"?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                "-ms-scrollbar-track-color"?: string | undefined;
                "-o-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                "-o-animation-delay"?: string | undefined;
                "-o-animation-direction"?: string | undefined;
                "-o-animation-duration"?: string | undefined;
                "-o-animation-fill-mode"?: string | undefined;
                "-o-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "-o-animation-name"?: string | undefined;
                "-o-animation-play-state"?: string | undefined;
                "-o-animation-timing-function"?: string | undefined;
                "-o-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "-o-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "-o-object-fit"?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                "-o-object-position"?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                "-o-tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                "-o-text-overflow"?: string | undefined;
                "-o-transform"?: string | undefined;
                "-o-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-o-transition"?: string | undefined;
                "-o-transition-delay"?: string | undefined;
                "-o-transition-duration"?: string | undefined;
                "-o-transition-property"?: string | undefined;
                "-o-transition-timing-function"?: string | undefined;
                "-webkit-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "-webkit-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "-webkit-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                "-webkit-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "-webkit-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "-webkit-scroll-snap-points-x"?: string | undefined;
                "-webkit-scroll-snap-points-y"?: string | undefined;
                "alignment-baseline"?: import("_csstype@2.6.20@csstype").AlignmentBaselineProperty | undefined;
                "baseline-shift"?: import("_csstype@2.6.20@csstype").BaselineShiftProperty<string | number> | undefined;
                "clip-rule"?: import("_csstype@2.6.20@csstype").ClipRuleProperty | undefined;
                "color-interpolation"?: import("_csstype@2.6.20@csstype").ColorInterpolationProperty | undefined;
                "color-rendering"?: import("_csstype@2.6.20@csstype").ColorRenderingProperty | undefined;
                "dominant-baseline"?: import("_csstype@2.6.20@csstype").DominantBaselineProperty | undefined;
                "fill-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "fill-rule"?: import("_csstype@2.6.20@csstype").FillRuleProperty | undefined;
                "flood-color"?: string | undefined;
                "flood-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "glyph-orientation-vertical"?: import("_csstype@2.6.20@csstype").GlyphOrientationVerticalProperty | undefined;
                "lighting-color"?: string | undefined;
                "marker-end"?: string | undefined;
                "marker-mid"?: string | undefined;
                "marker-start"?: string | undefined;
                "shape-rendering"?: import("_csstype@2.6.20@csstype").ShapeRenderingProperty | undefined;
                "stop-color"?: string | undefined;
                "stop-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "stroke-dasharray"?: import("_csstype@2.6.20@csstype").StrokeDasharrayProperty<string | number> | undefined;
                "stroke-dashoffset"?: import("_csstype@2.6.20@csstype").StrokeDashoffsetProperty<string | number> | undefined;
                "stroke-linecap"?: import("_csstype@2.6.20@csstype").StrokeLinecapProperty | undefined;
                "stroke-linejoin"?: import("_csstype@2.6.20@csstype").StrokeLinejoinProperty | undefined;
                "stroke-miterlimit"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "stroke-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "stroke-width"?: import("_csstype@2.6.20@csstype").StrokeWidthProperty<string | number> | undefined;
                "text-anchor"?: import("_csstype@2.6.20@csstype").TextAnchorProperty | undefined;
                "vector-effect"?: import("_csstype@2.6.20@csstype").VectorEffectProperty | undefined;
            } | undefined;
            autoAdjustOverflow?: boolean | {
                adjustX?: 0 | 1 | undefined;
                adjustY?: 0 | 1 | undefined;
            } | undefined;
            builtinPlacements?: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements | undefined;
            prefixCls?: string | undefined;
            title?: any;
            children?: unknown[] | undefined;
            trigger?: import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[] | undefined;
            visible?: boolean | undefined;
            defaultVisible?: boolean | undefined;
            placement?: import("ant-design-vue/lib/tooltip").TooltipPlacement | undefined;
            color?: string | undefined;
            transitionName?: string | undefined;
            overlayClassName?: string | undefined;
            openClassName?: string | undefined;
            mouseEnterDelay?: number | undefined;
            mouseLeaveDelay?: number | undefined;
            getPopupContainer?: ((triggerNode: HTMLElement) => HTMLElement) | undefined;
            arrowPointAtCenter?: boolean | undefined;
            destroyTooltipOnHide?: boolean | undefined;
            onVisibleChange?: ((vis: boolean) => void) | undefined;
            'onUpdate:visible'?: ((vis: boolean) => void) | undefined;
        } | undefined;
        filtered?: boolean | undefined;
        filters?: {
            text: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined)[];
            value: string | number | boolean;
            children?: any[] | undefined;
        }[] | undefined;
        filterDropdown?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined)[] | ((props: import("ant-design-vue/lib/table/interface").FilterDropdownProps<any>) => import("ant-design-vue/lib/_util/type").VueNode);
        filterMultiple?: boolean | undefined;
        filteredValue?: (boolean | import("ant-design-vue/lib/table/interface").Key)[] | null | undefined;
        defaultFilteredValue?: (boolean | import("ant-design-vue/lib/table/interface").Key)[] | null | undefined;
        filterIcon?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined)[] | ((opt: {
            filtered: boolean;
            column: import("ant-design-vue").TableColumnType<any>;
        }) => import("ant-design-vue/lib/_util/type").VueNode);
        filterMode?: "menu" | "tree" | undefined;
        filterSearch?: boolean | undefined;
        onFilter?: ((value: string | number | boolean, record: any) => boolean) | undefined;
        filterDropdownVisible?: boolean | undefined;
        onFilterDropdownVisibleChange?: ((visible: boolean) => void) | undefined;
        responsive?: import("ant-design-vue/lib/_util/responsiveObserve").Breakpoint[] | undefined;
        colSpan?: number | undefined;
        customRender?: ((opt: {
            value: any;
            text: any;
            record: any;
            index: number;
            renderIndex: number;
            column: import("ant-design-vue/lib/vc-table/interface").ColumnType<any>;
        }) => any) | undefined;
        rowSpan?: number | undefined;
        width?: string | number | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        resizable?: boolean | undefined;
        customCell?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<any> | undefined;
        onCellClick?: ((record: any, e: MouseEvent) => void) | undefined;
        key?: import("ant-design-vue/lib/vc-table/interface").Key | undefined;
        class?: string | undefined;
        className?: string | undefined;
        customHeaderCell?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<import("ant-design-vue/lib/vc-table/interface").ColumnType<any> | import("ant-design-vue/lib/vc-table/interface").ColumnGroupType<any>> | undefined;
        ellipsis?: boolean | {
            showTitle?: boolean | undefined;
        } | undefined;
        align?: import("ant-design-vue/lib/vc-table/interface").AlignType | undefined;
        customFilterDropdown?: boolean | undefined;
        slots?: {
            filterIcon?: string | undefined;
            filterDropdown?: string | undefined;
            customRender?: string | undefined;
            title?: string | undefined;
        } | undefined;
        __originColumn__?: any;
    } | {
        title?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined) | JSX.Element | ((props: import("ant-design-vue/lib/table/interface").ColumnTitleProps<any>) => import("ant-design-vue/lib/_util/type").VueNode) | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined)[];
        sorter?: boolean | import("ant-design-vue/lib/table/interface").CompareFn<any> | {
            compare?: import("ant-design-vue/lib/table/interface").CompareFn<any> | undefined;
            multiple?: number | undefined;
        } | undefined;
        sortOrder?: import("ant-design-vue/lib/table/interface").SortOrder | undefined;
        defaultSortOrder?: import("ant-design-vue/lib/table/interface").SortOrder | undefined;
        sortDirections?: import("ant-design-vue/lib/table/interface").SortOrder[] | undefined;
        showSorterTooltip?: boolean | {
            align?: {
                points?: string[] | undefined;
                offset?: number[] | undefined;
                targetOffset?: number[] | undefined;
                overflow?: {
                    adjustX?: number | boolean | undefined;
                    adjustY?: number | boolean | undefined;
                } | undefined;
                useCssRight?: boolean | undefined;
                useCssBottom?: boolean | undefined;
                useCssTransform?: boolean | undefined;
                ignoreShake?: boolean | undefined;
            } | undefined;
            overlayStyle?: {
                [x: `--${string}`]: string | number | undefined;
                accentColor?: string | undefined;
                alignContent?: string | undefined;
                alignItems?: string | undefined;
                alignSelf?: string | undefined;
                alignTracks?: string | undefined;
                animationDelay?: string | undefined;
                animationDirection?: string | undefined;
                animationDuration?: string | undefined;
                animationFillMode?: string | undefined;
                animationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                animationName?: string | undefined;
                animationPlayState?: string | undefined;
                animationTimeline?: string | undefined;
                animationTimingFunction?: string | undefined;
                appearance?: import("_csstype@2.6.20@csstype").AppearanceProperty | undefined;
                aspectRatio?: string | undefined;
                backdropFilter?: string | undefined;
                backfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                backgroundAttachment?: string | undefined;
                backgroundBlendMode?: string | undefined;
                backgroundClip?: string | undefined;
                backgroundColor?: string | undefined;
                backgroundImage?: string | undefined;
                backgroundOrigin?: string | undefined;
                backgroundPositionX?: import("_csstype@2.6.20@csstype").BackgroundPositionXProperty<string | number> | undefined;
                backgroundPositionY?: import("_csstype@2.6.20@csstype").BackgroundPositionYProperty<string | number> | undefined;
                backgroundRepeat?: string | undefined;
                backgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                blockOverflow?: string | undefined;
                blockSize?: import("_csstype@2.6.20@csstype").BlockSizeProperty<string | number> | undefined;
                borderBlockColor?: string | undefined;
                borderBlockEndColor?: string | undefined;
                borderBlockEndStyle?: import("_csstype@2.6.20@csstype").BorderBlockEndStyleProperty | undefined;
                borderBlockEndWidth?: import("_csstype@2.6.20@csstype").BorderBlockEndWidthProperty<string | number> | undefined;
                borderBlockStartColor?: string | undefined;
                borderBlockStartStyle?: import("_csstype@2.6.20@csstype").BorderBlockStartStyleProperty | undefined;
                borderBlockStartWidth?: import("_csstype@2.6.20@csstype").BorderBlockStartWidthProperty<string | number> | undefined;
                borderBlockStyle?: import("_csstype@2.6.20@csstype").BorderBlockStyleProperty | undefined;
                borderBlockWidth?: import("_csstype@2.6.20@csstype").BorderBlockWidthProperty<string | number> | undefined;
                borderBottomColor?: string | undefined;
                borderBottomLeftRadius?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                borderBottomRightRadius?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                borderBottomStyle?: import("_csstype@2.6.20@csstype").BorderBottomStyleProperty | undefined;
                borderBottomWidth?: import("_csstype@2.6.20@csstype").BorderBottomWidthProperty<string | number> | undefined;
                borderCollapse?: import("_csstype@2.6.20@csstype").BorderCollapseProperty | undefined;
                borderEndEndRadius?: import("_csstype@2.6.20@csstype").BorderEndEndRadiusProperty<string | number> | undefined;
                borderEndStartRadius?: import("_csstype@2.6.20@csstype").BorderEndStartRadiusProperty<string | number> | undefined;
                borderImageOutset?: import("_csstype@2.6.20@csstype").BorderImageOutsetProperty<string | number> | undefined;
                borderImageRepeat?: string | undefined;
                borderImageSlice?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                borderImageSource?: string | undefined;
                borderImageWidth?: import("_csstype@2.6.20@csstype").BorderImageWidthProperty<string | number> | undefined;
                borderInlineColor?: string | undefined;
                borderInlineEndColor?: string | undefined;
                borderInlineEndStyle?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                borderInlineEndWidth?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                borderInlineStartColor?: string | undefined;
                borderInlineStartStyle?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                borderInlineStartWidth?: import("_csstype@2.6.20@csstype").BorderInlineStartWidthProperty<string | number> | undefined;
                borderInlineStyle?: import("_csstype@2.6.20@csstype").BorderInlineStyleProperty | undefined;
                borderInlineWidth?: import("_csstype@2.6.20@csstype").BorderInlineWidthProperty<string | number> | undefined;
                borderLeftColor?: string | undefined;
                borderLeftStyle?: import("_csstype@2.6.20@csstype").BorderLeftStyleProperty | undefined;
                borderLeftWidth?: import("_csstype@2.6.20@csstype").BorderLeftWidthProperty<string | number> | undefined;
                borderRightColor?: string | undefined;
                borderRightStyle?: import("_csstype@2.6.20@csstype").BorderRightStyleProperty | undefined;
                borderRightWidth?: import("_csstype@2.6.20@csstype").BorderRightWidthProperty<string | number> | undefined;
                borderSpacing?: import("_csstype@2.6.20@csstype").BorderSpacingProperty<string | number> | undefined;
                borderStartEndRadius?: import("_csstype@2.6.20@csstype").BorderStartEndRadiusProperty<string | number> | undefined;
                borderStartStartRadius?: import("_csstype@2.6.20@csstype").BorderStartStartRadiusProperty<string | number> | undefined;
                borderTopColor?: string | undefined;
                borderTopLeftRadius?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                borderTopRightRadius?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                borderTopStyle?: import("_csstype@2.6.20@csstype").BorderTopStyleProperty | undefined;
                borderTopWidth?: import("_csstype@2.6.20@csstype").BorderTopWidthProperty<string | number> | undefined;
                bottom?: import("_csstype@2.6.20@csstype").BottomProperty<string | number> | undefined;
                boxDecorationBreak?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                boxShadow?: string | undefined;
                boxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                breakAfter?: import("_csstype@2.6.20@csstype").BreakAfterProperty | undefined;
                breakBefore?: import("_csstype@2.6.20@csstype").BreakBeforeProperty | undefined;
                breakInside?: import("_csstype@2.6.20@csstype").BreakInsideProperty | undefined;
                captionSide?: import("_csstype@2.6.20@csstype").CaptionSideProperty | undefined;
                caretColor?: string | undefined;
                clear?: import("_csstype@2.6.20@csstype").ClearProperty | undefined;
                clipPath?: string | undefined;
                color?: string | undefined;
                colorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                colorScheme?: string | undefined;
                columnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                columnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                columnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                columnRuleColor?: string | undefined;
                columnRuleStyle?: string | undefined;
                columnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                columnSpan?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                columnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                contain?: string | undefined;
                content?: string | undefined;
                contentVisibility?: import("_csstype@2.6.20@csstype").ContentVisibilityProperty | undefined;
                counterIncrement?: string | undefined;
                counterReset?: string | undefined;
                counterSet?: string | undefined;
                cursor?: string | undefined;
                direction?: import("_csstype@2.6.20@csstype").DirectionProperty | undefined;
                display?: string | undefined;
                emptyCells?: import("_csstype@2.6.20@csstype").EmptyCellsProperty | undefined;
                filter?: string | undefined;
                flexBasis?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                flexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                flexGrow?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                flexShrink?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                flexWrap?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                float?: import("_csstype@2.6.20@csstype").FloatProperty | undefined;
                fontFamily?: string | undefined;
                fontFeatureSettings?: string | undefined;
                fontKerning?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                fontLanguageOverride?: string | undefined;
                fontOpticalSizing?: import("_csstype@2.6.20@csstype").FontOpticalSizingProperty | undefined;
                fontSize?: import("_csstype@2.6.20@csstype").FontSizeProperty<string | number> | undefined;
                fontSizeAdjust?: import("_csstype@2.6.20@csstype").FontSizeAdjustProperty | undefined;
                fontSmooth?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                fontStretch?: string | undefined;
                fontStyle?: string | undefined;
                fontSynthesis?: string | undefined;
                fontVariant?: string | undefined;
                fontVariantAlternates?: string | undefined;
                fontVariantCaps?: import("_csstype@2.6.20@csstype").FontVariantCapsProperty | undefined;
                fontVariantEastAsian?: string | undefined;
                fontVariantLigatures?: string | undefined;
                fontVariantNumeric?: string | undefined;
                fontVariantPosition?: import("_csstype@2.6.20@csstype").FontVariantPositionProperty | undefined;
                fontVariationSettings?: string | undefined;
                fontWeight?: import("_csstype@2.6.20@csstype").FontWeightProperty | undefined;
                forcedColorAdjust?: import("_csstype@2.6.20@csstype").ForcedColorAdjustProperty | undefined;
                gridAutoColumns?: import("_csstype@2.6.20@csstype").GridAutoColumnsProperty<string | number> | undefined;
                gridAutoFlow?: string | undefined;
                gridAutoRows?: import("_csstype@2.6.20@csstype").GridAutoRowsProperty<string | number> | undefined;
                gridColumnEnd?: import("_csstype@2.6.20@csstype").GridColumnEndProperty | undefined;
                gridColumnStart?: import("_csstype@2.6.20@csstype").GridColumnStartProperty | undefined;
                gridRowEnd?: import("_csstype@2.6.20@csstype").GridRowEndProperty | undefined;
                gridRowStart?: import("_csstype@2.6.20@csstype").GridRowStartProperty | undefined;
                gridTemplateAreas?: string | undefined;
                gridTemplateColumns?: import("_csstype@2.6.20@csstype").GridTemplateColumnsProperty<string | number> | undefined;
                gridTemplateRows?: import("_csstype@2.6.20@csstype").GridTemplateRowsProperty<string | number> | undefined;
                hangingPunctuation?: string | undefined;
                height?: import("_csstype@2.6.20@csstype").HeightProperty<string | number> | undefined;
                hyphenateCharacter?: string | undefined;
                hyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                imageOrientation?: string | undefined;
                imageRendering?: import("_csstype@2.6.20@csstype").ImageRenderingProperty | undefined;
                imageResolution?: string | undefined;
                initialLetter?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                inlineSize?: import("_csstype@2.6.20@csstype").InlineSizeProperty<string | number> | undefined;
                inputSecurity?: import("_csstype@2.6.20@csstype").InputSecurityProperty | undefined;
                inset?: import("_csstype@2.6.20@csstype").InsetProperty<string | number> | undefined;
                insetBlock?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                insetBlockEnd?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                insetBlockStart?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                insetInline?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                insetInlineEnd?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                insetInlineStart?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                isolation?: import("_csstype@2.6.20@csstype").IsolationProperty | undefined;
                justifyContent?: string | undefined;
                justifyItems?: string | undefined;
                justifySelf?: string | undefined;
                justifyTracks?: string | undefined;
                left?: import("_csstype@2.6.20@csstype").LeftProperty<string | number> | undefined;
                letterSpacing?: import("_csstype@2.6.20@csstype").LetterSpacingProperty<string | number> | undefined;
                lineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                lineHeight?: import("_csstype@2.6.20@csstype").LineHeightProperty<string | number> | undefined;
                lineHeightStep?: import("_csstype@2.6.20@csstype").LineHeightStepProperty<string | number> | undefined;
                listStyleImage?: string | undefined;
                listStylePosition?: import("_csstype@2.6.20@csstype").ListStylePositionProperty | undefined;
                listStyleType?: string | undefined;
                marginBlock?: import("_csstype@2.6.20@csstype").MarginBlockProperty<string | number> | undefined;
                marginBlockEnd?: import("_csstype@2.6.20@csstype").MarginBlockEndProperty<string | number> | undefined;
                marginBlockStart?: import("_csstype@2.6.20@csstype").MarginBlockStartProperty<string | number> | undefined;
                marginBottom?: import("_csstype@2.6.20@csstype").MarginBottomProperty<string | number> | undefined;
                marginInline?: import("_csstype@2.6.20@csstype").MarginInlineProperty<string | number> | undefined;
                marginInlineEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                marginInlineStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                marginLeft?: import("_csstype@2.6.20@csstype").MarginLeftProperty<string | number> | undefined;
                marginRight?: import("_csstype@2.6.20@csstype").MarginRightProperty<string | number> | undefined;
                marginTop?: import("_csstype@2.6.20@csstype").MarginTopProperty<string | number> | undefined;
                maskBorderMode?: import("_csstype@2.6.20@csstype").MaskBorderModeProperty | undefined;
                maskBorderOutset?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                maskBorderRepeat?: string | undefined;
                maskBorderSlice?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                maskBorderSource?: string | undefined;
                maskBorderWidth?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                maskClip?: string | undefined;
                maskComposite?: string | undefined;
                maskImage?: string | undefined;
                maskMode?: string | undefined;
                maskOrigin?: string | undefined;
                maskPosition?: import("_csstype@2.6.20@csstype").MaskPositionProperty<string | number> | undefined;
                maskRepeat?: string | undefined;
                maskSize?: import("_csstype@2.6.20@csstype").MaskSizeProperty<string | number> | undefined;
                maskType?: import("_csstype@2.6.20@csstype").MaskTypeProperty | undefined;
                mathStyle?: import("_csstype@2.6.20@csstype").MathStyleProperty | undefined;
                maxBlockSize?: import("_csstype@2.6.20@csstype").MaxBlockSizeProperty<string | number> | undefined;
                maxHeight?: import("_csstype@2.6.20@csstype").MaxHeightProperty<string | number> | undefined;
                maxInlineSize?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                maxLines?: import("_csstype@2.6.20@csstype").MaxLinesProperty | undefined;
                maxWidth?: import("_csstype@2.6.20@csstype").MaxWidthProperty<string | number> | undefined;
                minBlockSize?: import("_csstype@2.6.20@csstype").MinBlockSizeProperty<string | number> | undefined;
                minHeight?: import("_csstype@2.6.20@csstype").MinHeightProperty<string | number> | undefined;
                minInlineSize?: import("_csstype@2.6.20@csstype").MinInlineSizeProperty<string | number> | undefined;
                minWidth?: import("_csstype@2.6.20@csstype").MinWidthProperty<string | number> | undefined;
                mixBlendMode?: import("_csstype@2.6.20@csstype").MixBlendModeProperty | undefined;
                motionDistance?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                motionPath?: string | undefined;
                motionRotation?: string | undefined;
                objectFit?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                objectPosition?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                offsetAnchor?: import("_csstype@2.6.20@csstype").OffsetAnchorProperty<string | number> | undefined;
                offsetDistance?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                offsetPath?: string | undefined;
                offsetRotate?: string | undefined;
                offsetRotation?: string | undefined;
                opacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                order?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                orphans?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                outlineColor?: string | undefined;
                outlineOffset?: import("_csstype@2.6.20@csstype").OutlineOffsetProperty<string | number> | undefined;
                outlineStyle?: string | undefined;
                outlineWidth?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                overflowAnchor?: import("_csstype@2.6.20@csstype").OverflowAnchorProperty | undefined;
                overflowBlock?: import("_csstype@2.6.20@csstype").OverflowBlockProperty | undefined;
                overflowClipBox?: import("_csstype@2.6.20@csstype").OverflowClipBoxProperty | undefined;
                overflowClipMargin?: import("_csstype@2.6.20@csstype").OverflowClipMarginProperty<string | number> | undefined;
                overflowInline?: import("_csstype@2.6.20@csstype").OverflowInlineProperty | undefined;
                overflowWrap?: import("_csstype@2.6.20@csstype").OverflowWrapProperty | undefined;
                overflowX?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                overflowY?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                overscrollBehaviorBlock?: import("_csstype@2.6.20@csstype").OverscrollBehaviorBlockProperty | undefined;
                overscrollBehaviorInline?: import("_csstype@2.6.20@csstype").OverscrollBehaviorInlineProperty | undefined;
                overscrollBehaviorX?: import("_csstype@2.6.20@csstype").OverscrollBehaviorXProperty | undefined;
                overscrollBehaviorY?: import("_csstype@2.6.20@csstype").OverscrollBehaviorYProperty | undefined;
                paddingBlock?: import("_csstype@2.6.20@csstype").PaddingBlockProperty<string | number> | undefined;
                paddingBlockEnd?: import("_csstype@2.6.20@csstype").PaddingBlockEndProperty<string | number> | undefined;
                paddingBlockStart?: import("_csstype@2.6.20@csstype").PaddingBlockStartProperty<string | number> | undefined;
                paddingBottom?: import("_csstype@2.6.20@csstype").PaddingBottomProperty<string | number> | undefined;
                paddingInline?: import("_csstype@2.6.20@csstype").PaddingInlineProperty<string | number> | undefined;
                paddingInlineEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                paddingInlineStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                paddingLeft?: import("_csstype@2.6.20@csstype").PaddingLeftProperty<string | number> | undefined;
                paddingRight?: import("_csstype@2.6.20@csstype").PaddingRightProperty<string | number> | undefined;
                paddingTop?: import("_csstype@2.6.20@csstype").PaddingTopProperty<string | number> | undefined;
                pageBreakAfter?: import("_csstype@2.6.20@csstype").PageBreakAfterProperty | undefined;
                pageBreakBefore?: import("_csstype@2.6.20@csstype").PageBreakBeforeProperty | undefined;
                pageBreakInside?: import("_csstype@2.6.20@csstype").PageBreakInsideProperty | undefined;
                paintOrder?: string | undefined;
                perspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                perspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                placeContent?: string | undefined;
                pointerEvents?: import("_csstype@2.6.20@csstype").PointerEventsProperty | undefined;
                position?: import("_csstype@2.6.20@csstype").PositionProperty | undefined;
                printColorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                quotes?: string | undefined;
                resize?: import("_csstype@2.6.20@csstype").ResizeProperty | undefined;
                right?: import("_csstype@2.6.20@csstype").RightProperty<string | number> | undefined;
                rotate?: string | undefined;
                rowGap?: import("_csstype@2.6.20@csstype").RowGapProperty<string | number> | undefined;
                rubyAlign?: import("_csstype@2.6.20@csstype").RubyAlignProperty | undefined;
                rubyMerge?: import("_csstype@2.6.20@csstype").RubyMergeProperty | undefined;
                rubyPosition?: string | undefined;
                scale?: import("_csstype@2.6.20@csstype").ScaleProperty | undefined;
                scrollBehavior?: import("_csstype@2.6.20@csstype").ScrollBehaviorProperty | undefined;
                scrollMargin?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                scrollMarginBlock?: import("_csstype@2.6.20@csstype").ScrollMarginBlockProperty<string | number> | undefined;
                scrollMarginBlockEnd?: import("_csstype@2.6.20@csstype").ScrollMarginBlockEndProperty<string | number> | undefined;
                scrollMarginBlockStart?: import("_csstype@2.6.20@csstype").ScrollMarginBlockStartProperty<string | number> | undefined;
                scrollMarginBottom?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                scrollMarginInline?: import("_csstype@2.6.20@csstype").ScrollMarginInlineProperty<string | number> | undefined;
                scrollMarginInlineEnd?: import("_csstype@2.6.20@csstype").ScrollMarginInlineEndProperty<string | number> | undefined;
                scrollMarginInlineStart?: import("_csstype@2.6.20@csstype").ScrollMarginInlineStartProperty<string | number> | undefined;
                scrollMarginLeft?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                scrollMarginRight?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                scrollMarginTop?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                scrollPadding?: import("_csstype@2.6.20@csstype").ScrollPaddingProperty<string | number> | undefined;
                scrollPaddingBlock?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockProperty<string | number> | undefined;
                scrollPaddingBlockEnd?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockEndProperty<string | number> | undefined;
                scrollPaddingBlockStart?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockStartProperty<string | number> | undefined;
                scrollPaddingBottom?: import("_csstype@2.6.20@csstype").ScrollPaddingBottomProperty<string | number> | undefined;
                scrollPaddingInline?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineProperty<string | number> | undefined;
                scrollPaddingInlineEnd?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineEndProperty<string | number> | undefined;
                scrollPaddingInlineStart?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineStartProperty<string | number> | undefined;
                scrollPaddingLeft?: import("_csstype@2.6.20@csstype").ScrollPaddingLeftProperty<string | number> | undefined;
                scrollPaddingRight?: import("_csstype@2.6.20@csstype").ScrollPaddingRightProperty<string | number> | undefined;
                scrollPaddingTop?: import("_csstype@2.6.20@csstype").ScrollPaddingTopProperty<string | number> | undefined;
                scrollSnapAlign?: string | undefined;
                scrollSnapMargin?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                scrollSnapMarginBottom?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                scrollSnapMarginLeft?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                scrollSnapMarginRight?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                scrollSnapMarginTop?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                scrollSnapStop?: import("_csstype@2.6.20@csstype").ScrollSnapStopProperty | undefined;
                scrollSnapType?: string | undefined;
                scrollbarColor?: string | undefined;
                scrollbarGutter?: string | undefined;
                scrollbarWidth?: import("_csstype@2.6.20@csstype").ScrollbarWidthProperty | undefined;
                shapeImageThreshold?: import("_csstype@2.6.20@csstype").ShapeImageThresholdProperty | undefined;
                shapeMargin?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                shapeOutside?: string | undefined;
                tabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                tableLayout?: import("_csstype@2.6.20@csstype").TableLayoutProperty | undefined;
                textAlign?: import("_csstype@2.6.20@csstype").TextAlignProperty | undefined;
                textAlignLast?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                textCombineUpright?: string | undefined;
                textDecorationColor?: string | undefined;
                textDecorationLine?: string | undefined;
                textDecorationSkip?: string | undefined;
                textDecorationSkipInk?: import("_csstype@2.6.20@csstype").TextDecorationSkipInkProperty | undefined;
                textDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                textDecorationThickness?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                textDecorationWidth?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                textEmphasisColor?: string | undefined;
                textEmphasisPosition?: string | undefined;
                textEmphasisStyle?: string | undefined;
                textIndent?: import("_csstype@2.6.20@csstype").TextIndentProperty<string | number> | undefined;
                textJustify?: import("_csstype@2.6.20@csstype").TextJustifyProperty | undefined;
                textOrientation?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                textOverflow?: string | undefined;
                textRendering?: import("_csstype@2.6.20@csstype").TextRenderingProperty | undefined;
                textShadow?: string | undefined;
                textSizeAdjust?: string | undefined;
                textTransform?: import("_csstype@2.6.20@csstype").TextTransformProperty | undefined;
                textUnderlineOffset?: import("_csstype@2.6.20@csstype").TextUnderlineOffsetProperty<string | number> | undefined;
                textUnderlinePosition?: string | undefined;
                top?: import("_csstype@2.6.20@csstype").TopProperty<string | number> | undefined;
                touchAction?: string | undefined;
                transform?: string | undefined;
                transformBox?: import("_csstype@2.6.20@csstype").TransformBoxProperty | undefined;
                transformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                transformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                transitionDelay?: string | undefined;
                transitionDuration?: string | undefined;
                transitionProperty?: string | undefined;
                transitionTimingFunction?: string | undefined;
                translate?: import("_csstype@2.6.20@csstype").TranslateProperty<string | number> | undefined;
                unicodeBidi?: import("_csstype@2.6.20@csstype").UnicodeBidiProperty | undefined;
                userSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                verticalAlign?: import("_csstype@2.6.20@csstype").VerticalAlignProperty<string | number> | undefined;
                visibility?: import("_csstype@2.6.20@csstype").VisibilityProperty | undefined;
                whiteSpace?: import("_csstype@2.6.20@csstype").WhiteSpaceProperty | undefined;
                widows?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                width?: import("_csstype@2.6.20@csstype").WidthProperty<string | number> | undefined;
                willChange?: string | undefined;
                wordBreak?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                wordSpacing?: import("_csstype@2.6.20@csstype").WordSpacingProperty<string | number> | undefined;
                wordWrap?: import("_csstype@2.6.20@csstype").WordWrapProperty | undefined;
                writingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                zIndex?: import("_csstype@2.6.20@csstype").ZIndexProperty | undefined;
                zoom?: import("_csstype@2.6.20@csstype").ZoomProperty | undefined;
                all?: import("_csstype@2.6.20@csstype").Globals | undefined;
                animation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                background?: import("_csstype@2.6.20@csstype").BackgroundProperty<string | number> | undefined;
                backgroundPosition?: import("_csstype@2.6.20@csstype").BackgroundPositionProperty<string | number> | undefined;
                border?: import("_csstype@2.6.20@csstype").BorderProperty<string | number> | undefined;
                borderBlock?: import("_csstype@2.6.20@csstype").BorderBlockProperty<string | number> | undefined;
                borderBlockEnd?: import("_csstype@2.6.20@csstype").BorderBlockEndProperty<string | number> | undefined;
                borderBlockStart?: import("_csstype@2.6.20@csstype").BorderBlockStartProperty<string | number> | undefined;
                borderBottom?: import("_csstype@2.6.20@csstype").BorderBottomProperty<string | number> | undefined;
                borderColor?: string | undefined;
                borderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                borderInline?: import("_csstype@2.6.20@csstype").BorderInlineProperty<string | number> | undefined;
                borderInlineEnd?: import("_csstype@2.6.20@csstype").BorderInlineEndProperty<string | number> | undefined;
                borderInlineStart?: import("_csstype@2.6.20@csstype").BorderInlineStartProperty<string | number> | undefined;
                borderLeft?: import("_csstype@2.6.20@csstype").BorderLeftProperty<string | number> | undefined;
                borderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                borderRight?: import("_csstype@2.6.20@csstype").BorderRightProperty<string | number> | undefined;
                borderStyle?: string | undefined;
                borderTop?: import("_csstype@2.6.20@csstype").BorderTopProperty<string | number> | undefined;
                borderWidth?: import("_csstype@2.6.20@csstype").BorderWidthProperty<string | number> | undefined;
                columnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                columns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                flex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                flexFlow?: string | undefined;
                font?: string | undefined;
                gap?: import("_csstype@2.6.20@csstype").GapProperty<string | number> | undefined;
                grid?: string | undefined;
                gridArea?: import("_csstype@2.6.20@csstype").GridAreaProperty | undefined;
                gridColumn?: import("_csstype@2.6.20@csstype").GridColumnProperty | undefined;
                gridRow?: import("_csstype@2.6.20@csstype").GridRowProperty | undefined;
                gridTemplate?: string | undefined;
                lineClamp?: import("_csstype@2.6.20@csstype").LineClampProperty | undefined;
                listStyle?: string | undefined;
                margin?: import("_csstype@2.6.20@csstype").MarginProperty<string | number> | undefined;
                mask?: import("_csstype@2.6.20@csstype").MaskProperty<string | number> | undefined;
                maskBorder?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                motion?: import("_csstype@2.6.20@csstype").OffsetProperty<string | number> | undefined;
                offset?: import("_csstype@2.6.20@csstype").OffsetProperty<string | number> | undefined;
                outline?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                overflow?: string | undefined;
                overscrollBehavior?: string | undefined;
                padding?: import("_csstype@2.6.20@csstype").PaddingProperty<string | number> | undefined;
                placeItems?: string | undefined;
                placeSelf?: string | undefined;
                textDecoration?: import("_csstype@2.6.20@csstype").TextDecorationProperty<string | number> | undefined;
                textEmphasis?: string | undefined;
                transition?: string | undefined;
                MozAnimationDelay?: string | undefined;
                MozAnimationDirection?: string | undefined;
                MozAnimationDuration?: string | undefined;
                MozAnimationFillMode?: string | undefined;
                MozAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                MozAnimationName?: string | undefined;
                MozAnimationPlayState?: string | undefined;
                MozAnimationTimingFunction?: string | undefined;
                MozAppearance?: import("_csstype@2.6.20@csstype").MozAppearanceProperty | undefined;
                MozBackfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                MozBorderBottomColors?: string | undefined;
                MozBorderEndColor?: string | undefined;
                MozBorderEndStyle?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                MozBorderEndWidth?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                MozBorderLeftColors?: string | undefined;
                MozBorderRightColors?: string | undefined;
                MozBorderStartColor?: string | undefined;
                MozBorderStartStyle?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                MozBorderTopColors?: string | undefined;
                MozBoxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                MozColumnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                MozColumnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                MozColumnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                MozColumnRuleColor?: string | undefined;
                MozColumnRuleStyle?: string | undefined;
                MozColumnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                MozColumnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                MozContextProperties?: string | undefined;
                MozFontFeatureSettings?: string | undefined;
                MozFontLanguageOverride?: string | undefined;
                MozHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                MozImageRegion?: string | undefined;
                MozMarginEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                MozMarginStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                MozOrient?: import("_csstype@2.6.20@csstype").MozOrientProperty | undefined;
                MozOsxFontSmoothing?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                MozPaddingEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                MozPaddingStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                MozPerspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                MozPerspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                MozStackSizing?: import("_csstype@2.6.20@csstype").MozStackSizingProperty | undefined;
                MozTabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                MozTextBlink?: import("_csstype@2.6.20@csstype").MozTextBlinkProperty | undefined;
                MozTextSizeAdjust?: string | undefined;
                MozTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                MozTransformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                MozTransitionDelay?: string | undefined;
                MozTransitionDuration?: string | undefined;
                MozTransitionProperty?: string | undefined;
                MozTransitionTimingFunction?: string | undefined;
                MozUserFocus?: import("_csstype@2.6.20@csstype").MozUserFocusProperty | undefined;
                MozUserModify?: import("_csstype@2.6.20@csstype").MozUserModifyProperty | undefined;
                MozUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                MozWindowDragging?: import("_csstype@2.6.20@csstype").MozWindowDraggingProperty | undefined;
                MozWindowShadow?: import("_csstype@2.6.20@csstype").MozWindowShadowProperty | undefined;
                msAccelerator?: import("_csstype@2.6.20@csstype").MsAcceleratorProperty | undefined;
                msAlignSelf?: string | undefined;
                msBlockProgression?: import("_csstype@2.6.20@csstype").MsBlockProgressionProperty | undefined;
                msContentZoomChaining?: import("_csstype@2.6.20@csstype").MsContentZoomChainingProperty | undefined;
                msContentZoomLimitMax?: string | undefined;
                msContentZoomLimitMin?: string | undefined;
                msContentZoomSnapPoints?: string | undefined;
                msContentZoomSnapType?: import("_csstype@2.6.20@csstype").MsContentZoomSnapTypeProperty | undefined;
                msContentZooming?: import("_csstype@2.6.20@csstype").MsContentZoomingProperty | undefined;
                msFilter?: string | undefined;
                msFlexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                msFlexPositive?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                msFlowFrom?: string | undefined;
                msFlowInto?: string | undefined;
                msGridColumns?: import("_csstype@2.6.20@csstype").MsGridColumnsProperty<string | number> | undefined;
                msGridRows?: import("_csstype@2.6.20@csstype").MsGridRowsProperty<string | number> | undefined;
                msHighContrastAdjust?: import("_csstype@2.6.20@csstype").MsHighContrastAdjustProperty | undefined;
                msHyphenateLimitChars?: import("_csstype@2.6.20@csstype").MsHyphenateLimitCharsProperty | undefined;
                msHyphenateLimitLines?: import("_csstype@2.6.20@csstype").MsHyphenateLimitLinesProperty | undefined;
                msHyphenateLimitZone?: import("_csstype@2.6.20@csstype").MsHyphenateLimitZoneProperty<string | number> | undefined;
                msHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                msImeAlign?: import("_csstype@2.6.20@csstype").MsImeAlignProperty | undefined;
                msJustifySelf?: string | undefined;
                msLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                msOrder?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                msOverflowStyle?: import("_csstype@2.6.20@csstype").MsOverflowStyleProperty | undefined;
                msOverflowX?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                msOverflowY?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                msScrollChaining?: import("_csstype@2.6.20@csstype").MsScrollChainingProperty | undefined;
                msScrollLimitXMax?: import("_csstype@2.6.20@csstype").MsScrollLimitXMaxProperty<string | number> | undefined;
                msScrollLimitXMin?: import("_csstype@2.6.20@csstype").MsScrollLimitXMinProperty<string | number> | undefined;
                msScrollLimitYMax?: import("_csstype@2.6.20@csstype").MsScrollLimitYMaxProperty<string | number> | undefined;
                msScrollLimitYMin?: import("_csstype@2.6.20@csstype").MsScrollLimitYMinProperty<string | number> | undefined;
                msScrollRails?: import("_csstype@2.6.20@csstype").MsScrollRailsProperty | undefined;
                msScrollSnapPointsX?: string | undefined;
                msScrollSnapPointsY?: string | undefined;
                msScrollSnapType?: import("_csstype@2.6.20@csstype").MsScrollSnapTypeProperty | undefined;
                msScrollTranslation?: import("_csstype@2.6.20@csstype").MsScrollTranslationProperty | undefined;
                msScrollbar3dlightColor?: string | undefined;
                msScrollbarArrowColor?: string | undefined;
                msScrollbarBaseColor?: string | undefined;
                msScrollbarDarkshadowColor?: string | undefined;
                msScrollbarFaceColor?: string | undefined;
                msScrollbarHighlightColor?: string | undefined;
                msScrollbarShadowColor?: string | undefined;
                msTextAutospace?: import("_csstype@2.6.20@csstype").MsTextAutospaceProperty | undefined;
                msTextCombineHorizontal?: string | undefined;
                msTextOverflow?: string | undefined;
                msTouchAction?: string | undefined;
                msTouchSelect?: import("_csstype@2.6.20@csstype").MsTouchSelectProperty | undefined;
                msTransform?: string | undefined;
                msTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                msTransitionDelay?: string | undefined;
                msTransitionDuration?: string | undefined;
                msTransitionProperty?: string | undefined;
                msTransitionTimingFunction?: string | undefined;
                msUserSelect?: import("_csstype@2.6.20@csstype").MsUserSelectProperty | undefined;
                msWordBreak?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                msWrapFlow?: import("_csstype@2.6.20@csstype").MsWrapFlowProperty | undefined;
                msWrapMargin?: import("_csstype@2.6.20@csstype").MsWrapMarginProperty<string | number> | undefined;
                msWrapThrough?: import("_csstype@2.6.20@csstype").MsWrapThroughProperty | undefined;
                msWritingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                WebkitAlignContent?: string | undefined;
                WebkitAlignItems?: string | undefined;
                WebkitAlignSelf?: string | undefined;
                WebkitAnimationDelay?: string | undefined;
                WebkitAnimationDirection?: string | undefined;
                WebkitAnimationDuration?: string | undefined;
                WebkitAnimationFillMode?: string | undefined;
                WebkitAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                WebkitAnimationName?: string | undefined;
                WebkitAnimationPlayState?: string | undefined;
                WebkitAnimationTimingFunction?: string | undefined;
                WebkitAppearance?: import("_csstype@2.6.20@csstype").WebkitAppearanceProperty | undefined;
                WebkitBackdropFilter?: string | undefined;
                WebkitBackfaceVisibility?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                WebkitBackgroundClip?: string | undefined;
                WebkitBackgroundOrigin?: string | undefined;
                WebkitBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                WebkitBorderBeforeColor?: string | undefined;
                WebkitBorderBeforeStyle?: string | undefined;
                WebkitBorderBeforeWidth?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeWidthProperty<string | number> | undefined;
                WebkitBorderBottomLeftRadius?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                WebkitBorderBottomRightRadius?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                WebkitBorderImageSlice?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                WebkitBorderTopLeftRadius?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                WebkitBorderTopRightRadius?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                WebkitBoxDecorationBreak?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                WebkitBoxReflect?: import("_csstype@2.6.20@csstype").WebkitBoxReflectProperty<string | number> | undefined;
                WebkitBoxShadow?: string | undefined;
                WebkitBoxSizing?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                WebkitClipPath?: string | undefined;
                WebkitColumnCount?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                WebkitColumnFill?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                WebkitColumnGap?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                WebkitColumnRuleColor?: string | undefined;
                WebkitColumnRuleStyle?: string | undefined;
                WebkitColumnRuleWidth?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                WebkitColumnSpan?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                WebkitColumnWidth?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                WebkitFilter?: string | undefined;
                WebkitFlexBasis?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                WebkitFlexDirection?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                WebkitFlexGrow?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitFlexShrink?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitFlexWrap?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                WebkitFontFeatureSettings?: string | undefined;
                WebkitFontKerning?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                WebkitFontSmoothing?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                WebkitFontVariantLigatures?: string | undefined;
                WebkitHyphenateCharacter?: string | undefined;
                WebkitHyphens?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                WebkitInitialLetter?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                WebkitJustifyContent?: string | undefined;
                WebkitLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                WebkitLineClamp?: import("_csstype@2.6.20@csstype").WebkitLineClampProperty | undefined;
                WebkitMarginEnd?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                WebkitMarginStart?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                WebkitMaskAttachment?: string | undefined;
                WebkitMaskBoxImageOutset?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                WebkitMaskBoxImageRepeat?: string | undefined;
                WebkitMaskBoxImageSlice?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                WebkitMaskBoxImageSource?: string | undefined;
                WebkitMaskBoxImageWidth?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                WebkitMaskClip?: string | undefined;
                WebkitMaskComposite?: string | undefined;
                WebkitMaskImage?: string | undefined;
                WebkitMaskOrigin?: string | undefined;
                WebkitMaskPosition?: import("_csstype@2.6.20@csstype").WebkitMaskPositionProperty<string | number> | undefined;
                WebkitMaskPositionX?: import("_csstype@2.6.20@csstype").WebkitMaskPositionXProperty<string | number> | undefined;
                WebkitMaskPositionY?: import("_csstype@2.6.20@csstype").WebkitMaskPositionYProperty<string | number> | undefined;
                WebkitMaskRepeat?: string | undefined;
                WebkitMaskRepeatX?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatXProperty | undefined;
                WebkitMaskRepeatY?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatYProperty | undefined;
                WebkitMaskSize?: import("_csstype@2.6.20@csstype").WebkitMaskSizeProperty<string | number> | undefined;
                WebkitMaxInlineSize?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                WebkitOrder?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitOverflowScrolling?: import("_csstype@2.6.20@csstype").WebkitOverflowScrollingProperty | undefined;
                WebkitPaddingEnd?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                WebkitPaddingStart?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                WebkitPerspective?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                WebkitPerspectiveOrigin?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                WebkitPrintColorAdjust?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                WebkitRubyPosition?: string | undefined;
                WebkitScrollSnapType?: string | undefined;
                WebkitShapeMargin?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                WebkitTapHighlightColor?: string | undefined;
                WebkitTextCombine?: string | undefined;
                WebkitTextDecorationColor?: string | undefined;
                WebkitTextDecorationLine?: string | undefined;
                WebkitTextDecorationSkip?: string | undefined;
                WebkitTextDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                WebkitTextEmphasisColor?: string | undefined;
                WebkitTextEmphasisPosition?: string | undefined;
                WebkitTextEmphasisStyle?: string | undefined;
                WebkitTextFillColor?: string | undefined;
                WebkitTextOrientation?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                WebkitTextSizeAdjust?: string | undefined;
                WebkitTextStrokeColor?: string | undefined;
                WebkitTextStrokeWidth?: import("_csstype@2.6.20@csstype").WebkitTextStrokeWidthProperty<string | number> | undefined;
                WebkitTextUnderlinePosition?: string | undefined;
                WebkitTouchCallout?: import("_csstype@2.6.20@csstype").WebkitTouchCalloutProperty | undefined;
                WebkitTransform?: string | undefined;
                WebkitTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                WebkitTransformStyle?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                WebkitTransitionDelay?: string | undefined;
                WebkitTransitionDuration?: string | undefined;
                WebkitTransitionProperty?: string | undefined;
                WebkitTransitionTimingFunction?: string | undefined;
                WebkitUserModify?: import("_csstype@2.6.20@csstype").WebkitUserModifyProperty | undefined;
                WebkitUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                WebkitWritingMode?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                MozAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                MozBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                MozColumnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                MozColumns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                MozTransition?: string | undefined;
                msContentZoomLimit?: string | undefined;
                msContentZoomSnap?: string | undefined;
                msFlex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                msScrollLimit?: string | undefined;
                msScrollSnapX?: string | undefined;
                msScrollSnapY?: string | undefined;
                msTransition?: string | undefined;
                WebkitAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                WebkitBorderBefore?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeProperty<string | number> | undefined;
                WebkitBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                WebkitBorderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                WebkitColumnRule?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                WebkitColumns?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                WebkitFlex?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                WebkitFlexFlow?: string | undefined;
                WebkitMask?: import("_csstype@2.6.20@csstype").WebkitMaskProperty<string | number> | undefined;
                WebkitMaskBoxImage?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                WebkitTextEmphasis?: string | undefined;
                WebkitTextStroke?: import("_csstype@2.6.20@csstype").WebkitTextStrokeProperty<string | number> | undefined;
                WebkitTransition?: string | undefined;
                azimuth?: string | undefined;
                boxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                boxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                boxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                boxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                boxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                boxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                boxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                boxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                clip?: string | undefined;
                gridColumnGap?: import("_csstype@2.6.20@csstype").GridColumnGapProperty<string | number> | undefined;
                gridGap?: import("_csstype@2.6.20@csstype").GridGapProperty<string | number> | undefined;
                gridRowGap?: import("_csstype@2.6.20@csstype").GridRowGapProperty<string | number> | undefined;
                imeMode?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                offsetBlock?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                offsetBlockEnd?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                offsetBlockStart?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                offsetInline?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                offsetInlineEnd?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                offsetInlineStart?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                scrollSnapCoordinate?: import("_csstype@2.6.20@csstype").ScrollSnapCoordinateProperty<string | number> | undefined;
                scrollSnapDestination?: import("_csstype@2.6.20@csstype").ScrollSnapDestinationProperty<string | number> | undefined;
                scrollSnapPointsX?: string | undefined;
                scrollSnapPointsY?: string | undefined;
                scrollSnapTypeX?: import("_csstype@2.6.20@csstype").ScrollSnapTypeXProperty | undefined;
                scrollSnapTypeY?: import("_csstype@2.6.20@csstype").ScrollSnapTypeYProperty | undefined;
                scrollbarTrackColor?: string | undefined;
                KhtmlBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                KhtmlBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                KhtmlBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                KhtmlBoxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                KhtmlBoxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                KhtmlBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                KhtmlBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                KhtmlBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                KhtmlLineBreak?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                KhtmlOpacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                KhtmlUserSelect?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                MozBackgroundClip?: string | undefined;
                MozBackgroundInlinePolicy?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                MozBackgroundOrigin?: string | undefined;
                MozBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                MozBinding?: string | undefined;
                MozBorderRadius?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                MozBorderRadiusBottomleft?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                MozBorderRadiusBottomright?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                MozBorderRadiusTopleft?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                MozBorderRadiusTopright?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                MozBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                MozBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                MozBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                MozBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                MozBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                MozBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                MozBoxShadow?: string | undefined;
                MozFloatEdge?: import("_csstype@2.6.20@csstype").MozFloatEdgeProperty | undefined;
                MozForceBrokenImageIcon?: import("_csstype@2.6.20@csstype").MozForceBrokenImageIconProperty | undefined;
                MozOpacity?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                MozOutline?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                MozOutlineColor?: string | undefined;
                MozOutlineRadius?: import("_csstype@2.6.20@csstype").MozOutlineRadiusProperty<string | number> | undefined;
                MozOutlineRadiusBottomleft?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomleftProperty<string | number> | undefined;
                MozOutlineRadiusBottomright?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomrightProperty<string | number> | undefined;
                MozOutlineRadiusTopleft?: import("_csstype@2.6.20@csstype").MozOutlineRadiusTopleftProperty<string | number> | undefined;
                MozOutlineRadiusTopright?: import("_csstype@2.6.20@csstype").MozOutlineRadiusToprightProperty<string | number> | undefined;
                MozOutlineStyle?: string | undefined;
                MozOutlineWidth?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                MozTextAlignLast?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                MozTextDecorationColor?: string | undefined;
                MozTextDecorationLine?: string | undefined;
                MozTextDecorationStyle?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                MozUserInput?: import("_csstype@2.6.20@csstype").MozUserInputProperty | undefined;
                msImeMode?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                msScrollbarTrackColor?: string | undefined;
                OAnimation?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                OAnimationDelay?: string | undefined;
                OAnimationDirection?: string | undefined;
                OAnimationDuration?: string | undefined;
                OAnimationFillMode?: string | undefined;
                OAnimationIterationCount?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                OAnimationName?: string | undefined;
                OAnimationPlayState?: string | undefined;
                OAnimationTimingFunction?: string | undefined;
                OBackgroundSize?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                OBorderImage?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                OObjectFit?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                OObjectPosition?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                OTabSize?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                OTextOverflow?: string | undefined;
                OTransform?: string | undefined;
                OTransformOrigin?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                OTransition?: string | undefined;
                OTransitionDelay?: string | undefined;
                OTransitionDuration?: string | undefined;
                OTransitionProperty?: string | undefined;
                OTransitionTimingFunction?: string | undefined;
                WebkitBoxAlign?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                WebkitBoxDirection?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                WebkitBoxFlex?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitBoxFlexGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitBoxLines?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                WebkitBoxOrdinalGroup?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                WebkitBoxOrient?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                WebkitBoxPack?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                WebkitScrollSnapPointsX?: string | undefined;
                WebkitScrollSnapPointsY?: string | undefined;
                alignmentBaseline?: import("_csstype@2.6.20@csstype").AlignmentBaselineProperty | undefined;
                baselineShift?: import("_csstype@2.6.20@csstype").BaselineShiftProperty<string | number> | undefined;
                clipRule?: import("_csstype@2.6.20@csstype").ClipRuleProperty | undefined;
                colorInterpolation?: import("_csstype@2.6.20@csstype").ColorInterpolationProperty | undefined;
                colorRendering?: import("_csstype@2.6.20@csstype").ColorRenderingProperty | undefined;
                dominantBaseline?: import("_csstype@2.6.20@csstype").DominantBaselineProperty | undefined;
                fill?: string | undefined;
                fillOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                fillRule?: import("_csstype@2.6.20@csstype").FillRuleProperty | undefined;
                floodColor?: string | undefined;
                floodOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                glyphOrientationVertical?: import("_csstype@2.6.20@csstype").GlyphOrientationVerticalProperty | undefined;
                lightingColor?: string | undefined;
                marker?: string | undefined;
                markerEnd?: string | undefined;
                markerMid?: string | undefined;
                markerStart?: string | undefined;
                shapeRendering?: import("_csstype@2.6.20@csstype").ShapeRenderingProperty | undefined;
                stopColor?: string | undefined;
                stopOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                stroke?: string | undefined;
                strokeDasharray?: import("_csstype@2.6.20@csstype").StrokeDasharrayProperty<string | number> | undefined;
                strokeDashoffset?: import("_csstype@2.6.20@csstype").StrokeDashoffsetProperty<string | number> | undefined;
                strokeLinecap?: import("_csstype@2.6.20@csstype").StrokeLinecapProperty | undefined;
                strokeLinejoin?: import("_csstype@2.6.20@csstype").StrokeLinejoinProperty | undefined;
                strokeMiterlimit?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                strokeOpacity?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                strokeWidth?: import("_csstype@2.6.20@csstype").StrokeWidthProperty<string | number> | undefined;
                textAnchor?: import("_csstype@2.6.20@csstype").TextAnchorProperty | undefined;
                vectorEffect?: import("_csstype@2.6.20@csstype").VectorEffectProperty | undefined;
                "accent-color"?: string | undefined;
                "align-content"?: string | undefined;
                "align-items"?: string | undefined;
                "align-self"?: string | undefined;
                "align-tracks"?: string | undefined;
                "animation-delay"?: string | undefined;
                "animation-direction"?: string | undefined;
                "animation-duration"?: string | undefined;
                "animation-fill-mode"?: string | undefined;
                "animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "animation-name"?: string | undefined;
                "animation-play-state"?: string | undefined;
                "animation-timeline"?: string | undefined;
                "animation-timing-function"?: string | undefined;
                "aspect-ratio"?: string | undefined;
                "backdrop-filter"?: string | undefined;
                "backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                "background-attachment"?: string | undefined;
                "background-blend-mode"?: string | undefined;
                "background-clip"?: string | undefined;
                "background-color"?: string | undefined;
                "background-image"?: string | undefined;
                "background-origin"?: string | undefined;
                "background-position-x"?: import("_csstype@2.6.20@csstype").BackgroundPositionXProperty<string | number> | undefined;
                "background-position-y"?: import("_csstype@2.6.20@csstype").BackgroundPositionYProperty<string | number> | undefined;
                "background-repeat"?: string | undefined;
                "background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "block-overflow"?: string | undefined;
                "block-size"?: import("_csstype@2.6.20@csstype").BlockSizeProperty<string | number> | undefined;
                "border-block-color"?: string | undefined;
                "border-block-end-color"?: string | undefined;
                "border-block-end-style"?: import("_csstype@2.6.20@csstype").BorderBlockEndStyleProperty | undefined;
                "border-block-end-width"?: import("_csstype@2.6.20@csstype").BorderBlockEndWidthProperty<string | number> | undefined;
                "border-block-start-color"?: string | undefined;
                "border-block-start-style"?: import("_csstype@2.6.20@csstype").BorderBlockStartStyleProperty | undefined;
                "border-block-start-width"?: import("_csstype@2.6.20@csstype").BorderBlockStartWidthProperty<string | number> | undefined;
                "border-block-style"?: import("_csstype@2.6.20@csstype").BorderBlockStyleProperty | undefined;
                "border-block-width"?: import("_csstype@2.6.20@csstype").BorderBlockWidthProperty<string | number> | undefined;
                "border-bottom-color"?: string | undefined;
                "border-bottom-left-radius"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                "border-bottom-right-radius"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                "border-bottom-style"?: import("_csstype@2.6.20@csstype").BorderBottomStyleProperty | undefined;
                "border-bottom-width"?: import("_csstype@2.6.20@csstype").BorderBottomWidthProperty<string | number> | undefined;
                "border-collapse"?: import("_csstype@2.6.20@csstype").BorderCollapseProperty | undefined;
                "border-end-end-radius"?: import("_csstype@2.6.20@csstype").BorderEndEndRadiusProperty<string | number> | undefined;
                "border-end-start-radius"?: import("_csstype@2.6.20@csstype").BorderEndStartRadiusProperty<string | number> | undefined;
                "border-image-outset"?: import("_csstype@2.6.20@csstype").BorderImageOutsetProperty<string | number> | undefined;
                "border-image-repeat"?: string | undefined;
                "border-image-slice"?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                "border-image-source"?: string | undefined;
                "border-image-width"?: import("_csstype@2.6.20@csstype").BorderImageWidthProperty<string | number> | undefined;
                "border-inline-color"?: string | undefined;
                "border-inline-end-color"?: string | undefined;
                "border-inline-end-style"?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                "border-inline-end-width"?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                "border-inline-start-color"?: string | undefined;
                "border-inline-start-style"?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                "border-inline-start-width"?: import("_csstype@2.6.20@csstype").BorderInlineStartWidthProperty<string | number> | undefined;
                "border-inline-style"?: import("_csstype@2.6.20@csstype").BorderInlineStyleProperty | undefined;
                "border-inline-width"?: import("_csstype@2.6.20@csstype").BorderInlineWidthProperty<string | number> | undefined;
                "border-left-color"?: string | undefined;
                "border-left-style"?: import("_csstype@2.6.20@csstype").BorderLeftStyleProperty | undefined;
                "border-left-width"?: import("_csstype@2.6.20@csstype").BorderLeftWidthProperty<string | number> | undefined;
                "border-right-color"?: string | undefined;
                "border-right-style"?: import("_csstype@2.6.20@csstype").BorderRightStyleProperty | undefined;
                "border-right-width"?: import("_csstype@2.6.20@csstype").BorderRightWidthProperty<string | number> | undefined;
                "border-spacing"?: import("_csstype@2.6.20@csstype").BorderSpacingProperty<string | number> | undefined;
                "border-start-end-radius"?: import("_csstype@2.6.20@csstype").BorderStartEndRadiusProperty<string | number> | undefined;
                "border-start-start-radius"?: import("_csstype@2.6.20@csstype").BorderStartStartRadiusProperty<string | number> | undefined;
                "border-top-color"?: string | undefined;
                "border-top-left-radius"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                "border-top-right-radius"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                "border-top-style"?: import("_csstype@2.6.20@csstype").BorderTopStyleProperty | undefined;
                "border-top-width"?: import("_csstype@2.6.20@csstype").BorderTopWidthProperty<string | number> | undefined;
                "box-decoration-break"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                "box-shadow"?: string | undefined;
                "box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                "break-after"?: import("_csstype@2.6.20@csstype").BreakAfterProperty | undefined;
                "break-before"?: import("_csstype@2.6.20@csstype").BreakBeforeProperty | undefined;
                "break-inside"?: import("_csstype@2.6.20@csstype").BreakInsideProperty | undefined;
                "caption-side"?: import("_csstype@2.6.20@csstype").CaptionSideProperty | undefined;
                "caret-color"?: string | undefined;
                "clip-path"?: string | undefined;
                "color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                "color-scheme"?: string | undefined;
                "column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                "column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                "column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                "column-rule-color"?: string | undefined;
                "column-rule-style"?: string | undefined;
                "column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                "column-span"?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                "column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                "content-visibility"?: import("_csstype@2.6.20@csstype").ContentVisibilityProperty | undefined;
                "counter-increment"?: string | undefined;
                "counter-reset"?: string | undefined;
                "counter-set"?: string | undefined;
                "empty-cells"?: import("_csstype@2.6.20@csstype").EmptyCellsProperty | undefined;
                "flex-basis"?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                "flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                "flex-grow"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "flex-shrink"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "flex-wrap"?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                "font-family"?: string | undefined;
                "font-feature-settings"?: string | undefined;
                "font-kerning"?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                "font-language-override"?: string | undefined;
                "font-optical-sizing"?: import("_csstype@2.6.20@csstype").FontOpticalSizingProperty | undefined;
                "font-size"?: import("_csstype@2.6.20@csstype").FontSizeProperty<string | number> | undefined;
                "font-size-adjust"?: import("_csstype@2.6.20@csstype").FontSizeAdjustProperty | undefined;
                "font-smooth"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                "font-stretch"?: string | undefined;
                "font-style"?: string | undefined;
                "font-synthesis"?: string | undefined;
                "font-variant"?: string | undefined;
                "font-variant-alternates"?: string | undefined;
                "font-variant-caps"?: import("_csstype@2.6.20@csstype").FontVariantCapsProperty | undefined;
                "font-variant-east-asian"?: string | undefined;
                "font-variant-ligatures"?: string | undefined;
                "font-variant-numeric"?: string | undefined;
                "font-variant-position"?: import("_csstype@2.6.20@csstype").FontVariantPositionProperty | undefined;
                "font-variation-settings"?: string | undefined;
                "font-weight"?: import("_csstype@2.6.20@csstype").FontWeightProperty | undefined;
                "forced-color-adjust"?: import("_csstype@2.6.20@csstype").ForcedColorAdjustProperty | undefined;
                "grid-auto-columns"?: import("_csstype@2.6.20@csstype").GridAutoColumnsProperty<string | number> | undefined;
                "grid-auto-flow"?: string | undefined;
                "grid-auto-rows"?: import("_csstype@2.6.20@csstype").GridAutoRowsProperty<string | number> | undefined;
                "grid-column-end"?: import("_csstype@2.6.20@csstype").GridColumnEndProperty | undefined;
                "grid-column-start"?: import("_csstype@2.6.20@csstype").GridColumnStartProperty | undefined;
                "grid-row-end"?: import("_csstype@2.6.20@csstype").GridRowEndProperty | undefined;
                "grid-row-start"?: import("_csstype@2.6.20@csstype").GridRowStartProperty | undefined;
                "grid-template-areas"?: string | undefined;
                "grid-template-columns"?: import("_csstype@2.6.20@csstype").GridTemplateColumnsProperty<string | number> | undefined;
                "grid-template-rows"?: import("_csstype@2.6.20@csstype").GridTemplateRowsProperty<string | number> | undefined;
                "hanging-punctuation"?: string | undefined;
                "hyphenate-character"?: string | undefined;
                "image-orientation"?: string | undefined;
                "image-rendering"?: import("_csstype@2.6.20@csstype").ImageRenderingProperty | undefined;
                "image-resolution"?: string | undefined;
                "initial-letter"?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                "inline-size"?: import("_csstype@2.6.20@csstype").InlineSizeProperty<string | number> | undefined;
                "input-security"?: import("_csstype@2.6.20@csstype").InputSecurityProperty | undefined;
                "inset-block"?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                "inset-block-end"?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                "inset-block-start"?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                "inset-inline"?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                "inset-inline-end"?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                "inset-inline-start"?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                "justify-content"?: string | undefined;
                "justify-items"?: string | undefined;
                "justify-self"?: string | undefined;
                "justify-tracks"?: string | undefined;
                "letter-spacing"?: import("_csstype@2.6.20@csstype").LetterSpacingProperty<string | number> | undefined;
                "line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "line-height"?: import("_csstype@2.6.20@csstype").LineHeightProperty<string | number> | undefined;
                "line-height-step"?: import("_csstype@2.6.20@csstype").LineHeightStepProperty<string | number> | undefined;
                "list-style-image"?: string | undefined;
                "list-style-position"?: import("_csstype@2.6.20@csstype").ListStylePositionProperty | undefined;
                "list-style-type"?: string | undefined;
                "margin-block"?: import("_csstype@2.6.20@csstype").MarginBlockProperty<string | number> | undefined;
                "margin-block-end"?: import("_csstype@2.6.20@csstype").MarginBlockEndProperty<string | number> | undefined;
                "margin-block-start"?: import("_csstype@2.6.20@csstype").MarginBlockStartProperty<string | number> | undefined;
                "margin-bottom"?: import("_csstype@2.6.20@csstype").MarginBottomProperty<string | number> | undefined;
                "margin-inline"?: import("_csstype@2.6.20@csstype").MarginInlineProperty<string | number> | undefined;
                "margin-inline-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                "margin-inline-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                "margin-left"?: import("_csstype@2.6.20@csstype").MarginLeftProperty<string | number> | undefined;
                "margin-right"?: import("_csstype@2.6.20@csstype").MarginRightProperty<string | number> | undefined;
                "margin-top"?: import("_csstype@2.6.20@csstype").MarginTopProperty<string | number> | undefined;
                "mask-border-mode"?: import("_csstype@2.6.20@csstype").MaskBorderModeProperty | undefined;
                "mask-border-outset"?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                "mask-border-repeat"?: string | undefined;
                "mask-border-slice"?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                "mask-border-source"?: string | undefined;
                "mask-border-width"?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                "mask-clip"?: string | undefined;
                "mask-composite"?: string | undefined;
                "mask-image"?: string | undefined;
                "mask-mode"?: string | undefined;
                "mask-origin"?: string | undefined;
                "mask-position"?: import("_csstype@2.6.20@csstype").MaskPositionProperty<string | number> | undefined;
                "mask-repeat"?: string | undefined;
                "mask-size"?: import("_csstype@2.6.20@csstype").MaskSizeProperty<string | number> | undefined;
                "mask-type"?: import("_csstype@2.6.20@csstype").MaskTypeProperty | undefined;
                "math-style"?: import("_csstype@2.6.20@csstype").MathStyleProperty | undefined;
                "max-block-size"?: import("_csstype@2.6.20@csstype").MaxBlockSizeProperty<string | number> | undefined;
                "max-height"?: import("_csstype@2.6.20@csstype").MaxHeightProperty<string | number> | undefined;
                "max-inline-size"?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                "max-lines"?: import("_csstype@2.6.20@csstype").MaxLinesProperty | undefined;
                "max-width"?: import("_csstype@2.6.20@csstype").MaxWidthProperty<string | number> | undefined;
                "min-block-size"?: import("_csstype@2.6.20@csstype").MinBlockSizeProperty<string | number> | undefined;
                "min-height"?: import("_csstype@2.6.20@csstype").MinHeightProperty<string | number> | undefined;
                "min-inline-size"?: import("_csstype@2.6.20@csstype").MinInlineSizeProperty<string | number> | undefined;
                "min-width"?: import("_csstype@2.6.20@csstype").MinWidthProperty<string | number> | undefined;
                "mix-blend-mode"?: import("_csstype@2.6.20@csstype").MixBlendModeProperty | undefined;
                "motion-distance"?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                "motion-path"?: string | undefined;
                "motion-rotation"?: string | undefined;
                "object-fit"?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                "object-position"?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                "offset-anchor"?: import("_csstype@2.6.20@csstype").OffsetAnchorProperty<string | number> | undefined;
                "offset-distance"?: import("_csstype@2.6.20@csstype").OffsetDistanceProperty<string | number> | undefined;
                "offset-path"?: string | undefined;
                "offset-rotate"?: string | undefined;
                "offset-rotation"?: string | undefined;
                "outline-color"?: string | undefined;
                "outline-offset"?: import("_csstype@2.6.20@csstype").OutlineOffsetProperty<string | number> | undefined;
                "outline-style"?: string | undefined;
                "outline-width"?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                "overflow-anchor"?: import("_csstype@2.6.20@csstype").OverflowAnchorProperty | undefined;
                "overflow-block"?: import("_csstype@2.6.20@csstype").OverflowBlockProperty | undefined;
                "overflow-clip-box"?: import("_csstype@2.6.20@csstype").OverflowClipBoxProperty | undefined;
                "overflow-clip-margin"?: import("_csstype@2.6.20@csstype").OverflowClipMarginProperty<string | number> | undefined;
                "overflow-inline"?: import("_csstype@2.6.20@csstype").OverflowInlineProperty | undefined;
                "overflow-wrap"?: import("_csstype@2.6.20@csstype").OverflowWrapProperty | undefined;
                "overflow-x"?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                "overflow-y"?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                "overscroll-behavior-block"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorBlockProperty | undefined;
                "overscroll-behavior-inline"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorInlineProperty | undefined;
                "overscroll-behavior-x"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorXProperty | undefined;
                "overscroll-behavior-y"?: import("_csstype@2.6.20@csstype").OverscrollBehaviorYProperty | undefined;
                "padding-block"?: import("_csstype@2.6.20@csstype").PaddingBlockProperty<string | number> | undefined;
                "padding-block-end"?: import("_csstype@2.6.20@csstype").PaddingBlockEndProperty<string | number> | undefined;
                "padding-block-start"?: import("_csstype@2.6.20@csstype").PaddingBlockStartProperty<string | number> | undefined;
                "padding-bottom"?: import("_csstype@2.6.20@csstype").PaddingBottomProperty<string | number> | undefined;
                "padding-inline"?: import("_csstype@2.6.20@csstype").PaddingInlineProperty<string | number> | undefined;
                "padding-inline-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                "padding-inline-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                "padding-left"?: import("_csstype@2.6.20@csstype").PaddingLeftProperty<string | number> | undefined;
                "padding-right"?: import("_csstype@2.6.20@csstype").PaddingRightProperty<string | number> | undefined;
                "padding-top"?: import("_csstype@2.6.20@csstype").PaddingTopProperty<string | number> | undefined;
                "page-break-after"?: import("_csstype@2.6.20@csstype").PageBreakAfterProperty | undefined;
                "page-break-before"?: import("_csstype@2.6.20@csstype").PageBreakBeforeProperty | undefined;
                "page-break-inside"?: import("_csstype@2.6.20@csstype").PageBreakInsideProperty | undefined;
                "paint-order"?: string | undefined;
                "perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                "place-content"?: string | undefined;
                "pointer-events"?: import("_csstype@2.6.20@csstype").PointerEventsProperty | undefined;
                "print-color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                "row-gap"?: import("_csstype@2.6.20@csstype").RowGapProperty<string | number> | undefined;
                "ruby-align"?: import("_csstype@2.6.20@csstype").RubyAlignProperty | undefined;
                "ruby-merge"?: import("_csstype@2.6.20@csstype").RubyMergeProperty | undefined;
                "ruby-position"?: string | undefined;
                "scroll-behavior"?: import("_csstype@2.6.20@csstype").ScrollBehaviorProperty | undefined;
                "scroll-margin"?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                "scroll-margin-block"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockProperty<string | number> | undefined;
                "scroll-margin-block-end"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockEndProperty<string | number> | undefined;
                "scroll-margin-block-start"?: import("_csstype@2.6.20@csstype").ScrollMarginBlockStartProperty<string | number> | undefined;
                "scroll-margin-bottom"?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                "scroll-margin-inline"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineProperty<string | number> | undefined;
                "scroll-margin-inline-end"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineEndProperty<string | number> | undefined;
                "scroll-margin-inline-start"?: import("_csstype@2.6.20@csstype").ScrollMarginInlineStartProperty<string | number> | undefined;
                "scroll-margin-left"?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                "scroll-margin-right"?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                "scroll-margin-top"?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                "scroll-padding"?: import("_csstype@2.6.20@csstype").ScrollPaddingProperty<string | number> | undefined;
                "scroll-padding-block"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockProperty<string | number> | undefined;
                "scroll-padding-block-end"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockEndProperty<string | number> | undefined;
                "scroll-padding-block-start"?: import("_csstype@2.6.20@csstype").ScrollPaddingBlockStartProperty<string | number> | undefined;
                "scroll-padding-bottom"?: import("_csstype@2.6.20@csstype").ScrollPaddingBottomProperty<string | number> | undefined;
                "scroll-padding-inline"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineProperty<string | number> | undefined;
                "scroll-padding-inline-end"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineEndProperty<string | number> | undefined;
                "scroll-padding-inline-start"?: import("_csstype@2.6.20@csstype").ScrollPaddingInlineStartProperty<string | number> | undefined;
                "scroll-padding-left"?: import("_csstype@2.6.20@csstype").ScrollPaddingLeftProperty<string | number> | undefined;
                "scroll-padding-right"?: import("_csstype@2.6.20@csstype").ScrollPaddingRightProperty<string | number> | undefined;
                "scroll-padding-top"?: import("_csstype@2.6.20@csstype").ScrollPaddingTopProperty<string | number> | undefined;
                "scroll-snap-align"?: string | undefined;
                "scroll-snap-margin"?: import("_csstype@2.6.20@csstype").ScrollMarginProperty<string | number> | undefined;
                "scroll-snap-margin-bottom"?: import("_csstype@2.6.20@csstype").ScrollMarginBottomProperty<string | number> | undefined;
                "scroll-snap-margin-left"?: import("_csstype@2.6.20@csstype").ScrollMarginLeftProperty<string | number> | undefined;
                "scroll-snap-margin-right"?: import("_csstype@2.6.20@csstype").ScrollMarginRightProperty<string | number> | undefined;
                "scroll-snap-margin-top"?: import("_csstype@2.6.20@csstype").ScrollMarginTopProperty<string | number> | undefined;
                "scroll-snap-stop"?: import("_csstype@2.6.20@csstype").ScrollSnapStopProperty | undefined;
                "scroll-snap-type"?: string | undefined;
                "scrollbar-color"?: string | undefined;
                "scrollbar-gutter"?: string | undefined;
                "scrollbar-width"?: import("_csstype@2.6.20@csstype").ScrollbarWidthProperty | undefined;
                "shape-image-threshold"?: import("_csstype@2.6.20@csstype").ShapeImageThresholdProperty | undefined;
                "shape-margin"?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                "shape-outside"?: string | undefined;
                "tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                "table-layout"?: import("_csstype@2.6.20@csstype").TableLayoutProperty | undefined;
                "text-align"?: import("_csstype@2.6.20@csstype").TextAlignProperty | undefined;
                "text-align-last"?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                "text-combine-upright"?: string | undefined;
                "text-decoration-color"?: string | undefined;
                "text-decoration-line"?: string | undefined;
                "text-decoration-skip"?: string | undefined;
                "text-decoration-skip-ink"?: import("_csstype@2.6.20@csstype").TextDecorationSkipInkProperty | undefined;
                "text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                "text-decoration-thickness"?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                "text-decoration-width"?: import("_csstype@2.6.20@csstype").TextDecorationThicknessProperty<string | number> | undefined;
                "text-emphasis-color"?: string | undefined;
                "text-emphasis-position"?: string | undefined;
                "text-emphasis-style"?: string | undefined;
                "text-indent"?: import("_csstype@2.6.20@csstype").TextIndentProperty<string | number> | undefined;
                "text-justify"?: import("_csstype@2.6.20@csstype").TextJustifyProperty | undefined;
                "text-orientation"?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                "text-overflow"?: string | undefined;
                "text-rendering"?: import("_csstype@2.6.20@csstype").TextRenderingProperty | undefined;
                "text-shadow"?: string | undefined;
                "text-size-adjust"?: string | undefined;
                "text-transform"?: import("_csstype@2.6.20@csstype").TextTransformProperty | undefined;
                "text-underline-offset"?: import("_csstype@2.6.20@csstype").TextUnderlineOffsetProperty<string | number> | undefined;
                "text-underline-position"?: string | undefined;
                "touch-action"?: string | undefined;
                "transform-box"?: import("_csstype@2.6.20@csstype").TransformBoxProperty | undefined;
                "transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                "transition-delay"?: string | undefined;
                "transition-duration"?: string | undefined;
                "transition-property"?: string | undefined;
                "transition-timing-function"?: string | undefined;
                "unicode-bidi"?: import("_csstype@2.6.20@csstype").UnicodeBidiProperty | undefined;
                "user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "vertical-align"?: import("_csstype@2.6.20@csstype").VerticalAlignProperty<string | number> | undefined;
                "white-space"?: import("_csstype@2.6.20@csstype").WhiteSpaceProperty | undefined;
                "will-change"?: string | undefined;
                "word-break"?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                "word-spacing"?: import("_csstype@2.6.20@csstype").WordSpacingProperty<string | number> | undefined;
                "word-wrap"?: import("_csstype@2.6.20@csstype").WordWrapProperty | undefined;
                "writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                "z-index"?: import("_csstype@2.6.20@csstype").ZIndexProperty | undefined;
                "background-position"?: import("_csstype@2.6.20@csstype").BackgroundPositionProperty<string | number> | undefined;
                "border-block"?: import("_csstype@2.6.20@csstype").BorderBlockProperty<string | number> | undefined;
                "border-block-end"?: import("_csstype@2.6.20@csstype").BorderBlockEndProperty<string | number> | undefined;
                "border-block-start"?: import("_csstype@2.6.20@csstype").BorderBlockStartProperty<string | number> | undefined;
                "border-bottom"?: import("_csstype@2.6.20@csstype").BorderBottomProperty<string | number> | undefined;
                "border-color"?: string | undefined;
                "border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "border-inline"?: import("_csstype@2.6.20@csstype").BorderInlineProperty<string | number> | undefined;
                "border-inline-end"?: import("_csstype@2.6.20@csstype").BorderInlineEndProperty<string | number> | undefined;
                "border-inline-start"?: import("_csstype@2.6.20@csstype").BorderInlineStartProperty<string | number> | undefined;
                "border-left"?: import("_csstype@2.6.20@csstype").BorderLeftProperty<string | number> | undefined;
                "border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                "border-right"?: import("_csstype@2.6.20@csstype").BorderRightProperty<string | number> | undefined;
                "border-style"?: string | undefined;
                "border-top"?: import("_csstype@2.6.20@csstype").BorderTopProperty<string | number> | undefined;
                "border-width"?: import("_csstype@2.6.20@csstype").BorderWidthProperty<string | number> | undefined;
                "column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                "flex-flow"?: string | undefined;
                "grid-area"?: import("_csstype@2.6.20@csstype").GridAreaProperty | undefined;
                "grid-column"?: import("_csstype@2.6.20@csstype").GridColumnProperty | undefined;
                "grid-row"?: import("_csstype@2.6.20@csstype").GridRowProperty | undefined;
                "grid-template"?: string | undefined;
                "line-clamp"?: import("_csstype@2.6.20@csstype").LineClampProperty | undefined;
                "list-style"?: string | undefined;
                "mask-border"?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                "overscroll-behavior"?: string | undefined;
                "place-items"?: string | undefined;
                "place-self"?: string | undefined;
                "text-decoration"?: import("_csstype@2.6.20@csstype").TextDecorationProperty<string | number> | undefined;
                "text-emphasis"?: string | undefined;
                "-moz-animation-delay"?: string | undefined;
                "-moz-animation-direction"?: string | undefined;
                "-moz-animation-duration"?: string | undefined;
                "-moz-animation-fill-mode"?: string | undefined;
                "-moz-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "-moz-animation-name"?: string | undefined;
                "-moz-animation-play-state"?: string | undefined;
                "-moz-animation-timing-function"?: string | undefined;
                "-moz-appearance"?: import("_csstype@2.6.20@csstype").MozAppearanceProperty | undefined;
                "-moz-backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                "-moz-border-bottom-colors"?: string | undefined;
                "-moz-border-end-color"?: string | undefined;
                "-moz-border-end-style"?: import("_csstype@2.6.20@csstype").BorderInlineEndStyleProperty | undefined;
                "-moz-border-end-width"?: import("_csstype@2.6.20@csstype").BorderInlineEndWidthProperty<string | number> | undefined;
                "-moz-border-left-colors"?: string | undefined;
                "-moz-border-right-colors"?: string | undefined;
                "-moz-border-start-color"?: string | undefined;
                "-moz-border-start-style"?: import("_csstype@2.6.20@csstype").BorderInlineStartStyleProperty | undefined;
                "-moz-border-top-colors"?: string | undefined;
                "-moz-box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                "-moz-column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                "-moz-column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                "-moz-column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                "-moz-column-rule-color"?: string | undefined;
                "-moz-column-rule-style"?: string | undefined;
                "-moz-column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                "-moz-column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                "-moz-context-properties"?: string | undefined;
                "-moz-font-feature-settings"?: string | undefined;
                "-moz-font-language-override"?: string | undefined;
                "-moz-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                "-moz-image-region"?: string | undefined;
                "-moz-margin-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                "-moz-margin-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                "-moz-orient"?: import("_csstype@2.6.20@csstype").MozOrientProperty | undefined;
                "-moz-osx-font-smoothing"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                "-moz-padding-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                "-moz-padding-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                "-moz-perspective"?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                "-moz-perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                "-moz-stack-sizing"?: import("_csstype@2.6.20@csstype").MozStackSizingProperty | undefined;
                "-moz-tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                "-moz-text-blink"?: import("_csstype@2.6.20@csstype").MozTextBlinkProperty | undefined;
                "-moz-text-size-adjust"?: string | undefined;
                "-moz-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-moz-transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                "-moz-transition-delay"?: string | undefined;
                "-moz-transition-duration"?: string | undefined;
                "-moz-transition-property"?: string | undefined;
                "-moz-transition-timing-function"?: string | undefined;
                "-moz-user-focus"?: import("_csstype@2.6.20@csstype").MozUserFocusProperty | undefined;
                "-moz-user-modify"?: import("_csstype@2.6.20@csstype").MozUserModifyProperty | undefined;
                "-moz-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "-moz-window-dragging"?: import("_csstype@2.6.20@csstype").MozWindowDraggingProperty | undefined;
                "-moz-window-shadow"?: import("_csstype@2.6.20@csstype").MozWindowShadowProperty | undefined;
                "-ms-accelerator"?: import("_csstype@2.6.20@csstype").MsAcceleratorProperty | undefined;
                "-ms-align-self"?: string | undefined;
                "-ms-block-progression"?: import("_csstype@2.6.20@csstype").MsBlockProgressionProperty | undefined;
                "-ms-content-zoom-chaining"?: import("_csstype@2.6.20@csstype").MsContentZoomChainingProperty | undefined;
                "-ms-content-zoom-limit-max"?: string | undefined;
                "-ms-content-zoom-limit-min"?: string | undefined;
                "-ms-content-zoom-snap-points"?: string | undefined;
                "-ms-content-zoom-snap-type"?: import("_csstype@2.6.20@csstype").MsContentZoomSnapTypeProperty | undefined;
                "-ms-content-zooming"?: import("_csstype@2.6.20@csstype").MsContentZoomingProperty | undefined;
                "-ms-filter"?: string | undefined;
                "-ms-flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                "-ms-flex-positive"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-ms-flow-from"?: string | undefined;
                "-ms-flow-into"?: string | undefined;
                "-ms-grid-columns"?: import("_csstype@2.6.20@csstype").MsGridColumnsProperty<string | number> | undefined;
                "-ms-grid-rows"?: import("_csstype@2.6.20@csstype").MsGridRowsProperty<string | number> | undefined;
                "-ms-high-contrast-adjust"?: import("_csstype@2.6.20@csstype").MsHighContrastAdjustProperty | undefined;
                "-ms-hyphenate-limit-chars"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitCharsProperty | undefined;
                "-ms-hyphenate-limit-lines"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitLinesProperty | undefined;
                "-ms-hyphenate-limit-zone"?: import("_csstype@2.6.20@csstype").MsHyphenateLimitZoneProperty<string | number> | undefined;
                "-ms-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                "-ms-ime-align"?: import("_csstype@2.6.20@csstype").MsImeAlignProperty | undefined;
                "-ms-justify-self"?: string | undefined;
                "-ms-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "-ms-order"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-ms-overflow-style"?: import("_csstype@2.6.20@csstype").MsOverflowStyleProperty | undefined;
                "-ms-overflow-x"?: import("_csstype@2.6.20@csstype").OverflowXProperty | undefined;
                "-ms-overflow-y"?: import("_csstype@2.6.20@csstype").OverflowYProperty | undefined;
                "-ms-scroll-chaining"?: import("_csstype@2.6.20@csstype").MsScrollChainingProperty | undefined;
                "-ms-scroll-limit-x-max"?: import("_csstype@2.6.20@csstype").MsScrollLimitXMaxProperty<string | number> | undefined;
                "-ms-scroll-limit-x-min"?: import("_csstype@2.6.20@csstype").MsScrollLimitXMinProperty<string | number> | undefined;
                "-ms-scroll-limit-y-max"?: import("_csstype@2.6.20@csstype").MsScrollLimitYMaxProperty<string | number> | undefined;
                "-ms-scroll-limit-y-min"?: import("_csstype@2.6.20@csstype").MsScrollLimitYMinProperty<string | number> | undefined;
                "-ms-scroll-rails"?: import("_csstype@2.6.20@csstype").MsScrollRailsProperty | undefined;
                "-ms-scroll-snap-points-x"?: string | undefined;
                "-ms-scroll-snap-points-y"?: string | undefined;
                "-ms-scroll-snap-type"?: import("_csstype@2.6.20@csstype").MsScrollSnapTypeProperty | undefined;
                "-ms-scroll-translation"?: import("_csstype@2.6.20@csstype").MsScrollTranslationProperty | undefined;
                "-ms-scrollbar-3dlight-color"?: string | undefined;
                "-ms-scrollbar-arrow-color"?: string | undefined;
                "-ms-scrollbar-base-color"?: string | undefined;
                "-ms-scrollbar-darkshadow-color"?: string | undefined;
                "-ms-scrollbar-face-color"?: string | undefined;
                "-ms-scrollbar-highlight-color"?: string | undefined;
                "-ms-scrollbar-shadow-color"?: string | undefined;
                "-ms-text-autospace"?: import("_csstype@2.6.20@csstype").MsTextAutospaceProperty | undefined;
                "-ms-text-combine-horizontal"?: string | undefined;
                "-ms-text-overflow"?: string | undefined;
                "-ms-touch-action"?: string | undefined;
                "-ms-touch-select"?: import("_csstype@2.6.20@csstype").MsTouchSelectProperty | undefined;
                "-ms-transform"?: string | undefined;
                "-ms-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-ms-transition-delay"?: string | undefined;
                "-ms-transition-duration"?: string | undefined;
                "-ms-transition-property"?: string | undefined;
                "-ms-transition-timing-function"?: string | undefined;
                "-ms-user-select"?: import("_csstype@2.6.20@csstype").MsUserSelectProperty | undefined;
                "-ms-word-break"?: import("_csstype@2.6.20@csstype").WordBreakProperty | undefined;
                "-ms-wrap-flow"?: import("_csstype@2.6.20@csstype").MsWrapFlowProperty | undefined;
                "-ms-wrap-margin"?: import("_csstype@2.6.20@csstype").MsWrapMarginProperty<string | number> | undefined;
                "-ms-wrap-through"?: import("_csstype@2.6.20@csstype").MsWrapThroughProperty | undefined;
                "-ms-writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                "-webkit-align-content"?: string | undefined;
                "-webkit-align-items"?: string | undefined;
                "-webkit-align-self"?: string | undefined;
                "-webkit-animation-delay"?: string | undefined;
                "-webkit-animation-direction"?: string | undefined;
                "-webkit-animation-duration"?: string | undefined;
                "-webkit-animation-fill-mode"?: string | undefined;
                "-webkit-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "-webkit-animation-name"?: string | undefined;
                "-webkit-animation-play-state"?: string | undefined;
                "-webkit-animation-timing-function"?: string | undefined;
                "-webkit-appearance"?: import("_csstype@2.6.20@csstype").WebkitAppearanceProperty | undefined;
                "-webkit-backdrop-filter"?: string | undefined;
                "-webkit-backface-visibility"?: import("_csstype@2.6.20@csstype").BackfaceVisibilityProperty | undefined;
                "-webkit-background-clip"?: string | undefined;
                "-webkit-background-origin"?: string | undefined;
                "-webkit-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "-webkit-border-before-color"?: string | undefined;
                "-webkit-border-before-style"?: string | undefined;
                "-webkit-border-before-width"?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeWidthProperty<string | number> | undefined;
                "-webkit-border-bottom-left-radius"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                "-webkit-border-bottom-right-radius"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                "-webkit-border-image-slice"?: import("_csstype@2.6.20@csstype").BorderImageSliceProperty | undefined;
                "-webkit-border-top-left-radius"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                "-webkit-border-top-right-radius"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                "-webkit-box-decoration-break"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                "-webkit-box-reflect"?: import("_csstype@2.6.20@csstype").WebkitBoxReflectProperty<string | number> | undefined;
                "-webkit-box-shadow"?: string | undefined;
                "-webkit-box-sizing"?: import("_csstype@2.6.20@csstype").BoxSizingProperty | undefined;
                "-webkit-clip-path"?: string | undefined;
                "-webkit-column-count"?: import("_csstype@2.6.20@csstype").ColumnCountProperty | undefined;
                "-webkit-column-fill"?: import("_csstype@2.6.20@csstype").ColumnFillProperty | undefined;
                "-webkit-column-gap"?: import("_csstype@2.6.20@csstype").ColumnGapProperty<string | number> | undefined;
                "-webkit-column-rule-color"?: string | undefined;
                "-webkit-column-rule-style"?: string | undefined;
                "-webkit-column-rule-width"?: import("_csstype@2.6.20@csstype").ColumnRuleWidthProperty<string | number> | undefined;
                "-webkit-column-span"?: import("_csstype@2.6.20@csstype").ColumnSpanProperty | undefined;
                "-webkit-column-width"?: import("_csstype@2.6.20@csstype").ColumnWidthProperty<string | number> | undefined;
                "-webkit-filter"?: string | undefined;
                "-webkit-flex-basis"?: import("_csstype@2.6.20@csstype").FlexBasisProperty<string | number> | undefined;
                "-webkit-flex-direction"?: import("_csstype@2.6.20@csstype").FlexDirectionProperty | undefined;
                "-webkit-flex-grow"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-flex-shrink"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-flex-wrap"?: import("_csstype@2.6.20@csstype").FlexWrapProperty | undefined;
                "-webkit-font-feature-settings"?: string | undefined;
                "-webkit-font-kerning"?: import("_csstype@2.6.20@csstype").FontKerningProperty | undefined;
                "-webkit-font-smoothing"?: import("_csstype@2.6.20@csstype").FontSmoothProperty<string | number> | undefined;
                "-webkit-font-variant-ligatures"?: string | undefined;
                "-webkit-hyphenate-character"?: string | undefined;
                "-webkit-hyphens"?: import("_csstype@2.6.20@csstype").HyphensProperty | undefined;
                "-webkit-initial-letter"?: import("_csstype@2.6.20@csstype").InitialLetterProperty | undefined;
                "-webkit-justify-content"?: string | undefined;
                "-webkit-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "-webkit-line-clamp"?: import("_csstype@2.6.20@csstype").WebkitLineClampProperty | undefined;
                "-webkit-margin-end"?: import("_csstype@2.6.20@csstype").MarginInlineEndProperty<string | number> | undefined;
                "-webkit-margin-start"?: import("_csstype@2.6.20@csstype").MarginInlineStartProperty<string | number> | undefined;
                "-webkit-mask-attachment"?: string | undefined;
                "-webkit-mask-box-image-outset"?: import("_csstype@2.6.20@csstype").MaskBorderOutsetProperty<string | number> | undefined;
                "-webkit-mask-box-image-repeat"?: string | undefined;
                "-webkit-mask-box-image-slice"?: import("_csstype@2.6.20@csstype").MaskBorderSliceProperty | undefined;
                "-webkit-mask-box-image-source"?: string | undefined;
                "-webkit-mask-box-image-width"?: import("_csstype@2.6.20@csstype").MaskBorderWidthProperty<string | number> | undefined;
                "-webkit-mask-clip"?: string | undefined;
                "-webkit-mask-composite"?: string | undefined;
                "-webkit-mask-image"?: string | undefined;
                "-webkit-mask-origin"?: string | undefined;
                "-webkit-mask-position"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionProperty<string | number> | undefined;
                "-webkit-mask-position-x"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionXProperty<string | number> | undefined;
                "-webkit-mask-position-y"?: import("_csstype@2.6.20@csstype").WebkitMaskPositionYProperty<string | number> | undefined;
                "-webkit-mask-repeat"?: string | undefined;
                "-webkit-mask-repeat-x"?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatXProperty | undefined;
                "-webkit-mask-repeat-y"?: import("_csstype@2.6.20@csstype").WebkitMaskRepeatYProperty | undefined;
                "-webkit-mask-size"?: import("_csstype@2.6.20@csstype").WebkitMaskSizeProperty<string | number> | undefined;
                "-webkit-max-inline-size"?: import("_csstype@2.6.20@csstype").MaxInlineSizeProperty<string | number> | undefined;
                "-webkit-order"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-overflow-scrolling"?: import("_csstype@2.6.20@csstype").WebkitOverflowScrollingProperty | undefined;
                "-webkit-padding-end"?: import("_csstype@2.6.20@csstype").PaddingInlineEndProperty<string | number> | undefined;
                "-webkit-padding-start"?: import("_csstype@2.6.20@csstype").PaddingInlineStartProperty<string | number> | undefined;
                "-webkit-perspective"?: import("_csstype@2.6.20@csstype").PerspectiveProperty<string | number> | undefined;
                "-webkit-perspective-origin"?: import("_csstype@2.6.20@csstype").PerspectiveOriginProperty<string | number> | undefined;
                "-webkit-print-color-adjust"?: import("_csstype@2.6.20@csstype").PrintColorAdjustProperty | undefined;
                "-webkit-ruby-position"?: string | undefined;
                "-webkit-scroll-snap-type"?: string | undefined;
                "-webkit-shape-margin"?: import("_csstype@2.6.20@csstype").ShapeMarginProperty<string | number> | undefined;
                "-webkit-tap-highlight-color"?: string | undefined;
                "-webkit-text-combine"?: string | undefined;
                "-webkit-text-decoration-color"?: string | undefined;
                "-webkit-text-decoration-line"?: string | undefined;
                "-webkit-text-decoration-skip"?: string | undefined;
                "-webkit-text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                "-webkit-text-emphasis-color"?: string | undefined;
                "-webkit-text-emphasis-position"?: string | undefined;
                "-webkit-text-emphasis-style"?: string | undefined;
                "-webkit-text-fill-color"?: string | undefined;
                "-webkit-text-orientation"?: import("_csstype@2.6.20@csstype").TextOrientationProperty | undefined;
                "-webkit-text-size-adjust"?: string | undefined;
                "-webkit-text-stroke-color"?: string | undefined;
                "-webkit-text-stroke-width"?: import("_csstype@2.6.20@csstype").WebkitTextStrokeWidthProperty<string | number> | undefined;
                "-webkit-text-underline-position"?: string | undefined;
                "-webkit-touch-callout"?: import("_csstype@2.6.20@csstype").WebkitTouchCalloutProperty | undefined;
                "-webkit-transform"?: string | undefined;
                "-webkit-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-webkit-transform-style"?: import("_csstype@2.6.20@csstype").TransformStyleProperty | undefined;
                "-webkit-transition-delay"?: string | undefined;
                "-webkit-transition-duration"?: string | undefined;
                "-webkit-transition-property"?: string | undefined;
                "-webkit-transition-timing-function"?: string | undefined;
                "-webkit-user-modify"?: import("_csstype@2.6.20@csstype").WebkitUserModifyProperty | undefined;
                "-webkit-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "-webkit-writing-mode"?: import("_csstype@2.6.20@csstype").WritingModeProperty | undefined;
                "-moz-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                "-moz-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "-moz-column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                "-moz-columns"?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                "-moz-transition"?: string | undefined;
                "-ms-content-zoom-limit"?: string | undefined;
                "-ms-content-zoom-snap"?: string | undefined;
                "-ms-flex"?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                "-ms-scroll-limit"?: string | undefined;
                "-ms-scroll-snap-x"?: string | undefined;
                "-ms-scroll-snap-y"?: string | undefined;
                "-ms-transition"?: string | undefined;
                "-webkit-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                "-webkit-border-before"?: import("_csstype@2.6.20@csstype").WebkitBorderBeforeProperty<string | number> | undefined;
                "-webkit-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "-webkit-border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                "-webkit-column-rule"?: import("_csstype@2.6.20@csstype").ColumnRuleProperty<string | number> | undefined;
                "-webkit-columns"?: import("_csstype@2.6.20@csstype").ColumnsProperty<string | number> | undefined;
                "-webkit-flex"?: import("_csstype@2.6.20@csstype").FlexProperty<string | number> | undefined;
                "-webkit-flex-flow"?: string | undefined;
                "-webkit-mask"?: import("_csstype@2.6.20@csstype").WebkitMaskProperty<string | number> | undefined;
                "-webkit-mask-box-image"?: import("_csstype@2.6.20@csstype").MaskBorderProperty | undefined;
                "-webkit-text-emphasis"?: string | undefined;
                "-webkit-text-stroke"?: import("_csstype@2.6.20@csstype").WebkitTextStrokeProperty<string | number> | undefined;
                "-webkit-transition"?: string | undefined;
                "box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                "box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "grid-column-gap"?: import("_csstype@2.6.20@csstype").GridColumnGapProperty<string | number> | undefined;
                "grid-gap"?: import("_csstype@2.6.20@csstype").GridGapProperty<string | number> | undefined;
                "grid-row-gap"?: import("_csstype@2.6.20@csstype").GridRowGapProperty<string | number> | undefined;
                "ime-mode"?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                "offset-block"?: import("_csstype@2.6.20@csstype").InsetBlockProperty<string | number> | undefined;
                "offset-block-end"?: import("_csstype@2.6.20@csstype").InsetBlockEndProperty<string | number> | undefined;
                "offset-block-start"?: import("_csstype@2.6.20@csstype").InsetBlockStartProperty<string | number> | undefined;
                "offset-inline"?: import("_csstype@2.6.20@csstype").InsetInlineProperty<string | number> | undefined;
                "offset-inline-end"?: import("_csstype@2.6.20@csstype").InsetInlineEndProperty<string | number> | undefined;
                "offset-inline-start"?: import("_csstype@2.6.20@csstype").InsetInlineStartProperty<string | number> | undefined;
                "scroll-snap-coordinate"?: import("_csstype@2.6.20@csstype").ScrollSnapCoordinateProperty<string | number> | undefined;
                "scroll-snap-destination"?: import("_csstype@2.6.20@csstype").ScrollSnapDestinationProperty<string | number> | undefined;
                "scroll-snap-points-x"?: string | undefined;
                "scroll-snap-points-y"?: string | undefined;
                "scroll-snap-type-x"?: import("_csstype@2.6.20@csstype").ScrollSnapTypeXProperty | undefined;
                "scroll-snap-type-y"?: import("_csstype@2.6.20@csstype").ScrollSnapTypeYProperty | undefined;
                "scrollbar-track-color"?: string | undefined;
                "-khtml-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "-khtml-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "-khtml-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-khtml-box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-khtml-box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                "-khtml-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-khtml-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "-khtml-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "-khtml-line-break"?: import("_csstype@2.6.20@csstype").LineBreakProperty | undefined;
                "-khtml-opacity"?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                "-khtml-user-select"?: import("_csstype@2.6.20@csstype").UserSelectProperty | undefined;
                "-moz-background-clip"?: string | undefined;
                "-moz-background-inline-policy"?: import("_csstype@2.6.20@csstype").BoxDecorationBreakProperty | undefined;
                "-moz-background-origin"?: string | undefined;
                "-moz-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "-moz-binding"?: string | undefined;
                "-moz-border-radius"?: import("_csstype@2.6.20@csstype").BorderRadiusProperty<string | number> | undefined;
                "-moz-border-radius-bottomleft"?: import("_csstype@2.6.20@csstype").BorderBottomLeftRadiusProperty<string | number> | undefined;
                "-moz-border-radius-bottomright"?: import("_csstype@2.6.20@csstype").BorderBottomRightRadiusProperty<string | number> | undefined;
                "-moz-border-radius-topleft"?: import("_csstype@2.6.20@csstype").BorderTopLeftRadiusProperty<string | number> | undefined;
                "-moz-border-radius-topright"?: import("_csstype@2.6.20@csstype").BorderTopRightRadiusProperty<string | number> | undefined;
                "-moz-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "-moz-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "-moz-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-moz-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-moz-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "-moz-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "-moz-box-shadow"?: string | undefined;
                "-moz-float-edge"?: import("_csstype@2.6.20@csstype").MozFloatEdgeProperty | undefined;
                "-moz-force-broken-image-icon"?: import("_csstype@2.6.20@csstype").MozForceBrokenImageIconProperty | undefined;
                "-moz-opacity"?: import("_csstype@2.6.20@csstype").OpacityProperty | undefined;
                "-moz-outline"?: import("_csstype@2.6.20@csstype").OutlineProperty<string | number> | undefined;
                "-moz-outline-color"?: string | undefined;
                "-moz-outline-radius"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusProperty<string | number> | undefined;
                "-moz-outline-radius-bottomleft"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomleftProperty<string | number> | undefined;
                "-moz-outline-radius-bottomright"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusBottomrightProperty<string | number> | undefined;
                "-moz-outline-radius-topleft"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusTopleftProperty<string | number> | undefined;
                "-moz-outline-radius-topright"?: import("_csstype@2.6.20@csstype").MozOutlineRadiusToprightProperty<string | number> | undefined;
                "-moz-outline-style"?: string | undefined;
                "-moz-outline-width"?: import("_csstype@2.6.20@csstype").OutlineWidthProperty<string | number> | undefined;
                "-moz-text-align-last"?: import("_csstype@2.6.20@csstype").TextAlignLastProperty | undefined;
                "-moz-text-decoration-color"?: string | undefined;
                "-moz-text-decoration-line"?: string | undefined;
                "-moz-text-decoration-style"?: import("_csstype@2.6.20@csstype").TextDecorationStyleProperty | undefined;
                "-moz-user-input"?: import("_csstype@2.6.20@csstype").MozUserInputProperty | undefined;
                "-ms-ime-mode"?: import("_csstype@2.6.20@csstype").ImeModeProperty | undefined;
                "-ms-scrollbar-track-color"?: string | undefined;
                "-o-animation"?: import("_csstype@2.6.20@csstype").AnimationProperty | undefined;
                "-o-animation-delay"?: string | undefined;
                "-o-animation-direction"?: string | undefined;
                "-o-animation-duration"?: string | undefined;
                "-o-animation-fill-mode"?: string | undefined;
                "-o-animation-iteration-count"?: import("_csstype@2.6.20@csstype").AnimationIterationCountProperty | undefined;
                "-o-animation-name"?: string | undefined;
                "-o-animation-play-state"?: string | undefined;
                "-o-animation-timing-function"?: string | undefined;
                "-o-background-size"?: import("_csstype@2.6.20@csstype").BackgroundSizeProperty<string | number> | undefined;
                "-o-border-image"?: import("_csstype@2.6.20@csstype").BorderImageProperty | undefined;
                "-o-object-fit"?: import("_csstype@2.6.20@csstype").ObjectFitProperty | undefined;
                "-o-object-position"?: import("_csstype@2.6.20@csstype").ObjectPositionProperty<string | number> | undefined;
                "-o-tab-size"?: import("_csstype@2.6.20@csstype").TabSizeProperty<string | number> | undefined;
                "-o-text-overflow"?: string | undefined;
                "-o-transform"?: string | undefined;
                "-o-transform-origin"?: import("_csstype@2.6.20@csstype").TransformOriginProperty<string | number> | undefined;
                "-o-transition"?: string | undefined;
                "-o-transition-delay"?: string | undefined;
                "-o-transition-duration"?: string | undefined;
                "-o-transition-property"?: string | undefined;
                "-o-transition-timing-function"?: string | undefined;
                "-webkit-box-align"?: import("_csstype@2.6.20@csstype").BoxAlignProperty | undefined;
                "-webkit-box-direction"?: import("_csstype@2.6.20@csstype").BoxDirectionProperty | undefined;
                "-webkit-box-flex"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-box-flex-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-box-lines"?: import("_csstype@2.6.20@csstype").BoxLinesProperty | undefined;
                "-webkit-box-ordinal-group"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "-webkit-box-orient"?: import("_csstype@2.6.20@csstype").BoxOrientProperty | undefined;
                "-webkit-box-pack"?: import("_csstype@2.6.20@csstype").BoxPackProperty | undefined;
                "-webkit-scroll-snap-points-x"?: string | undefined;
                "-webkit-scroll-snap-points-y"?: string | undefined;
                "alignment-baseline"?: import("_csstype@2.6.20@csstype").AlignmentBaselineProperty | undefined;
                "baseline-shift"?: import("_csstype@2.6.20@csstype").BaselineShiftProperty<string | number> | undefined;
                "clip-rule"?: import("_csstype@2.6.20@csstype").ClipRuleProperty | undefined;
                "color-interpolation"?: import("_csstype@2.6.20@csstype").ColorInterpolationProperty | undefined;
                "color-rendering"?: import("_csstype@2.6.20@csstype").ColorRenderingProperty | undefined;
                "dominant-baseline"?: import("_csstype@2.6.20@csstype").DominantBaselineProperty | undefined;
                "fill-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "fill-rule"?: import("_csstype@2.6.20@csstype").FillRuleProperty | undefined;
                "flood-color"?: string | undefined;
                "flood-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "glyph-orientation-vertical"?: import("_csstype@2.6.20@csstype").GlyphOrientationVerticalProperty | undefined;
                "lighting-color"?: string | undefined;
                "marker-end"?: string | undefined;
                "marker-mid"?: string | undefined;
                "marker-start"?: string | undefined;
                "shape-rendering"?: import("_csstype@2.6.20@csstype").ShapeRenderingProperty | undefined;
                "stop-color"?: string | undefined;
                "stop-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "stroke-dasharray"?: import("_csstype@2.6.20@csstype").StrokeDasharrayProperty<string | number> | undefined;
                "stroke-dashoffset"?: import("_csstype@2.6.20@csstype").StrokeDashoffsetProperty<string | number> | undefined;
                "stroke-linecap"?: import("_csstype@2.6.20@csstype").StrokeLinecapProperty | undefined;
                "stroke-linejoin"?: import("_csstype@2.6.20@csstype").StrokeLinejoinProperty | undefined;
                "stroke-miterlimit"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "stroke-opacity"?: import("_csstype@2.6.20@csstype").GlobalsNumber | undefined;
                "stroke-width"?: import("_csstype@2.6.20@csstype").StrokeWidthProperty<string | number> | undefined;
                "text-anchor"?: import("_csstype@2.6.20@csstype").TextAnchorProperty | undefined;
                "vector-effect"?: import("_csstype@2.6.20@csstype").VectorEffectProperty | undefined;
            } | undefined;
            autoAdjustOverflow?: boolean | {
                adjustX?: 0 | 1 | undefined;
                adjustY?: 0 | 1 | undefined;
            } | undefined;
            builtinPlacements?: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements | undefined;
            prefixCls?: string | undefined;
            title?: any;
            children?: unknown[] | undefined;
            trigger?: import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[] | undefined;
            visible?: boolean | undefined;
            defaultVisible?: boolean | undefined;
            placement?: import("ant-design-vue/lib/tooltip").TooltipPlacement | undefined;
            color?: string | undefined;
            transitionName?: string | undefined;
            overlayClassName?: string | undefined;
            openClassName?: string | undefined;
            mouseEnterDelay?: number | undefined;
            mouseLeaveDelay?: number | undefined;
            getPopupContainer?: ((triggerNode: HTMLElement) => HTMLElement) | undefined;
            arrowPointAtCenter?: boolean | undefined;
            destroyTooltipOnHide?: boolean | undefined;
            onVisibleChange?: ((vis: boolean) => void) | undefined;
            'onUpdate:visible'?: ((vis: boolean) => void) | undefined;
        } | undefined;
        filtered?: boolean | undefined;
        filters?: {
            text: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }> | null | undefined)[];
            value: string | number | boolean;
            children?: any[] | undefined;
        }[] | undefined;
        filterDropdown?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined)[] | ((props: import("ant-design-vue/lib/table/interface").FilterDropdownProps<any>) => import("ant-design-vue/lib/_util/type").VueNode);
        filterMultiple?: boolean | undefined;
        filteredValue?: (boolean | import("ant-design-vue/lib/table/interface").Key)[] | null | undefined;
        defaultFilteredValue?: (boolean | import("ant-design-vue/lib/table/interface").Key)[] | null | undefined;
        filterIcon?: (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined) | JSX.Element | (string | number | boolean | void | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }> | null | undefined)[] | ((opt: {
            filtered: boolean;
            column: import("ant-design-vue").TableColumnType<any>;
        }) => import("ant-design-vue/lib/_util/type").VueNode);
        filterMode?: "menu" | "tree" | undefined;
        filterSearch?: boolean | undefined;
        onFilter?: ((value: string | number | boolean, record: any) => boolean) | undefined;
        filterDropdownVisible?: boolean | undefined;
        onFilterDropdownVisibleChange?: ((visible: boolean) => void) | undefined;
        responsive?: import("ant-design-vue/lib/_util/responsiveObserve").Breakpoint[] | undefined;
        colSpan?: number | undefined;
        dataIndex?: import("ant-design-vue/lib/vc-table/interface").DataIndex | undefined;
        customRender?: ((opt: {
            value: any;
            text: any;
            record: any;
            index: number;
            renderIndex: number;
            column: import("ant-design-vue/lib/vc-table/interface").ColumnType<any>;
        }) => any) | undefined;
        rowSpan?: number | undefined;
        width?: string | number | undefined;
        minWidth?: number | undefined;
        maxWidth?: number | undefined;
        resizable?: boolean | undefined;
        customCell?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<any> | undefined;
        onCellClick?: ((record: any, e: MouseEvent) => void) | undefined;
        key?: import("ant-design-vue/lib/vc-table/interface").Key | undefined;
        class?: string | undefined;
        className?: string | undefined;
        fixed?: import("ant-design-vue/lib/vc-table/interface").FixedType | undefined;
        customHeaderCell?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<import("ant-design-vue/lib/vc-table/interface").ColumnType<any> | import("ant-design-vue/lib/vc-table/interface").ColumnGroupType<any>> | undefined;
        ellipsis?: boolean | {
            showTitle?: boolean | undefined;
        } | undefined;
        align?: import("ant-design-vue/lib/vc-table/interface").AlignType | undefined;
        customFilterDropdown?: boolean | undefined;
        slots?: {
            filterIcon?: string | undefined;
            filterDropdown?: string | undefined;
            customRender?: string | undefined;
            title?: string | undefined;
        } | undefined;
        __originColumn__?: any;
    })[]>;
    changeColumns: (columns: any) => void;
    conditionFormRef: import("vue").Ref<import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
            default: () => {};
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: PropType<string | string[]>;
                };
                size: {
                    type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
        };
        isLoading: import("vue").Ref<boolean>;
        formData: import("vue").Ref<KV<any>>;
        defaultValueMap: KV<any>;
        formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
        formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
        getVModelName: (item: import('./types').NFormItem) => string;
        reset: () => Promise<void>;
        isShowFormItem: import("vue").Ref<boolean>;
        toggleItem: () => Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
            default: () => {};
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
    }>>, {
        modelValue: any;
    }> | undefined>;
    conditionFormData: import("vue").Ref<{}>;
    isShowMoreCondition: import("vue").Ref<boolean>;
    conditionItems: () => import('./types').NFormItem[];
    hasShowMore: boolean;
    selectedRowKeys: import("vue").Ref<string[]>;
    onTableSelectChange: (keys: string[]) => void;
    pageCurrent: import("vue").Ref<number>;
    pageSize: import("vue").Ref<number>;
    pageCount: import("vue").Ref<number>;
    isTableLoading: import("vue").Ref<boolean>;
    dataSouce: import("vue").Ref<{
        [k: string]: unknown;
    }[]>;
    pagination: import("vue").ComputedRef<{
        total: number;
        current: number;
        pageSize: number;
        showSizeChanger: boolean;
        onChange: (page: number) => void;
        onShowSizeChange: (current: number, size: number) => void;
    }>;
    tableSize: import("vue").Ref<string>;
    otherTableProps: import("vue").ComputedRef<{
        size: string;
        dropdownPrefixCls?: string | undefined;
        dataSource?: any[] | undefined;
        columns?: import("ant-design-vue").TableColumnsType<any> | undefined;
        pagination: false | import("ant-design-vue").TablePaginationConfig;
        loading?: boolean | Partial<import("vue").ExtractPropTypes<{
            prefixCls: StringConstructor;
            spinning: {
                type: BooleanConstructor;
                default: any;
            };
            size: PropType<import("ant-design-vue/lib/spin/Spin").SpinSize>;
            wrapperClassName: StringConstructor;
            tip: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<any>;
            delay: NumberConstructor;
            indicator: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<any>;
        }>> | undefined;
        bordered?: boolean | undefined;
        locale?: import("ant-design-vue/lib/table/interface").TableLocale | undefined;
        onChange?: ((pagination: import("ant-design-vue").TablePaginationConfig, filters: Record<string, import("ant-design-vue/lib/table/interface").FilterValue | null>, sorter: import("ant-design-vue/lib/table/interface").SorterResult<any> | import("ant-design-vue/lib/table/interface").SorterResult<any>[], extra: import("ant-design-vue/lib/table/interface").TableCurrentDataSource<any>) => void) | undefined;
        rowSelection: import("ant-design-vue/lib/table/interface").TableRowSelection<any> | {
            preserveSelectedRowKeys?: boolean | undefined;
            type?: import("ant-design-vue/lib/table/interface").RowSelectionType | undefined;
            selectedRowKeys: import("vue").Ref<string[]> | import("ant-design-vue/lib/table/interface").Key[];
            defaultSelectedRowKeys?: import("ant-design-vue/lib/table/interface").Key[] | undefined;
            onChange: ((keys: string[]) => void) | ((selectedRowKeys: import("ant-design-vue/lib/table/interface").Key[], selectedRows: any[]) => void);
            getCheckboxProps?: ((record: any) => Partial<Omit<Partial<import("vue").ExtractPropTypes<{
                indeterminate: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                prefixCls: StringConstructor;
                defaultChecked: {
                    type: BooleanConstructor;
                    default: any;
                };
                checked: {
                    type: BooleanConstructor;
                    default: any;
                };
                disabled: {
                    type: BooleanConstructor;
                    default: any;
                };
                isGroup: {
                    type: BooleanConstructor;
                    default: any;
                };
                value: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<any>;
                name: StringConstructor;
                id: StringConstructor;
                type: {
                    type: StringConstructor;
                    default: string;
                };
                autofocus: {
                    type: BooleanConstructor;
                    default: any;
                };
                onChange: PropType<(e: import("ant-design-vue/lib/checkbox/interface").CheckboxChangeEvent) => void>;
                'onUpdate:checked': PropType<(checked: boolean) => void>;
                onClick: PropType<import("ant-design-vue/lib/_util/EventInterface").MouseEventHandler>;
                skipGroup: {
                    type: BooleanConstructor;
                    default: boolean;
                };
            }>>, "defaultChecked" | "checked">>) | undefined;
            onSelect?: import("ant-design-vue/lib/table/interface").SelectionSelectFn<any> | undefined;
            onSelectMultiple?: ((selected: boolean, selectedRows: any[], changeRows: any[]) => void) | undefined;
            onSelectAll?: ((selected: boolean, selectedRows: any[], changeRows: any[]) => void) | undefined;
            onSelectInvert?: ((selectedRowKeys: import("ant-design-vue/lib/table/interface").Key[]) => void) | undefined;
            onSelectNone?: (() => void) | undefined;
            selections?: boolean | import("ant-design-vue/lib/table/hooks/useSelection").INTERNAL_SELECTION_ITEM[] | undefined;
            hideSelectAll?: boolean | undefined;
            fixed?: import("ant-design-vue/lib/vc-table/interface").FixedType | undefined;
            columnWidth?: string | number | undefined;
            columnTitle?: import("ant-design-vue/lib/_util/type").VueNode;
            checkStrictly?: boolean | undefined;
            renderCell?: ((value: boolean, record: any, index: number, originNode: import("ant-design-vue/lib/_util/type").VueNode) => import("ant-design-vue/lib/_util/type").VueNode | import("ant-design-vue/lib/vc-table/interface").RenderedCell<any>) | undefined;
        } | null;
        getPopupContainer?: import("ant-design-vue/lib/table/interface").GetPopupContainer | undefined;
        scroll?: ({
            x?: string | number | true | undefined;
            y?: string | number | undefined;
        } & {
            scrollToFirstRowOnChange?: boolean | undefined;
        }) | undefined;
        sortDirections?: import("ant-design-vue/lib/table/interface").SortOrder[] | undefined;
        showSorterTooltip?: boolean | Partial<import("vue").ExtractPropTypes<{
            title: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<any>;
            trigger: PropType<import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType | import("ant-design-vue/lib/tooltip/abstractTooltipProps").TriggerType[]>;
            visible: {
                type: BooleanConstructor;
                default: any;
            };
            defaultVisible: {
                type: BooleanConstructor;
                default: any;
            };
            placement: PropType<import("ant-design-vue/lib/tooltip").TooltipPlacement>;
            color: StringConstructor;
            transitionName: StringConstructor;
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
                default: import("vue").CSSProperties;
            };
            overlayClassName: StringConstructor;
            openClassName: StringConstructor;
            prefixCls: StringConstructor;
            mouseEnterDelay: NumberConstructor;
            mouseLeaveDelay: NumberConstructor;
            getPopupContainer: PropType<(triggerNode: HTMLElement) => HTMLElement>;
            arrowPointAtCenter: {
                type: BooleanConstructor;
                default: any;
            };
            autoAdjustOverflow: {
                type: PropType<boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow>;
                default: boolean | import("ant-design-vue/lib/tooltip").AdjustOverflow;
            };
            destroyTooltipOnHide: {
                type: BooleanConstructor;
                default: any;
            };
            align: {
                type: PropType<import("ant-design-vue/lib/vc-trigger/interface").AlignType>;
                default: import("ant-design-vue/lib/vc-trigger/interface").AlignType;
            };
            builtinPlacements: {
                type: PropType<import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements>;
                default: import("ant-design-vue/lib/vc-trigger/interface").BuildInPlacements;
            };
            children: ArrayConstructor;
            onVisibleChange: PropType<(vis: boolean) => void>;
            'onUpdate:visible': PropType<(vis: boolean) => void>;
        }>> | undefined;
        prefixCls?: string | undefined;
        rowKey: string | ((row: KV) => any) | import("ant-design-vue/lib/vc-table/interface").GetRowKey<any>;
        tableLayout?: import("ant-design-vue/lib/vc-table/interface").TableLayout | undefined;
        rowClassName?: string | import("ant-design-vue/lib/vc-table/interface").RowClassName<any> | undefined;
        title?: import("ant-design-vue/lib/vc-table/interface").PanelRender<any> | undefined;
        footer?: import("ant-design-vue/lib/vc-table/interface").PanelRender<any> | undefined;
        id?: string | undefined;
        showHeader?: boolean | undefined;
        components?: import("ant-design-vue/lib/vc-table/interface").TableComponents<any> | undefined;
        customRow?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<any> | undefined;
        customHeaderRow?: import("ant-design-vue/lib/vc-table/interface").GetComponentProps<import("ant-design-vue/lib/vc-table/interface").ColumnType<any>[]> | undefined;
        direction?: "ltr" | "rtl" | undefined;
        expandFixed?: boolean | "left" | "right" | undefined;
        expandColumnWidth?: number | undefined;
        expandedRowKeys?: import("ant-design-vue/lib/vc-table/interface").Key[] | undefined;
        defaultExpandedRowKeys?: import("ant-design-vue/lib/vc-table/interface").Key[] | undefined;
        expandedRowRender?: import("ant-design-vue/lib/vc-table/interface").ExpandedRowRender<any> | undefined;
        expandRowByClick?: boolean | undefined;
        expandIcon?: import("ant-design-vue/lib/vc-table/interface").RenderExpandIcon<any> | undefined;
        onExpand?: ((expanded: boolean, record: any) => void) | undefined;
        onExpandedRowsChange?: ((expandedKeys: import("ant-design-vue/lib/vc-table/interface").Key[]) => void) | undefined;
        defaultExpandAllRows: boolean;
        indentSize?: number | undefined;
        expandIconColumnIndex?: number | undefined;
        showExpandColumn?: boolean | undefined;
        expandedRowClassName?: import("ant-design-vue/lib/vc-table/interface").RowClassName<any> | undefined;
        childrenColumnName?: string | undefined;
        rowExpandable?: ((record: any) => boolean) | undefined;
        sticky?: boolean | import("ant-design-vue/lib/vc-table/interface").TableSticky | undefined;
        transformCellText?: import("ant-design-vue/lib/vc-table/interface").TransformCellText<any> | undefined;
    }>;
    onPageSizeChange: (current: number, size: number) => void;
    reset: () => Promise<void>;
    getList: () => Promise<void>;
    remove: (keys: string[], row?: KV<any> | undefined) => Promise<void>;
    FormDataAdd: {};
    FormDataEdit: {};
    addRef: import("vue").Ref<import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: PropType<string | string[]>;
                };
                size: {
                    type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
            done: (formData: KV<any>) => Promise<[boolean, string]>;
        };
        emit: {
            (type: "success", formData: KV<any>): void;
            (type: "fail", error: unknown): void;
        };
        onReset: () => void;
        nFormRef: import("vue").Ref<import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }> | undefined>;
        isShow: import("vue").Ref<boolean>;
        isSubmitting: import("vue").Ref<boolean>;
        save: () => Promise<void>;
        reset: () => void;
        formData: import("vue").Ref<KV<any>>;
        setDefault: (formData: KV<any>) => void;
        NForm: import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "fail")[], "success" | "fail", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
    }>> & {
        onSuccess?: ((...args: any[]) => any) | undefined;
        onFail?: ((...args: any[]) => any) | undefined;
    }, {}> | undefined>;
    isAddFormLoading: import("vue").Ref<boolean>;
    showAddForm: () => Promise<void>;
    editRef: import("vue").Ref<import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
        getDefaultValue: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: PropType<string | string[]>;
                };
                size: {
                    type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
            done: (formData: KV<any>) => Promise<[boolean, string]>;
            getDefaultValue: (formData: KV<any>) => Promise<KV<any>>;
        };
        emit: {
            (type: "success", formData: KV<any>): void;
            (type: "fail", error: unknown): void;
        };
        nFormRef: import("vue").Ref<import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }> | undefined>;
        isShow: import("vue").Ref<boolean>;
        isSubmitting: import("vue").Ref<boolean>;
        save: () => Promise<void>;
        reset: () => void;
        formData: import("vue").Ref<KV<any>>;
        setDefault: (formData: KV<any>) => void;
        isLoading: import("vue").Ref<boolean>;
        errorMessage: import("vue").Ref<string>;
        show: (params: KV<any>, before?: () => Promise<void>) => Promise<void>;
        ArrowRightOutlined: import("@ant-design/icons-vue/lib/icons/ArrowRightOutlined").ArrowRightOutlinedIconType;
        NForm: import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "fail")[], "success" | "fail", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
        getDefaultValue: {
            type: FunctionConstructor;
            required: true;
        };
    }>> & {
        onSuccess?: ((...args: any[]) => any) | undefined;
        onFail?: ((...args: any[]) => any) | undefined;
    }, {}> | undefined>;
    showEditForm: (record: KV) => void;
    isShowOne: import("vue").Ref<boolean>;
    oneData: import("vue").Ref<KV<any> | undefined>;
    isOneLoading: import("vue").Ref<boolean>;
    showOne: (row: KV) => Promise<void>;
    exportExcelFile: () => Promise<void>;
    CloudDownloadOutlined: import("@ant-design/icons-vue/lib/icons/CloudDownloadOutlined").CloudDownloadOutlinedIconType;
    UpOutlined: import("@ant-design/icons-vue/lib/icons/UpOutlined").UpOutlinedIconType;
    DownOutlined: import("@ant-design/icons-vue/lib/icons/DownOutlined").DownOutlinedIconType;
    ColumnSort: import("vue").DefineComponent<{
        columns: {
            type: ArrayConstructor;
            required: true;
        };
    }, {
        props: {
            columns: {
                [k: string]: any;
                title: string;
                key: string;
                children?: any[] | undefined;
            }[];
        };
        emit: (type: "change", columns: {
            [k: string]: any;
            title: string;
            key: string;
            children?: any[] | undefined;
        }[]) => void;
        treeRaw: {
            [k: string]: any;
            title: string;
            key: string;
            children?: any[] | undefined;
        }[];
        tree: import("vue").Ref<{
            [x: string]: any;
            title: string;
            key: string;
            children?: any[] | undefined;
        }[]>;
        checkedKeys: import("vue").Ref<string[]>;
        onCheck: (checkedKeys: string[], { halfCheckedKeys }: {
            halfCheckedKeys: string[];
        }) => void;
        reset: () => void;
        onDrop: (e: import("ant-design-vue/es/tree").AntTreeNodeDropEvent) => void;
        insertNode: (tree: {
            [k: string]: any;
            title: string;
            key: string;
            children?: any[] | undefined;
        }[], path1: string[], path2: string[], insertToChildren: boolean, dropPosition: number) => void;
        findChildrenRef: (tree: {
            [k: string]: any;
            title: string;
            key: string;
            children?: any[] | undefined;
        }[], path: string[]) => [{
            [k: string]: any;
            title: string;
            key: string;
            children?: any[] | undefined;
        }[], number];
        SettingOutlined: import("@ant-design/icons-vue/lib/icons/SettingOutlined").SettingOutlinedIconType;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        columns: {
            type: ArrayConstructor;
            required: true;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
    }, {}>;
    EyeOutlined: import("@ant-design/icons-vue/lib/icons/EyeOutlined").EyeOutlinedIconType;
    EditOutlined: import("@ant-design/icons-vue/lib/icons/EditOutlined").EditOutlinedIconType;
    DeleteOutlined: import("@ant-design/icons-vue/lib/icons/DeleteOutlined").DeleteOutlinedIconType;
    SearchOutlined: import("@ant-design/icons-vue/lib/icons/SearchOutlined").SearchOutlinedIconType;
    PlusOutlined: import("@ant-design/icons-vue/lib/icons/PlusOutlined").PlusOutlinedIconType;
    RedoOutlined: import("@ant-design/icons-vue/lib/icons/RedoOutlined").RedoOutlinedIconType;
    Add: import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: PropType<string | string[]>;
                };
                size: {
                    type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
            done: (formData: KV<any>) => Promise<[boolean, string]>;
        };
        emit: {
            (type: "success", formData: KV<any>): void;
            (type: "fail", error: unknown): void;
        };
        onReset: () => void;
        nFormRef: import("vue").Ref<import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }> | undefined>;
        isShow: import("vue").Ref<boolean>;
        isSubmitting: import("vue").Ref<boolean>;
        save: () => Promise<void>;
        reset: () => void;
        formData: import("vue").Ref<KV<any>>;
        setDefault: (formData: KV<any>) => void;
        NForm: import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "fail")[], "success" | "fail", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
    }>> & {
        onSuccess?: ((...args: any[]) => any) | undefined;
        onFail?: ((...args: any[]) => any) | undefined;
    }, {}>;
    Edit: import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
        getDefaultValue: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: PropType<string | string[]>;
                };
                size: {
                    type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
            done: (formData: KV<any>) => Promise<[boolean, string]>;
            getDefaultValue: (formData: KV<any>) => Promise<KV<any>>;
        };
        emit: {
            (type: "success", formData: KV<any>): void;
            (type: "fail", error: unknown): void;
        };
        nFormRef: import("vue").Ref<import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }> | undefined>;
        isShow: import("vue").Ref<boolean>;
        isSubmitting: import("vue").Ref<boolean>;
        save: () => Promise<void>;
        reset: () => void;
        formData: import("vue").Ref<KV<any>>;
        setDefault: (formData: KV<any>) => void;
        isLoading: import("vue").Ref<boolean>;
        errorMessage: import("vue").Ref<string>;
        show: (params: KV<any>, before?: () => Promise<void>) => Promise<void>;
        ArrowRightOutlined: import("@ant-design/icons-vue/lib/icons/ArrowRightOutlined").ArrowRightOutlinedIconType;
        NForm: import("vue").DefineComponent<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }, {
            props: {
                modelValue: KV<any>;
                formProps?: Partial<import("vue").ExtractPropTypes<{
                    layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                    labelCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    wrapperCol: {
                        type: PropType<Partial<import("vue").ExtractPropTypes<{
                            span: (StringConstructor | NumberConstructor)[];
                            order: (StringConstructor | NumberConstructor)[];
                            offset: (StringConstructor | NumberConstructor)[];
                            push: (StringConstructor | NumberConstructor)[];
                            pull: (StringConstructor | NumberConstructor)[];
                            xs: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            sm: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            md: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            lg: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            xxxl: {
                                type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                                default: string | number | import("ant-design-vue/lib/grid").ColSize;
                            };
                            prefixCls: StringConstructor;
                            flex: (StringConstructor | NumberConstructor)[];
                        }>> & import("vue").HTMLAttributes>;
                    };
                    colon: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                    labelWrap: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    prefixCls: StringConstructor;
                    requiredMark: {
                        type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                        default: any;
                    };
                    hideRequiredMark: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                        [key: string]: any;
                    }> & {
                        default: () => {
                            [key: string]: any;
                        };
                    };
                    rules: {
                        type: PropType<{
                            [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                        }>;
                    };
                    validateMessages: {
                        type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                        default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                    };
                    validateOnRuleChange: {
                        type: BooleanConstructor;
                        default: any;
                    };
                    scrollToFirstError: {
                        type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                    };
                    onSubmit: PropType<(e: Event) => void>;
                    name: StringConstructor;
                    validateTrigger: {
                        type: PropType<string | string[]>;
                    };
                    size: {
                        type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                    };
                    onValuesChange: {
                        type: PropType<(changedValues: any, values: any) => void>;
                    };
                    onFieldsChange: {
                        type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                    };
                    onFinish: {
                        type: PropType<(values: any) => void>;
                    };
                    onFinishFailed: {
                        type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                    };
                    onValidate: {
                        type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                    };
                }>> | undefined;
                items: (formData: KV<any>) => import('./types').NFormItem[];
            };
            isLoading: import("vue").Ref<boolean>;
            formData: import("vue").Ref<KV<any>>;
            defaultValueMap: KV<any>;
            formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
            formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
            getVModelName: (item: import('./types').NFormItem) => string;
            reset: () => Promise<void>;
            isShowFormItem: import("vue").Ref<boolean>;
            toggleItem: () => Promise<void>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: null;
                required: true;
                default: () => {};
            };
            formProps: {
                type: null;
                required: false;
            };
            items: {
                type: FunctionConstructor;
                required: true;
            };
        }>>, {
            modelValue: any;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("success" | "fail")[], "success" | "fail", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
        done: {
            type: FunctionConstructor;
            required: true;
        };
        getDefaultValue: {
            type: FunctionConstructor;
            required: true;
        };
    }>> & {
        onSuccess?: ((...args: any[]) => any) | undefined;
        onFail?: ((...args: any[]) => any) | undefined;
    }, {}>;
    NForm: import("vue").DefineComponent<{
        modelValue: {
            type: null;
            required: true;
            default: () => {};
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
    }, {
        props: {
            modelValue: KV<any>;
            formProps?: Partial<import("vue").ExtractPropTypes<{
                layout: import("_vue-types@3.0.2@vue-types").VueTypeDef<"inline" | "horizontal" | "vertical">;
                labelCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                wrapperCol: {
                    type: PropType<Partial<import("vue").ExtractPropTypes<{
                        span: (StringConstructor | NumberConstructor)[];
                        order: (StringConstructor | NumberConstructor)[];
                        offset: (StringConstructor | NumberConstructor)[];
                        push: (StringConstructor | NumberConstructor)[];
                        pull: (StringConstructor | NumberConstructor)[];
                        xs: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        sm: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        md: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        lg: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        xxxl: {
                            type: PropType<string | number | import("ant-design-vue/lib/grid").ColSize>;
                            default: string | number | import("ant-design-vue/lib/grid").ColSize;
                        };
                        prefixCls: StringConstructor;
                        flex: (StringConstructor | NumberConstructor)[];
                    }>> & import("vue").HTMLAttributes>;
                };
                colon: {
                    type: BooleanConstructor;
                    default: any;
                };
                labelAlign: import("_vue-types@3.0.2@vue-types").VueTypeDef<"left" | "right">;
                labelWrap: {
                    type: BooleanConstructor;
                    default: any;
                };
                prefixCls: StringConstructor;
                requiredMark: {
                    type: PropType<"" | import("ant-design-vue/lib/form/Form").RequiredMark>;
                    default: any;
                };
                hideRequiredMark: {
                    type: BooleanConstructor;
                    default: any;
                };
                model: import("_vue-types@3.0.2@vue-types").VueTypeValidableDef<{
                    [key: string]: any;
                }> & {
                    default: () => {
                        [key: string]: any;
                    };
                };
                rules: {
                    type: PropType<{
                        [k: string]: import("ant-design-vue/lib/form").RuleObject | import("ant-design-vue/lib/form").RuleObject[];
                    }>;
                };
                validateMessages: {
                    type: PropType<import("ant-design-vue/lib/form/interface").ValidateMessages>;
                    default: import("ant-design-vue/lib/form/interface").ValidateMessages;
                };
                validateOnRuleChange: {
                    type: BooleanConstructor;
                    default: any;
                };
                scrollToFirstError: {
                    type: PropType<boolean | import("_scroll-into-view-if-needed@2.2.29@scroll-into-view-if-needed").Options<any>>;
                };
                onSubmit: PropType<(e: Event) => void>;
                name: StringConstructor;
                validateTrigger: {
                    type: PropType<string | string[]>;
                };
                size: {
                    type: PropType<import("ant-design-vue/lib/button").ButtonSize>;
                };
                onValuesChange: {
                    type: PropType<(changedValues: any, values: any) => void>;
                };
                onFieldsChange: {
                    type: PropType<(changedFields: import("ant-design-vue/lib/form/interface").FieldData[], allFields: import("ant-design-vue/lib/form/interface").FieldData[]) => void>;
                };
                onFinish: {
                    type: PropType<(values: any) => void>;
                };
                onFinishFailed: {
                    type: PropType<(errorInfo: import("ant-design-vue/lib/form/interface").ValidateErrorEntity<any>) => void>;
                };
                onValidate: {
                    type: PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                };
            }>> | undefined;
            items: (formData: KV<any>) => import('./types').NFormItem[];
        };
        isLoading: import("vue").Ref<boolean>;
        formData: import("vue").Ref<KV<any>>;
        defaultValueMap: KV<any>;
        formItems: import("vue").ComputedRef<import('./types').NFormItem[]>;
        formRef: import("vue").Ref<import("ant-design-vue").FormInstance | undefined>;
        getVModelName: (item: import('./types').NFormItem) => string;
        reset: () => Promise<void>;
        isShowFormItem: import("vue").Ref<boolean>;
        toggleItem: () => Promise<void>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: null;
            required: true;
            default: () => {};
        };
        formProps: {
            type: null;
            required: false;
        };
        items: {
            type: FunctionConstructor;
            required: true;
        };
    }>>, {
        modelValue: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("remove-fail" | "show-one")[], "remove-fail" | "show-one", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    primaryKey: {
        type: StringConstructor;
        required: true;
    };
    r: {
        type: PropType<RProps>;
        required: true;
    };
    c: PropType<CProps>;
    u: PropType<UProps>;
    d: PropType<DProps>;
    onBeforeMount: PropType<() => Promise<unknown>>;
    exportExcel: PropType<{
        done: (condition: KV) => Promise<KV[]>;
    }>;
}>> & {
    "onRemove-fail"?: ((...args: any[]) => any) | undefined;
    "onShow-one"?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
