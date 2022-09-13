
module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      type: 'category',
      label: 'Install',
      link: {
        type: 'generated-index',
        title: 'Install SigNoz',
        description: 'To install SigNoz, follow the instructions in the sections below.',
        slug: '/install',
      },
      items: [
        "install/docker-standalone",
        'install/docker-swarm',
        {
          type: 'category',
          label: 'Kubernetes',
          link: {
            type: 'generated-index',
            title: 'Kubernetes',
            description: 'Learn how to install SigNoz on Kubernetes with Helm',
            slug: '/install/kubernetes',
          },
          items: [
            'install/kubernetes/aws',
            'install/kubernetes/gcp',
            {
              id: 'install/kubernetes/others',
              type: 'doc',
              label: 'Other Platform',
            },
          ]
        },
        'install/troubleshooting',
      ],
    },
    {
      label: "Instrument your app",
      type: "category",
      link: {
        type: 'generated-index',
        title: 'Instrument your Application',
        description: 'To instrument your applications and send data to SigNoz, follow the instructions in the sections below.',
        slug: '/instrumentation',
      },
      items: [
        'instrumentation/overview',
        {
          type: 'category',
          label: 'Python',
          link: {
            type: 'doc',
            id: 'instrumentation/python'
            // title: 'Python',
            // description: 'Learn how to instrument Python applications with OpenTelemetry',
            // slug: 'instrumentation/python',
          },
          items: [
            'instrumentation/django',
            'instrumentation/fastapi',
            'instrumentation/flask',
            'instrumentation/falcon']
        },
        {
          type: 'category',
          label: 'Java',
          link: {
            type: 'doc',
            id: 'instrumentation/java'
            // title: 'Python',
            // description: 'Learn how to instrument Python applications with OpenTelemetry',
            // slug: 'instrumentation/python',
          },
          items: [
            'instrumentation/springboot',
            'instrumentation/tomcat'
          ]
        },
        'instrumentation/javascript',
        'instrumentation/golang',
        'instrumentation/php',
        'instrumentation/dotnet',
        'instrumentation/ruby-on-rails',
        'instrumentation/elixir',
        'instrumentation/rust',
        'instrumentation/troubleshoot-instrumentation',
      ],
    },
    {
      type: 'category',
      label: 'Operate',
      link: {
        type: 'generated-index',
        title: 'Operate',
        description: 'The following sections provide an overview of the activities that are required to successfully operate SigNoz. Based on your environment, proceed to one of the sections below.',
        slug: '/operate',
      },
      items: [
        'operate/configuration',
        'operate/docker-standalone',
        'operate/docker-swarm',
        'operate/kubernetes',
        {
          type: 'category',
          label: 'Migration Guides',
          link: {
            type: 'generated-index',
            title: 'Migration Guides',
            description: 'The following sections provide instructions to migrate SigNoz components across newer versions. You need to run these migration scripts step by step. For example if you are currently on `0.8.2` and want to migrate to `0.10.0` - you need to run migration script for `0.9` first and then `0.10`',
            slug: '/operate/migration',
          },
          items: [
            'operate/migration/upgrade-0.8.0',
            'operate/migration/upgrade-0.8.1',
            'operate/migration/upgrade-0.9',
            'operate/migration/upgrade-0.10',
          ]
        },
        {
          type: 'category',
          label: 'ClickHouse',
          link: {
            type: 'generated-index',
            title: 'ClickHouse',
            description: 'The following sections provide instructions to operate ClickHouse. Based on your environment, proceed to one of the sections below.',
            slug: '/operate/clickhouse',
          },
          items: [
            'operate/clickhouse/increase-clickhouse-pv',
            'operate/clickhouse/connect-to-clickhouse'
          ]
        },
      ],
    },
    {
      label: "Use SigNoz",
      type: "category",
      items: [
        'userguide/overview',
        'userguide/send-metrics',
        'userguide/navigate-user-interface',
        'userguide/metrics',
        {
          type: 'category',
          label: 'View Traces',
          link: {
            type: 'doc',
            id: 'userguide/traces',
          },
          items: [
            'userguide/span-details'
          ]
        },
        {
          type: 'category',
          label: 'Logs',
          link: {
            type: 'doc',
            id: 'userguide/logs',
          },
          items: [
            'userguide/logs_query_builder',
            'userguide/logs_fields',
            {
              type: 'category',
              label: 'Collecting Logs',
              items: [
                'userguide/collect_kubernetes_pod_logs',
                'userguide/collect_docker_logs',
                'userguide/collecting_syslogs',
                'userguide/collect_logs_from_file',
                {
                  type: 'category',
                  label: 'Collecting Application Logs Using OTEL SDK',
                  items: [
                    'userguide/collecting_application_logs_otel_sdk_python',
                    'userguide/collecting_application_logs_otel_sdk_java'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Existing Collectors to SigNoz',
              items: [
                'userguide/fluentbit_to_signoz', 'userguide/fluentd_to_signoz', 'userguide/logstash_to_signoz'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Manage Dashboards and Panels',
          link: {
            type: 'doc',
            id: 'userguide/manage-dashboards-and-panels',
          },
          items: [
            'userguide/manage-dashboards', 'userguide/manage-panels', 'userguide/manage-variables', 'userguide/create-a-custom-query'
          ]
        },
        'userguide/exceptions',
        'userguide/alerts-management',
        'userguide/authentication',
        'userguide/retention-period',
        'userguide/service-map',
      ],
    },
    {
      label: "Tutorials",
      type: "category",
      link: {
        type: 'generated-index',
        title: 'Tutorials',
        description: 'SigNoz tutorials are step-by-step training exercises that guide you through monitoring your applications and infrastructure.',
        slug: '/tutorials',
      },
      items: [
        'tutorial/jvm-metrics',
        'tutorial/kubernetes-infra-metrics',
        'tutorial/mongodb-metrics',
        'tutorial/instrumenting-angular-frontend',
        'tutorial/s3-integration-iam-role-eks',
        'tutorial/opentelemetry-operator-usage'
      ],
    },
    {
      id: "architecture",
      type: "doc",
    },
    {
      id: "contributing",
      type: "doc",
    },
    {
      id: "community",
      type: "doc",
    },
    {
      id: "roadmap",
      type: "doc",
    },
    // {
    //   id: "faq",
    //   type: "doc",
    // },

    {
      label: "FAQ",
      type: "category",
      link: {
        type: 'generated-index',
        title: 'Frequently Asked Questions',
        description: 'Find the most commonly questions about SigNoz Installation, Instrumentation, Features, Troubleshooting, and Contributing here:',
        slug: '/faq',
      },
      items: [
        'faqs/product',
        'faqs/troubleshooting',
        'faqs/instrumentation',
        'faqs/installation',
      ],
    },

    {
      label: "Others",
      type: "category",
      items: [
        'telemetry',
      ],
    },
  ]
}
