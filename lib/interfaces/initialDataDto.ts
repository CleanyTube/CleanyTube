export interface InitialDataDto {
  responseContext: ResponseContext
  estimatedResults: string
  contents: Contents
  trackingParams: string
  topbar: Topbar
  refinements: string[]
  targetId: string
}

interface ResponseContext {
  serviceTrackingParams: ServiceTrackingParam[]
  mainAppWebResponseContext: MainAppWebResponseContext
  webResponseContextExtensionData: WebResponseContextExtensionData
}

interface ServiceTrackingParam {
  service: string
  params: Param[]
}

interface Param {
  key: string
  value: string
}

interface MainAppWebResponseContext {
  loggedOut: boolean
}

interface WebResponseContextExtensionData {
  ytConfigData: YtConfigData
  hasDecorated: boolean
}

interface YtConfigData {
  visitorData: string
  rootVisualElementType: number
}

interface Contents {
  twoColumnSearchResultsRenderer: TwoColumnSearchResultsRenderer
}

interface TwoColumnSearchResultsRenderer {
  primaryContents: PrimaryContents
}

interface PrimaryContents {
  sectionListRenderer: SectionListRenderer
}

interface SectionListRenderer {
  contents: Content[]
  trackingParams: string
  subMenu: SubMenu
  hideBottomSeparator: boolean
  targetId: string
}

interface Content {
  itemSectionRenderer?: ItemSectionRenderer
  continuationItemRenderer?: ContinuationItemRenderer
}

interface ItemSectionRenderer {
  contents: Content2[]
  trackingParams: string
}

interface Content2 {
  videoRenderer?: VideoRenderer
  radioRenderer?: RadioRenderer
  shelfRenderer?: ShelfRenderer
  reelShelfRenderer?: ReelShelfRenderer
  horizontalCardListRenderer?: HorizontalCardListRenderer
}

interface VideoRenderer {
  videoId: string
  thumbnail: Thumbnail
  title: Title
  longBylineText: LongBylineText
  publishedTimeText: PublishedTimeText
  lengthText: LengthText
  viewCountText: ViewCountText
  navigationEndpoint: NavigationEndpoint2
  badges?: Badge[]
  ownerText: OwnerText
  shortBylineText: ShortBylineText
  trackingParams: string
  showActionMenu: boolean
  shortViewCountText: ShortViewCountText
  menu: Menu
  channelThumbnailSupportedRenderers: ChannelThumbnailSupportedRenderers
  thumbnailOverlays: ThumbnailOverlay[]
  searchVideoResultEntityKey: string
  detailedMetadataSnippets?: DetailedMetadataSnippet[]
  ownerBadges?: OwnerBadge[]
}

interface Thumbnail {
  thumbnails: Thumbnail2[]
}

interface Thumbnail2 {
  url: string
  width: number
  height: number
}

interface Title {
  runs: Run[]
  accessibility: Accessibility
}

interface Run {
  text: string
}

interface Accessibility {
  accessibilityData: AccessibilityData
}

interface AccessibilityData {
  label: string
}

interface LongBylineText {
  runs: Run2[]
}

interface Run2 {
  text: string
  navigationEndpoint: NavigationEndpoint
}

interface NavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata
  browseEndpoint: BrowseEndpoint
}

interface CommandMetadata {
  webCommandMetadata: WebCommandMetadata
}

interface WebCommandMetadata {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint {
  browseId: string
  canonicalBaseUrl: string
}

interface PublishedTimeText {
  simpleText: string
}

interface LengthText {
  accessibility: Accessibility2
  simpleText: string
}

interface Accessibility2 {
  accessibilityData: AccessibilityData2
}

interface AccessibilityData2 {
  label: string
}

interface ViewCountText {
  simpleText: string
}

interface NavigationEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata2
  watchEndpoint: WatchEndpoint
}

interface CommandMetadata2 {
  webCommandMetadata: WebCommandMetadata2
}

interface WebCommandMetadata2 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint {
  videoId: string
  params: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig
}

interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig
}

interface Html5PlaybackOnesieConfig {
  commonConfig: CommonConfig
}

interface CommonConfig {
  url: string
}

interface Badge {
  metadataBadgeRenderer: MetadataBadgeRenderer
}

interface MetadataBadgeRenderer {
  style: string
  label: string
  trackingParams: string
  accessibilityData?: AccessibilityData3
}

interface AccessibilityData3 {
  label: string
}

interface OwnerText {
  runs: Run3[]
}

interface Run3 {
  text: string
  navigationEndpoint: NavigationEndpoint3
}

interface NavigationEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata3
  browseEndpoint: BrowseEndpoint2
}

interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadata3
}

interface WebCommandMetadata3 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint2 {
  browseId: string
  canonicalBaseUrl: string
}

interface ShortBylineText {
  runs: Run4[]
}

interface Run4 {
  text: string
  navigationEndpoint: NavigationEndpoint4
}

interface NavigationEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata4
  browseEndpoint: BrowseEndpoint3
}

interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata4
}

interface WebCommandMetadata4 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint3 {
  browseId: string
  canonicalBaseUrl: string
}

interface ShortViewCountText {
  accessibility: Accessibility3
  simpleText: string
}

interface Accessibility3 {
  accessibilityData: AccessibilityData4
}

interface AccessibilityData4 {
  label: string
}

interface Menu {
  menuRenderer: MenuRenderer
}

interface MenuRenderer {
  items: Item[]
  trackingParams: string
  accessibility: Accessibility4
}

interface Item {
  menuServiceItemRenderer: MenuServiceItemRenderer
}

interface MenuServiceItemRenderer {
  text: Text
  icon: Icon
  serviceEndpoint: ServiceEndpoint
  trackingParams: string
  hasSeparator?: boolean
}

interface Text {
  runs: Run5[]
}

interface Run5 {
  text: string
}

interface Icon {
  iconType: string
}

