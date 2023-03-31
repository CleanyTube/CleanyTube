export interface InitialDataDto {
  responseContext: ResponseContext
  contents: Contents
  currentVideoEndpoint: CurrentVideoEndpoint
  trackingParams: string
  playerOverlays: PlayerOverlays
  overlay: Overlay
  onResponseReceivedEndpoints: OnResponseReceivedEndpoint[]
  engagementPanels: EngagementPanel[]
  topbar: Topbar
  pageVisualEffects: PageVisualEffect[]
  frameworkUpdates: FrameworkUpdates
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
  webPrefetchData: WebPrefetchData
  hasDecorated: boolean
}

interface YtConfigData {
  visitorData: string
  rootVisualElementType: number
}

interface WebPrefetchData {
  navigationEndpoints: NavigationEndpoint[]
}

interface NavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata
  watchEndpoint: WatchEndpoint
}

interface CommandMetadata {
  webCommandMetadata: WebCommandMetadata
}

interface WebCommandMetadata {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint {
  videoId: string
  params: string
  playerParams: string
  watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig
}

interface WatchEndpointSupportedPrefetchConfig {
  prefetchHintConfig: PrefetchHintConfig
}

interface PrefetchHintConfig {
  prefetchPriority: number
  countdownUiRelativeSecondsPrefetchCondition: number
}

interface Contents {
  twoColumnWatchNextResults: TwoColumnWatchNextResults
}

interface TwoColumnWatchNextResults {
  results: Results
  secondaryResults: SecondaryResults
  autoplay: Autoplay
}

interface Results {
  results: Results2
}

interface Results2 {
  contents: Content[]
  trackingParams: string
}

interface Content {
  videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer
  videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer
  itemSectionRenderer?: ItemSectionRenderer
}

interface VideoPrimaryInfoRenderer {
  title: Title
  viewCount: ViewCount
  videoActions: VideoActions
  trackingParams: string
  superTitleLink: SuperTitleLink
  dateText: DateText
  relativeDateText: RelativeDateText
}

interface Title {
  runs: Run[]
}

interface Run {
  text: string
}

interface ViewCount {
  videoViewCountRenderer: VideoViewCountRenderer
}

interface VideoViewCountRenderer {
  viewCount: ViewCount2
  shortViewCount: ShortViewCount
}

interface ViewCount2 {
  simpleText: string
}

interface ShortViewCount {
  simpleText: string
}

interface VideoActions {
  menuRenderer: MenuRenderer
}

interface MenuRenderer {
  items: Item[]
  trackingParams: string
  topLevelButtons: TopLevelButton[]
  accessibility: Accessibility5
  flexibleItems: FlexibleItem[]
}

interface Item {
  menuNavigationItemRenderer: MenuNavigationItemRenderer
}

interface MenuNavigationItemRenderer {
  text: Text
  icon: Icon
  navigationEndpoint: NavigationEndpoint2
  trackingParams: string
}

interface Text {
  runs: Run2[]
}

interface Run2 {
  text: string
}

interface Icon {
  iconType: string
}

interface NavigationEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata2
  modalEndpoint: ModalEndpoint
}

interface CommandMetadata2 {
  webCommandMetadata: WebCommandMetadata2
}

interface WebCommandMetadata2 {
  ignoreNavigation: boolean
}

interface ModalEndpoint {
  modal: Modal
}

interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer
}

interface ModalWithTitleAndButtonRenderer {
  title: Title2
  content: Content2
  button: Button
}

interface Title2 {
  runs: Run3[]
}

interface Run3 {
  text: string
}

interface Content2 {
  runs: Run4[]
}

interface Run4 {
  text: string
}

interface Button {
  buttonRenderer: ButtonRenderer
}

interface ButtonRenderer {
  style: string
  size: string
  isDisabled: boolean
  text: Text2
  navigationEndpoint: NavigationEndpoint3
  trackingParams: string
}

interface Text2 {
  simpleText: string
}

interface NavigationEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata3
  signInEndpoint: SignInEndpoint
}

interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadata3
}

interface WebCommandMetadata3 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint {
  hack: boolean
}

interface TopLevelButton {
  segmentedLikeDislikeButtonRenderer?: SegmentedLikeDislikeButtonRenderer
  buttonRenderer?: ButtonRenderer4
}

interface SegmentedLikeDislikeButtonRenderer {
  likeButton: LikeButton
  dislikeButton: DislikeButton
}

interface LikeButton {
  toggleButtonRenderer: ToggleButtonRenderer
}

interface ToggleButtonRenderer {
  style: Style
  isToggled: boolean
  isDisabled: boolean
  defaultIcon: DefaultIcon
  defaultText: DefaultText
  toggledText: ToggledText
  accessibility: Accessibility3
  trackingParams: string
  defaultTooltip: string
  toggledTooltip: string
  toggledStyle: ToggledStyle
  defaultNavigationEndpoint: DefaultNavigationEndpoint
  accessibilityData: AccessibilityData3
  toggleButtonSupportedData: ToggleButtonSupportedData
  targetId: string
}

interface Style {
  styleType: string
}

interface DefaultIcon {
  iconType: string
}

interface DefaultText {
  accessibility: Accessibility
  simpleText: string
}

interface Accessibility {
  accessibilityData: AccessibilityData
}

interface AccessibilityData {
  label: string
}

interface ToggledText {
  accessibility: Accessibility2
  simpleText: string
}

interface Accessibility2 {
  accessibilityData: AccessibilityData2
}

interface AccessibilityData2 {
  label: string
}

interface Accessibility3 {
  label: string
}

interface ToggledStyle {
  styleType: string
}

interface DefaultNavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata4
  modalEndpoint: ModalEndpoint2
}

interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata4
}

interface WebCommandMetadata4 {
  ignoreNavigation: boolean
}

interface ModalEndpoint2 {
  modal: Modal2
}

interface Modal2 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2
}

interface ModalWithTitleAndButtonRenderer2 {
  title: Title3
  content: Content3
  button: Button2
}

interface Title3 {
  simpleText: string
}

interface Content3 {
  simpleText: string
}

interface Button2 {
  buttonRenderer: ButtonRenderer2
}

interface ButtonRenderer2 {
  style: string
  size: string
  isDisabled: boolean
  text: Text3
  navigationEndpoint: NavigationEndpoint4
  trackingParams: string
}

interface Text3 {
  simpleText: string
}

interface NavigationEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata5
  signInEndpoint: SignInEndpoint2
}

interface CommandMetadata5 {
  webCommandMetadata: WebCommandMetadata5
}

interface WebCommandMetadata5 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint2 {
  nextEndpoint: NextEndpoint
  idamTag: string
}

interface NextEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata6
  watchEndpoint: WatchEndpoint2
}

interface CommandMetadata6 {
  webCommandMetadata: WebCommandMetadata6
}

interface WebCommandMetadata6 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint2 {
  videoId: string
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

interface AccessibilityData3 {
  accessibilityData: AccessibilityData4
}

interface AccessibilityData4 {
  label: string
}

interface ToggleButtonSupportedData {
  toggleButtonIdData: ToggleButtonIdData
}

interface ToggleButtonIdData {
  id: string
}

interface DislikeButton {
  toggleButtonRenderer: ToggleButtonRenderer2
}

interface ToggleButtonRenderer2 {
  style: Style2
  isToggled: boolean
  isDisabled: boolean
  defaultIcon: DefaultIcon2
  accessibility: Accessibility4
  trackingParams: string
  defaultTooltip: string
  toggledTooltip: string
  toggledStyle: ToggledStyle2
  defaultNavigationEndpoint: DefaultNavigationEndpoint2
  accessibilityData: AccessibilityData5
  toggleButtonSupportedData: ToggleButtonSupportedData2
  targetId: string
}

interface Style2 {
  styleType: string
}

interface DefaultIcon2 {
  iconType: string
}

interface Accessibility4 {
  label: string
}

interface ToggledStyle2 {
  styleType: string
}

interface DefaultNavigationEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata7
  modalEndpoint: ModalEndpoint3
}

interface CommandMetadata7 {
  webCommandMetadata: WebCommandMetadata7
}

interface WebCommandMetadata7 {
  ignoreNavigation: boolean
}

interface ModalEndpoint3 {
  modal: Modal3
}

interface Modal3 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer3
}

interface ModalWithTitleAndButtonRenderer3 {
  title: Title4
  content: Content4
  button: Button3
}

interface Title4 {
  simpleText: string
}

interface Content4 {
  simpleText: string
}

interface Button3 {
  buttonRenderer: ButtonRenderer3
}

interface ButtonRenderer3 {
  style: string
  size: string
  isDisabled: boolean
  text: Text4
  navigationEndpoint: NavigationEndpoint5
  trackingParams: string
}

interface Text4 {
  simpleText: string
}

interface NavigationEndpoint5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata8
  signInEndpoint: SignInEndpoint3
}

interface CommandMetadata8 {
  webCommandMetadata: WebCommandMetadata8
}

interface WebCommandMetadata8 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint3 {
  nextEndpoint: NextEndpoint2
  idamTag: string
}

interface NextEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata9
  watchEndpoint: WatchEndpoint3
}

interface CommandMetadata9 {
  webCommandMetadata: WebCommandMetadata9
}

interface WebCommandMetadata9 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint3 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig2
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

interface AccessibilityData5 {
  accessibilityData: AccessibilityData6
}

interface AccessibilityData6 {
  label: string
}

interface ToggleButtonSupportedData2 {
  toggleButtonIdData: ToggleButtonIdData2
}

interface ToggleButtonIdData2 {
  id: string
}

