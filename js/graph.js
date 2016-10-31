/**
 * Load average
 */

function load_avg_graph(graph) {
  graph.yAxis.axisLabel('Load average');
}

function load_avg_options() {
  return {};
}

function load_avg_data(data) {
  return data;
}


/**
 * CPU usage
 */

function total_cpu_usage_graph(graph) {
  graph.yAxis.axisLabel('CPU usage (%)');
  graph.color(function (d) {
    if (d.key == 'idl') return 'white';
    if (d.key == 'usr') return '#aec7e8';
    if (d.key == 'sys') return '#ff7f7f';
    if (d.key == 'stl') return '#7b94b5';
    return '#ffd384';
  });
}

function total_cpu_usage_options() {
  return { type: 'stacked' };
}

function total_cpu_usage_data(data) {
  return data;
}


/**
 * Memory usage
 */

function memory_usage_data(data) {
  for (var idata in data) {
    var ldata = data[idata];
    /* Byte to GB */
    ldata.y = Math.round((ldata.y / (1024 * 1024) ));
  }

  return data;
}

function memory_usage_graph(graph) {
  graph.yAxis.axisLabel('Memory usage (MB)').tickFormat(function(d) { return d3.format('.2f')(d); });
}

function memory_usage_options() {
  return { area: true };
}


/**
 * Disk trafic
 */

function dsk_total_data(data) {
  for (var idata in data) {
    var ldata = data[idata];
    /* Byte to MB */
    ldata.y = Math.round((ldata.y / (1024 * 1024) ));
  }

  return data;
}

function dsk_total_options() {
  return { area: true };
}

function dsk_total_graph(graph) {
  graph.yAxis.axisLabel('Disk trafic (MB)').tickFormat(function(d) { return d3.format('.2f')(d); });
  graph.color(function (d) {
    if (d.key == 'writ') return '#ff7f7f';
    return '#1f77b4';
  });
}


/**
 * Network trafic
 */

function net_total_data(data) {
  for (var idata in data) {
    var ldata = data[idata];
    /* Byte to MB */
    ldata.y = Math.round((ldata.y / (1024 * 1024)));
  }

  return data;
}

function net_total_graph(graph) {
  graph.yAxis.axisLabel('Network trafic (MB)').tickFormat(function(d) { return d3.format('.2f')(d); });
  graph.color(function (d) {
    if (d.key == 'send') return '#ff7f7f';
    return '#1f77b4';
  });
}

function net_total_options() {
  return { area: true };
}

/*
 * MongoDB
 */

function mongodb_stats_graph(graph) {
  graph.yAxis.axisLabel('Size (MB)').tickFormat(function(d) { return d3.format('d.0')(d); });
}

function mongodb_con_graph(graph) {
  graph.yAxis.axisLabel('Connection').tickFormat(function(d) { return d3.format('d.0')(d); });
}

function mongodb_mem_graph(graph) {
  graph.yAxis.axisLabel('Size (MB)').tickFormat(function(d) { return d3.format('d.0')(d); });
}

function mongodb_mem_options() {
  return { area: true };
}

