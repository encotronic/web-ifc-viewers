const namedProps = {
  agreementFlag: "AgreementFlag",
  axis: "Axis",
  axis1: "Axis1",
  axis2: "Axis2",
  axis3: "Axis3",
  baseSurface: "BaseSurface",
  basisCurve: "BasisCurve",
  bound: "Bound",
  bounds: "Bounds",
  cfsFaces: "CfsFaces",
  coordinates: "Coordinates",
  corner: "Corner",
  depth: "Depth",
  directrix: "Directrix",
  dirRatios: "DirectionRatios",
  elements: "Elements",
  endParam: "EndParam",
  extDirection: "ExtrudedDirection",
  expressId: "_ExpressId",
  fbsmFaces: "FbsmFaces",
  filletRadius: "FilletRadius",
  firstOperand: "FirstOperand",
  flangeThickness: "FlangeThickness",
  geometry: "_Geometry",
  geomRepresentations: "_GeometryRepresentations",
  hasBuildingElements: "_HasBuildingElements",
  hasFillings: "_HasFillings",
  hasOpenings: "_HasOpenings",
  hasSpatial: "_HasSpatialStructures",
  hasType: "_HasType",
  ifcClass: "_IfcClass",
  innerCurves: "InnerCurves",
  innerFilletRadius: "InnerFilletRadius",
  innerRadius: "InnerRadius",
  isBrep: "_IsBrep",
  items: "Items",
  location: "Location",
  localOrigin: "LocalOrigin",
  mappingOrigin: "MappingOrigin:",
  mappedRepresentation: "MappedRepresentation:",
  mappingSource: "MappingSource",
  mappingTarget: "MappingTarget",
  objectPlacement: "ObjectPlacement",
  operator: "Operator",
  orientation: "Orientation",
  outer: "Outer",
  outerCurve: "OuterCurve",
  outerFilletRadius: "OuterFilletRadius",
  overallDepth: "OverallDepth",
  overallWidth: "OverallWidth",
  parentCurve: "ParentCurve",
  pivots: "Pivots",
  placementRelTo: "PlacementRelTo",
  points: "Points",
  polygon: "Polygon",
  polygonalBoundary: "PolygonalBoundary",
  position: "Position",
  prefix: "Prefix",
  profile: "Profile",
  radius: "Radius",
  refDirection: "RefDirection",
  relatedBuildingElement: "RelatedBuildingElement",
  relatedElements: "RelatedElements",
  relatedObjects: "RelatedObjects",
  relatedOpeningElement: "RelatedOpeningElement",
  relatingBuildingElement: "RelatingBuildingElement",
  relatingObject: "RelatingObject",
  relatingOpeningElement: "RelatingOpeningElement",
  relatingStructure: "RelatingStructure",
  relatingType: "RelatingType",
  relativePlacement: "RelativePlacement",
  representation: "Representation",
  representations: "Representations",
  representationType: "RepresentationType",
  scale: "Scale",
  secondOperand: "SecondOperand",
  segments: "Segments",
  senseAgreement: "SenseAgreement",
  semiAxis1: "SemiAxis1",
  semiAxis2: "SemiAxis2",
  startParam: "StartParam",
  sweptArea: "SweptArea",
  transform: "_Transformation",
  trim1: "Trim1",
  trim2: "Trim2",
  trueGeometry: "_trueGeometry",
  undefined: "undefined",
  units: "Units",
  unitType: "UnitType",
  wallThickness: "WallThickness",
  webThickness: "WebThickness",
  xDim: "XDim",
  yDim: "YDim",
  zDim: "ZDim",
};

const itemsReaderValues = {
  expressId: "expressId",
  type: "type",
  properties: "properties",
};

const typeValue = {
  type: "type",
  value: "value",
};

const ifcUnitsValue = {
  value: "Value",
  unit: "IfcUnit"
}

const ifcValueType = {
  number: "Number",
  text: "Text",
  enum: "Enum",
  bool: "Boolean",
  id: "ExpressId",
  singleNumber: "SingleNumber",
};

const geometryTypes = {
  advancedSweptSolid: "AdvancedSweptSolid",
  annotation2D: "Annotation2D",
  boundingBox: "BoundingBox",
  brep: "Brep",
  clipping: "Clipping",
  curve2D: "Curve2D",
  curve3D: "Curve3D",
  extrudedAreaSolid: "IfcExtrudedAreaSolid",
  geometricSet: "GeometricSet",
  mappedRepresentation: "MappedRepresentation",
  solidModel: "SolidModel",
  surfaceModel: "SurfaceModel",
  sweptSolid: "SweptSolid",
};

const ifcBoolValues = {
  trueValue: ".T.",
  falseValue: ".F.",
};

const structuredData = {
  ifcProject: "IfcProject",
  products: "Products",
  spaces: "Spaces",
  units: "Units",
  mainObject: "MainObject",
};

const pivots = {
  pivots: "Pivots",
  locat: "Locations",
  xAxis: "xRotation",
  yAxis: "yRotation",
  zAxis: "zRotation",
};

const defaultValue = "$";

export {
  pivots,
  geometryTypes,
  namedProps,
  typeValue,
  ifcValueType,
  ifcBoolValues,
  structuredData,
  defaultValue,
  itemsReaderValues,
  ifcUnitsValue
};