interface ButtonRenderer4 {
  style: string
  size: string
  isDisabled: boolean
  text: Text5
  serviceEndpoint: ServiceEndpoint
  icon: Icon2
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData7
}

interface Text5 {
  runs: Run5[]
}

interface Run5 {
  text: string
}

interface ServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata10
  shareEntityServiceEndpoint: ShareEntityServiceEndpoint
}

interface CommandMetadata10 {
  webCommandMetadata: WebCommandMetadata10
}

interface WebCommandMetadata10 {
  sendPost: boolean
  apiUrl: string
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

interface Icon2 {
  iconType: string
}

interface AccessibilityData7 {
  accessibilityData: AccessibilityData8
}

interface AccessibilityData8 {
  label: string
}

interface Accessibility5 {
  accessibilityData: AccessibilityData9
}

interface AccessibilityData9 {
  label: string
}

interface FlexibleItem {
  menuFlexibleItemRenderer: MenuFlexibleItemRenderer
}

interface MenuFlexibleItemRenderer {
  menuItem: MenuItem
  topLevelButton: TopLevelButton2
}

interface MenuItem {
  menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer
  menuServiceItemRenderer?: MenuServiceItemRenderer
}

interface MenuServiceItemDownloadRenderer {
  serviceEndpoint: ServiceEndpoint2
  trackingParams: string
}

interface ServiceEndpoint2 {
  clickTrackingParams: string
  offlineVideoEndpoint: OfflineVideoEndpoint
}

interface OfflineVideoEndpoint {
  videoId: string
  onAddCommand: OnAddCommand
}

interface OnAddCommand {
  clickTrackingParams: string
  getDownloadActionCommand: GetDownloadActionCommand
}

interface GetDownloadActionCommand {
  videoId: string
  params: string
  offlineabilityEntityKey: string
}

interface MenuServiceItemRenderer {
  text: Text6
  icon: Icon3
  serviceEndpoint: ServiceEndpoint3
  trackingParams: string
}

interface Text6 {
  runs: Run6[]
}

interface Run6 {
  text: string
}

interface Icon3 {
  iconType: string
}

interface ServiceEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata11
  modalEndpoint: ModalEndpoint4
}

interface CommandMetadata11 {
  webCommandMetadata: WebCommandMetadata11
}

interface WebCommandMetadata11 {
  ignoreNavigation: boolean
}

interface ModalEndpoint4 {
  modal: Modal4
}

interface Modal4 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer4
}

interface ModalWithTitleAndButtonRenderer4 {
  title: Title5
  content: Content5
  button: Button4
}

interface Title5 {
  runs: Run7[]
}

interface Run7 {
  text: string
}

interface Content5 {
  runs: Run8[]
}

interface Run8 {
  text: string
}

interface Button4 {
  buttonRenderer: ButtonRenderer5
}

interface ButtonRenderer5 {
  style: string
  size: string
  isDisabled: boolean
  text: Text7
  navigationEndpoint: NavigationEndpoint6
  trackingParams: string
}

interface Text7 {
  simpleText: string
}

interface NavigationEndpoint6 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata12
  signInEndpoint: SignInEndpoint4
}

interface CommandMetadata12 {
  webCommandMetadata: WebCommandMetadata12
}

interface WebCommandMetadata12 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint4 {
  nextEndpoint: NextEndpoint3
  idamTag: string
}

interface NextEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata13
  watchEndpoint: WatchEndpoint4
}

interface CommandMetadata13 {
  webCommandMetadata: WebCommandMetadata13
}

interface WebCommandMetadata13 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint4 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig3
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

interface TopLevelButton2 {
  downloadButtonRenderer?: DownloadButtonRenderer
  buttonRenderer?: ButtonRenderer6
}

interface DownloadButtonRenderer {
  trackingParams: string
  style: string
  size: string
  targetId: string
  command: Command2
}

interface Command2 {
  clickTrackingParams: string
  offlineVideoEndpoint: OfflineVideoEndpoint2
}

interface OfflineVideoEndpoint2 {
  videoId: string
  onAddCommand: OnAddCommand2
}

interface OnAddCommand2 {
  clickTrackingParams: string
  getDownloadActionCommand: GetDownloadActionCommand2
}

interface GetDownloadActionCommand2 {
  videoId: string
  params: string
  offlineabilityEntityKey: string
}

interface ButtonRenderer6 {
  style: string
  size: string
  isDisabled: boolean
  text: Text8
  icon: Icon4
  accessibility: Accessibility6
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData10
  command: Command3
}

interface Text8 {
  runs: Run9[]
}

interface Run9 {
  text: string
}

interface Icon4 {
  iconType: string
}

interface Accessibility6 {
  label: string
}

interface AccessibilityData10 {
  accessibilityData: AccessibilityData11
}

interface AccessibilityData11 {
  label: string
}

interface Command3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata14
  modalEndpoint: ModalEndpoint5
}

interface CommandMetadata14 {
  webCommandMetadata: WebCommandMetadata14
}

interface WebCommandMetadata14 {
  ignoreNavigation: boolean
}

interface ModalEndpoint5 {
  modal: Modal5
}

interface Modal5 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer5
}

interface ModalWithTitleAndButtonRenderer5 {
  title: Title6
  content: Content6
  button: Button5
}

interface Title6 {
  runs: Run10[]
}

interface Run10 {
  text: string
}

interface Content6 {
  runs: Run11[]
}

interface Run11 {
  text: string
}

interface Button5 {
  buttonRenderer: ButtonRenderer7
}

interface ButtonRenderer7 {
  style: string
  size: string
  isDisabled: boolean
  text: Text9
  navigationEndpoint: NavigationEndpoint7
  trackingParams: string
}

interface Text9 {
  simpleText: string
}

interface NavigationEndpoint7 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata15
  signInEndpoint: SignInEndpoint5
}

interface CommandMetadata15 {
  webCommandMetadata: WebCommandMetadata15
}

interface WebCommandMetadata15 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint5 {
  nextEndpoint: NextEndpoint4
  idamTag: string
}

interface NextEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata16
  watchEndpoint: WatchEndpoint5
}

interface CommandMetadata16 {
  webCommandMetadata: WebCommandMetadata16
}

interface WebCommandMetadata16 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint5 {
  videoId: string
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

interface SuperTitleLink {
  runs: Run12[]
}

interface Run12 {
  text: string
  navigationEndpoint?: NavigationEndpoint8
  loggingDirectives?: LoggingDirectives
}

interface NavigationEndpoint8 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata17
  browseEndpoint: BrowseEndpoint
}

interface CommandMetadata17 {
  webCommandMetadata: WebCommandMetadata17
}

interface WebCommandMetadata17 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint {
  browseId: string
  params: string
}

interface LoggingDirectives {
  trackingParams: string
  visibility: Visibility
  enableDisplayloggerExperiment: boolean
}

interface Visibility {
  types: string
}

interface DateText {
  simpleText: string
}

interface RelativeDateText {
  accessibility: Accessibility7
  simpleText: string
}

interface Accessibility7 {
  accessibilityData: AccessibilityData12
}

interface AccessibilityData12 {
  label: string
}

interface VideoSecondaryInfoRenderer {
  owner: Owner
  subscribeButton: SubscribeButton
  metadataRowContainer: MetadataRowContainer
  showMoreText: ShowMoreText
  showLessText: ShowLessText
  trackingParams: string
  defaultExpanded: boolean
  descriptionCollapsedLines: number
  showMoreCommand: ShowMoreCommand
  showLessCommand: ShowLessCommand
  attributedDescription: AttributedDescription
}

interface Owner {
  videoOwnerRenderer: VideoOwnerRenderer
}

interface VideoOwnerRenderer {
  thumbnail: Thumbnail
  title: Title7
  subscriptionButton: SubscriptionButton
  navigationEndpoint: NavigationEndpoint10
  subscriberCountText: SubscriberCountText
  trackingParams: string
  badges: Badge[]
}

interface Thumbnail {
  thumbnails: Thumbnail2[]
}

interface Thumbnail2 {
  url: string
  width: number
  height: number
}

interface Title7 {
  runs: Run13[]
}

interface Run13 {
  text: string
  navigationEndpoint: NavigationEndpoint9
}

interface NavigationEndpoint9 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata18
  browseEndpoint: BrowseEndpoint2
}

interface CommandMetadata18 {
  webCommandMetadata: WebCommandMetadata18
}

interface WebCommandMetadata18 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint2 {
  browseId: string
  canonicalBaseUrl: string
}

interface SubscriptionButton {
  type: string
}

interface NavigationEndpoint10 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata19
  browseEndpoint: BrowseEndpoint3
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

interface BrowseEndpoint3 {
  browseId: string
  canonicalBaseUrl: string
}

interface SubscriberCountText {
  accessibility: Accessibility8
  simpleText: string
}

interface Accessibility8 {
  accessibilityData: AccessibilityData13
}

interface AccessibilityData13 {
  label: string
}

interface Badge {
  metadataBadgeRenderer: MetadataBadgeRenderer
}

interface MetadataBadgeRenderer {
  icon: Icon5
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData14
}

interface Icon5 {
  iconType: string
}

interface AccessibilityData14 {
  label: string
}

interface SubscribeButton {
  buttonRenderer: ButtonRenderer8
}

interface ButtonRenderer8 {
  style: string
  size: string
  isDisabled: boolean
  text: Text10
  navigationEndpoint: NavigationEndpoint11
  trackingParams: string
  targetId: string
}

interface Text10 {
  runs: Run14[]
}

interface Run14 {
  text: string
}

interface NavigationEndpoint11 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata20
  modalEndpoint: ModalEndpoint6
}

