var wrapperConfigLoaded = jQuery.Deferred();
var HINTS_KEY;
var MAX_LAYER_FEATURES;
var MAX_QUERY_FEATURES;
var PRINT_TEMPLATE_HTML;
var PRINT_TEMPLATE_PDF;
var PRINT_LEGEND_DEFAULT;
var PRINT_LAYOUT_DEFAULT;
var PRINT_FORMAT_DEFAULT;
var DEFAULT_CONTROL;

configLoaded.then(fillLocalVariables);

function fillLocalVariables() {
  MAX_LAYER_FEATURES = clientConfig.MAX_LAYER_FEATURES;
  MAX_QUERY_FEATURES = clientConfig.MAX_QUERY_FEATURES;
  PRINT_TEMPLATE_HTML = clientConfig.PRINT_TEMPLATE_HTML;
  PRINT_TEMPLATE_PDF = clientConfig.PRINT_TEMPLATE_PDF;
  PRINT_LEGEND_DEFAULT = clientConfig.PRINT_LEGEND_DEFAULT;
  PRINT_LAYOUT_DEFAULT = clientConfig.PRINT_LAYOUT_DEFAULT;
  PRINT_FORMAT_DEFAULT = clientConfig.PRINT_FORMAT_DEFAULT;
  HINTS_KEY = clientConfig.HINTS_KEY;
  wrapperConfigLoaded.resolve();
}
