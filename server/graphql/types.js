// GraphQL: TypeDefs
const TYPEDEFS = `
  type Organization {
    OrgAbbrevName: String
    OrgJurisdictionType: String
    OrgType: String
    LastUpdatedDate: String
    OrgURLText: String
    OrgURLAddress: String
    OrgImageURL: Int
    OrgParentID: Int
    OrgID: Int
    OrgName: String
  }

  type RecreationArea {
    RecAreaMapURL: String
    LastUpdatedBy: Int
    RecAreaReservationURL: String
    RecAreaFeeDescription: String
    RecAreaName: String
    RecAreaDescription: String
    Keywords: String
    RecAreaEmail: String
    RecAreaLatitude: Int
    StayLimit: String
    GEOJSON: GEOJSON
    LastUpdatedDate: String
    RecAreaID: Int
    RecAreaLongitude: Int
    RecAreaDirections: String
    RecAreaPhone: String
    OrgRecAreaID: String
  }

  type RecreationAreaFacility {
    FacilityEmail: String
    FacilityLongitude: String
    LastUpdatedBy: Int
    FacilityDescription: String
    FacilityLatitude: String
    FacilityTypeDescription: String
    FacilityPhone: String
    FacilityMapURL: String
    FacilityReservationURL: String
    FacilityDirections: String
    FacilityName: String
    Keywords: String
    FacilityUseFeeDescription: String
    StayLimit: String
    LastUpdatedDate: String
    FacilityAdaAccess: String
    LegacyFacilityID: String
    OrgFacilityID: Int
    FacilityID: Int
  }

  type RecreationAreaAddress {
    PostalCode: Int
    LastUpdatedBy: Int
    RecAreaAddressID: Int
    LastUpdatedDate: String
    RecAreaID: Int
    AddressStateCode: String
    City: String
    RecAreaStreetAddress1: String
    RecAreaAddressType: String
    RecAreaStreetAddress2: String
    RecAreaStreetAddress3: String
    AddressCountryCode: String
  }

  type RecreationAreaMedia {
    EntityType: String
    EntityID: Int
    Credits: String
    Description: String
    Subtitle: String
    EmbedCode: String
    Height: Int
    MediaType: String
    URL: String
    Width: Int
    Title: String
  }

  type RecreationAreadLink {
    EntityType: String
    EntityID: Int
    LinkType: String
    Description: String
    URL: String
    Title: String
  }

  type RecreationAreadEvent {
    EventDescription: String
    SponsorURLAddress: String
    EventID: Int
    EventAgeGroup: String
    LastUpdatedBy: Int
    EventADAAccess: String
    SponsorEmail: String
    EventName: String
    SponsorName: String
    EventEmail: String
    EventComments: String
    EventEndDate: String
    EventFrequencyRateDescription: String
    LastUpdatedDate: String
    SponsorURLText: String
    EventScopeDescription: String 
    EventRegistrationRequired: Int
    EventStartDate: String
    EventTypeDescription: String 
    SponsorPhone: String
    EventFeeDescription: String
    EventURLAddress: String
    SponsorClassType: String
    EventURLText: String
    SubmittedID: Int
  }

  type RecreationAreaActivities {
      ActivityID: Int
      ActivityLevel: Int
      ActivityParentID: Int
      RecAreaActivityFeeDescription: String
      RecAreaActivityDescription: String
      ActivityName: String
  }

  type Facility {
    FacilityEmail: String
    FacilityLongitude: Int
    LastUpdatedBy: Int
    FacilityDescription: String
    FacilityLatitude: Int
    FacilityTypeDescription: String
    FacilityPhone: String
    FacilityMapURL: String
    FacilityReservationURL: String
    FacilityDirections: String
    FacilityName: String
    Keywords: String
    FacilityUseFeeDescription: String
    StayLimit: String
    LastUpdatedDate: String
    FacilityAdaAccess: Boolean
    LegacyFacilityID: String
    OrgFacilityID: String
    FacilityID: Int
  }

  type FacilityAddress {
    FacilityAddressID: Int
    PostalCode: Int
    FacilityAddressType: String
    AddressStateCode: String
    FacilityStreetAddress1: String
    City: String
    FacilityStreetAddress3: String
    FacilityStreetAddress2: String
    FacilityID: Int
    AddressCountryCode: String
  }

  type FacilityMedia {
    EntityType: String
    EntityID: Int
    Credits: String
    Description: String
    Subtitle: String
    EmbedCode: String
    Height: Int
    MediaType: String
    URL: String
    Width: Int
    Title: String
  }

  type FacilityLink {
    EntityType: String
    EntityID: 203896
    LinkType: Reservation
    Description: 
    URL: http://www.dcr.state.va.us/parks/reserve.htm
    Title: George Washington's Gristmill Online Reservation
  }


  type GEOJSON {
    COORDINATES: [Int]
  }

  type Campsite {
    LastUpdatedBy: Int
    LastUpdatedDate: String
    TypeOfUse: String
    CreatedDate: String
    CampsiteType: String
    CampsiteID: Int
    CampsiteName: Int
    Loop: String
    CampsiteAccessible: Boolean
    FacilityID: Int
    Attributes: [Attribute]
    PermittedEquipment: [PermittedEquipment]
    EntityMedia: [EntityMedia]
  }

  type Attribute {
    SiteAttributeName: String
    SiteAttributeValue: String
  }

  type PermittedEquipment {

  }

  type EntityMedia {

  }


  type PermitEntrance {
    PermitEntranceID: Int
    District: String
    LastUpdatedBy: Int
    PermitEntranceType: String
    ATTRIBUTES: [Attribute]
    CreatedDate: String
    Town: String
    ZONES: [Zone]
    PermitEntranceAccessible: Boolean
    Latitude: Int
    LastUpdatedDate: String
    PermitEntranceName: String
    Longitude: Int
    ENTITYMEDIA: [EntityMedia]
    isActive: Int
    FacilityID: Int
    PermitEntranceDescription: String
  }

  type Zone {

  }

  type Tour {
    TourAccessible: Boolean
    TourDescription: String
    TourID: Int
    LastUpdatedBy: Int
    LastUpdatedDate: String
    TourDuration: Int
    TourType: String
    ATTRIBUTES: [Attribute]
    CreatedDate: String
    MEMBERTOURS: [MemberTour]
    ENTITYMEDIA: [EntityMedia]
    FacilityID: Int
    TourName: String
  }

  type MemberTour {

  }

`;


// Exports
export default TYPEDEFS;