interface CommandMetadata20 {
  webCommandMetadata: WebCommandMetadata20
}

interface WebCommandMetadata20 {
  ignoreNavigation: boolean
}

interface ModalEndpoint6 {
  modal: Modal6
}

interface Modal6 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer6
}

interface ModalWithTitleAndButtonRenderer6 {
  title: Title8
  content: Content7
  button: Button6
}

interface Title8 {
  simpleText: string
}

interface Content7 {
  simpleText: string
}

interface Button6 {
  buttonRenderer: ButtonRenderer9
}

interface ButtonRenderer9 {
  style: string
  size: string
  isDisabled: boolean
  text: Text11
  navigationEndpoint: NavigationEndpoint12
  trackingParams: string
}

interface Text11 {
  simpleText: string
}

interface NavigationEndpoint12 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata21
  signInEndpoint: SignInEndpoint6
}

interface CommandMetadata21 {
  webCommandMetadata: WebCommandMetadata21
}

interface WebCommandMetadata21 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint6 {
  nextEndpoint: NextEndpoint5
  continueAction: string
  idamTag: string
}

interface NextEndpoint5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata22
  watchEndpoint: WatchEndpoint6
}

interface CommandMetadata22 {
  webCommandMetadata: WebCommandMetadata22
}

interface WebCommandMetadata22 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint6 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig5
}

interface WatchEndpointSupportedOnesieConfig5 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig5
}

interface Html5PlaybackOnesieConfig5 {
  commonConfig: CommonConfig5
}

interface CommonConfig5 {
  url: string
}

interface MetadataRowContainer {
  metadataRowContainerRenderer: MetadataRowContainerRenderer
}

interface MetadataRowContainerRenderer {
  collapsedItemCount: number
  trackingParams: string
}

interface ShowMoreText {
  simpleText: string
}

interface ShowLessText {
  simpleText: string
}

interface ShowMoreCommand {
  clickTrackingParams: string
  commandExecutorCommand: CommandExecutorCommand
}

interface CommandExecutorCommand {
  commands: Command4[]
}

interface Command4 {
  clickTrackingParams: string
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction
  scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand
}

interface ChangeEngagementPanelVisibilityAction {
  targetId: string
  visibility: string
}

interface ScrollToEngagementPanelCommand {
  targetId: string
}

interface ShowLessCommand {
  clickTrackingParams: string
  changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction2
}

interface ChangeEngagementPanelVisibilityAction2 {
  targetId: string
  visibility: string
}

interface AttributedDescription {
  content: string
  commandRuns: CommandRun[]
  styleRuns: StyleRun[]
}

interface CommandRun {
  startIndex: number
  length: number
  onTap: OnTap
  loggingDirectives?: LoggingDirectives2
}

interface OnTap {
  innertubeCommand: InnertubeCommand
}

interface InnertubeCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata23
  urlEndpoint?: UrlEndpoint
  browseEndpoint?: BrowseEndpoint4
}

interface CommandMetadata23 {
  webCommandMetadata: WebCommandMetadata23
}

interface WebCommandMetadata23 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl?: string
}

interface UrlEndpoint {
  url: string
  target: string
  nofollow: boolean
}

interface BrowseEndpoint4 {
  browseId: string
  params: string
}

interface LoggingDirectives2 {
  trackingParams: string
  enableDisplayloggerExperiment: boolean
}

interface StyleRun {
  startIndex: number
  length: number
  fontColor: number
}

interface ItemSectionRenderer {
  contents: Content8[]
  trackingParams: string
  sectionIdentifier: string
  targetId?: string
}

interface Content8 {
  continuationItemRenderer?: ContinuationItemRenderer
  commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer
}

interface ContinuationItemRenderer {
  trigger: string
  continuationEndpoint: ContinuationEndpoint
}

interface ContinuationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata24
  continuationCommand: ContinuationCommand
}

interface CommandMetadata24 {
  webCommandMetadata: WebCommandMetadata24
}

interface WebCommandMetadata24 {
  sendPost: boolean
  apiUrl: string
}

interface ContinuationCommand {
  token: string
  request: string
}

interface CommentsEntryPointHeaderRenderer {
  headerText: HeaderText
  onTap: OnTap2
  trackingParams: string
  commentCount: CommentCount
  contentRenderer: ContentRenderer
  targetId: string
}

interface HeaderText {
  runs: Run15[]
}

interface Run15 {
  text: string
}

interface OnTap2 {
  clickTrackingParams: string
  commandExecutorCommand: CommandExecutorCommand2
}

interface CommandExecutorCommand2 {
  commands: Command5[]
}

interface Command5 {
  clickTrackingParams: string
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction3
  scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand2
}

interface ChangeEngagementPanelVisibilityAction3 {
  targetId: string
  visibility: string
}

interface ScrollToEngagementPanelCommand2 {
  targetId: string
}

interface CommentCount {
  simpleText: string
}

interface ContentRenderer {
  commentsEntryPointTeaserRenderer: CommentsEntryPointTeaserRenderer
}

interface CommentsEntryPointTeaserRenderer {
  teaserAvatar: TeaserAvatar
  teaserContent: TeaserContent
  trackingParams: string
}

interface TeaserAvatar {
  thumbnails: Thumbnail3[]
  accessibility: Accessibility9
}

interface Thumbnail3 {
  url: string
  width: number
  height: number
}

interface Accessibility9 {
  accessibilityData: AccessibilityData15
}

interface AccessibilityData15 {
  label: string
}

interface TeaserContent {
  simpleText: string
}

interface SecondaryResults {
  secondaryResults: SecondaryResults2
}

interface SecondaryResults2 {
  results: Result[]
  trackingParams: string
  targetId: string
}

interface Result {
  compactVideoRenderer?: CompactVideoRenderer
  compactRadioRenderer?: CompactRadioRenderer
  continuationItemRenderer?: ContinuationItemRenderer2
}

interface CompactVideoRenderer {
  videoId: string
  thumbnail: Thumbnail4
  title: Title9
  longBylineText: LongBylineText
  publishedTimeText: PublishedTimeText
  viewCountText: ViewCountText
  lengthText: LengthText
  navigationEndpoint: NavigationEndpoint14
  shortBylineText: ShortBylineText
  badges?: Badge2[]
  channelThumbnail: ChannelThumbnail
  trackingParams: string
  shortViewCountText: ShortViewCountText
  menu: Menu
  thumbnailOverlays: ThumbnailOverlay[]
  accessibility: Accessibility15
  richThumbnail?: RichThumbnail
  ownerBadges?: OwnerBadge[]
}

interface Thumbnail4 {
  thumbnails: Thumbnail5[]
}

interface Thumbnail5 {
  url: string
  width: number
  height: number
}

interface Title9 {
  accessibility: Accessibility10
  simpleText: string
}

interface Accessibility10 {
  accessibilityData: AccessibilityData16
}

interface AccessibilityData16 {
  label: string
}

interface LongBylineText {
  runs: Run16[]
}

interface Run16 {
  text: string
  navigationEndpoint: NavigationEndpoint13
}

interface NavigationEndpoint13 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata25
  browseEndpoint: BrowseEndpoint5
}

interface CommandMetadata25 {
  webCommandMetadata: WebCommandMetadata25
}

interface WebCommandMetadata25 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint5 {
  browseId: string
  canonicalBaseUrl: string
}

interface PublishedTimeText {
  simpleText: string
}

interface ViewCountText {
  simpleText: string
}

interface LengthText {
  accessibility: Accessibility11
  simpleText: string
}

interface Accessibility11 {
  accessibilityData: AccessibilityData17
}

interface AccessibilityData17 {
  label: string
}

interface NavigationEndpoint14 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata26
  watchEndpoint: WatchEndpoint7
}

interface CommandMetadata26 {
  webCommandMetadata: WebCommandMetadata26
}

interface WebCommandMetadata26 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint7 {
  videoId: string
  nofollow: boolean
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig6
}

interface WatchEndpointSupportedOnesieConfig6 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig6
}

interface Html5PlaybackOnesieConfig6 {
  commonConfig: CommonConfig6
}

interface CommonConfig6 {
  url: string
}

interface ShortBylineText {
  runs: Run17[]
}

interface Run17 {
  text: string
  navigationEndpoint: NavigationEndpoint15
}

interface NavigationEndpoint15 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata27
  browseEndpoint: BrowseEndpoint6
}

interface CommandMetadata27 {
  webCommandMetadata: WebCommandMetadata27
}

interface WebCommandMetadata27 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint6 {
  browseId: string
  canonicalBaseUrl: string
}

interface Badge2 {
  metadataBadgeRenderer: MetadataBadgeRenderer2
}

interface MetadataBadgeRenderer2 {
  style: string
  label: string
  trackingParams: string
}

interface ChannelThumbnail {
  thumbnails: Thumbnail6[]
}

interface Thumbnail6 {
  url: string
  width: number
  height: number
}

interface ShortViewCountText {
  accessibility: Accessibility12
  simpleText: string
}

interface Accessibility12 {
  accessibilityData: AccessibilityData18
}

interface AccessibilityData18 {
  label: string
}

interface Menu {
  menuRenderer: MenuRenderer2
}

interface MenuRenderer2 {
  items: Item2[]
  trackingParams: string
  accessibility: Accessibility13
  targetId?: string
}

interface Item2 {
  menuServiceItemRenderer?: MenuServiceItemRenderer2
  menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer2
}

interface MenuServiceItemRenderer2 {
  text: Text12
  icon: Icon6
  serviceEndpoint: ServiceEndpoint4
  trackingParams: string
  hasSeparator?: boolean
}