interface ServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata5
  signalServiceEndpoint?: SignalServiceEndpoint
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint
}

interface CommandMetadata5 {
  webCommandMetadata: WebCommandMetadata5
}

interface WebCommandMetadata5 {
  sendPost: boolean
  apiUrl?: string
}

interface SignalServiceEndpoint {
  signal: string
  actions: Action[]
}

interface Action {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand
}

interface AddToPlaylistCommand {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand
  videoIds: string[]
}

interface OnCreateListCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata6
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint
}

interface CommandMetadata6 {
  webCommandMetadata: WebCommandMetadata6
}

interface WebCommandMetadata6 {
  sendPost: boolean
  apiUrl: string
}

interface CreatePlaylistServiceEndpoint {
  videoIds: string[]
  params: string
}

interface ShareEntityServiceEndpoint {
  serializedShareEntity: string
  commands: Command[]
}

interface Command {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction
}

interface OpenPopupAction {
  popup: Popup
  popupType: string
  beReused: boolean
}

interface Popup {
  unifiedSharePanelRenderer: UnifiedSharePanelRenderer
}

interface UnifiedSharePanelRenderer {
  trackingParams: string
  showLoadingSpinner: boolean
}

interface Accessibility4 {
  accessibilityData: AccessibilityData5
}

interface AccessibilityData5 {
  label: string
}

interface ChannelThumbnailSupportedRenderers {
  channelThumbnailWithLinkRenderer: ChannelThumbnailWithLinkRenderer
}

interface ChannelThumbnailWithLinkRenderer {
  thumbnail: Thumbnail3
  navigationEndpoint: NavigationEndpoint5
  accessibility: Accessibility5
}

interface Thumbnail3 {
  thumbnails: Thumbnail4[]
}

interface Thumbnail4 {
  url: string
  width: number
  height: number
}

interface NavigationEndpoint5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata7
  browseEndpoint: BrowseEndpoint4
}

interface CommandMetadata7 {
  webCommandMetadata: WebCommandMetadata7
}

interface WebCommandMetadata7 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint4 {
  browseId: string
  canonicalBaseUrl?: string
}

interface Accessibility5 {
  accessibilityData: AccessibilityData6
}

interface AccessibilityData6 {
  label: string
}

interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
}

interface ThumbnailOverlayTimeStatusRenderer {
  text: Text2
  style: string
}

interface Text2 {
  accessibility: Accessibility6
  simpleText: string
}

interface Accessibility6 {
  accessibilityData: AccessibilityData7
}

interface AccessibilityData7 {
  label: string
}

interface ThumbnailOverlayToggleButtonRenderer {
  untoggledIcon: UntoggledIcon
  toggledIcon: ToggledIcon
  untoggledTooltip: string
  toggledTooltip: string
  untoggledServiceEndpoint: UntoggledServiceEndpoint
  untoggledAccessibility: UntoggledAccessibility
  toggledAccessibility: ToggledAccessibility
  trackingParams: string
  isToggled?: boolean
  toggledServiceEndpoint?: ToggledServiceEndpoint
}

interface UntoggledIcon {
  iconType: string
}

interface ToggledIcon {
  iconType: string
}

interface UntoggledServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata8
  signalServiceEndpoint?: SignalServiceEndpoint2
  playlistEditEndpoint?: PlaylistEditEndpoint
}

interface CommandMetadata8 {
  webCommandMetadata: WebCommandMetadata8
}

interface WebCommandMetadata8 {
  sendPost: boolean
  apiUrl?: string
}

interface SignalServiceEndpoint2 {
  signal: string
  actions: Action2[]
}

interface Action2 {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand2
}

interface AddToPlaylistCommand2 {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand2
  videoIds: string[]
}

interface OnCreateListCommand2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata9
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint2
}

interface CommandMetadata9 {
  webCommandMetadata: WebCommandMetadata9
}

interface WebCommandMetadata9 {
  sendPost: boolean
  apiUrl: string
}

interface CreatePlaylistServiceEndpoint2 {
  videoIds: string[]
  params: string
}

interface PlaylistEditEndpoint {
  playlistId: string
  actions: Action3[]
}

interface Action3 {
  addedVideoId: string
  action: string
}

interface UntoggledAccessibility {
  accessibilityData: AccessibilityData8
}

interface AccessibilityData8 {
  label: string
}

interface ToggledAccessibility {
  accessibilityData: AccessibilityData9
}

interface AccessibilityData9 {
  label: string
}

interface ToggledServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata10
  playlistEditEndpoint: PlaylistEditEndpoint2
}

interface CommandMetadata10 {
  webCommandMetadata: WebCommandMetadata10
}

interface WebCommandMetadata10 {
  sendPost: boolean
  apiUrl: string
}

interface PlaylistEditEndpoint2 {
  playlistId: string
  actions: Action4[]
}

interface Action4 {
  action: string
  removedVideoId: string
}

interface ThumbnailOverlayNowPlayingRenderer {
  text: Text3
}

interface Text3 {
  runs: Run6[]
}

interface Run6 {
  text: string
}

interface DetailedMetadataSnippet {
  snippetText: SnippetText
  snippetHoverText: SnippetHoverText
  maxOneLine: boolean
}

interface SnippetText {
  runs: Run7[]
}

interface Run7 {
  text: string
  bold?: boolean
}

interface SnippetHoverText {
  runs: Run8[]
}

interface Run8 {
  text: string
}

interface OwnerBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer2
}

interface MetadataBadgeRenderer2 {
  icon: Icon2
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData10
}

interface Icon2 {
  iconType: string
}

interface AccessibilityData10 {
  label: string
}

interface RadioRenderer {
  playlistId: string
  title: Title2
  thumbnail: Thumbnail5
  videoCountText: VideoCountText
  navigationEndpoint: NavigationEndpoint6
  trackingParams: string
  videos: Video[]
  thumbnailText: ThumbnailText
  longBylineText: LongBylineText2
  thumbnailOverlays: ThumbnailOverlay2[]
  videoCountShortText: VideoCountShortText
}

