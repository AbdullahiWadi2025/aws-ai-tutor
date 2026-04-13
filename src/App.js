import { useState, useEffect } from "react";

const baseQuestions = [
  {
    question: "What is AWS Lambda primarily used for?",
    correct: "Running code without provisioning or managing servers",
    explanation: "AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you.",
    options: [
      "Running code without provisioning or managing servers",
      "Hosting relational databases",
      "Managing DNS records",
      "Creating VPN connections",
    ],
  },
  {
    question: "What is Amazon S3 designed to store?",
    correct: "Objects such as files, images, and backups",
    explanation: "Amazon S3 (Simple Storage Service) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
    options: [
      "Objects such as files, images, and backups",
      "Block-level volumes for EC2",
      "In-memory cache data only",
      "Physical servers in AWS regions",
    ],
  },
  {
    question: "What does Amazon EC2 provide?",
    correct: "Resizable virtual servers in the cloud",
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides scalable computing capacity in the AWS cloud, allowing you to launch virtual servers (instances) as needed.",
    options: [
      "Resizable virtual servers in the cloud",
      "Managed Kubernetes control planes",
      "Object storage buckets",
      "Serverless SQL databases",
    ],
  },
  {
    question: "What is AWS Identity and Access Management (IAM) used for?",
    correct: "Controlling authentication and permissions for AWS resources",
    explanation: "AWS IAM enables you to securely control access to AWS services and resources for your users. You can manage who is authenticated (signed in) and authorized (has permissions) to use resources.",
    options: [
      "Controlling authentication and permissions for AWS resources",
      "Storing application logs",
      "Deploying code to containers",
      "Monitoring CPU utilization",
    ],
  },
  {
    question: "Which AWS service is commonly used for content delivery with low latency?",
    correct: "Amazon CloudFront",
    explanation: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency.",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "Amazon Redshift",
      "AWS Batch",
    ],
  },
  {
    question: "What is Amazon RDS used for?",
    correct: "Running managed relational databases",
    explanation: "Amazon RDS (Relational Database Service) makes it easy to set up, operate, and scale a relational database in the cloud. It supports several database engines like MySQL, PostgreSQL, Oracle, and SQL Server.",
    options: [
      "Running managed relational databases",
      "Hosting static websites only",
      "Managing encryption keys",
      "Running Docker containers",
    ],
  },
  {
    question: "Which AWS service helps you create isolated virtual networks?",
    correct: "Amazon VPC",
    explanation: "Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
    options: [
      "Amazon VPC",
      "Amazon SQS",
      "AWS Glue",
      "Amazon Athena",
    ],
  },
  {
    question: "What is Amazon Route 53 primarily used for?",
    correct: "DNS routing and domain name management",
    explanation: "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It translates human-readable domain names into IP addresses.",
    options: [
      "DNS routing and domain name management",
      "File archiving",
      "Server patch management",
      "Container image scanning",
    ],
  },
  {
    question: "Which AWS service is a NoSQL key-value and document database?",
    correct: "Amazon DynamoDB",
    explanation: "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon EMR",
      "Amazon WorkSpaces",
    ],
  },
  {
    question: "What is Amazon CloudWatch used for?",
    correct: "Monitoring metrics, logs, and alarms",
    explanation: "Amazon CloudWatch monitors your AWS resources and the applications you run on AWS in real time. You can collect and track metrics, collect and monitor log files, and set alarms.",
    options: [
      "Monitoring metrics, logs, and alarms",
      "Registering domain names only",
      "Creating IAM users",
      "Managing source code repositories",
    ],
  },
  {
    question: "Which AWS service lets you queue messages between distributed application components?",
    correct: "Amazon SQS",
    explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.",
    options: [
      "Amazon SQS",
      "Amazon EFS",
      "AWS Shield",
      "AWS Artifact",
    ],
  },
  {
    question: "What is Amazon SNS mainly used for?",
    correct: "Pub/sub messaging and notifications",
    explanation: "Amazon SNS (Simple Notification Service) is a highly available, durable, secure, fully managed pub/sub messaging service that enables you to decouple microservices, distributed systems, and serverless applications.",
    options: [
      "Pub/sub messaging and notifications",
      "Running virtual machines",
      "Creating relational schemas",
      "Storing container images",
    ],
  },
  {
    question: "Which AWS service provides managed container orchestration with Kubernetes?",
    correct: "Amazon EKS",
    explanation: "Amazon EKS (Elastic Kubernetes Service) is a managed service that makes it easy to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane.",
    options: [
      "Amazon EKS",
      "Amazon Lightsail",
      "AWS DataSync",
      "Amazon Inspector",
    ],
  },
  {
    question: "What is Amazon ECS used for?",
    correct: "Running and managing containerized applications",
    explanation: "Amazon ECS (Elastic Container Service) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS.",
    options: [
      "Running and managing containerized applications",
      "Providing DNS failover",
      "Building data warehouses",
      "Managing SSL certificates outside AWS",
    ],
  },
  {
    question: "Which AWS service stores Docker and OCI container images?",
    correct: "Amazon ECR",
    explanation: "Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.",
    options: [
      "Amazon ECR",
      "Amazon FSx",
      "AWS Organizations",
      "Amazon Macie",
    ],
  },
  {
    question: "What is AWS Fargate used for?",
    correct: "Running containers without managing servers or clusters",
    explanation: "AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. It removes the need to provision and manage servers, letting you focus on your applications.",
    options: [
      "Running containers without managing servers or clusters",
      "Creating dedicated physical hosts",
      "Managing IAM federation",
      "Migrating petabyte-scale data with appliances",
    ],
  },
  {
    question: "Which storage service provides block storage volumes for EC2 instances?",
    correct: "Amazon EBS",
    explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage volumes for use with Amazon EC2 instances. EBS volumes are highly available and reliable storage volumes that can be attached to any running instance in the same Availability Zone.",
    options: [
      "Amazon EBS",
      "Amazon S3 Glacier",
      "Amazon ElastiCache",
      "AWS WAF",
    ],
  },
  {
    question: "Which AWS storage service provides a shared elastic file system for Linux workloads?",
    correct: "Amazon EFS",
    explanation: "Amazon EFS (Elastic File System) provides a simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. It is designed for Linux workloads.",
    options: [
      "Amazon EFS",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon API Gateway",
    ],
  },
  {
    question: "What is Amazon S3 Glacier primarily intended for?",
    correct: "Low-cost long-term archival storage",
    explanation: "Amazon S3 Glacier is a secure, durable, and extremely low-cost storage service for data archiving and long-term backup.",
    options: [
      "Low-cost long-term archival storage",
      "High-performance in-memory caching",
      "Real-time video transcoding",
      "Application load balancing",
    ],
  },
  {
    question: "Which AWS service helps protect applications from DDoS attacks?",
    correct: "AWS Shield",
    explanation: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS.",
    options: [
      "AWS Shield",
      "AWS Glue",
      "Amazon Polly",
      "AWS Step Functions",
    ],
  },
  {
    question: "What is AWS WAF used for?",
    correct: "Filtering and monitoring HTTP web requests",
    explanation: "AWS WAF (Web Application Firewall) helps protect your web applications or APIs from common web exploits that may affect availability, compromise security, or consume excessive resources.",
    options: [
      "Filtering and monitoring HTTP web requests",
      "Providing managed PostgreSQL databases",
      "Archiving audit reports",
      "Scheduling ETL jobs only",
    ],
  },
  {
    question: "Which AWS service manages encryption keys for your applications and data?",
    correct: "AWS Key Management Service (KMS)",
    explanation: "AWS KMS (Key Management Service) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications.",
    options: [
      "AWS Key Management Service (KMS)",
      "Amazon Rekognition",
      "AWS CodeDeploy",
      "Amazon MQ",
    ],
  },
  {
    question: "What is AWS CloudTrail used for?",
    correct: "Recording API activity and account actions for auditing",
    explanation: "AWS CloudTrail enables governance, compliance, operational auditing, and risk auditing of your AWS account. It records API calls and related events made by or on behalf of your AWS account.",
    options: [
      "Recording API activity and account actions for auditing",
      "Running automated penetration tests",
      "Hosting multiplayer game servers",
      "Creating EC2 images",
    ],
  },
  {
    question: "Which AWS service helps assess your environment against security best practices?",
    correct: "AWS Trusted Advisor",
    explanation: "AWS Trusted Advisor provides recommendations that help you follow AWS best practices. It checks for cost optimization, performance, security, fault tolerance, and service limits.",
    options: [
      "AWS Trusted Advisor",
      "Amazon Personalize",
      "AWS Device Farm",
      "Amazon AppFlow",
    ],
  },
  {
    question: "What is AWS Organizations used for?",
    correct: "Managing and governing multiple AWS accounts centrally",
    explanation: "AWS Organizations helps you centrally manage and govern your environment as you grow and scale your AWS resources. It allows you to consolidate multiple AWS accounts into an organization that you create and centrally manage.",
    options: [
      "Managing and governing multiple AWS accounts centrally",
      "Creating machine learning notebooks",
      "Editing video streams",
      "Publishing mobile applications",
    ],
  },
  {
    question: "Which AWS service lets you define infrastructure as code using templates?",
    correct: "AWS CloudFormation",
    explanation: "AWS CloudFormation gives developers and systems administrators an easy way to create and manage a collection of related AWS resources, provisioning and updating them in an orderly and predictable fashion.",
    options: [
      "AWS CloudFormation",
      "Amazon CloudSearch",
      "Amazon Chime",
      "AWS Backup",
    ],
  },
  {
    question: "What is AWS Elastic Beanstalk used for?",
    correct: "Deploying and scaling web applications with managed infrastructure",
    explanation: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.",
    options: [
      "Deploying and scaling web applications with managed infrastructure",
      "Creating private certificate authorities",
      "Running Hadoop clusters manually",
      "Streaming desktop sessions",
    ],
  },
  {
    question: "Which AWS service allows you to build state machines for workflows?",
    correct: "AWS Step Functions",
    explanation: "AWS Step Functions is a serverless workflow service that lets you combine AWS Lambda functions and other AWS services to build business-critical applications.",
    options: [
      "AWS Step Functions",
      "Amazon Detective",
      "Amazon Route 53",
      "Amazon Lightsail",
    ],
  },
  {
    question: "What is Amazon API Gateway used for?",
    correct: "Creating, publishing, and securing APIs",
    explanation: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.",
    options: [
      "Creating, publishing, and securing APIs",
      "Managing VPN tunnels only",
      "Hosting file shares for Windows",
      "Analyzing threat intelligence feeds",
    ],
  },
  {
    question: "Which AWS service offers managed CI/CD source repositories?",
    correct: "AWS CodeCommit",
    explanation: "AWS CodeCommit is a fully managed source control service that hosts secure Git-based repositories. It eliminates the need to operate your own source control system or worry about scaling its infrastructure.",
    options: [
      "AWS CodeCommit",
      "Amazon Forecast",
      "AWS Snowball",
      "Amazon Textract",
    ],
  },
  {
    question: "What is AWS CodePipeline used for?",
    correct: "Automating software release pipelines",
    explanation: "AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.",
    options: [
      "Automating software release pipelines",
      "Providing shared block storage",
      "Serving DNS queries",
      "Running SQL analytics on S3 directly",
    ],
  },
  {
    question: "Which AWS service automates application deployments to compute services?",
    correct: "AWS CodeDeploy",
    explanation: "AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and on-premises servers.",
    options: [
      "AWS CodeDeploy",
      "Amazon Kinesis Video Streams",
      "AWS Budgets",
      "Amazon Neptune",
    ],
  },
  {
    question: "What is Amazon Aurora?",
    correct: "A managed relational database engine compatible with MySQL and PostgreSQL",
    explanation: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, combining the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open-source databases.",
    options: [
      "A managed relational database engine compatible with MySQL and PostgreSQL",
      "A service for creating virtual desktops",
      "A managed message broker only",
      "A data lake governance service",
    ],
  },
  {
    question: "Which AWS service is purpose-built for graph databases?",
    correct: "Amazon Neptune",
    explanation: "Amazon Neptune is a fast, reliable, fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets.",
    options: [
      "Amazon Neptune",
      "Amazon QuickSight",
      "AWS App Runner",
      "AWS IAM Identity Center",
    ],
  },
  {
    question: "Which AWS service provides managed in-memory caching with Redis or Memcached?",
    correct: "Amazon ElastiCache",
    explanation: "Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud. It supports two open-source in-memory caching engines: Redis and Memcached.",
    options: [
      "Amazon ElastiCache",
      "Amazon EventBridge",
      "AWS Config",
      "Amazon Connect",
    ],
  },
  {
    question: "What is Amazon Redshift used for?",
    correct: "Running large-scale data warehousing and analytics",
    explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. It is optimized for data warehousing and analytics workloads.",
    options: [
      "Running large-scale data warehousing and analytics",
      "Providing file-level storage for Linux",
      "Managing Kubernetes worker nodes",
      "Registering internet domains",
    ],
  },
  {
    question: "Which AWS service lets you query data in S3 using standard SQL without loading it into a database first?",
    correct: "Amazon Athena",
    explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. You only pay for the queries you run.",
    options: [
      "Amazon Athena",
      "Amazon Inspector",
      "AWS Directory Service",
      "AWS Global Accelerator",
    ],
  },
  {
    question: "What is AWS Glue primarily used for?",
    correct: "Serverless data integration and ETL",
    explanation: "AWS Glue is a serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development.",
    options: [
      "Serverless data integration and ETL",
      "Desktop virtualization",
      "Managing firewall appliances",
      "Building chatbots only",
    ],
  },
  {
    question: "Which AWS service is used for real-time data streaming ingestion and processing?",
    correct: "Amazon Kinesis",
    explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information.",
    options: [
      "Amazon Kinesis",
      "Amazon Lightsail",
      "AWS Outposts",
      "Amazon Cognito",
    ],
  },
  {
    question: "What is Amazon QuickSight used for?",
    correct: "Business intelligence dashboards and data visualization",
    explanation: "Amazon QuickSight is a scalable, serverless, embeddable, machine learning-powered business intelligence (BI) service built for the cloud. It allows you to create and publish interactive BI dashboards.",
    options: [
      "Business intelligence dashboards and data visualization",
      "Managing SSL/TLS certificates",
      "Provisioning GPU drivers",
      "Creating transit gateways",
    ],
  },
  {
    question: "Which AWS service helps migrate databases to AWS with minimal downtime?",
    correct: "AWS Database Migration Service (DMS)",
    explanation: "AWS DMS (Database Migration Service) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.",
    options: [
      "AWS Database Migration Service (DMS)",
      "AWS Lake Formation",
      "AWS ParallelCluster",
      "Amazon Simple Email Service",
    ],
  },
  {
    question: "What is AWS DataSync used for?",
    correct: "Transferring large amounts of data between on-premises storage and AWS",
    explanation: "AWS DataSync is a data transfer service that makes it easier for you to automate moving data between on-premises storage and Amazon S3, Amazon EFS, or Amazon FSx for Windows File Server.",
    options: [
      "Transferring large amounts of data between on-premises storage and AWS",
      "Creating mobile backend APIs",
      "Scanning code for vulnerabilities",
      "Managing user sign-in pages",
    ],
  },
  {
    question: "Which AWS service provides edge locations for accelerating traffic over the AWS global network?",
    correct: "AWS Global Accelerator",
    explanation: "AWS Global Accelerator is a networking service that improves the availability and performance of your applications with local or global users. It uses the AWS global network to route traffic to your applications.",
    options: [
      "AWS Global Accelerator",
      "Amazon Inspector",
      "AWS Cloud9",
      "Amazon SES",
    ],
  },
  {
    question: "What is an Application Load Balancer (ALB) best suited for?",
    correct: "Routing HTTP and HTTPS traffic at the application layer",
    explanation: "An Application Load Balancer (ALB) functions at the application layer (Layer 7) of the OSI model. It routes traffic based on content of the request, such as host-based or path-based routing.",
    options: [
      "Routing HTTP and HTTPS traffic at the application layer",
      "Providing block storage to virtual machines",
      "Creating DNS hosted zones",
      "Managing relational database backups",
    ],
  },
  {
    question: "Which load balancer is best for extreme performance and TCP/UDP traffic?",
    correct: "Network Load Balancer",
    explanation: "A Network Load Balancer (NLB) functions at the transport layer (Layer 4) of the OSI model. It handles millions of requests per second and is ideal for load balancing TCP, UDP, and TLS traffic.",
    options: [
      "Network Load Balancer",
      "Gateway Load Balancer Endpoint",
      "Classic Load Balancer only",
      "Amazon Route 53 Resolver",
    ],
  },
  {
    question: "What is Amazon Cognito used for?",
    correct: "Adding user sign-up, sign-in, and access control to applications",
    explanation: "Amazon Cognito provides authentication, authorization, and user management for your web and mobile apps. It supports user sign-up and sign-in with social identity providers like Google, Facebook, and Amazon, and enterprise identity providers via SAML.",
    options: [
      "Adding user sign-up, sign-in, and access control to applications",
      "Provisioning Windows file systems",
      "Streaming sensor telemetry",
      "Managing VPC route tables",
    ],
  },
  {
    question: "Which AWS service helps discover and classify sensitive data in Amazon S3?",
    correct: "Amazon Macie",
    explanation: "Amazon Macie is a data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. It automatically detects sensitive data, such as personally identifiable information (PII), in Amazon S3.",
    options: [
      "Amazon Macie",
      "AWS CloudShell",
      "Amazon AppStream 2.0",
      "Amazon MQ",
    ],
  },
  {
    question: "What is Amazon GuardDuty used for?",
    correct: "Threat detection using AWS account, network, and workload activity",
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors your AWS accounts and workloads for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data stored in Amazon S3.",
    options: [
      "Threat detection using AWS account, network, and workload activity",
      "Compiling application source code",
      "Provisioning domain controllers",
      "Hosting Git repositories on EC2",
    ],
  },
  {
    question: "Which AWS service continuously records and evaluates resource configurations?",
    correct: "AWS Config",
    explanation: "AWS Config provides a detailed view of the configuration of AWS resources in your AWS account. It continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.",
    options: [
      "AWS Config",
      "Amazon Rekognition",
      "AWS Backup Audit Manager",
      "Amazon WorkMail",
    ],
  },
  {
    question: "What is AWS Systems Manager used for?",
    correct: "Managing, patching, and automating operations across AWS resources",
    explanation: "AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and automate operational tasks across your AWS resources.",
    options: [
      "Managing, patching, and automating operations across AWS resources",
      "Running graph analytics queries",
      "Converting speech to text",
      "Selling products in an online marketplace",
    ],
  },
  {
    question: "Which AWS service provides centralized backup across AWS services?",
    correct: "AWS Backup",
    explanation: "AWS Backup is a fully managed backup service that centralizes and automates data protection across AWS services and on-premises workloads. It allows you to configure backup policies and monitor backup activity from a single console.",
    options: [
      "AWS Backup",
      "Amazon App Mesh",
      "AWS Firewall Manager",
      "Amazon Elastic Transcoder",
    ],
  },
  {
    question: "What is Amazon EventBridge used for?",
    correct: "Event-driven application integration and routing",
    explanation: "Amazon EventBridge is a serverless event bus service that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services. It simplifies event-driven architectures.",
    options: [
      "Event-driven application integration and routing",
      "Managing hardware HSM clusters only",
      "Providing outbound email deliverability reports only",
      "Creating edge DNS caches",
    ],
  },
  {
    question: "What is AWS Certificate Manager (ACM) used for?",
    correct: "Provisioning and managing SSL/TLS certificates",
    explanation: "AWS Certificate Manager (ACM) handles the complexity of creating, storing, and renewing public and private SSL/TLS X.509 certificates and keys that protect your AWS websites and applications.",
    options: [
      "Provisioning and managing SSL/TLS certificates",
      "Encrypting S3 objects with customer hardware",
      "Auditing IAM role changes",
      "Tracking software licenses on-premises",
    ],
  },
  {
    question: "Which AWS service provides a managed Apache Kafka offering?",
    correct: "Amazon MSK",
    explanation: "Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed service that makes it easy to build and run applications that use Apache Kafka to process streaming data.",
    options: [
      "Amazon MSK",
      "Amazon SES",
      "AWS KMS",
      "Amazon Personalize",
    ],
  },
  {
    question: "What is Amazon SES primarily used for?",
    correct: "Sending and receiving email at scale",
    explanation: "Amazon SES (Simple Email Service) is a flexible, scalable, and cost-effective email platform that enables developers to send and receive email using their own email addresses and domains.",
    options: [
      "Sending and receiving email at scale",
      "Running managed Jupyter notebooks",
      "Creating software licenses",
      "Backing up EBS snapshots to tape libraries",
    ],
  },
  {
    question: "Which AWS service gives users virtual desktops in the cloud?",
    correct: "Amazon WorkSpaces",
    explanation: "Amazon WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution. You can use Amazon WorkSpaces to provision either Windows or Linux desktops in minutes and quickly scale to provide thousands of desktops to users across the globe.",
    options: [
      "Amazon WorkSpaces",
      "Amazon FSx for Lustre",
      "AWS AppSync",
      "Amazon VPC Lattice",
    ],
  },
  {
    question: "What is AWS Lake Formation used for?",
    correct: "Building, securing, and managing data lakes",
    explanation: "AWS Lake Formation is a service that makes it easy to build, secure, and manage data lakes. Lake Formation simplifies the process of building data lakes by helping you collect, clean, and transform data, and securely make it available for analytics and machine learning.",
    options: [
      "Building, securing, and managing data lakes",
      "Provisioning NAT gateways",
      "Compiling serverless functions",
      "Creating digital twins",
    ],
  },
  {
    question: "Which AWS service provides managed Hadoop, Spark, and big data frameworks?",
    correct: "Amazon EMR",
    explanation: "Amazon EMR (Elastic MapReduce) is a cloud big data platform for processing vast amounts of data using open source tools such as Apache Spark, Apache Hive, Apache HBase, Apache Flink, Apache Hudi, and Presto.",
    options: [
      "Amazon EMR",
      "Amazon Connect",
      "AWS Resource Explorer",
      "Amazon CloudFront",
    ],
  },
  {
    question: "What is Amazon FSx used for?",
    correct: "Providing managed high-performance file systems",
    explanation: "Amazon FSx provides fully managed third-party file systems with the native compatibility and feature sets for workloads such as Windows file servers, Lustre, OpenZFS, and NetApp ONTAP.",
    options: [
      "Providing managed high-performance file systems",
      "Creating VPC security groups",
      "Registering application users",
      "Running NoSQL document queries in memory",
    ],
  },
  {
    question: "Which AWS service helps create a hybrid cloud extension of AWS into on-premises data centers?",
    correct: "AWS Outposts",
    explanation: "AWS Outposts is a fully managed service that extends AWS infrastructure, AWS services, APIs, and tools to customer premises. It allows you to run AWS services on-premises for a truly consistent hybrid experience.",
    options: [
      "AWS Outposts",
      "Amazon MQ",
      "AWS Budgets",
      "Amazon Pinpoint",
    ],
  },
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : true;
  });

  const [fullExam, setFullExam] = useState(() => {
    const saved = localStorage.getItem("fullExam");
    return saved ? JSON.parse(saved) : shuffle(baseQuestions).map((q, i) => ({
      question: `${i + 1}. ${q.question}`,
      options: shuffle([...q.options]),
      answer: q.correct,
      explanation: q.explanation,
    }));
  });

  const [current, setCurrent] = useState(() => {
    const saved = localStorage.getItem("current");
    return saved ? parseInt(saved) : 0;
  });

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("score");
    return saved ? parseInt(saved) : 0;
  });

  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(() => {
    const saved = localStorage.getItem("wrongAnswers");
    return saved ? JSON.parse(saved) : [];
  });

  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("timeLeft");
    return saved ? parseInt(saved) : 60 * 60;
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("current", current.toString());
  }, [current]);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem("wrongAnswers", JSON.stringify(wrongAnswers));
  }, [wrongAnswers]);

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft.toString());
  }, [timeLeft]);

  const q = fullExam[current];
  const finished = current >= fullExam.length || timeLeft <= 0;

  useEffect(() => {
    if (finished) return;

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [finished]);

  const handleAnswer = (option) => {
    setSelected(option);
    setShowResult(true);

    if (option === q.answer) {
      setScore((s) => s + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        {
          question: q.question,
          yourAnswer: option,
          correctAnswer: q.answer,
          explanation: q.explanation,
        },
      ]);
    }
  };

  const nextQuestion = () => {
    setSelected("");
    setShowResult(false);
    setCurrent((c) => c + 1);
  };

  const resetExam = () => {
    localStorage.clear();
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
    setWrongAnswers([]);
    setTimeLeft(60 * 60);
    setFullExam(shuffle(baseQuestions).map((q, i) => ({
      question: `${i + 1}. ${q.question}`,
      options: shuffle([...q.options]),
      answer: q.correct,
      explanation: q.explanation,
    })));
  };

  const progress = (current / fullExam.length) * 100;

  const styles = {
    container: {
      minHeight: "100vh",
      background: darkMode ? "#0f172a" : "#f5f5f5",
      fontFamily: "Arial, sans-serif",
      padding: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      transition: "background 0.3s ease",
    },
    card: {
      width: 520,
      background: darkMode ? "#111827" : "#ffffff",
      padding: 25,
      borderRadius: 16,
      color: darkMode ? "white" : "#000",
      boxShadow: darkMode ? "0 20px 60px rgba(0,0,0,0.5)" : "0 4px 12px rgba(0,0,0,0.1)",
      maxHeight: "90vh",
      overflowY: "auto",
      transition: "all 0.3s ease",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    toggleButton: {
      background: darkMode ? "#3b82f6" : "#fbbf24",
      border: "none",
      borderRadius: 8,
      padding: "8px 12px",
      cursor: "pointer",
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
      transition: "all 0.3s ease",
    },
    button: {
      width: "100%",
      padding: 12,
      margin: "6px 0",
      borderRadius: 10,
      border: darkMode ? "1px solid #334155" : "1px solid #e5e7eb",
      cursor: "pointer",
      color: darkMode ? "white" : "#000",
      background: darkMode ? "#1f2937" : "#f3f4f6",
      transition: "all 0.2s ease",
    },
    next: {
      width: "100%",
      padding: 12,
      marginTop: 10,
      background: "#3b82f6",
      border: "none",
      borderRadius: 10,
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    progressBar: {
      height: 8,
      background: darkMode ? "#1f2937" : "#e5e7eb",
      borderRadius: 10,
      margin: "10px 0",
      overflow: "hidden",
    },
    progressFill: {
      height: "100%",
      background: "#3b82f6",
    },
    review: {
      background: darkMode ? "#0b1220" : "#f9fafb",
      padding: 10,
      marginTop: 10,
      borderRadius: 8,
      borderLeft: "4px solid #3b82f6",
    },
    explanation: {
      background: darkMode ? "#1e3a5f" : "#dbeafe",
      padding: 12,
      marginTop: 10,
      borderRadius: 8,
      color: darkMode ? "#bfdbfe" : "#1e40af",
      fontSize: 14,
      lineHeight: 1.5,
    },
    resetButton: {
      width: "100%",
      padding: 12,
      marginTop: 10,
      background: "#ef4444",
      border: "none",
      borderRadius: 10,
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
  };

  if (finished) {
    const percent = Math.round((score / fullExam.length) * 100);

    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.header}>
            <h2>Exam Finished</h2>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={styles.toggleButton}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          <h3>Score: {score} / {fullExam.length}</h3>
          <h3>Percentage: {percent}%</h3>

          {percent >= 80 && <p style={{ color: "#4ade80", fontSize: 18, fontWeight: "bold" }}>Excellent work!</p>}
          {percent >= 60 && percent < 80 && <p style={{ color: "#fbbf24", fontSize: 18, fontWeight: "bold" }}>Good job! Keep practicing.</p>}
          {percent < 60 && <p style={{ color: "#f87171", fontSize: 18, fontWeight: "bold" }}>Review the material and try again.</p>}

          <h3 style={{ marginTop: 20 }}>Review Mistakes</h3>

          {wrongAnswers.length === 0 ? (
            <p style={{ color: "#4ade80", fontWeight: "bold" }}>Perfect score!</p>
          ) : (
            wrongAnswers.map((w, i) => (
              <div key={i} style={styles.review}>
                <b>{w.question}</b>
                <p style={{ color: "#f87171", marginTop: 8 }}>Your Answer: {w.yourAnswer}</p>
                <p style={{ color: "#4ade80", marginTop: 4 }}>Correct Answer: {w.correctAnswer}</p>
                <div style={styles.explanation}>
                  <strong>Why:</strong> {w.explanation}
                </div>
              </div>
            ))
          )}

          <button onClick={resetExam} style={styles.resetButton}>
            Retake Exam
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h2>AWS Exam Simulator</h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={styles.toggleButton}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        <div style={{ fontSize: 14, marginBottom: 10 }}>
          Time Left: {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </div>

        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>

        <p style={{ fontSize: 14, marginBottom: 15 }}>
          Question {current + 1} / {fullExam.length}
        </p>

        <h3 style={{ marginBottom: 15 }}>{q.question}</h3>

        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => {
              if (!showResult) handleAnswer(opt);
            }}
            style={{
              ...styles.button,
              background:
                showResult && opt === q.answer
                  ? "#166534"
                  : showResult && opt === selected
                  ? "#991b1b"
                  : styles.button.background,
              color:
                showResult && (opt === q.answer || opt === selected)
                  ? "white"
                  : styles.button.color,
              cursor: showResult ? "default" : "pointer",
            }}
          >
            {opt}
          </button>
        ))}

        {showResult && (
          <>
            <div style={styles.explanation}>
              <strong>Explanation:</strong> {q.explanation}
            </div>
            <button onClick={nextQuestion} style={styles.next}>
              Next →
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