interface Text12 {
  runs: Run18[]
}

interface Run18 {
  text: string
}

interface Icon6 {
  iconType: string
}

interface ServiceEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata28
  shareEntityServiceEndpoint?: ShareEntityServiceEndpoint2
  signalServiceEndpoint?: SignalServiceEndpoint
}

interface CommandMetadata28 {
  webCommandMetadata: WebCommandMetadata28
}

interface WebCommandMetadata28 {
  sendPost: boolean
  apiUrl?: string
}

interface ShareEntityServiceEndpoint2 {
  serializedShareEntity: string
  commands: Command6[]
}

interface Command6 {
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

interface SignalServiceEndpoint {
  signal: string
  actions: Action[]
}

interface Action {
  clickTrackingParams: string
  addToPlaylistCommand?: AddToPlaylistCommand
  openPopupAction?: OpenPopupAction3
}

interface AddToPlaylistCommand {
  openMiniplayer: boolean
  openListPanel: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand
  videoIds: string[]
}

interface OnCreateListCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata29
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint
}

interface CommandMetadata29 {
  webCommandMetadata: WebCommandMetadata29
}

interface WebCommandMetadata29 {
  sendPost: boolean
  apiUrl: string
}

interface CreatePlaylistServiceEndpoint {
  videoIds: string[]
  params: string
}

interface OpenPopupAction3 {
  popup: Popup3
  popupType: string
}

interface Popup3 {
  notificationActionRenderer: NotificationActionRenderer
}

interface NotificationActionRenderer {
  responseText: ResponseText
  trackingParams: string
}

interface ResponseText {
  simpleText: string
}

interface MenuServiceItemDownloadRenderer2 {
  serviceEndpoint: ServiceEndpoint5
  trackingParams: string
}

interface ServiceEndpoint5 {
  clickTrackingParams: string
  offlineVideoEndpoint: OfflineVideoEndpoint3
}

interface OfflineVideoEndpoint3 {
  videoId: string
  onAddCommand: OnAddCommand3
}

interface OnAddCommand3 {
  clickTrackingParams: string
  getDownloadActionCommand: GetDownloadActionCommand3
}

interface GetDownloadActionCommand3 {
  videoId: string
  params: string
}

interface Accessibility13 {
  accessibilityData: AccessibilityData19
}

interface AccessibilityData19 {
  label: string
}

interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer?: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer
}

interface ThumbnailOverlayTimeStatusRenderer {
  text: Text13
  style: string
}

interface Text13 {
  accessibility: Accessibility14
  simpleText: string
}

interface Accessibility14 {
  accessibilityData: AccessibilityData20
}

interface AccessibilityData20 {
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
  commandMetadata: CommandMetadata30
  signalServiceEndpoint?: SignalServiceEndpoint2
  playlistEditEndpoint?: PlaylistEditEndpoint
}

interface CommandMetadata30 {
  webCommandMetadata: WebCommandMetadata30
}

interface WebCommandMetadata30 {
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
  openListPanel: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand2
  videoIds: string[]
}

interface OnCreateListCommand2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata31
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint2
}

interface CommandMetadata31 {
  webCommandMetadata: WebCommandMetadata31
}

interface WebCommandMetadata31 {
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
  accessibilityData: AccessibilityData21
}

interface AccessibilityData21 {
  label: string
}

interface ToggledAccessibility {
  accessibilityData: AccessibilityData22
}

interface AccessibilityData22 {
  label: string
}

interface ToggledServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata32
  playlistEditEndpoint: PlaylistEditEndpoint2
}

interface CommandMetadata32 {
  webCommandMetadata: WebCommandMetadata32
}

interface WebCommandMetadata32 {
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
  text: Text14
}

interface Text14 {
  runs: Run19[]
}

interface Run19 {
  text: string
}

interface Accessibility15 {
  accessibilityData: AccessibilityData23
}

interface AccessibilityData23 {
  label: string
}

interface RichThumbnail {
  movingThumbnailRenderer: MovingThumbnailRenderer
}

interface MovingThumbnailRenderer {
  movingThumbnailDetails?: MovingThumbnailDetails
  enableHoveredLogging: boolean
  enableOverlay: boolean
}

interface MovingThumbnailDetails {
  thumbnails: Thumbnail7[]
  logAsMovingThumbnail: boolean
}

interface Thumbnail7 {
  url: string
  width: number
  height: number
}

interface OwnerBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer3
}

interface MetadataBadgeRenderer3 {
  icon: Icon7
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData24
}

interface Icon7 {
  iconType: string
}

interface AccessibilityData24 {
  label: string
}

interface CompactRadioRenderer {
  playlistId: string
  thumbnail: Thumbnail8
  title: Title10
  navigationEndpoint: NavigationEndpoint16
  videoCountText: VideoCountText
  secondaryNavigationEndpoint: SecondaryNavigationEndpoint
  longBylineText: LongBylineText2
  trackingParams: string
  thumbnailText: ThumbnailText
  videoCountShortText: VideoCountShortText
  shareUrl: string
  thumbnailOverlays: ThumbnailOverlay2[]
}

interface Thumbnail8 {
  thumbnails: Thumbnail9[]
  sampledThumbnailColor: SampledThumbnailColor
}

interface Thumbnail9 {
  url: string
  width: number
  height: number
}

interface SampledThumbnailColor {
  red: number
  green: number
  blue: number
}

interface Title10 {
  simpleText: string
}

interface NavigationEndpoint16 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata33
  watchEndpoint: WatchEndpoint8
}

interface CommandMetadata33 {
  webCommandMetadata: WebCommandMetadata33
}

interface WebCommandMetadata33 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint8 {
  videoId: string
  playlistId: string
  params: string
  continuePlayback: boolean
  loggingContext: LoggingContext
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig7
}

interface LoggingContext {
  vssLoggingContext: VssLoggingContext
}

interface VssLoggingContext {
  serializedContextData: string
}

interface WatchEndpointSupportedOnesieConfig7 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig7
}

interface Html5PlaybackOnesieConfig7 {
  commonConfig: CommonConfig7
}

interface CommonConfig7 {
  url: string
}

interface VideoCountText {
  runs: Run20[]
}

interface Run20 {
  text: string
}

interface SecondaryNavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata34
  watchEndpoint: WatchEndpoint9
}

interface CommandMetadata34 {
  webCommandMetadata: WebCommandMetadata34
}

interface WebCommandMetadata34 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint9 {
  videoId: string
  playlistId: string
  params: string
  loggingContext: LoggingContext2
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig8
}

interface LoggingContext2 {
  vssLoggingContext: VssLoggingContext2
}

interface VssLoggingContext2 {
  serializedContextData: string
}

interface WatchEndpointSupportedOnesieConfig8 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig8
}

interface Html5PlaybackOnesieConfig8 {
  commonConfig: CommonConfig8
}

interface CommonConfig8 {
  url: string
}

interface LongBylineText2 {
  simpleText: string
}

interface ThumbnailText {
  runs: Run21[]
}

interface Run21 {
  text: string
  bold?: boolean
}

interface VideoCountShortText {
  runs: Run22[]
}

interface Run22 {
  text: string
}

interface ThumbnailOverlay2 {
  thumbnailOverlayBottomPanelRenderer?: ThumbnailOverlayBottomPanelRenderer
  thumbnailOverlayHoverTextRenderer?: ThumbnailOverlayHoverTextRenderer
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer2
}

interface ThumbnailOverlayBottomPanelRenderer {
  icon: Icon8
}

interface Icon8 {
  iconType: string
}

interface ThumbnailOverlayHoverTextRenderer {
  text: Text15
  icon: Icon9
}

interface Text15 {
  runs: Run23[]
}

interface Run23 {
  text: string
}

interface Icon9 {
  iconType: string
}

interface ThumbnailOverlayNowPlayingRenderer2 {
  text: Text16
}

interface Text16 {
  runs: Run24[]
}

interface Run24 {
  text: string
}

interface ContinuationItemRenderer2 {
  trigger: string
  continuationEndpoint: ContinuationEndpoint2
  button: Button7
}

interface ContinuationEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata35
  continuationCommand: ContinuationCommand2
}

interface CommandMetadata35 {
  webCommandMetadata: WebCommandMetadata35
}

interface WebCommandMetadata35 {
  sendPost: boolean
  apiUrl: string
}

interface ContinuationCommand2 {
  token: string
  request: string
}

interface Button7 {
  buttonRenderer: ButtonRenderer10
}

interface ButtonRenderer10 {
  style: string
  size: string
  isDisabled: boolean
  text: Text17
  trackingParams: string
  command: Command7
}

interface Text17 {
  runs: Run25[]
}

interface Run25 {
  text: string
}

interface Command7 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata36
  continuationCommand: ContinuationCommand3
}

interface CommandMetadata36 {
  webCommandMetadata: WebCommandMetadata36
}

interface WebCommandMetadata36 {
  sendPost: boolean
  apiUrl: string
}

interface ContinuationCommand3 {
  token: string
  request: string
}

interface Autoplay {
  autoplay: Autoplay2
}

interface Autoplay2 {
  sets: Set[]
  countDownSecs: number
  trackingParams: string
}

interface Set {
  mode: string
  autoplayVideo: AutoplayVideo
}

interface AutoplayVideo {
  clickTrackingParams: string
  commandMetadata: CommandMetadata37
  watchEndpoint: WatchEndpoint10
}

interface CommandMetadata37 {
  webCommandMetadata: WebCommandMetadata37
}

interface WebCommandMetadata37 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint10 {
  videoId: string
  params: string
  playerParams: string
  watchEndpointSupportedPrefetchConfig: WatchEndpointSupportedPrefetchConfig2
}