interface Title2 {
  simpleText: string
}

interface Thumbnail5 {
  thumbnails: Thumbnail6[]
  sampledThumbnailColor: SampledThumbnailColor
}

interface Thumbnail6 {
  url: string
  width: number
  height: number
}

interface SampledThumbnailColor {
  red: number
  green: number
  blue: number
}

interface VideoCountText {
  runs: Run9[]
}

interface Run9 {
  text: string
}

interface NavigationEndpoint6 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata11
  watchEndpoint: WatchEndpoint2
}

interface CommandMetadata11 {
  webCommandMetadata: WebCommandMetadata11
}

interface WebCommandMetadata11 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint2 {
  videoId: string
  playlistId: string
  params: string
  continuePlayback: boolean
  loggingContext: LoggingContext
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig2
}

interface LoggingContext {
  vssLoggingContext: VssLoggingContext
}

interface VssLoggingContext {
  serializedContextData: string
}

interface WatchEndpointSupportedOnesieConfig2 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig2
}

interface Html5PlaybackOnesieConfig2 {
  commonConfig: CommonConfig2
}

interface CommonConfig2 {
  url: string
}

interface Video {
  childVideoRenderer: ChildVideoRenderer
}

interface ChildVideoRenderer {
  title: Title3
  navigationEndpoint: NavigationEndpoint7
  lengthText: LengthText2
  videoId: string
}

interface Title3 {
  simpleText: string
}

interface NavigationEndpoint7 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata12
  watchEndpoint: WatchEndpoint3
}

interface CommandMetadata12 {
  webCommandMetadata: WebCommandMetadata12
}

interface WebCommandMetadata12 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint3 {
  videoId: string
  playlistId: string
  params: string
  loggingContext: LoggingContext2
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig3
}

interface LoggingContext2 {
  vssLoggingContext: VssLoggingContext2
}

interface VssLoggingContext2 {
  serializedContextData: string
}

interface WatchEndpointSupportedOnesieConfig3 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig3
}

interface Html5PlaybackOnesieConfig3 {
  commonConfig: CommonConfig3
}

interface CommonConfig3 {
  url: string
}

interface LengthText2 {
  accessibility: Accessibility7
  simpleText: string
}

interface Accessibility7 {
  accessibilityData: AccessibilityData11
}

interface AccessibilityData11 {
  label: string
}

interface ThumbnailText {
  runs: Run10[]
}

interface Run10 {
  text: string
  bold?: boolean
}

interface LongBylineText2 {
  simpleText: string
}

interface ThumbnailOverlay2 {
  thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer
  thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer2
}

interface ThumbnailOverlayBottomPanelRenderer {
  icon: Icon3
}

interface Icon3 {
  iconType: string
}

interface ThumbnailOverlayHoverTextRenderer {
  text: Text4
  icon: Icon4
}

interface Text4 {
  runs: Run11[]
}

interface Run11 {
  text: string
}

interface Icon4 {
  iconType: string
}

interface ThumbnailOverlayNowPlayingRenderer2 {
  text: Text5
}

interface Text5 {
  runs: Run12[]
}

interface Run12 {
  text: string
}

interface VideoCountShortText {
  runs: Run13[]
}

interface Run13 {
  text: string
}

interface ShelfRenderer {
  title: Title4
  content: Content3
  trackingParams: string
}

interface Title4 {
  simpleText: string
}

interface Content3 {
  verticalListRenderer: VerticalListRenderer
}

interface VerticalListRenderer {
  items: Item2[]
  collapsedItemCount: number
  collapsedStateButtonText: CollapsedStateButtonText
  trackingParams: string
}

interface Item2 {
  videoRenderer: VideoRenderer2
}

interface VideoRenderer2 {
  videoId: string
  thumbnail: Thumbnail7
  title: Title5
  longBylineText: LongBylineText3
  publishedTimeText: PublishedTimeText2
  lengthText: LengthText3
  viewCountText: ViewCountText2
  navigationEndpoint: NavigationEndpoint9
  badges?: Badge2[]
  ownerBadges?: OwnerBadge2[]
  ownerText: OwnerText2
  shortBylineText: ShortBylineText2
  trackingParams: string
  showActionMenu: boolean
  shortViewCountText: ShortViewCountText2
  menu: Menu2
  channelThumbnailSupportedRenderers: ChannelThumbnailSupportedRenderers2
  thumbnailOverlays: ThumbnailOverlay3[]
  detailedMetadataSnippets: DetailedMetadataSnippet2[]
  searchVideoResultEntityKey: string
}

interface Thumbnail7 {
  thumbnails: Thumbnail8[]
}

interface Thumbnail8 {
  url: string
  width: number
  height: number
}

interface Title5 {
  runs: Run14[]
  accessibility: Accessibility8
}

interface Run14 {
  text: string
}

interface Accessibility8 {
  accessibilityData: AccessibilityData12
}

interface AccessibilityData12 {
  label: string
}

interface LongBylineText3 {
  runs: Run15[]
}

interface Run15 {
  text: string
  navigationEndpoint: NavigationEndpoint8
}

interface NavigationEndpoint8 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata13
  browseEndpoint: BrowseEndpoint5
}

interface CommandMetadata13 {
  webCommandMetadata: WebCommandMetadata13
}

interface WebCommandMetadata13 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint5 {
  browseId: string
  canonicalBaseUrl: string
}

interface PublishedTimeText2 {
  simpleText: string
}

interface LengthText3 {
  accessibility: Accessibility9
  simpleText: string
}

interface Accessibility9 {
  accessibilityData: AccessibilityData13
}

interface AccessibilityData13 {
  label: string
}

interface ViewCountText2 {
  simpleText: string
}

interface NavigationEndpoint9 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata14
  watchEndpoint: WatchEndpoint4
}

