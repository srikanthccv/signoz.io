---
title: Monitor HTTP Endpoints
id: monitor-http-endpoints
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

With SigNoz, you can monitor the health of the HTTP endpoints and set up an alert in case of HTTP endpoints failure status codes.

<Tabs>

<TabItem value="cloud" label="SigNoz Cloud" default>

  * Add the httpcheck receiver to `otel-collector-config.yaml` and setup the collector OTLP exporter to send data to SigNoz Cloud.

    ```yaml {2-5,8-13}
    receivers:
      httpcheck:
        endpoint: http://example.com
        method: GET
        collection_interval: 10s
    ...
    exporters:
      otlp:
        endpoint: "ingest.{region}.signoz.cloud:443"
        tls:
          insecure: false
        headers:
          "signoz-access-token": "<SIGNOZ_API_KEY>"
    ...
    ```

    The HTTP Check Receiver can be used for synthetic checks against HTTP endpoints. This receiver will make a request to the specified endpoint using the configured method. This scraper generates a metric labelled for each HTTP response status class with a value of 1 if the status code matches the class.

  * Next, we will modify the pipeline to include the receiver we have enabled above.

      ```yaml {4}
      service:
          ....
          metrics:
            receivers: [otlp, httpcheck]
            processors: [batch]
            exporters: [otlp]
      ```

  * We can restart the otel collector container so that new changes are applied and see the metrics generated for synthetic checks.

  * This receiver creates a metric name `httpcheck_status` with value 1 if the check resulted in status_code matching the status_class, otherwise 0. For more info on the additional metrics and attributes available, please read the documentation [here](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/httpcheckreceiver/documentation.md).


### Monitoring Health of Multiple Endpoints

  If you want to monitor the health of multiple endpoints with this receiver, then you need to add one instance of receiver for each endpoint since it currently supports only one endpoint. Following is the sample config that monitors two endpoints.
  

  ```yaml {2-9,12-17,22,24}
  receivers:
    httpcheck/example:
      endpoint: http://example.com
      method: GET
      collection_interval: 10s
    httpcheck/my-app:
      endpoint: http://my-app.com
      method: GET
      collection_interval: 1s
  ...
  exporters:
    otlp:
      endpoint: "ingest.{region}.signoz.cloud:443"
      tls:
        insecure: false
      headers:
        "signoz-access-token": "<SIGNOZ_INGESTION_KEY>"
  ...
    service:
        ....
        metrics:
          receivers: [otlp, httpcheck/example, httpcheck/my-app]
          processors: [batch]
          exporters: [otlp]
  ```

</TabItem>

<TabItem value="self-host" label="Self-Host" default>

* Add the httpcheck receiver to `otel-collector-config.yaml` 
  ```yaml {2-10}
  receivers:
    httpcheck:
      endpoint: http://example.com
      method: GET
      collection_interval: 10s
  ```
  The HTTP Check Receiver can be used for synthetic checks against HTTP endpoints. This receiver will make a request to the specified endpoint using the configured method. This scraper generates a metric labelled for each HTTP response status class with a value of 1 if the status code matches the class.

* Next, we will modify the pipeline to include the receiver we have enabled above.
    ```yaml {4}
    service:
        ....
        metrics:
          receivers: [otlp, httpcheck]
          processors: [batch]
          exporters: [clickhousemetricswrite]
    ```

* We can restart the otel collector container so that new changes are applied and see the metrics generated for synthetic checks.

* This receiver creates a metric name `httpcheck_status` with value 1 if the check resulted in status_code matching the status_class, otherwise 0. For more info on the additional metrics and attributes available, please read the documentation [here](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/receiver/httpcheckreceiver/documentation.md).

### Monitoring Health of Multiple Endpoints

If you want to monitor the health of multiple endpoints with this receiver, then you need to add one instance of receiver for each endpoint since it currently supports only one endpoint. Following is the sample config that monitors two endpoints.

  ```yaml {2-10}
  receivers:
    httpcheck/example:
      endpoint: http://example.com
      method: GET
      collection_interval: 10s
    httpcheck/my-app:
      endpoint: http://my-app.com
      method: GET
      collection_interval: 1s
  ...
  ...

    service:
        ....
        metrics:
          receivers: [otlp, httpcheck/example, httpcheck/my-app]
          processors: [batch]
          exporters: [clickhousemetricswrite]
  ```
</TabItem>
</Tabs>