interface WatchEndpointSupportedPrefetchConfig2 {
  prefetchHintConfig: PrefetchHintConfig2
}

interface PrefetchHintConfig2 {
  prefetchPriority: number
  countdownUiRelativeSecondsPrefetchCondition: number
}

interface CurrentVideoEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata38
  watchEndpoint: WatchEndpoint11
}

interface CommandMetadata38 {
  webCommandMetadata: WebCommandMetadata38
}

interface WebCommandMetadata38 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint11 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig9
}

interface WatchEndpointSupportedOnesieConfig9 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig9
}

interface Html5PlaybackOnesieConfig9 {
  commonConfig: CommonConfig9
}

interface CommonConfig9 {
  url: string
}

interface PlayerOverlays {
  playerOverlayRenderer: PlayerOverlayRenderer
}

interface PlayerOverlayRenderer {
  endScreen: EndScreen
  autoplay: Autoplay3
  shareButton: ShareButton
  addToMenu: AddToMenu
  videoDetails: VideoDetails
  autonavToggle: AutonavToggle
  decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer
}

interface EndScreen {
  watchNextEndScreenRenderer: WatchNextEndScreenRenderer
}

interface WatchNextEndScreenRenderer {
  results: Result2[]
  title: Title13
  trackingParams: string
}

interface Result2 {
  endScreenVideoRenderer?: EndScreenVideoRenderer
  endScreenPlaylistRenderer?: EndScreenPlaylistRenderer
}

interface EndScreenVideoRenderer {
  videoId: string
  thumbnail: Thumbnail10
  title: Title11
  shortBylineText: ShortBylineText2
  lengthText: LengthText2
  lengthInSeconds: number
  navigationEndpoint: NavigationEndpoint18
  trackingParams: string
  shortViewCountText: ShortViewCountText2
  publishedTimeText: PublishedTimeText2
  thumbnailOverlays: ThumbnailOverlay3[]
}

interface Thumbnail10 {
  thumbnails: Thumbnail11[]
}

interface Thumbnail11 {
  url: string
  width: number
  height: number
}

interface Title11 {
  accessibility: Accessibility16
  simpleText: string
}

interface Accessibility16 {
  accessibilityData: AccessibilityData25
}

interface AccessibilityData25 {
  label: string
}

interface ShortBylineText2 {
  runs: Run26[]
}

interface Run26 {
  text: string
  navigationEndpoint: NavigationEndpoint17
}

interface NavigationEndpoint17 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata39
  browseEndpoint: BrowseEndpoint7
}

interface CommandMetadata39 {
  webCommandMetadata: WebCommandMetadata39
}

interface WebCommandMetadata39 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint7 {
  browseId: string
  canonicalBaseUrl: string
}

interface LengthText2 {
  accessibility: Accessibility17
  simpleText: string
}

interface Accessibility17 {
  accessibilityData: AccessibilityData26
}

interface AccessibilityData26 {
  label: string
}

interface NavigationEndpoint18 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata40
  watchEndpoint: WatchEndpoint12
}

interface CommandMetadata40 {
  webCommandMetadata: WebCommandMetadata40
}

interface WebCommandMetadata40 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint12 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig10
}

interface WatchEndpointSupportedOnesieConfig10 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig10
}

interface Html5PlaybackOnesieConfig10 {
  commonConfig: CommonConfig10
}

interface CommonConfig10 {
  url: string
}

interface ShortViewCountText2 {
  accessibility: Accessibility18
  simpleText: string
}

interface Accessibility18 {
  accessibilityData: AccessibilityData27
}

interface AccessibilityData27 {
  label: string
}

interface PublishedTimeText2 {
  simpleText: string
}

interface ThumbnailOverlay3 {
  thumbnailOverlayTimeStatusRenderer?: ThumbnailOverlayTimeStatusRenderer2
  thumbnailOverlayNowPlayingRenderer?: ThumbnailOverlayNowPlayingRenderer3
}

interface ThumbnailOverlayTimeStatusRenderer2 {
  text: Text18
  style: string
}

interface Text18 {
  accessibility: Accessibility19
  simpleText: string
}

interface Accessibility19 {
  accessibilityData: AccessibilityData28
}

interface AccessibilityData28 {
  label: string
}

interface ThumbnailOverlayNowPlayingRenderer3 {
  text: Text19
}

interface Text19 {
  runs: Run27[]
}

interface Run27 {
  text: string
}

interface EndScreenPlaylistRenderer {
  playlistId: string
  title: Title12
  thumbnail: Thumbnail12
  longBylineText: LongBylineText3
  videoCountText: VideoCountText2
  navigationEndpoint: NavigationEndpoint19
  trackingParams: string
}

interface Title12 {
  simpleText: string
}

interface Thumbnail12 {
  thumbnails: Thumbnail13[]
}

interface Thumbnail13 {
  url: string
  width: number
  height: number
}

interface LongBylineText3 {
  simpleText: string
}

interface VideoCountText2 {
  runs: Run28[]
}

interface Run28 {
  text: string
}

interface NavigationEndpoint19 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata41
  watchEndpoint: WatchEndpoint13
}

interface CommandMetadata41 {
  webCommandMetadata: WebCommandMetadata41
}

interface WebCommandMetadata41 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint13 {
  videoId: string
  playlistId: string
  params: string
  continuePlayback: boolean
  loggingContext: LoggingContext3
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig11
}

interface LoggingContext3 {
  vssLoggingContext: VssLoggingContext3
}

interface VssLoggingContext3 {
  serializedContextData: string
}

interface WatchEndpointSupportedOnesieConfig11 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig11
}

interface Html5PlaybackOnesieConfig11 {
  commonConfig: CommonConfig11
}

interface CommonConfig11 {
  url: string
}

interface Title13 {
  simpleText: string
}

interface Autoplay3 {
  playerOverlayAutoplayRenderer: PlayerOverlayAutoplayRenderer
}

interface PlayerOverlayAutoplayRenderer {
  title: Title14
  videoTitle: VideoTitle
  byline: Byline
  pauseText: PauseText
  background: Background
  countDownSecs: number
  cancelButton: CancelButton
  nextButton: NextButton
  trackingParams: string
  closeButton: CloseButton
  thumbnailOverlays: ThumbnailOverlay4[]
  preferImmediateRedirect: boolean
  videoId: string
  publishedTimeText: PublishedTimeText3
  webShowNewAutonavCountdown: boolean
  webShowBigThumbnailEndscreen: boolean
  shortViewCountText: ShortViewCountText3
  countDownSecsForFullscreen: number
}

interface Title14 {
  simpleText: string
}

interface VideoTitle {
  accessibility: Accessibility20
  simpleText: string
}

interface Accessibility20 {
  accessibilityData: AccessibilityData29
}

interface AccessibilityData29 {
  label: string
}

interface Byline {
  runs: Run29[]
}

interface Run29 {
  text: string
  navigationEndpoint: NavigationEndpoint20
}

interface NavigationEndpoint20 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata42
  browseEndpoint: BrowseEndpoint8
}

interface CommandMetadata42 {
  webCommandMetadata: WebCommandMetadata42
}

interface WebCommandMetadata42 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint8 {
  browseId: string
  canonicalBaseUrl: string
}

interface PauseText {
  simpleText: string
}

interface Background {
  thumbnails: Thumbnail14[]
}

interface Thumbnail14 {
  url: string
  width: number
  height: number
}

interface CancelButton {
  buttonRenderer: ButtonRenderer11
}

interface ButtonRenderer11 {
  style: string
  size: string
  isDisabled: boolean
  text: Text20
  accessibility: Accessibility21
  trackingParams: string
  accessibilityData: AccessibilityData30
  command: Command8
}

interface Text20 {
  simpleText: string
}

interface Accessibility21 {
  label: string
}

interface AccessibilityData30 {
  accessibilityData: AccessibilityData31
}

interface AccessibilityData31 {
  label: string
}

interface Command8 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata43
  getSurveyCommand: GetSurveyCommand
}

interface CommandMetadata43 {
  webCommandMetadata: WebCommandMetadata43
}

interface WebCommandMetadata43 {
  sendPost: boolean
  apiUrl: string
}

interface GetSurveyCommand {
  endpoint: Endpoint
  action: string
}

interface Endpoint {
  watch: Watch
}

interface Watch {
  hack: boolean
}

interface NextButton {
  buttonRenderer: ButtonRenderer12
}

interface ButtonRenderer12 {
  style: string
  size: string
  isDisabled: boolean
  navigationEndpoint: NavigationEndpoint21
  accessibility: Accessibility22
  trackingParams: string
  accessibilityData: AccessibilityData32
}

interface NavigationEndpoint21 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata44
  watchEndpoint: WatchEndpoint14
}

interface CommandMetadata44 {
  webCommandMetadata: WebCommandMetadata44
}

interface WebCommandMetadata44 {
  url: string
  webPageType: string
  rootVe: number
}

interface WatchEndpoint14 {
  videoId: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig12
}

interface WatchEndpointSupportedOnesieConfig12 {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig12
}

interface Html5PlaybackOnesieConfig12 {
  commonConfig: CommonConfig12
}

interface CommonConfig12 {
  url: string
}

interface Accessibility22 {
  label: string
}

interface AccessibilityData32 {
  accessibilityData: AccessibilityData33
}

interface AccessibilityData33 {
  label: string
}

interface CloseButton {
  buttonRenderer: ButtonRenderer13
}

interface ButtonRenderer13 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon10
  accessibility: Accessibility23
  trackingParams: string
}