interface CommandMetadata14 {
  webCommandMetadata: WebCommandMetadata14
}

interface WebCommandMetadata14 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint4 {
  videoId: string
  params: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig4
}

interface WatchEndpointSupportedOnesieConfig4 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig4
}

interface Html5PlaybackOnesieConfig4 {
  commonConfig: CommonConfig4
}

interface CommonConfig4 {
  url: string
}

interface Badge2 {
  metadataBadgeRenderer: MetadataBadgeRenderer3
}

interface MetadataBadgeRenderer3 {
  style: string
  label: string
  trackingParams: string
  accessibilityData?: AccessibilityData14
}

interface AccessibilityData14 {
  label: string
}

interface OwnerBadge2 {
  metadataBadgeRenderer: MetadataBadgeRenderer4
}

interface MetadataBadgeRenderer4 {
  icon: Icon5
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData15
}

interface Icon5 {
  iconType: string
}

interface AccessibilityData15 {
  label: string
}

interface OwnerText2 {
  runs: Run16[]
}

interface Run16 {
  text: string
  navigationEndpoint: NavigationEndpoint10
}

interface NavigationEndpoint10 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata15
  browseEndpoint: BrowseEndpoint6
}

interface CommandMetadata15 {
  webCommandMetadata: WebCommandMetadata15
}

interface WebCommandMetadata15 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint6 {
  browseId: string
  canonicalBaseUrl: string
}

interface ShortBylineText2 {
  runs: Run17[]
}

interface Run17 {
  text: string
  navigationEndpoint: NavigationEndpoint11
}

interface NavigationEndpoint11 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata16
  browseEndpoint: BrowseEndpoint7
}

interface CommandMetadata16 {
  webCommandMetadata: WebCommandMetadata16
}

interface WebCommandMetadata16 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint7 {
  browseId: string
  canonicalBaseUrl: string
}

interface ShortViewCountText2 {
  accessibility: Accessibility10
  simpleText: string
}

interface Accessibility10 {
  accessibilityData: AccessibilityData16
}

interface AccessibilityData16 {
  label: string
}

interface Menu2 {
  menuRenderer: MenuRenderer2
}

interface MenuRenderer2 {
  items: Item3[]
  trackingParams: string
  accessibility: Accessibility11
}

interface Item3 {
  menuServiceItemRenderer: MenuServiceItemRenderer2
}

interface MenuServiceItemRenderer2 {
  text: Text6
  icon: Icon6
  serviceEndpoint: ServiceEndpoint2
  trackingParams: string
  hasSeparator?: boolean
}

interface Text6 {
  runs: Run18[]
}

interface Run18 {
  text: string
}

interface Icon6 {
  iconType: string
}

interface ServiceEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata17
  signalServiceEndpoint?: SignalServiceEndpoint3
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint2
}

interface CommandMetadata17 {
  webCommandMetadata: WebCommandMetadata17
}

interface WebCommandMetadata17 {
  sendPost: boolean
  apiUrl?: string
}

interface SignalServiceEndpoint3 {
  signal: string
  actions: Action5[]
}

interface Action5 {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand3
}

interface AddToPlaylistCommand3 {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand3
  videoIds: string[]
}

interface OnCreateListCommand3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata18
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint3
}

interface CommandMetadata18 {
  webCommandMetadata: WebCommandMetadata18
}

interface WebCommandMetadata18 {
  sendPost: boolean
  apiUrl: string
}

interface CreatePlaylistServiceEndpoint3 {
  videoIds: string[]
  params: string
}

interface ShareEntityServiceEndpoint2 {
  serializedShareEntity: string
  commands: Command2[]
}

interface Command2 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction2
}

interface OpenPopupAction2 {
  popup: Popup2
  popupType: string
  beReused: boolean
}

interface Popup2 {
  unifiedSharePanelRenderer: UnifiedSharePanelRenderer2
}

interface UnifiedSharePanelRenderer2 {
  trackingParams: string
  showLoadingSpinner: boolean
}

interface Accessibility11 {
  accessibilityData: AccessibilityData17
}

interface AccessibilityData17 {
  label: string
}

interface ChannelThumbnailSupportedRenderers2 {
  channelThumbnailWithLinkRenderer: ChannelThumbnailWithLinkRenderer2
}

interface ChannelThumbnailWithLinkRenderer2 {
  thumbnail: Thumbnail9
  navigationEndpoint: NavigationEndpoint12
  accessibility: Accessibility12
}

interface Thumbnail9 {
  thumbnails: Thumbnail10[]
}

interface Thumbnail10 {
  url: string
  width: number
  height: number
}

interface NavigationEndpoint12 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata19
  browseEndpoint: BrowseEndpoint8
}

interface CommandMetadata19 {
  webCommandMetadata: WebCommandMetadata19
}

interface WebCommandMetadata19 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint8 {
  browseId: string
  canonicalBaseUrl?: string
}

interface Accessibility12 {
  accessibilityData: AccessibilityData18
}

interface AccessibilityData18 {
  label: string
}

interface ThumbnailOverlay3 {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer2
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer3
}

interface ThumbnailOverlayTimeStatusRenderer2 {
  text: Text7
  style: string
}

interface Text7 {
  accessibility: Accessibility13
  simpleText: string
}

interface Accessibility13 {
  accessibilityData: AccessibilityData19
}

interface AccessibilityData19 {
  label: string
}

interface ThumbnailOverlayToggleButtonRenderer2 {
  untoggledIcon: UntoggledIcon2
  toggledIcon: ToggledIcon2
  untoggledTooltip: string
  toggledTooltip: string
  untoggledServiceEndpoint: UntoggledServiceEndpoint2
  untoggledAccessibility: UntoggledAccessibility2
  toggledAccessibility: ToggledAccessibility2
  trackingParams: string
  isToggled?: boolean
  toggledServiceEndpoint?: ToggledServiceEndpoint2
}

