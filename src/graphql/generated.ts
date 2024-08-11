import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Amenity = {
  __typename?: 'Amenity';
  amenityRooms?: Maybe<Array<AmenityRoom>>;
  coverImg?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type AmenityRoom = {
  __typename?: 'AmenityRoom';
  amenity: Amenity;
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  room: Room;
  updatedAt: Scalars['Date']['output'];
};

export type Booking = {
  __typename?: 'Booking';
  adultCount: Scalars['Int']['output'];
  babyCount: Scalars['Int']['output'];
  cancelTime?: Maybe<Scalars['Date']['output']>;
  cancelledBy?: Maybe<CancelledBy>;
  checkInDate: Scalars['Date']['output'];
  checkOutDate: Scalars['Date']['output'];
  childCount: Scalars['Int']['output'];
  cleaningFee?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Date']['output'];
  customer?: Maybe<User>;
  customerId: Scalars['String']['output'];
  guestServiceFee: Scalars['Float']['output'];
  hostServiceFee: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  numberOfNights: Scalars['Int']['output'];
  paymentMethod: PaymentMethod;
  paymentTime: Scalars['Date']['output'];
  petCount: Scalars['Int']['output'];
  petFee?: Maybe<Scalars['Float']['output']>;
  review?: Maybe<Review>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['Int']['output']>;
  roomRate: Scalars['Float']['output'];
  status: BookingStatus;
  totalAmount: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type BookingDayDetails = {
  __typename?: 'BookingDayDetails';
  day?: Maybe<Scalars['String']['output']>;
  totalContract?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type BookingItemOption = {
  __typename?: 'BookingItemOption';
  choice?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type BookingMonthDetails = {
  __typename?: 'BookingMonthDetails';
  bookingsDays?: Maybe<Array<BookingDayDetails>>;
  month?: Maybe<Scalars['String']['output']>;
  monthlyContract?: Maybe<Scalars['Float']['output']>;
  monthlyPrice?: Maybe<Scalars['Float']['output']>;
};

export enum BookingStatus {
  Booked = 'Booked',
  Cancelled = 'Cancelled',
  CheckIn = 'CheckIn',
  CheckOut = 'CheckOut',
  Pending = 'Pending'
}

export enum BuildingType {
  Apartment = 'Apartment',
  BedAndBreakfast = 'BedAndBreakfast',
  GuestHouse = 'GuestHouse',
  Hanok = 'Hanok',
  House = 'House'
}

export enum CancelledBy {
  Guest = 'Guest',
  Host = 'Host',
  System = 'System'
}

export type Category = {
  __typename?: 'Category';
  categoryRooms?: Maybe<Array<CategoryRoom>>;
  coverImg?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CategoryRoom = {
  __typename?: 'CategoryRoom';
  category: Category;
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  room: Room;
  updatedAt: Scalars['Date']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  chatRoom: ChatRoom;
  chatRoomId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  read: Scalars['Boolean']['output'];
  recipientId: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type ChatRoom = {
  __typename?: 'ChatRoom';
  chats?: Maybe<Array<Chat>>;
  createdAt: Scalars['Date']['output'];
  guest?: Maybe<User>;
  guestId?: Maybe<Scalars['String']['output']>;
  host?: Maybe<User>;
  hostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  inquiry?: Maybe<Inquiry>;
  inquiryId?: Maybe<Scalars['Int']['output']>;
  manager?: Maybe<User>;
  managerId?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['Int']['output']>;
  type: ChatRoomType;
  updatedAt: Scalars['Date']['output'];
};

export enum ChatRoomType {
  GuestToHost = 'GuestToHost',
  GuestToManager = 'GuestToManager',
  HostToManager = 'HostToManager'
}

export type CoreOutput = {
  __typename?: 'CoreOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateAccountInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateAmenityInput = {
  coverImg?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateAmenityOutput = {
  __typename?: 'CreateAmenityOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateBookingInput = {
  adultCount: Scalars['Int']['input'];
  babyCount: Scalars['Int']['input'];
  checkInDate: Scalars['Date']['input'];
  checkOutDate: Scalars['Date']['input'];
  childCount: Scalars['Int']['input'];
  cleaningFee?: InputMaybe<Scalars['Float']['input']>;
  guestServiceFee: Scalars['Float']['input'];
  hostServiceFee: Scalars['Float']['input'];
  numberOfNights: Scalars['Int']['input'];
  paymentMethod: PaymentMethod;
  paymentTime: Scalars['Date']['input'];
  petCount: Scalars['Int']['input'];
  petFee?: InputMaybe<Scalars['Float']['input']>;
  roomId?: InputMaybe<Scalars['Int']['input']>;
  roomRate: Scalars['Float']['input'];
  status: BookingStatus;
  totalAmount: Scalars['Float']['input'];
};

export type CreateBookingOutput = {
  __typename?: 'CreateBookingOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateCategoryInput = {
  coverImg?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCategoryOutput = {
  __typename?: 'CreateCategoryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateChatRoomInput = {
  guestId?: InputMaybe<Scalars['String']['input']>;
  hostId?: InputMaybe<Scalars['String']['input']>;
  inquiryId?: InputMaybe<Scalars['Int']['input']>;
  managerId?: InputMaybe<Scalars['String']['input']>;
  roomId?: InputMaybe<Scalars['Int']['input']>;
  type: ChatRoomType;
};

export type CreateChatRoomOutput = {
  __typename?: 'CreateChatRoomOutput';
  data?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateFaqInput = {
  faqContent: Scalars['String']['input'];
  faqTitle: Scalars['String']['input'];
};

export type CreateFaqOutput = {
  __typename?: 'CreateFAQOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateInquiryInput = {
  inquiryMessage: Scalars['String']['input'];
  inquiryTitle: Scalars['String']['input'];
  inquiryType: InquiryType;
  roomId?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateInquiryOutput = {
  __typename?: 'CreateInquiryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateReplyInput = {
  content: Scalars['String']['input'];
  reviewId: Scalars['Int']['input'];
};

export type CreateReplyOutput = {
  __typename?: 'CreateReplyOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateReviewInput = {
  bookingId: Scalars['Int']['input'];
  hostFeedback?: InputMaybe<Scalars['String']['input']>;
  isWillingToRepurchase: Scalars['Boolean']['input'];
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
  roomId: Scalars['Int']['input'];
  systemFeedback?: InputMaybe<Scalars['String']['input']>;
};

export type CreateReviewOutput = {
  __typename?: 'CreateReviewOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateRoomInput = {
  address: Scalars['String']['input'];
  amenityIds?: InputMaybe<Array<Scalars['String']['input']>>;
  baseRoomRate: Scalars['Float']['input'];
  bathroomCount: Scalars['Int']['input'];
  bedCount: Scalars['Int']['input'];
  buildingType: BuildingType;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cleaningFee: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  detailaddress?: InputMaybe<Scalars['String']['input']>;
  extraRoomRate: Scalars['Float']['input'];
  guide: Scalars['String']['input'];
  isPetAvailable: Scalars['Boolean']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  maxBaseGuests: Scalars['Int']['input'];
  maxGuests: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  petFee: Scalars['Float']['input'];
  photos?: InputMaybe<Scalars['String']['input']>;
  refundPolicyType: RefundPolicyType;
  reservationType: ReservationType;
  roomCount: Scalars['Int']['input'];
  roomType: RoomType;
};

export type CreateRoomOutput = {
  __typename?: 'CreateRoomOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type CreateWishlistInput = {
  description: Scalars['String']['input'];
  roomId: Scalars['Float']['input'];
};

export type CreateWishlistOutput = {
  __typename?: 'CreateWishlistOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteFaqInput = {
  id: Scalars['Float']['input'];
};

export type DeleteFaqOutput = {
  __typename?: 'DeleteFAQOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteInquiryInput = {
  id: Scalars['Float']['input'];
};

export type DeleteInquiryOutput = {
  __typename?: 'DeleteInquiryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type DeleteWishlistInput = {
  id: Scalars['Float']['input'];
};

export type DeleteWishlistOutput = {
  __typename?: 'DeleteWishlistOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditBookingInput = {
  cancelTime?: InputMaybe<Scalars['Date']['input']>;
  cancelledBy?: InputMaybe<CancelledBy>;
  status: BookingStatus;
};

export type EditBookingOutput = {
  __typename?: 'EditBookingOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditProfileInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  selfIntro?: InputMaybe<Scalars['String']['input']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditReplyInput = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type EditReplyOutput = {
  __typename?: 'EditReplyOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditReviewInput = {
  id: Scalars['Float']['input'];
  review: Scalars['String']['input'];
};

export type EditReviewOutput = {
  __typename?: 'EditReviewOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditRoomInput = {
  address: Scalars['String']['input'];
  amenityIds?: InputMaybe<Array<Scalars['String']['input']>>;
  baseRoomRate: Scalars['Float']['input'];
  bathroomCount: Scalars['Int']['input'];
  bedCount: Scalars['Int']['input'];
  buildingType: BuildingType;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  cleaningFee: Scalars['Float']['input'];
  description: Scalars['String']['input'];
  detailaddress?: InputMaybe<Scalars['String']['input']>;
  extraRoomRate: Scalars['Float']['input'];
  guide: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  isPetAvailable: Scalars['Boolean']['input'];
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  maxBaseGuests: Scalars['Int']['input'];
  maxGuests: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  petFee: Scalars['Float']['input'];
  photos?: InputMaybe<Scalars['String']['input']>;
  refundPolicyType: RefundPolicyType;
  reservationType: ReservationType;
  roomCount: Scalars['Int']['input'];
  roomType: RoomType;
};

export type EditRoomOutput = {
  __typename?: 'EditRoomOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type EditRoomStatusInput = {
  id: Scalars['Float']['input'];
  status: RoomStatus;
};

export type EditRoomStatusOutput = {
  __typename?: 'EditRoomStatusOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Faq = {
  __typename?: 'FAQ';
  createdAt: Scalars['Date']['output'];
  faqContent: Scalars['String']['output'];
  faqTitle: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type GetAllBookingListOutput = {
  __typename?: 'GetAllBookingListOutput';
  error?: Maybe<Scalars['String']['output']>;
  netRevenue?: Maybe<Scalars['Float']['output']>;
  ok: Scalars['Boolean']['output'];
  paymentCount?: Maybe<Scalars['Int']['output']>;
  paymentList?: Maybe<Array<Booking>>;
};

export type GetAllInquiryOutput = {
  __typename?: 'GetAllInquiryOutput';
  error?: Maybe<Scalars['String']['output']>;
  inquiries?: Maybe<Array<Inquiry>>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type GetAllRoomsInput = {
  bathroomCount?: InputMaybe<Scalars['Float']['input']>;
  bedCount?: InputMaybe<Scalars['Float']['input']>;
  buildingType?: InputMaybe<BuildingType>;
  categoryId?: InputMaybe<Scalars['Float']['input']>;
  checkInDate?: InputMaybe<Scalars['Date']['input']>;
  checkOutDate?: InputMaybe<Scalars['Date']['input']>;
  guest?: InputMaybe<Scalars['Float']['input']>;
  isImmediatePossible?: InputMaybe<Scalars['Boolean']['input']>;
  isPetAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Array<Scalars['Float']['input']>>;
  longitude?: InputMaybe<Array<Scalars['Float']['input']>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  roomCount?: InputMaybe<Scalars['Float']['input']>;
  roomType?: InputMaybe<RoomType>;
};

export type GetAllRoomsOutput = {
  __typename?: 'GetAllRoomsOutput';
  data?: Maybe<Array<Room>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetAllUsersOutput = {
  __typename?: 'GetAllUsersOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
};

export type GetFaqOutput = {
  __typename?: 'GetFAQOutput';
  FAQs?: Maybe<Array<Faq>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetInquiryOutput = {
  __typename?: 'GetInquiryOutput';
  error?: Maybe<Scalars['String']['output']>;
  inquiries?: Maybe<Array<Inquiry>>;
  ok: Scalars['Boolean']['output'];
};

export type GetReviewByIdOutput = {
  __typename?: 'GetReviewByIdOutput';
  data: Review;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type GetRoomListOutput = {
  __typename?: 'GetRoomListOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  rooms?: Maybe<Array<Room>>;
  totalPages?: Maybe<Scalars['Int']['output']>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type GetStatisticInput = {
  inputDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetStatisticOutput = {
  __typename?: 'GetStatisticOutput';
  data?: Maybe<StatisticData>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type HostRoomBookingListInput = {
  roomIds?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type HostRoomBookingListOutput = {
  __typename?: 'HostRoomBookingListOutput';
  data?: Maybe<Array<Room>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Inquiry = {
  __typename?: 'Inquiry';
  chatRoom?: Maybe<ChatRoom>;
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  inquirer: User;
  inquiryMessage: Scalars['String']['output'];
  inquiryTitle: Scalars['String']['output'];
  inquiryType: InquiryType;
  isResolved: Scalars['Boolean']['output'];
  room?: Maybe<Room>;
  roomId?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export enum InquiryType {
  Inquiry = 'Inquiry',
  Report = 'Report'
}

export type LoginInput = {
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type MarkChatReadInput = {
  chatRoomId: Scalars['Int']['input'];
};

export type MarkChatReadOutput = {
  __typename?: 'MarkChatReadOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type MarkNotificationReadInput = {
  id: Scalars['Float']['input'];
};

export type MarkNotificationReadOutput = {
  __typename?: 'MarkNotificationReadOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToWishlist: CreateWishlistOutput;
  assignHostRole: CoreOutput;
  /** 전화번호 sms인증문자검증 */
  checkSmsVerificationCode: CoreOutput;
  createAccount: CreateAccountOutput;
  createAmenity: CreateAmenityOutput;
  createBooking: CreateBookingOutput;
  createCategory: CreateCategoryOutput;
  createChatRoom: CreateChatRoomOutput;
  createFAQ: CreateFaqOutput;
  createInquiry: CreateInquiryOutput;
  createReply: CreateReplyOutput;
  createReview: CreateReviewOutput;
  createRoom: CreateRoomOutput;
  deleteFAQ: DeleteFaqOutput;
  deleteFromWishlist: DeleteWishlistOutput;
  deleteInquiry: DeleteInquiryOutput;
  deleteReply: CoreOutput;
  deleteReview: CoreOutput;
  deleteRoom: CoreOutput;
  editBooking: EditBookingOutput;
  editProfile: EditProfileOutput;
  editReply: EditReplyOutput;
  editReview: EditReviewOutput;
  editRoom: EditRoomOutput;
  editRoomStatus: EditRoomStatusOutput;
  login: LoginOutput;
  /** 카카오 로그인 */
  loginWithKakao: LoginOutput;
  /** 네이버 로그인 */
  loginWithNaver: LoginOutput;
  markChatsAsRead: MarkChatReadOutput;
  markNotificationAsRead: MarkNotificationReadOutput;
  sendChatMessage: SendChatOutput;
  /** 패스워드 인증번호 이메일 발송 */
  sendEmailConfirmCode: CoreOutput;
  /** 전화번호 sms인증문자발송 */
  sendSmsVerificationCode: CoreOutput;
  updateDescriptionWishlist: UpdateWishlistOutput;
  updateFAQ: UpdateFaqOutput;
  updateInquiry: UpdateInquiryOutput;
  /** 패스워드 인증번호를 이용한 패스워드 변경 */
  updatePasswordWithConfirmcode: CoreOutput;
};


export type MutationAddToWishlistArgs = {
  input: CreateWishlistInput;
};


export type MutationCheckSmsVerificationCodeArgs = {
  inputNumber: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationCreateAmenityArgs = {
  input: CreateAmenityInput;
};


export type MutationCreateBookingArgs = {
  input: CreateBookingInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateChatRoomArgs = {
  input: CreateChatRoomInput;
};


export type MutationCreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationCreateInquiryArgs = {
  input: CreateInquiryInput;
};


export type MutationCreateReplyArgs = {
  input: CreateReplyInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationCreateRoomArgs = {
  input: CreateRoomInput;
};


export type MutationDeleteFaqArgs = {
  input: DeleteFaqInput;
};


export type MutationDeleteFromWishlistArgs = {
  input: DeleteWishlistInput;
};


export type MutationDeleteInquiryArgs = {
  input: DeleteInquiryInput;
};


export type MutationDeleteReplyArgs = {
  input: Scalars['Float']['input'];
};


export type MutationDeleteReviewArgs = {
  input: Scalars['Float']['input'];
};


export type MutationDeleteRoomArgs = {
  input: Scalars['Float']['input'];
};


export type MutationEditBookingArgs = {
  id: Scalars['Float']['input'];
  input: EditBookingInput;
};


export type MutationEditProfileArgs = {
  input: EditProfileInput;
};


export type MutationEditReplyArgs = {
  input: EditReplyInput;
};


export type MutationEditReviewArgs = {
  input: EditReviewInput;
};


export type MutationEditRoomArgs = {
  input: EditRoomInput;
};


export type MutationEditRoomStatusArgs = {
  input: EditRoomStatusInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginWithKakaoArgs = {
  code: Scalars['String']['input'];
};


export type MutationLoginWithNaverArgs = {
  code: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationMarkChatsAsReadArgs = {
  input: MarkChatReadInput;
};


export type MutationMarkNotificationAsReadArgs = {
  input: MarkNotificationReadInput;
};


export type MutationSendChatMessageArgs = {
  input: SendChatInput;
};


export type MutationSendEmailConfirmCodeArgs = {
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSendSmsVerificationCodeArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationUpdateDescriptionWishlistArgs = {
  input: UpdateWishlistInput;
};


export type MutationUpdateFaqArgs = {
  input: UpdateFaqInput;
};


export type MutationUpdateInquiryArgs = {
  input: UpdateInquiryInput;
};


export type MutationUpdatePasswordWithConfirmcodeArgs = {
  input: UpdatePassworInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  read: Scalars['Boolean']['output'];
  recipientId: Scalars['String']['output'];
  type: NotificationType;
  updatedAt: Scalars['Date']['output'];
};

export enum NotificationType {
  GuestBookingStatusChange = 'GuestBookingStatusChange',
  HostBookingStatusChange = 'HostBookingStatusChange',
  HostNewBooking = 'HostNewBooking',
  SystemAnnouncement = 'SystemAnnouncement'
}

export type PaginationInput = {
  page?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum PaymentMethod {
  Card = 'Card',
  KakaoPay = 'KakaoPay'
}

export enum ProviderType {
  Home = 'Home',
  Kakao = 'Kakao',
  Naver = 'Naver'
}

export type Query = {
  __typename?: 'Query';
  getAllBookingList: GetAllBookingListOutput;
  getAllInquiry: GetAllInquiryOutput;
  getAllRooms: GetAllRoomsOutput;
  getAllUsers: GetAllUsersOutput;
  getDetailRoomReviews: GetDetailRoomReviewsOutput;
  getFAQs: GetFaqOutput;
  getInquiry: GetInquiryOutput;
  getReviewById: GetReviewByIdOutput;
  getRoomDetail: RoomInfoOutput;
  getRoomList: GetRoomListOutput;
  getRoomWishlist: ReadWishlistOutput;
  getSpecificWishlist: ReadWishlistOutput;
  getStatistic: GetStatisticOutput;
  getUserWishlist: ReadWishlistOutput;
  hello: Scalars['String']['output'];
  hostRoomBookingList: HostRoomBookingListOutput;
  me: User;
  unreadMessageCount: UnreadMessageCountOutput;
  userBookingList: UserBookingListOutput;
  userChatroomChatList: UserChatroomChatListOutput;
  userNotificationList: UserNotificationListOutput;
  userProfile: UserProfileOutput;
  viewAmenities: ViewAmenitiesOutput;
  viewCategories: ViewCategoriesOutput;
  viewUserReviews: ViewUserReviewsOutput;
};


export type QueryGetAllInquiryArgs = {
  paginationInput: PaginationInput;
};


export type QueryGetAllRoomsArgs = {
  input: GetAllRoomsInput;
};


export type QueryGetAllUsersArgs = {
  paginationInput: PaginationInput;
};


export type QueryGetDetailRoomReviewsArgs = {
  input: Scalars['Float']['input'];
};


export type QueryGetReviewByIdArgs = {
  input: Scalars['Float']['input'];
};


export type QueryGetRoomDetailArgs = {
  input: Scalars['Float']['input'];
};


export type QueryGetRoomListArgs = {
  paginationInput: PaginationInput;
};


export type QueryGetRoomWishlistArgs = {
  input: Scalars['Float']['input'];
};


export type QueryGetSpecificWishlistArgs = {
  input: Scalars['Float']['input'];
};


export type QueryGetStatisticArgs = {
  input: GetStatisticInput;
};


export type QueryHostRoomBookingListArgs = {
  input: HostRoomBookingListInput;
};


export type QueryUserProfileArgs = {
  input: Scalars['String']['input'];
};

export type ReadWishlistOutput = {
  __typename?: 'ReadWishlistOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  wishlists?: Maybe<Array<Wishlist>>;
};

export enum RefundPolicyType {
  Firm = 'Firm',
  Flexible = 'Flexible',
  Moderate = 'Moderate',
  Strict = 'Strict'
}

export type Reply = {
  __typename?: 'Reply';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Float']['output'];
  review: Review;
  reviewId: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export enum ReservationType {
  Instant = 'Instant',
  Waiting = 'Waiting'
}

export type Review = {
  __typename?: 'Review';
  bookingId: Scalars['Int']['output'];
  createdAt: Scalars['Date']['output'];
  guest: User;
  hostFeedback?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  isWillingToRepurchase: Scalars['Boolean']['output'];
  rating: Scalars['Int']['output'];
  replies?: Maybe<Array<Reply>>;
  review: Scalars['String']['output'];
  room: Room;
  roomId: Scalars['Int']['output'];
  systemFeedback?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type Room = {
  __typename?: 'Room';
  address: Scalars['String']['output'];
  amenityRooms?: Maybe<Array<AmenityRoom>>;
  baseRoomRate: Scalars['Float']['output'];
  bathroomCount: Scalars['Int']['output'];
  bedCount: Scalars['Int']['output'];
  bookings?: Maybe<Array<Booking>>;
  buildingType: BuildingType;
  categoryRooms?: Maybe<Array<CategoryRoom>>;
  cleaningFee: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  detailaddress?: Maybe<Scalars['String']['output']>;
  extraRoomRate: Scalars['Float']['output'];
  guide: Scalars['String']['output'];
  host?: Maybe<User>;
  id: Scalars['Float']['output'];
  inquiries?: Maybe<Array<Inquiry>>;
  isPetAvailable: Scalars['Boolean']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  maxBaseGuests: Scalars['Int']['output'];
  maxGuests: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<RoomOption>>;
  petFee: Scalars['Float']['output'];
  photos?: Maybe<Scalars['String']['output']>;
  refundPolicyType: RefundPolicyType;
  reservationType: ReservationType;
  reviews?: Maybe<Array<Review>>;
  roomCount: Scalars['Int']['output'];
  roomType: RoomType;
  status: RoomStatus;
  updatedAt: Scalars['Date']['output'];
  wishlists: Array<Wishlist>;
};

export type RoomChoice = {
  __typename?: 'RoomChoice';
  extra?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type RoomInfoOutput = {
  __typename?: 'RoomInfoOutput';
  amenities?: Maybe<Array<Amenity>>;
  categories?: Maybe<Array<Category>>;
  checkInDates?: Maybe<Array<Scalars['Date']['output']>>;
  data?: Maybe<Room>;
  disabledDates?: Maybe<Array<Scalars['Date']['output']>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type RoomOption = {
  __typename?: 'RoomOption';
  choices?: Maybe<Array<RoomChoice>>;
  extra?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export enum RoomStatus {
  Active = 'Active',
  Disabled = 'Disabled',
  Inactive = 'Inactive'
}

export enum RoomType {
  EntireHouse = 'EntireHouse',
  PrivateRoom = 'PrivateRoom',
  SharedRoom = 'SharedRoom'
}

export type SendChatInput = {
  chatRoomId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  recipientId: Scalars['String']['input'];
};

export type SendChatOutput = {
  __typename?: 'SendChatOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type StatisticData = {
  __typename?: 'StatisticData';
  bookingsMonths?: Maybe<Array<BookingMonthDetails>>;
  guestCount?: Maybe<Scalars['Float']['output']>;
  hostCount?: Maybe<Scalars['Float']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chatMessageSent: Chat;
  chatMessagesEdited: Array<Chat>;
  newNotification: Notification;
};


export type SubscriptionChatMessageSentArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionChatMessagesEditedArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionNewNotificationArgs = {
  recipientId: Scalars['String']['input'];
};

export type UnreadMessageCountOutput = {
  __typename?: 'UnreadMessageCountOutput';
  data?: Maybe<Scalars['Int']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateFaqInput = {
  faqContent: Scalars['String']['input'];
  faqTitle: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type UpdateFaqOutput = {
  __typename?: 'UpdateFAQOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdateInquiryInput = {
  id: Scalars['Float']['input'];
  isResolved: Scalars['Boolean']['input'];
};

export type UpdateInquiryOutput = {
  __typename?: 'UpdateInquiryOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UpdatePassworInput = {
  confirmCode: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UpdateWishlistInput = {
  description: Scalars['String']['input'];
  id: Scalars['Float']['input'];
};

export type UpdateWishlistOutput = {
  __typename?: 'UpdateWishlistOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  bookings: Array<Booking>;
  createdAt: Scalars['Date']['output'];
  guestChatRooms?: Maybe<Array<ChatRoom>>;
  hostChatRooms?: Maybe<Array<ChatRoom>>;
  id: Scalars['String']['output'];
  inquirers: Array<Inquiry>;
  managerChatRooms?: Maybe<Array<ChatRoom>>;
  name: Scalars['String']['output'];
  nationality?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  profileUrl?: Maybe<Scalars['String']['output']>;
  provider: ProviderType;
  replies: Array<Reply>;
  reviews: Array<Review>;
  role: UserRole;
  rooms: Array<Room>;
  selfIntro?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  verified: Scalars['Boolean']['output'];
  wishlists: Array<Wishlist>;
};

export type UserBookingListOutput = {
  __typename?: 'UserBookingListOutput';
  data?: Maybe<Array<Booking>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UserChatroomChatListOutput = {
  __typename?: 'UserChatroomChatListOutput';
  data?: Maybe<Array<ChatRoom>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UserNotificationListOutput = {
  __typename?: 'UserNotificationListOutput';
  data?: Maybe<Array<Notification>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type UserProfileOutput = {
  __typename?: 'UserProfileOutput';
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export enum UserRole {
  Client = 'Client',
  Host = 'Host',
  Manager = 'Manager'
}

export type ViewAmenitiesOutput = {
  __typename?: 'ViewAmenitiesOutput';
  data?: Maybe<Array<Amenity>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ViewCategoriesOutput = {
  __typename?: 'ViewCategoriesOutput';
  data?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type ViewUserReviewsOutput = {
  __typename?: 'ViewUserReviewsOutput';
  data?: Maybe<Array<Review>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type Wishlist = {
  __typename?: 'Wishlist';
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  room: Room;
  roomId: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: User;
};

export type GetDetailRoomReviewsOutput = {
  __typename?: 'getDetailRoomReviewsOutput';
  data?: Maybe<Array<Review>>;
  error?: Maybe<Scalars['String']['output']>;
  ok: Scalars['Boolean']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, token?: string | null, error?: string | null } };

export type GetUserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserProfileQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, phone: string, profileUrl?: string | null, role: UserRole, nationality?: string | null, selfIntro?: string | null } };


export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetUserProfileDocument = gql`
    query getUserProfile {
  me {
    id
    name
    phone
    profileUrl
    role
    nationality
    selfIntro
  }
}
    `;

/**
 * __useGetUserProfileQuery__
 *
 * To run a query within a React component, call `useGetUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
      }
export function useGetUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export function useGetUserProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserProfileQuery, GetUserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserProfileQuery, GetUserProfileQueryVariables>(GetUserProfileDocument, options);
        }
export type GetUserProfileQueryHookResult = ReturnType<typeof useGetUserProfileQuery>;
export type GetUserProfileLazyQueryHookResult = ReturnType<typeof useGetUserProfileLazyQuery>;
export type GetUserProfileSuspenseQueryHookResult = ReturnType<typeof useGetUserProfileSuspenseQuery>;
export type GetUserProfileQueryResult = Apollo.QueryResult<GetUserProfileQuery, GetUserProfileQueryVariables>;