interface Icon10 {
  iconType: string
}

interface Accessibility23 {
  label: string
}

interface ThumbnailOverlay4 {
  thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer3
}

interface ThumbnailOverlayTimeStatusRenderer3 {
  text: Text21
  style: string
}

interface Text21 {
  accessibility: Accessibility24
  simpleText: string
}

interface Accessibility24 {
  accessibilityData: AccessibilityData34
}

interface AccessibilityData34 {
  label: string
}

interface PublishedTimeText3 {
  simpleText: string
}

interface ShortViewCountText3 {
  accessibility: Accessibility25
  simpleText: string
}

interface Accessibility25 {
  accessibilityData: AccessibilityData35
}

interface AccessibilityData35 {
  label: string
}

interface ShareButton {
  buttonRenderer: ButtonRenderer14
}

interface ButtonRenderer14 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon11
  navigationEndpoint: NavigationEndpoint22
  tooltip: string
  trackingParams: string
}

interface Icon11 {
  iconType: string
}

interface NavigationEndpoint22 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata45
  shareEntityServiceEndpoint: ShareEntityServiceEndpoint3
}

interface CommandMetadata45 {
  webCommandMetadata: WebCommandMetadata45
}

interface WebCommandMetadata45 {
  sendPost: boolean
  apiUrl: string
}

interface ShareEntityServiceEndpoint3 {
  serializedShareEntity: string
  commands: Command9[]
}

interface Command9 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction4
}

interface OpenPopupAction4 {
  popup: Popup4
  popupType: string
  beReused: boolean
}

interface Popup4 {
  unifiedSharePanelRenderer: UnifiedSharePanelRenderer3
}

interface UnifiedSharePanelRenderer3 {
  trackingParams: string
  showLoadingSpinner: boolean
}

interface AddToMenu {
  menuRenderer: MenuRenderer3
}

interface MenuRenderer3 {
  trackingParams: string
}

interface VideoDetails {
  playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer
}

interface PlayerOverlayVideoDetailsRenderer {
  title: Title15
  subtitle: Subtitle
}

interface Title15 {
  simpleText: string
}

interface Subtitle {
  runs: Run30[]
}

interface Run30 {
  text: string
}

interface AutonavToggle {
  autoplaySwitchButtonRenderer: AutoplaySwitchButtonRenderer
}

interface AutoplaySwitchButtonRenderer {
  onEnabledCommand: OnEnabledCommand
  onDisabledCommand: OnDisabledCommand
  enabledAccessibilityData: EnabledAccessibilityData
  disabledAccessibilityData: DisabledAccessibilityData
  trackingParams: string
  enabled: boolean
}

interface OnEnabledCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata46
  setSettingEndpoint: SetSettingEndpoint
}

interface CommandMetadata46 {
  webCommandMetadata: WebCommandMetadata46
}

interface WebCommandMetadata46 {
  sendPost: boolean
  apiUrl: string
}

interface SetSettingEndpoint {
  settingItemId: string
  boolValue: boolean
  settingItemIdForClient: string
}

interface OnDisabledCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata47
  setSettingEndpoint: SetSettingEndpoint2
}

interface CommandMetadata47 {
  webCommandMetadata: WebCommandMetadata47
}

interface WebCommandMetadata47 {
  sendPost: boolean
  apiUrl: string
}

interface SetSettingEndpoint2 {
  settingItemId: string
  boolValue: boolean
  settingItemIdForClient: string
}

interface EnabledAccessibilityData {
  accessibilityData: AccessibilityData36
}

interface AccessibilityData36 {
  label: string
}

interface DisabledAccessibilityData {
  accessibilityData: AccessibilityData37
}

interface AccessibilityData37 {
  label: string
}

interface DecoratedPlayerBarRenderer {
  decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer2
}

interface DecoratedPlayerBarRenderer2 {
  playerBar: PlayerBar
}

interface PlayerBar {
  multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer
}

interface MultiMarkersPlayerBarRenderer {
  visibleOnLoad: VisibleOnLoad
  markersMap: MarkersMap[]
}

interface VisibleOnLoad {
  key: string
}

interface MarkersMap {
  key: string
  value: Value
}

interface Value {
  trackingParams: string
  heatmap: Heatmap
}

interface Heatmap {
  heatmapRenderer: HeatmapRenderer
}

interface HeatmapRenderer {
  maxHeightDp: number
  minHeightDp: number
  showHideAnimationDurationMillis: number
  heatMarkers: HeatMarker[]
  heatMarkersDecorations: HeatMarkersDecoration[]
}

interface HeatMarker {
  heatMarkerRenderer: HeatMarkerRenderer
}

interface HeatMarkerRenderer {
  timeRangeStartMillis: number
  markerDurationMillis: number
  heatMarkerIntensityScoreNormalized: number
}

interface HeatMarkersDecoration {
  timedMarkerDecorationRenderer: TimedMarkerDecorationRenderer
}

interface TimedMarkerDecorationRenderer {
  visibleTimeRangeStartMillis: number
  visibleTimeRangeEndMillis: number
  decorationTimeMillis: number
  label: Label
  icon: string
  trackingParams: string
}

interface Label {
  runs: Run31[]
}

interface Run31 {
  text: string
}

interface Overlay {
  tooltipRenderer: TooltipRenderer
}

interface TooltipRenderer {
  promoConfig: PromoConfig
  targetId: string
  text: Text22
  detailsText: DetailsText
  dismissButton: DismissButton
  suggestedPosition: SuggestedPosition
  dismissStrategy: DismissStrategy
  dwellTimeMs: string
  trackingParams: string
}

interface PromoConfig {
  promoId: string
  impressionEndpoints: ImpressionEndpoint[]
  acceptCommand: AcceptCommand
  dismissCommand: DismissCommand
}

interface ImpressionEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata48
  feedbackEndpoint: FeedbackEndpoint
}

interface CommandMetadata48 {
  webCommandMetadata: WebCommandMetadata48
}

interface WebCommandMetadata48 {
  sendPost: boolean
  apiUrl: string
}

interface FeedbackEndpoint {
  feedbackToken: string
  uiActions: UiActions
}

interface UiActions {
  hideEnclosingContainer: boolean
}

interface AcceptCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata49
  feedbackEndpoint: FeedbackEndpoint2
}

interface CommandMetadata49 {
  webCommandMetadata: WebCommandMetadata49
}

interface WebCommandMetadata49 {
  sendPost: boolean
  apiUrl: string
}

interface FeedbackEndpoint2 {
  feedbackToken: string
  uiActions: UiActions2
}

interface UiActions2 {
  hideEnclosingContainer: boolean
}

interface DismissCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata50
  feedbackEndpoint: FeedbackEndpoint3
}

interface CommandMetadata50 {
  webCommandMetadata: WebCommandMetadata50
}

interface WebCommandMetadata50 {
  sendPost: boolean
  apiUrl: string
}

interface FeedbackEndpoint3 {
  feedbackToken: string
  uiActions: UiActions3
}

interface UiActions3 {
  hideEnclosingContainer: boolean
}

interface Text22 {
  runs: Run32[]
}

interface Run32 {
  text: string
}

interface DetailsText {
  runs: Run33[]
}

interface Run33 {
  text: string
}

interface DismissButton {
  buttonRenderer: ButtonRenderer15
}

interface ButtonRenderer15 {
  style: string
  size: string
  text: Text23
  trackingParams: string
  command: Command10
}

interface Text23 {
  runs: Run34[]
}

interface Run34 {
  text: string
}

interface Command10 {
  clickTrackingParams: string
  commandExecutorCommand: CommandExecutorCommand3
}

interface CommandExecutorCommand3 {
  commands: Command11[]
}

interface Command11 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata51
  feedbackEndpoint: FeedbackEndpoint4
}

interface CommandMetadata51 {
  webCommandMetadata: WebCommandMetadata51
}

interface WebCommandMetadata51 {
  sendPost: boolean
  apiUrl: string
}

interface FeedbackEndpoint4 {
  feedbackToken: string
  uiActions: UiActions4
}

interface UiActions4 {
  hideEnclosingContainer: boolean
}

interface SuggestedPosition {
  type: string
}

interface DismissStrategy {
  type: string
}

interface OnResponseReceivedEndpoint {
  clickTrackingParams: string
  commandMetadata?: CommandMetadata52
  signalServiceEndpoint?: SignalServiceEndpoint3
  changeKeyedMarkersVisibilityCommand?: ChangeKeyedMarkersVisibilityCommand
  loadMarkersCommand?: LoadMarkersCommand
}

interface CommandMetadata52 {
  webCommandMetadata: WebCommandMetadata52
}

interface WebCommandMetadata52 {
  sendPost: boolean
}

interface SignalServiceEndpoint3 {
  signal: string
  actions: Action5[]
}

interface Action5 {
  clickTrackingParams: string
  signalAction: SignalAction
}

interface SignalAction {
  signal: string
}

interface ChangeKeyedMarkersVisibilityCommand {
  isVisible: boolean
  key: string
}

interface LoadMarkersCommand {
  entityKeys: string[]
}

interface EngagementPanel {
  engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer
}

interface EngagementPanelSectionListRenderer {
  content: Content9
  targetId: string
  visibility: string
  loggingDirectives: LoggingDirectives4
  panelIdentifier?: string
  header?: Header
  veType?: number
}

interface Content9 {
  adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer
  structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer
  sectionListRenderer?: SectionListRenderer
}

interface AdsEngagementPanelContentRenderer {
  hack: boolean
}

interface StructuredDescriptionContentRenderer {
  items: Item3[]
}