interface UntoggledIcon2 {
  iconType: string
}

interface ToggledIcon2 {
  iconType: string
}

interface UntoggledServiceEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata20
  signalServiceEndpoint?: SignalServiceEndpoint4
  playlistEditEndpoint?: PlaylistEditEndpoint3
}

interface CommandMetadata20 {
  webCommandMetadata: WebCommandMetadata20
}

interface WebCommandMetadata20 {
  sendPost: boolean
  apiUrl?: string
}

interface SignalServiceEndpoint4 {
  signal: string
  actions: Action6[]
}

interface Action6 {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand4
}

interface AddToPlaylistCommand4 {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand4
  videoIds: string[]
}

interface OnCreateListCommand4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata21
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint4
}

interface CommandMetadata21 {
  webCommandMetadata: WebCommandMetadata21
}

interface WebCommandMetadata21 {
  sendPost: boolean
  apiUrl: string
}

interface CreatePlaylistServiceEndpoint4 {
  videoIds: string[]
  params: string
}

interface PlaylistEditEndpoint3 {
  playlistId: string
  actions: Action7[]
}

interface Action7 {
  addedVideoId: string
  action: string
}

interface UntoggledAccessibility2 {
  accessibilityData: AccessibilityData20
}

interface AccessibilityData20 {
  label: string
}

interface ToggledAccessibility2 {
  accessibilityData: AccessibilityData21
}

interface AccessibilityData21 {
  label: string
}

interface ToggledServiceEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata22
  playlistEditEndpoint: PlaylistEditEndpoint4
}

interface CommandMetadata22 {
  webCommandMetadata: WebCommandMetadata22
}

interface WebCommandMetadata22 {
  sendPost: boolean
  apiUrl: string
}

interface PlaylistEditEndpoint4 {
  playlistId: string
  actions: Action8[]
}

interface Action8 {
  action: string
  removedVideoId: string
}

interface ThumbnailOverlayNowPlayingRenderer3 {
  text: Text8
}

interface Text8 {
  runs: Run19[]
}

interface Run19 {
  text: string
}

interface DetailedMetadataSnippet2 {
  snippetText: SnippetText2
  snippetHoverText: SnippetHoverText2
  maxOneLine: boolean
}

interface SnippetText2 {
  runs: Run20[]
}

interface Run20 {
  text: string
  bold?: boolean
}

interface SnippetHoverText2 {
  runs: Run21[]
}

interface Run21 {
  text: string
}

interface CollapsedStateButtonText {
  runs: Run22[]
  accessibility: Accessibility14
}

interface Run22 {
  text: string
}

interface Accessibility14 {
  accessibilityData: AccessibilityData22
}

interface AccessibilityData22 {
  label: string
}

interface ReelShelfRenderer {
  title: Title6
  button: Button
  items: Item5[]
  trackingParams: string
  icon: Icon9
}

interface Title6 {
  simpleText: string
}

interface Button {
  menuRenderer: MenuRenderer3
}

interface MenuRenderer3 {
  items: Item4[]
  trackingParams: string
  accessibility: Accessibility16
}

interface Item4 {
  menuNavigationItemRenderer: MenuNavigationItemRenderer
}

interface MenuNavigationItemRenderer {
  text: Text9
  icon: Icon7
  navigationEndpoint: NavigationEndpoint13
  trackingParams: string
  accessibility: Accessibility15
}

interface Text9 {
  runs: Run23[]
}

interface Run23 {
  text: string
}

interface Icon7 {
  iconType: string
}

interface NavigationEndpoint13 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata23
  userFeedbackEndpoint: UserFeedbackEndpoint
}

interface CommandMetadata23 {
  webCommandMetadata: WebCommandMetadata23
}

interface WebCommandMetadata23 {
  ignoreNavigation: boolean
}

interface UserFeedbackEndpoint {
  additionalDatas: AdditionalData[]
}

interface AdditionalData {
  userFeedbackEndpointProductSpecificValueData: UserFeedbackEndpointProductSpecificValueData
}

interface UserFeedbackEndpointProductSpecificValueData {
  key: string
  value: string
}

interface Accessibility15 {
  accessibilityData: AccessibilityData23
}

interface AccessibilityData23 {
  label: string
}

interface Accessibility16 {
  accessibilityData: AccessibilityData24
}

interface AccessibilityData24 {
  label: string
}

interface Item5 {
  reelItemRenderer: ReelItemRenderer
}

interface ReelItemRenderer {
  videoId: string
  headline: Headline
  thumbnail: Thumbnail11
  viewCountText: ViewCountText3
  navigationEndpoint: NavigationEndpoint14
  menu: Menu3
  trackingParams: string
  accessibility: Accessibility20
  style: string
  videoType: string
  loggingDirectives: LoggingDirectives
}

interface Headline {
  simpleText: string
}

interface Thumbnail11 {
  thumbnails: Thumbnail12[]
  isOriginalAspectRatio: boolean
}

interface Thumbnail12 {
  url: string
  width: number
  height: number
}

interface ViewCountText3 {
  accessibility: Accessibility17
  simpleText: string
}

interface Accessibility17 {
  accessibilityData: AccessibilityData25
}

interface AccessibilityData25 {
  label: string
}

interface NavigationEndpoint14 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata24
  reelWatchEndpoint: ReelWatchEndpoint
}

interface CommandMetadata24 {
  webCommandMetadata: WebCommandMetadata24
}

interface WebCommandMetadata24 {
  url: string
  webPageType: string
  rootVe: number
}

interface ReelWatchEndpoint {
  videoId: string
  playerParams: string
  thumbnail: Thumbnail13
  overlay: Overlay
  params: string
  sequenceProvider: string
  sequenceParams: string
  loggingContext: LoggingContext3
}

interface Thumbnail13 {
  thumbnails: Thumbnail14[]
  isOriginalAspectRatio: boolean
}

