"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9503],{4137:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(g,o(o({ref:e},u),{},{components:a})):n.createElement(g,o({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6445:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),o=["components"],l={title:"Features",sidebar_label:"Features",slug:"/features",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/features.md"},s="DataHub Features Overview",d={unversionedId:"docs/features",id:"docs/features",isDocsHomePage:!1,title:"Features",description:"DataHub is a modern data catalog built to enable end-to-end data discovery, data observability, and data governance. This extensible metadata platform is built for developers to tame the complexity of their rapidly evolving data ecosystems, and for data practitioners to leverage the full value of data within their organization.",source:"@site/genDocs/docs/features.md",sourceDirName:"docs",slug:"/features",permalink:"/docs/features",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/features.md",tags:[],version:"current",frontMatter:{title:"Features",sidebar_label:"Features",slug:"/features",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/features.md"},sidebar:"overviewSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},u=[{value:"End-to-end Search and Discovery",id:"end-to-end-search-and-discovery",children:[{value:"Search for assets across databases, datalakes, BI platforms, ML feature stores, workflow orchestration, and more",id:"search-for-assets-across-databases-datalakes-bi-platforms-ml-feature-stores-workflow-orchestration-and-more",children:[],level:3},{value:"Easily understand the end-to-end journey of data by tracing lineage across platforms, datasets, pipelines, charts, and dashboards",id:"easily-understand-the-end-to-end-journey-of-data-by-tracing-lineage-across-platforms-datasets-pipelines-charts-and-dashboards",children:[],level:3},{value:"Quickly gain context about related entities as you navigate the lineage graph",id:"quickly-gain-context-about-related-entities-as-you-navigate-the-lineage-graph",children:[],level:3},{value:"Gain confidence in the accuracy and relevance of datasets",id:"gain-confidence-in-the-accuracy-and-relevance-of-datasets",children:[],level:3}],level:2},{value:"Robust Documentation and Tagging",id:"robust-documentation-and-tagging",children:[{value:"Capture and maintain institutional knowledge via API and/or the DataHub UI",id:"capture-and-maintain-institutional-knowledge-via-api-andor-the-datahub-ui",children:[],level:3},{value:"Create and define new tags via API and/or the DataHub UI",id:"create-and-define-new-tags-via-api-andor-the-datahub-ui",children:[],level:3},{value:"Browse and search specific tags to fast-track discovery across entities",id:"browse-and-search-specific-tags-to-fast-track-discovery-across-entities",children:[],level:3}],level:2},{value:"Data Governance at your fingertips",id:"data-governance-at-your-fingertips",children:[{value:"Quickly assign asset ownership to users and/or user groups",id:"quickly-assign-asset-ownership-to-users-andor-user-groups",children:[],level:3},{value:"Manage Fine-Grained Access Control with Policies",id:"manage-fine-grained-access-control-with-policies",children:[],level:3}],level:2},{value:"Metadata quality &amp; usage analytics",id:"metadata-quality--usage-analytics",children:[],level:2},{value:"DataHub is a Platform for Developers",id:"datahub-is-a-platform-for-developers",children:[{value:"Dataset Sources",id:"dataset-sources",children:[],level:3},{value:"BI Tools",id:"bi-tools",children:[],level:3},{value:"ETL / ELT",id:"etl--elt",children:[],level:3},{value:"Workflow Orchestration",id:"workflow-orchestration",children:[],level:3},{value:"Data Observability",id:"data-observability",children:[],level:3},{value:"ML Platform",id:"ml-platform",children:[],level:3},{value:"Identity Management",id:"identity-management",children:[],level:3}],level:2}],p={toc:u};function c(t){var e=t.components,l=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"datahub-features-overview"},"DataHub Features Overview"),(0,i.kt)("p",null,"DataHub is a modern data catalog built to enable end-to-end data discovery, data observability, and data governance. This extensible metadata platform is built for developers to tame the complexity of their rapidly evolving data ecosystems, and for data practitioners to leverage the full value of data within their organization."),(0,i.kt)("p",null,"Here\u2019s an overview of DataHub\u2019s current functionality. Curious about what\u2019s to come? Check out our ",(0,i.kt)("a",{parentName:"p",href:"/docs/roadmap"},"roadmap"),"."),(0,i.kt)("h2",{id:"end-to-end-search-and-discovery"},"End-to-end Search and Discovery"),(0,i.kt)("h3",{id:"search-for-assets-across-databases-datalakes-bi-platforms-ml-feature-stores-workflow-orchestration-and-more"},"Search for assets across databases, datalakes, BI platforms, ML feature stores, workflow orchestration, and more"),(0,i.kt)("p",null,"Here\u2019s an example of searching for assets related to the term ",(0,i.kt)("inlineCode",{parentName:"p"},"health"),": we see results spanning Looker dashboards, BigQuery datasets, and DataHub Tags & Users, and ultimately navigate to the \u201cDataHub Health\u201d Looker dashboard overview (",(0,i.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/dashboard/urn:li:dashboard:(looker,dashboards.11)/Documentation?is_lineage_mode=false"},"view in demo site"),")"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9981).Z})),(0,i.kt)("h3",{id:"easily-understand-the-end-to-end-journey-of-data-by-tracing-lineage-across-platforms-datasets-pipelines-charts-and-dashboards"},"Easily understand the end-to-end journey of data by tracing lineage across platforms, datasets, pipelines, charts, and dashboards"),(0,i.kt)("p",null,"Let\u2019s dig into the dependency chain of the \u201cDataHub Health\u201d Looker dashboard. Using the lineage view, we can navigate all upstream dependencies of the Dashboard including Looker Charts, Snowflake and s3 Datasets, and Airflow Pipelines (",(0,i.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/dashboard/urn:li:dashboard:(looker,dashboards.11)/Documentation?is_lineage_mode=true"},"view in demo site"),")"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6092).Z})),(0,i.kt)("h3",{id:"quickly-gain-context-about-related-entities-as-you-navigate-the-lineage-graph"},"Quickly gain context about related entities as you navigate the lineage graph"),(0,i.kt)("p",null,"As you explore the relationships between entities, it\u2019s easy to view documentation, usage stats, ownership, and more without leaving the lineage graph"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2890).Z})),(0,i.kt)("h3",{id:"gain-confidence-in-the-accuracy-and-relevance-of-datasets"},"Gain confidence in the accuracy and relevance of datasets"),(0,i.kt)("p",null,"DataHub provides dataset profiling and usage statistics for popular data warehousing platforms, making it easy for data practitioners to understand the shape of the data and how it has evolved over time. Query stats give context into how often (and by whom) the data is queried which can act as a strong signal of the trustworthiness of a dataset"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5958).Z})),(0,i.kt)("h2",{id:"robust-documentation-and-tagging"},"Robust Documentation and Tagging"),(0,i.kt)("h3",{id:"capture-and-maintain-institutional-knowledge-via-api-andor-the-datahub-ui"},"Capture and maintain institutional knowledge via API and/or the DataHub UI"),(0,i.kt)("p",null,"DataHub makes it easy to update and maintain documentation as definitions and use cases evolve. In addition to managing documentation via GMS, DataHub offers rich documentation and support for external links via the UI. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7614).Z})),(0,i.kt)("h3",{id:"create-and-define-new-tags-via-api-andor-the-datahub-ui"},"Create and define new tags via API and/or the DataHub UI"),(0,i.kt)("p",null,"Create and add tags to any type of entity within DataHub via the GraphQL API, or allow your end users to create and define new tags within the UI as use cases evolve over time"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6591).Z})),(0,i.kt)("h3",{id:"browse-and-search-specific-tags-to-fast-track-discovery-across-entities"},"Browse and search specific tags to fast-track discovery across entities"),(0,i.kt)("p",null,"Seamlessly browse entities associated with a tag or filter search results for a specific tag to find the entities that matter most"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4384).Z})),(0,i.kt)("h2",{id:"data-governance-at-your-fingertips"},"Data Governance at your fingertips"),(0,i.kt)("h3",{id:"quickly-assign-asset-ownership-to-users-andor-user-groups"},"Quickly assign asset ownership to users and/or user groups"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5840).Z})),(0,i.kt)("h3",{id:"manage-fine-grained-access-control-with-policies"},"Manage Fine-Grained Access Control with Policies"),(0,i.kt)("p",null,"DataHub admins can create Policies to define who can perform what action against which resource(s). When you create a new Policy, you will be able to define the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Policy Type Platform")," (top-level DataHub Platform privileges, i.e. managing users, groups, and policies) or Metadata (ability to manipulate ownership, tags, documentation, & more)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resource Type")," - Specify the type of resource, such as Datasets, Dashboards, Pipelines, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privileges")," - Choose the set of permissions, such as Edit Owners, Edit Documentation, Edit Links"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Users and/or Groups")," - Assign relevant Users and/or Groups; you can also assign the Policy to Resource Owners, regardless of which Group they belong to")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7034).Z})),(0,i.kt)("h2",{id:"metadata-quality--usage-analytics"},"Metadata quality & usage analytics"),(0,i.kt)("p",null,"Gain a deeper understanding of the health of metadata within DataHub and how end-users are interacting with the platform. The Analytics view provides a snapshot of volume of assets and percentage with assigned ownership, weekly active users, and most common searches & actions (",(0,i.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/analytics"},"view in demo site"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8780).Z})),(0,i.kt)("h2",{id:"datahub-is-a-platform-for-developers"},"DataHub is a Platform for Developers"),(0,i.kt)("p",null,"DataHub is an API- and stream-first platform, empowering developers to implement an instance tailored to their specific data stack. Our growing set of flexible integration models allow for push and pull metadata ingestion, as well as no-code metadata model extensions to quickly get up and running. "),(0,i.kt)("h3",{id:"dataset-sources"},"Dataset Sources"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Athena"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BigQuery"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Delta Lake"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Planned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Druid"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hive"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hudi"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Planned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Iceberg"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Planned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kafka Metadata"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft SQL Server"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PostreSQL"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"s3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snowflake"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Spark/Databricks"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Partially Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Trino FKA Presto"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")))),(0,i.kt)("h3",{id:"bi-tools"},"BI Tools"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Business Glossary"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Looker"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redash"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Superset"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tableau"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Planned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Partially Supported")))),(0,i.kt)("h3",{id:"etl--elt"},"ETL / ELT"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dbt"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Glue"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")))),(0,i.kt)("h3",{id:"workflow-orchestration"},"Workflow Orchestration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Airflow"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Prefect"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Planned")))),(0,i.kt)("h3",{id:"data-observability"},"Data Observability"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Great Expectations"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Planned")))),(0,i.kt)("h3",{id:"ml-platform"},"ML Platform"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Feast"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sagemaker"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")))),(0,i.kt)("h3",{id:"identity-management"},"Identity Management"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Source"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Status"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Azure AD"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LDAP"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Okta"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Supported")))))}c.isMDXComponent=!0},5840:function(t,e,a){e.Z=a.p+"assets/images/feature-add-owners-0273a25a80c1879a6af65ad5800fb673.gif"},6591:function(t,e,a){e.Z=a.p+"assets/images/feature-create-new-tag-7101a567ef83087e961d9d07277cdaa8.gif"},7034:function(t,e,a){e.Z=a.p+"assets/images/feature-create-policy-b0591a040cd0dc453e512c4347bcfb84.gif"},8780:function(t,e,a){e.Z=a.p+"assets/images/feature-datahub-analytics-a3f655a1ce19f6f432e192b4a4d3cad0.png"},6092:function(t,e,a){e.Z=a.p+"assets/images/feature-navigate-lineage-vis-37461ff1f1d26ce05d1a93073cde1dc9.gif"},7614:function(t,e,a){e.Z=a.p+"assets/images/feature-rich-documentation-9fc2ca3f3113f67d1a4584d14931991f.gif"},9981:function(t,e,a){e.Z=a.p+"assets/images/feature-search-across-all-entities-d28be49dd04743df7385a0b9efe61f07.gif"},5958:function(t,e,a){e.Z=a.p+"assets/images/feature-table-usage-and-stats-cd2e344c07e7dd794871f32ef0a1fd72.gif"},4384:function(t,e,a){e.Z=a.p+"assets/images/feature-tag-browse-72db54150c546ed4fdaf5ffb713f949d.gif"},2890:function(t,e,a){e.Z=a.p+"assets/images/feature-view-entitiy-details-via-lineage-vis-674088cba94f743847171e3648b7ea78.gif"}}]);