interface Item3 {
  videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer
  expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer
  videoDescriptionMusicSectionRenderer?: VideoDescriptionMusicSectionRenderer
}

interface VideoDescriptionHeaderRenderer {
  title: Title16
  channel: Channel
  views: Views
  publishDate: PublishDate
  factoid: Factoid[]
  channelNavigationEndpoint: ChannelNavigationEndpoint
  channelThumbnail: ChannelThumbnail2
}

interface Title16 {
  runs: Run35[]
}

interface Run35 {
  text: string
}

interface Channel {
  simpleText: string
}

interface Views {
  simpleText: string
}

interface PublishDate {
  simpleText: string
}

interface Factoid {
  factoidRenderer: FactoidRenderer
}

interface FactoidRenderer {
  value: Value2
  label: Label2
  accessibilityText: string
}

interface Value2 {
  simpleText: string
}

interface Label2 {
  simpleText: string
}

interface ChannelNavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata53
  browseEndpoint: BrowseEndpoint9
}

interface CommandMetadata53 {
  webCommandMetadata: WebCommandMetadata53
}

interface WebCommandMetadata53 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint9 {
  browseId: string
  canonicalBaseUrl: string
}

interface ChannelThumbnail2 {
  thumbnails: Thumbnail15[]
}

interface Thumbnail15 {
  url: string
}

interface ExpandableVideoDescriptionBodyRenderer {
  showMoreText: ShowMoreText2
  showLessText: ShowLessText2
  attributedDescriptionBodyText: AttributedDescriptionBodyText
}

interface ShowMoreText2 {
  simpleText: string
}

interface ShowLessText2 {
  simpleText: string
}

interface AttributedDescriptionBodyText {
  content: string
  commandRuns: CommandRun2[]
  styleRuns: StyleRun2[]
}

interface CommandRun2 {
  startIndex: number
  length: number
  onTap: OnTap3
  loggingDirectives?: LoggingDirectives3
}

interface OnTap3 {
  innertubeCommand: InnertubeCommand2
}

interface InnertubeCommand2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata54
  urlEndpoint?: UrlEndpoint2
  browseEndpoint?: BrowseEndpoint10
}

interface CommandMetadata54 {
  webCommandMetadata: WebCommandMetadata54
}

interface WebCommandMetadata54 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl?: string
}

interface UrlEndpoint2 {
  url: string
  target: string
  nofollow: boolean
}

interface BrowseEndpoint10 {
  browseId: string
  params: string
}

interface LoggingDirectives3 {
  trackingParams: string
  enableDisplayloggerExperiment: boolean
}

interface StyleRun2 {
  startIndex: number
  length: number
  fontColor: number
}

interface VideoDescriptionMusicSectionRenderer {
  sectionTitle: SectionTitle
  carouselLockups: CarouselLockup[]
  topicLink: TopicLink
  premiumUpsellLink: PremiumUpsellLink
}

interface SectionTitle {
  simpleText: string
}

interface CarouselLockup {
  carouselLockupRenderer: CarouselLockupRenderer
}

interface CarouselLockupRenderer {
  infoRows: InfoRow[]
}

interface InfoRow {
  infoRowRenderer: InfoRowRenderer
}

interface InfoRowRenderer {
  title: Title17
  defaultMetadata?: DefaultMetadata
  trackingParams: string
  infoRowExpandStatusKey?: string
  expandedMetadata?: ExpandedMetadata
  expandIcon?: ExpandIcon
}

interface Title17 {
  simpleText: string
}

interface DefaultMetadata {
  simpleText: string
}

interface ExpandedMetadata {
  simpleText: string
}

interface ExpandIcon {
  iconType: string
}

interface TopicLink {
  topicLinkRenderer: TopicLinkRenderer
}

interface TopicLinkRenderer {
  title: Title18
  thumbnailDetails: ThumbnailDetails
  endpoint: Endpoint2
  callToActionIcon: CallToActionIcon
  trackingParams: string
}

interface Title18 {
  simpleText: string
}

interface ThumbnailDetails {
  thumbnails: Thumbnail16[]
}

interface Thumbnail16 {
  url: string
}

interface Endpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata55
  browseEndpoint: BrowseEndpoint11
}

interface CommandMetadata55 {
  webCommandMetadata: WebCommandMetadata55
}

interface WebCommandMetadata55 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint11 {
  browseId: string
}

interface CallToActionIcon {
  iconType: string
}

interface PremiumUpsellLink {
  runs: Run36[]
}

interface Run36 {
  text: string
  navigationEndpoint: NavigationEndpoint23
}

interface NavigationEndpoint23 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata56
  browseEndpoint: BrowseEndpoint12
}

interface CommandMetadata56 {
  webCommandMetadata: WebCommandMetadata56
}

interface WebCommandMetadata56 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint12 {
  browseId: string
}

interface SectionListRenderer {
  contents: Content10[]
  trackingParams: string
}

interface Content10 {
  itemSectionRenderer: ItemSectionRenderer2
}

interface ItemSectionRenderer2 {
  contents: Content11[]
  trackingParams: string
  sectionIdentifier: string
  targetId: string
}

interface Content11 {
  continuationItemRenderer: ContinuationItemRenderer3
}

interface ContinuationItemRenderer3 {
  trigger: string
  continuationEndpoint: ContinuationEndpoint3
}

interface ContinuationEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata57
  continuationCommand: ContinuationCommand4
}

interface CommandMetadata57 {
  webCommandMetadata: WebCommandMetadata57
}

interface WebCommandMetadata57 {
  sendPost: boolean
  apiUrl: string
}

interface ContinuationCommand4 {
  token: string
  request: string
}

interface LoggingDirectives4 {
  trackingParams: string
  visibility: Visibility2
  enableDisplayloggerExperiment: boolean
}

interface Visibility2 {
  types: string
}

interface Header {
  engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer
}

interface EngagementPanelTitleHeaderRenderer {
  title: Title19
  contextualInfo?: ContextualInfo
  menu?: Menu2
  visibilityButton: VisibilityButton
  trackingParams: string
}

interface Title19 {
  runs?: Run37[]
  simpleText?: string
}

interface Run37 {
  text: string
}

interface ContextualInfo {
  runs: Run38[]
}

interface Run38 {
  text: string
}

interface Menu2 {
  sortFilterSubMenuRenderer: SortFilterSubMenuRenderer
}

interface SortFilterSubMenuRenderer {
  subMenuItems: SubMenuItem[]
  icon: Icon12
  accessibility: Accessibility26
  trackingParams: string
}

interface SubMenuItem {
  title: string
  selected: boolean
  serviceEndpoint: ServiceEndpoint6
  trackingParams: string
}

interface ServiceEndpoint6 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata58
  continuationCommand: ContinuationCommand5
}

interface CommandMetadata58 {
  webCommandMetadata: WebCommandMetadata58
}

interface WebCommandMetadata58 {
  sendPost: boolean
  apiUrl: string
}

interface ContinuationCommand5 {
  token: string
  request: string
  command: Command12
}

interface Command12 {
  clickTrackingParams: string
  showReloadUiCommand: ShowReloadUiCommand
}

interface ShowReloadUiCommand {
  targetId: string
}

interface Icon12 {
  iconType: string
}

interface Accessibility26 {
  accessibilityData: AccessibilityData38
}

interface AccessibilityData38 {
  label: string
}

interface VisibilityButton {
  buttonRenderer: ButtonRenderer16
}

interface ButtonRenderer16 {
  style?: string
  size?: string
  icon: Icon13
  trackingParams: string
  accessibilityData: AccessibilityData39
  command: Command13
}

interface Icon13 {
  iconType: string
}

interface AccessibilityData39 {
  accessibilityData: AccessibilityData40
}

interface AccessibilityData40 {
  label: string
}

interface Command13 {
  clickTrackingParams: string
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction4
  commandExecutorCommand?: CommandExecutorCommand4
}

interface ChangeEngagementPanelVisibilityAction4 {
  targetId: string
  visibility: string
}

interface CommandExecutorCommand4 {
  commands: Command14[]
}

interface Command14 {
  clickTrackingParams: string
  changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction5
  updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand
}

interface ChangeEngagementPanelVisibilityAction5 {
  targetId: string
  visibility: string
}

interface UpdateToggleButtonStateCommand {
  toggled: boolean
  buttonId: string
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
  endpoint: Endpoint3
  trackingParams: string
  overrideEntityKey: string
}

interface IconImage {
  iconType: string
}

interface TooltipText {
  runs: Run39[]
}

interface Run39 {
  text: string
}

interface Endpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata59
  browseEndpoint: BrowseEndpoint13
}

interface CommandMetadata59 {
  webCommandMetadata: WebCommandMetadata59
}

interface WebCommandMetadata59 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface BrowseEndpoint13 {
  browseId: string
}

interface Searchbox {
  fusionSearchboxRenderer: FusionSearchboxRenderer
}

interface FusionSearchboxRenderer {
  icon: Icon14
  placeholderText: PlaceholderText
  config: Config
  trackingParams: string
  searchEndpoint: SearchEndpoint
  clearButton: ClearButton
}

interface Icon14 {
  iconType: string
}

interface PlaceholderText {
  runs: Run40[]
}

interface Run40 {
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

interface SearchEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata60
  searchEndpoint: SearchEndpoint2
}

interface CommandMetadata60 {
  webCommandMetadata: WebCommandMetadata60
}

interface WebCommandMetadata60 {
  url: string
  webPageType: string
  rootVe: number
}

interface SearchEndpoint2 {
  query: string
}

interface ClearButton {
  buttonRenderer: ButtonRenderer17
}

interface ButtonRenderer17 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon15
  trackingParams: string
  accessibilityData: AccessibilityData41
}