interface Thumbnail14 {
  url: string
  width: number
  height: number
}

interface Overlay {
  reelPlayerOverlayRenderer: ReelPlayerOverlayRenderer
}

interface ReelPlayerOverlayRenderer {
  style: string
  trackingParams: string
  reelPlayerNavigationModel: string
}

interface LoggingContext3 {
  vssLoggingContext: VssLoggingContext3
  qoeLoggingContext: QoeLoggingContext
}

interface VssLoggingContext3 {
  serializedContextData: string
}

interface QoeLoggingContext {
  serializedContextData: string
}

interface Menu3 {
  menuRenderer: MenuRenderer4
}

interface MenuRenderer4 {
  items: Item6[]
  trackingParams: string
  accessibility: Accessibility19
}

interface Item6 {
  menuNavigationItemRenderer: MenuNavigationItemRenderer2
}

interface MenuNavigationItemRenderer2 {
  text: Text10
  icon: Icon8
  navigationEndpoint: NavigationEndpoint15
  trackingParams: string
  accessibility: Accessibility18
}

interface Text10 {
  runs: Run24[]
}

interface Run24 {
  text: string
}

interface Icon8 {
  iconType: string
}

interface NavigationEndpoint15 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata25
  userFeedbackEndpoint: UserFeedbackEndpoint2
}

interface CommandMetadata25 {
  webCommandMetadata: WebCommandMetadata25
}

interface WebCommandMetadata25 {
  ignoreNavigation: boolean
}

interface UserFeedbackEndpoint2 {
  additionalDatas: AdditionalData2[]
}

interface AdditionalData2 {
  userFeedbackEndpointProductSpecificValueData: UserFeedbackEndpointProductSpecificValueData2
}

interface UserFeedbackEndpointProductSpecificValueData2 {
  key: string
  value: string
}

interface Accessibility18 {
  accessibilityData: AccessibilityData26
}

interface AccessibilityData26 {
  label: string
}

interface Accessibility19 {
  accessibilityData: AccessibilityData27
}

interface AccessibilityData27 {
  label: string
}

interface Accessibility20 {
  accessibilityData: AccessibilityData28
}

interface AccessibilityData28 {
  label: string
}

interface LoggingDirectives {
  trackingParams: string
  visibility: Visibility
  enableDisplayloggerExperiment: boolean
}

interface Visibility {
  types: string
}

interface Icon9 {
  iconType: string
}

interface HorizontalCardListRenderer {
  cards: Card[]
  trackingParams: string
  header: Header
  style: Style
  previousButton: PreviousButton
  nextButton: NextButton
}

interface Card {
  searchRefinementCardRenderer: SearchRefinementCardRenderer
}

interface SearchRefinementCardRenderer {
  thumbnail: Thumbnail15
  query: Query
  searchEndpoint: SearchEndpoint
  trackingParams: string
}

interface Thumbnail15 {
  thumbnails: Thumbnail16[]
}

interface Thumbnail16 {
  url: string
  width: number
  height: number
}

interface Query {
  runs: Run25[]
}

interface Run25 {
  text: string
}

interface SearchEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata26
  searchEndpoint: SearchEndpoint2
}

interface CommandMetadata26 {
  webCommandMetadata: WebCommandMetadata26
}

interface WebCommandMetadata26 {
  url: string
  webPageType: string
  rootVe: number
}

interface SearchEndpoint2 {
  query: string
  params: string
}

interface Header {
  richListHeaderRenderer: RichListHeaderRenderer
}

interface RichListHeaderRenderer {
  title: Title7
  trackingParams: string
  icon: Icon10
}

interface Title7 {
  simpleText: string
}

interface Icon10 {
  iconType: string
}

interface Style {
  type: string
}

interface PreviousButton {
  buttonRenderer: ButtonRenderer
}

interface ButtonRenderer {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon11
  trackingParams: string
}

interface Icon11 {
  iconType: string
}

interface NextButton {
  buttonRenderer: ButtonRenderer2
}

interface ButtonRenderer2 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon12
  trackingParams: string
}

interface Icon12 {
  iconType: string
}

interface ContinuationItemRenderer {
  trigger: string
  continuationEndpoint: ContinuationEndpoint
}

interface ContinuationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata27
  continuationCommand: ContinuationCommand
}

interface CommandMetadata27 {
  webCommandMetadata: WebCommandMetadata27
}

interface WebCommandMetadata27 {
  sendPost: boolean
  apiUrl: string
}

interface ContinuationCommand {
  token: string
  request: string
}

interface SubMenu {
  searchSubMenuRenderer: SearchSubMenuRenderer
}

interface SearchSubMenuRenderer {
  title: Title8
  groups: Group[]
  trackingParams: string
  button: Button2
}

interface Title8 {
  runs: Run26[]
}

interface Run26 {
  text: string
}

interface Group {
  searchFilterGroupRenderer: SearchFilterGroupRenderer
}

interface SearchFilterGroupRenderer {
  title: Title9
  filters: Filter[]
  trackingParams: string
}

interface Title9 {
  simpleText: string
}

interface Filter {
  searchFilterRenderer: SearchFilterRenderer
}

interface SearchFilterRenderer {
  label: Label
  navigationEndpoint?: NavigationEndpoint16
  tooltip: string
  trackingParams: string
  status?: string
}

interface Label {
  simpleText: string
}

interface NavigationEndpoint16 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata28
  searchEndpoint: SearchEndpoint3
}

interface CommandMetadata28 {
  webCommandMetadata: WebCommandMetadata28
}

interface WebCommandMetadata28 {
  url: string
  webPageType: string
  rootVe: number
}

interface SearchEndpoint3 {
  query: string
  params: string
}

interface Button2 {
  toggleButtonRenderer: ToggleButtonRenderer
}

interface ToggleButtonRenderer {
  style: Style2
  isToggled: boolean
  isDisabled: boolean
  defaultIcon: DefaultIcon
  defaultText: DefaultText
  accessibility: Accessibility21
  trackingParams: string
  defaultTooltip: string
  toggledTooltip: string
  toggledStyle: ToggledStyle
  accessibilityData: AccessibilityData29
}

interface Style2 {
  styleType: string
}

interface DefaultIcon {
  iconType: string
}

interface DefaultText {
  runs: Run27[]
}

interface Run27 {
  text: string
}

interface Accessibility21 {
  label: string
}

interface ToggledStyle {
  styleType: string
}

interface AccessibilityData29 {
  accessibilityData: AccessibilityData30
}

interface AccessibilityData30 {
  label: string
}

interface Topbar {
  desktopTopbarRenderer: DesktopTopbarRenderer
}

interface DesktopTopbarRenderer {
  logo: Logo
  searchbox: Searchbox
  trackingParams: string
  countryCode: string
  topbarButtons: TopbarButton[]
  hotkeyDialog: HotkeyDialog
  backButton: BackButton
  forwardButton: ForwardButton
  a11ySkipNavigationButton: A11ySkipNavigationButton
  voiceSearchButton: VoiceSearchButton
}

interface Logo {
  topbarLogoRenderer: TopbarLogoRenderer
}

interface TopbarLogoRenderer {
  iconImage: IconImage
  tooltipText: TooltipText
  endpoint: Endpoint
  trackingParams: string
  overrideEntityKey: string
}

interface IconImage {
  iconType: string
}

interface TooltipText {
  runs: Run28[]
}

interface Run28 {
  text: string
}

interface Endpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata29
  browseEndpoint: BrowseEndpoint9
}

interface CommandMetadata29 {
  webCommandMetadata: WebCommandMetadata29
}

interface WebCommandMetadata29 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint9 {
  browseId: string
}

interface Searchbox {
  fusionSearchboxRenderer: FusionSearchboxRenderer
}

interface FusionSearchboxRenderer {
  icon: Icon13
  placeholderText: PlaceholderText
  config: Config
  trackingParams: string
  searchEndpoint: SearchEndpoint4
  clearButton: ClearButton
}

interface Icon13 {
  iconType: string
}

interface PlaceholderText {
  runs: Run29[]
}

interface Run29 {
  text: string
}

interface Config {
  webSearchboxConfig: WebSearchboxConfig
}

interface WebSearchboxConfig {
  requestLanguage: string
  requestDomain: string
  hasOnscreenKeyboard: boolean
  focusSearchbox: boolean
}

interface SearchEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata30
  searchEndpoint: SearchEndpoint5
}

interface CommandMetadata30 {
  webCommandMetadata: WebCommandMetadata30
}

interface WebCommandMetadata30 {
  url: string
  webPageType: string
  rootVe: number
}

interface SearchEndpoint5 {
  query: string
}

interface ClearButton {
  buttonRenderer: ButtonRenderer3
}

interface ButtonRenderer3 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon14
  trackingParams: string
  accessibilityData: AccessibilityData31
}

interface Icon14 {
  iconType: string
}

interface AccessibilityData31 {
  accessibilityData: AccessibilityData32
}

interface AccessibilityData32 {
  label: string
}

interface TopbarButton {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
  buttonRenderer?: ButtonRenderer4
}

interface TopbarMenuButtonRenderer {
  icon: Icon15
  menuRequest: MenuRequest
  trackingParams: string
  accessibility: Accessibility22
  tooltip: string
  style: string
}

interface Icon15 {
  iconType: string
}

interface MenuRequest {
  clickTrackingParams: string
  commandMetadata: CommandMetadata31
  signalServiceEndpoint: SignalServiceEndpoint5
}

interface CommandMetadata31 {
  webCommandMetadata: WebCommandMetadata31
}

interface WebCommandMetadata31 {
  sendPost: boolean
  apiUrl: string
}

interface SignalServiceEndpoint5 {
  signal: string
  actions: Action9[]
}

interface Action9 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction3
}

interface OpenPopupAction3 {
  popup: Popup3
  popupType: string
  beReused: boolean
}

interface Popup3 {
  multiPageMenuRenderer: MultiPageMenuRenderer
}

interface MultiPageMenuRenderer {
  trackingParams: string
  style: string
  showLoadingSpinner: boolean
}

interface Accessibility22 {
  accessibilityData: AccessibilityData33
}

interface AccessibilityData33 {
  label: string
}

interface ButtonRenderer4 {
  style: string
  size: string
  text: Text11
  icon: Icon16
  navigationEndpoint: NavigationEndpoint17
  trackingParams: string
  targetId: string
}

interface Text11 {
  runs: Run30[]
}

interface Run30 {
  text: string
}

interface Icon16 {
  iconType: string
}

interface NavigationEndpoint17 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata32
  signInEndpoint: SignInEndpoint
}

interface CommandMetadata32 {
  webCommandMetadata: WebCommandMetadata32
}

interface WebCommandMetadata32 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint {
  idamTag: string
}

interface HotkeyDialog {
  hotkeyDialogRenderer: HotkeyDialogRenderer
}

interface HotkeyDialogRenderer {
  title: Title10
  sections: Section[]
  dismissButton: DismissButton
  trackingParams: string
}

interface Title10 {
  runs: Run31[]
}

interface Run31 {
  text: string
}

interface Section {
  hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer
}

interface HotkeyDialogSectionRenderer {
  title: Title11
  options: Option[]
}

interface Title11 {
  runs: Run32[]
}

interface Run32 {
  text: string
}

interface Option {
  hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer
}

interface HotkeyDialogSectionOptionRenderer {
  label: Label2
  hotkey: string
  hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
}

interface Label2 {
  runs: Run33[]
}

interface Run33 {
  text: string
}

interface HotkeyAccessibilityLabel {
  accessibilityData: AccessibilityData34
}

interface AccessibilityData34 {
  label: string
}

interface DismissButton {
  buttonRenderer: ButtonRenderer5
}