interface Icon15 {
  iconType: string
}

interface AccessibilityData41 {
  accessibilityData: AccessibilityData42
}

interface AccessibilityData42 {
  label: string
}

interface TopbarButton {
  topbarMenuButtonRenderer?: TopbarMenuButtonRenderer
  buttonRenderer?: ButtonRenderer18
}

interface TopbarMenuButtonRenderer {
  icon: Icon16
  menuRequest: MenuRequest
  trackingParams: string
  accessibility: Accessibility27
  tooltip: string
  style: string
}

interface Icon16 {
  iconType: string
}

interface MenuRequest {
  clickTrackingParams: string
  commandMetadata: CommandMetadata61
  signalServiceEndpoint: SignalServiceEndpoint4
}

interface CommandMetadata61 {
  webCommandMetadata: WebCommandMetadata61
}

interface WebCommandMetadata61 {
  sendPost: boolean
  apiUrl: string
}

interface SignalServiceEndpoint4 {
  signal: string
  actions: Action6[]
}

interface Action6 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction5
}

interface OpenPopupAction5 {
  popup: Popup5
  popupType: string
  beReused: boolean
}

interface Popup5 {
  multiPageMenuRenderer: MultiPageMenuRenderer
}

interface MultiPageMenuRenderer {
  trackingParams: string
  style: string
  showLoadingSpinner: boolean
}

interface Accessibility27 {
  accessibilityData: AccessibilityData43
}

interface AccessibilityData43 {
  label: string
}

interface ButtonRenderer18 {
  style: string
  size: string
  text: Text24
  icon: Icon17
  navigationEndpoint: NavigationEndpoint24
  trackingParams: string
  targetId: string
}

interface Text24 {
  runs: Run41[]
}

interface Run41 {
  text: string
}

interface Icon17 {
  iconType: string
}

interface NavigationEndpoint24 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata62
  signInEndpoint: SignInEndpoint7
}

interface CommandMetadata62 {
  webCommandMetadata: WebCommandMetadata62
}

interface WebCommandMetadata62 {
  url: string
  webPageType: string
  rootVe: number
}

interface SignInEndpoint7 {
  idamTag: string
}

interface HotkeyDialog {
  hotkeyDialogRenderer: HotkeyDialogRenderer
}

interface HotkeyDialogRenderer {
  title: Title20
  sections: Section[]
  dismissButton: DismissButton2
  trackingParams: string
}

interface Title20 {
  runs: Run42[]
}

interface Run42 {
  text: string
}

interface Section {
  hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer
}

interface HotkeyDialogSectionRenderer {
  title: Title21
  options: Option[]
}

interface Title21 {
  runs: Run43[]
}

interface Run43 {
  text: string
}

interface Option {
  hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer
}

interface HotkeyDialogSectionOptionRenderer {
  label: Label3
  hotkey: string
  hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel
}

interface Label3 {
  runs: Run44[]
}

interface Run44 {
  text: string
}

interface HotkeyAccessibilityLabel {
  accessibilityData: AccessibilityData44
}

interface AccessibilityData44 {
  label: string
}

interface DismissButton2 {
  buttonRenderer: ButtonRenderer19
}

interface ButtonRenderer19 {
  style: string
  size: string
  isDisabled: boolean
  text: Text25
  trackingParams: string
}

interface Text25 {
  runs: Run45[]
}

interface Run45 {
  text: string
}

interface BackButton {
  buttonRenderer: ButtonRenderer20
}

interface ButtonRenderer20 {
  trackingParams: string
  command: Command15
}

interface Command15 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata63
  signalServiceEndpoint: SignalServiceEndpoint5
}

interface CommandMetadata63 {
  webCommandMetadata: WebCommandMetadata63
}

interface WebCommandMetadata63 {
  sendPost: boolean
}

interface SignalServiceEndpoint5 {
  signal: string
  actions: Action7[]
}

interface Action7 {
  clickTrackingParams: string
  signalAction: SignalAction2
}

interface SignalAction2 {
  signal: string
}

interface ForwardButton {
  buttonRenderer: ButtonRenderer21
}

interface ButtonRenderer21 {
  trackingParams: string
  command: Command16
}

interface Command16 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata64
  signalServiceEndpoint: SignalServiceEndpoint6
}

interface CommandMetadata64 {
  webCommandMetadata: WebCommandMetadata64
}

interface WebCommandMetadata64 {
  sendPost: boolean
}

interface SignalServiceEndpoint6 {
  signal: string
  actions: Action8[]
}

interface Action8 {
  clickTrackingParams: string
  signalAction: SignalAction3
}

interface SignalAction3 {
  signal: string
}

interface A11ySkipNavigationButton {
  buttonRenderer: ButtonRenderer22
}

interface ButtonRenderer22 {
  style: string
  size: string
  isDisabled: boolean
  text: Text26
  trackingParams: string
  command: Command17
}

interface Text26 {
  runs: Run46[]
}

interface Run46 {
  text: string
}

interface Command17 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata65
  signalServiceEndpoint: SignalServiceEndpoint7
}

interface CommandMetadata65 {
  webCommandMetadata: WebCommandMetadata65
}

interface WebCommandMetadata65 {
  sendPost: boolean
}

interface SignalServiceEndpoint7 {
  signal: string
  actions: Action9[]
}

interface Action9 {
  clickTrackingParams: string
  signalAction: SignalAction4
}

interface SignalAction4 {
  signal: string
}

interface VoiceSearchButton {
  buttonRenderer: ButtonRenderer23
}

interface ButtonRenderer23 {
  style: string
  size: string
  isDisabled: boolean
  serviceEndpoint: ServiceEndpoint7
  icon: Icon19
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData47
}

interface ServiceEndpoint7 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata66
  signalServiceEndpoint: SignalServiceEndpoint8
}

interface CommandMetadata66 {
  webCommandMetadata: WebCommandMetadata66
}

interface WebCommandMetadata66 {
  sendPost: boolean
}

interface SignalServiceEndpoint8 {
  signal: string
  actions: Action10[]
}

interface Action10 {
  clickTrackingParams: string
  openPopupAction: OpenPopupAction6
}

interface OpenPopupAction6 {
  popup: Popup6
  popupType: string
}

interface Popup6 {
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
  runs: Run47[]
}

interface Run47 {
  text: string
}

interface PromptHeader {
  runs: Run48[]
}

interface Run48 {
  text: string
}

interface ExampleQuery1 {
  runs: Run49[]
}

interface Run49 {
  text: string
}

interface ExampleQuery2 {
  runs: Run50[]
}

interface Run50 {
  text: string
}

interface PromptMicrophoneLabel {
  runs: Run51[]
}

interface Run51 {
  text: string
}

interface LoadingHeader {
  runs: Run52[]
}

interface Run52 {
  text: string
}

interface ConnectionErrorHeader {
  runs: Run53[]
}

interface Run53 {
  text: string
}

interface ConnectionErrorMicrophoneLabel {
  runs: Run54[]
}

interface Run54 {
  text: string
}

interface PermissionsHeader {
  runs: Run55[]
}

interface Run55 {
  text: string
}

interface PermissionsSubtext {
  runs: Run56[]
}

interface Run56 {
  text: string
}

interface DisabledHeader {
  runs: Run57[]
}

interface Run57 {
  text: string
}

interface DisabledSubtext {
  runs: Run58[]
}

interface Run58 {
  text: string
}

interface MicrophoneButtonAriaLabel {
  runs: Run59[]
}

interface Run59 {
  text: string
}

interface ExitButton {
  buttonRenderer: ButtonRenderer24
}

interface ButtonRenderer24 {
  style: string
  size: string
  isDisabled: boolean
  icon: Icon18
  trackingParams: string
  accessibilityData: AccessibilityData45
}

interface Icon18 {
  iconType: string
}

interface AccessibilityData45 {
  accessibilityData: AccessibilityData46
}

interface AccessibilityData46 {
  label: string
}

interface MicrophoneOffPromptHeader {
  runs: Run60[]
}

interface Run60 {
  text: string
}

interface Icon19 {
  iconType: string
}

interface AccessibilityData47 {
  accessibilityData: AccessibilityData48
}

interface AccessibilityData48 {
  label: string
}

interface PageVisualEffect {
  cinematicContainerRenderer: CinematicContainerRenderer
}

interface CinematicContainerRenderer {
  gradientColorConfig: GradientColorConfig[]
  presentationStyle: string
  config: Config2
}

interface GradientColorConfig {
  darkThemeColor: number
  startLocation?: number
}

interface Config2 {
  lightThemeBackgroundColor: number
  darkThemeBackgroundColor: number
  animationConfig: AnimationConfig
  colorSourceSizeMultiplier: number
  applyClientImageBlur: boolean
  bottomColorSourceHeightMultiplier: number
  maxBottomColorSourceHeight: number
  colorSourceWidthMultiplier: number
  colorSourceHeightMultiplier: number
  blurStrength: number
  watchFullscreenConfig: WatchFullscreenConfig
  enableInLightTheme: boolean
}

interface AnimationConfig {
  minImageUpdateIntervalMs: number
  crossfadeDurationMs: number
  crossfadeStartOffset: number
  maxFrameRate: number
}

interface WatchFullscreenConfig {}

interface FrameworkUpdates {
  entityBatchUpdate: EntityBatchUpdate
}

interface EntityBatchUpdate {
  mutations: Mutation[]
  timestamp: Timestamp
}

interface Mutation {
  entityKey: string
  type: string
  options: Options
}

interface Options {
  persistenceOption: string
}

interface Timestamp {
  seconds: string
  nanos: number
}