interface ButtonRenderer5 {
  style: string
  size: string
  isDisabled: boolean
  text: Text12
  trackingParams: string
}

interface Text12 {
  runs: Run34[]
}

interface Run34 {
  text: string
}

interface BackButton {
  buttonRenderer: ButtonRenderer6
}

interface ButtonRenderer6 {
  trackingParams: string
  command: Command3
}

interface Command3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata33
  signalServiceEndpoint: SignalServiceEndpoint6
}

interface CommandMetadata33 {
  webCommandMetadata: WebCommandMetadata33
}

interface WebCommandMetadata33 {
  sendPost: boolean
}

interface SignalServiceEndpoint6 {
  signal: string
  actions: Action10[]
}

interface Action10 {
  clickTrackingParams: string
  signalAction: SignalAction
}

interface SignalAction {
  signal: string
}

interface ForwardButton {
  buttonRenderer: ButtonRenderer7
}

interface ButtonRenderer7 {
  trackingParams: string
  command: Command4
}

interface Command4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata34
  signalServiceEndpoint: SignalServiceEndpoint7
}

interface CommandMetadata34 {
  webCommandMetadata: WebCommandMetadata34
}

interface WebCommandMetadata34 {
  sendPost: boolean
}

interface SignalServiceEndpoint7 {
  signal: string
  actions: Action11[]
}

interface Action11 {
  clickTrackingParams: string
  signalAction: SignalAction2
}

interface SignalAction2 {
  signal: string
}

interface A11ySkipNavigationButton {
  buttonRenderer: ButtonRenderer8
}

interface ButtonRenderer8 {
  style: string
  size: string
  isDisabled: boolean
  text: Text13
  trackingParams: string
  command: Command5
}

interface Text13 {
  runs: Run35[]
}

interface Run35 {
  text: string
}

interface Command5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata35
  signalServiceEndpoint: SignalServiceEndpoint8
}

interface CommandMetadata35 {
  webCommandMetadata: WebCommandMetadata35
}

interface WebCommandMetadata35 {
  sendPost: boolean
}

interface SignalServiceEndpoint8 {
  signal: string
  actions: Action12[]
}

interface Action12 {
  clickTrackingParams: string
  signalAction: SignalAction3
}

interface SignalAction3 {
  signal: string
}

interface VoiceSearchButton {
  buttonRenderer: ButtonRenderer9
}

interface ButtonRenderer9 {
  style: string
  size: string
  isDisabled: boolean
  serviceEndpoint: ServiceEndpoint3
  icon: Icon18
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData37
}

interface ServiceEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata36
  signalServiceEndpoint: SignalServiceEndpoint9
}

interface CommandMetadata36 {
  webCommandMetadata: WebCommandMetadata36
}

interface WebCommandMetadata36 {
  sendPost: boolean
}

interface SignalServiceEndpoint9 {
  signal: string
  actions: Action13[]
}

interface Action13 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction4
}

interface OpenPopupAction4 {
  popup: Popup4
  popupType: string
}

interface Popup4 {
  voiceSearchDialogRenderer: VoiceSearchDialogRenderer
}

interface VoiceSearchDialogRenderer {
  placeholderHeader: PlaceholderHeader
  promptHeader: PromptHeader
  exampleQuery1: ExampleQuery1
  exampleQuery2: ExampleQuery2
  promptMicrophoneLabel: PromptMicrophoneLabel
  loadingHeader: LoadingHeader
  connectionErrorHeader: ConnectionErrorHeader
  connectionErrorMicrophoneLabel: ConnectionErrorMicrophoneLabel
  permissionsHeader: PermissionsHeader
  permissionsSubtext: PermissionsSubtext
  disabledHeader: DisabledHeader
  disabledSubtext: DisabledSubtext
  microphoneButtonAriaLabel: MicrophoneButtonAriaLabel
  exitButton: ExitButton
  trackingParams: string
  microphoneOffPromptHeader: MicrophoneOffPromptHeader
}

interface PlaceholderHeader {
  runs: Run36[]
}

interface Run36 {
  text: string
}

interface PromptHeader {
  runs: Run37[]
}

interface Run37 {
  text: string
}

interface ExampleQuery1 {
  runs: Run38[]
}

interface Run38 {
  text: string
}

interface ExampleQuery2 {
  runs: Run39[]
}

interface Run39 {
  text: string
}

interface PromptMicrophoneLabel {
  runs: Run40[]
}

interface Run40 {
  text: string
}

interface LoadingHeader {
  runs: Run41[]
}

interface Run41 {
  text: string
}

interface ConnectionErrorHeader {
  runs: Run42[]
}

interface Run42 {
  text: string
}

interface ConnectionErrorMicrophoneLabel {
  runs: Run43[]
}

interface Run43 {
  text: string
}

interface PermissionsHeader {
  runs: Run44[]
}

interface Run44 {
  text: string
}

interface PermissionsSubtext {
  runs: Run45[]
}

interface Run45 {
  text: string
}

interface DisabledHeader {
  runs: Run46[]
}

interface Run46 {
  text: string
}

interface DisabledSubtext {
  runs: Run47[]
}

interface Run47 {
  text: string
}

interface MicrophoneButtonAriaLabel {
  runs: Run48[]
}

interface Run48 {
  text: string
}

interface ExitButton {
  buttonRenderer: ButtonRenderer10
}

interface ButtonRenderer10 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon17
  trackingParams: string
  accessibilityData: AccessibilityData35
}

interface Icon17 {
  iconType: string
}

interface AccessibilityData35 {
  accessibilityData: AccessibilityData36
}

interface AccessibilityData36 {
  label: string
}

interface MicrophoneOffPromptHeader {
  runs: Run49[]
}

interface Run49 {
  text: string
}

interface Icon18 {
  iconType: string
}

interface AccessibilityData37 {
  accessibilityData: AccessibilityData38
}

interface AccessibilityData38 {
  label: string
}
