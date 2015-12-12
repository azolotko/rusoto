initSidebarItems({"fn":[["get_str_from_attribute",""]],"struct":[["AttributeDefinition","Represents an attribute for describing the key schema for the table and indexes."],["AttributeValue","Represents the data for an attribute. You can set one, and only one, of the elements. Each attribute in an item is a name-value pair. An attribute can be single- valued or multi-valued set. For example, a book item can have title and authors attributes. Each book has one title but can have many authors. The multi-valued attribute is a set; duplicate values are not allowed."],["AttributeValueUpdate","For the _UpdateItem_ operation, represents the attributes to be modified, the action to perform on each, and the new value for each. You cannot use _UpdateItem_ to update any primary key attributes. Instead, you will need to delete the item, and then use _PutItem_ to create a new item with new attributes. Attribute values cannot be null; string and binary type attributes must have lengths greater than zero; and set type attributes must not be empty. Requests with empty values will be rejected with a _ValidationException_ exception."],["BatchGetItemInput","Represents the input of a _BatchGetItem_ operation."],["BatchGetItemOutput","Represents the output of a _BatchGetItem_ operation."],["BatchWriteItemInput","Represents the input of a _BatchWriteItem_ operation."],["BatchWriteItemOutput","Represents the output of a _BatchWriteItem_ operation."],["Capacity","Represents the amount of provisioned throughput capacity consumed on a table or an index."],["Condition","Represents the selection criteria for a _Query_ or _Scan_ operation:   * For a _Query_ operation, _Condition_ is used for specifying the _KeyConditions_ to use when querying a table or an index. For _KeyConditions_, only the following comparison operators are supported: `EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN` _Condition_ is also used in a _QueryFilter_, which evaluates the query results and returns only the desired values.   * For a _Scan_ operation, _Condition_ is used in a _ScanFilter_, which evaluates the scan results and returns only the desired values."],["ConditionalCheckFailedException","A condition specified in the operation could not be evaluated."],["ConsumedCapacity","The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. _ConsumedCapacity_ is only returned if the request asked for it. For more information, see Provisioned Throughput in the _Amazon DynamoDB Developer Guide_."],["CreateGlobalSecondaryIndexAction","Represents a new global secondary index to be added to an existing table."],["CreateTableInput","Represents the input of a _CreateTable_ operation."],["CreateTableOutput","Represents the output of a _CreateTable_ operation."],["DeleteGlobalSecondaryIndexAction","Represents a global secondary index to be deleted from an existing table."],["DeleteItemInput","Represents the input of a _DeleteItem_ operation."],["DeleteItemOutput","Represents the output of a _DeleteItem_ operation."],["DeleteRequest","Represents a request to perform a _DeleteItem_ operation on an item."],["DeleteTableInput","Represents the input of a _DeleteTable_ operation."],["DeleteTableOutput","Represents the output of a _DeleteTable_ operation."],["DescribeTableInput","Represents the input of a _DescribeTable_ operation."],["DescribeTableOutput","Represents the output of a _DescribeTable_ operation."],["DynamoDBClient",""],["DynamoDBError",""],["DynamoDBHelper",""],["ExpectedAttributeValue","Represents a condition to be compared with an attribute value. This condition can be used with _DeleteItem_, _PutItem_ or _UpdateItem_ operations; if the comparison evaluates to true, the operation succeeds; if not, the operation fails. You can use _ExpectedAttributeValue_ in one of two different ways:   * Use _AttributeValueList_ to specify one or more values to compare against an attribute. Use _ComparisonOperator_ to specify how you want to perform the comparison. If the comparison evaluates to true, then the conditional operation succeeds.   * Use _Value_ to specify a value that DynamoDB will compare against an attribute. If the values match, then _ExpectedAttributeValue_ evaluates to true and the conditional operation succeeds. Optionally, you can also set _Exists_ to false, indicating that you _do not_ expect to find the attribute value in the table. In this case, the conditional operation succeeds only if the comparison evaluates to false. _Value_ and _Exists_ are incompatible with _AttributeValueList_ and _ComparisonOperator_. Note that if you use both sets of parameters at once, DynamoDB will return a _ValidationException_ exception."],["GetItemInput","Represents the input of a _GetItem_ operation."],["GetItemOutput","Represents the output of a _GetItem_ operation."],["GlobalSecondaryIndex","Represents the properties of a global secondary index."],["GlobalSecondaryIndexDescription","Represents the properties of a global secondary index."],["GlobalSecondaryIndexUpdate","Represents one of the following: * A new global secondary index to be added to an existing table. * New provisioned throughput parameters for an existing global secondary index. * An existing global secondary index to be removed from an existing table."],["InternalServerError","An error occurred on the server side."],["ItemCollectionMetrics","Information about item collections, if any, that were affected by the operation. _ItemCollectionMetrics_ is only returned if the request asked for it. If the table does not have any local secondary indexes, this information is not returned in the response."],["ItemCollectionSizeLimitExceededException","An item collection is too large. This exception is only returned for tables that have one or more local secondary indexes."],["KeySchemaElement","Represents _a single element_ of a key schema. A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index. A _KeySchemaElement_ represents exactly one attribute of the primary key. For example, a hash type primary key would be represented by one _KeySchemaElement_. A hash-and-range type primary key would require one _KeySchemaElement_ for the hash attribute, and another _KeySchemaElement_ for the range attribute."],["KeysAndAttributes","Represents a set of primary keys and, for each key, the attributes to retrieve from the table. For each primary key, you must provide _all_ of the key attributes. For example, with a hash type primary key, you only need to provide the hash attribute. For a hash-and-range type primary key, you must provide _both_ the hash attribute and the range attribute."],["LimitExceededException","The number of concurrent table requests (cumulative number of tables in the `CREATING`, `DELETING` or `UPDATING` state) exceeds the maximum allowed of 10. Also, for tables with secondary indexes, only one of those tables can be in the `CREATING` state at any point in time. Do not attempt to create more than one such table simultaneously. The total limit of tables in the `ACTIVE` state is 250."],["ListTablesInput","Represents the input of a _ListTables_ operation."],["ListTablesOutput","Represents the output of a _ListTables_ operation."],["LocalSecondaryIndex","Represents the properties of a local secondary index."],["LocalSecondaryIndexDescription","Represents the properties of a local secondary index."],["Projection","Represents attributes that are copied (projected) from the table into an index. These are in addition to the primary key attributes and index key attributes, which are automatically projected."],["ProvisionedThroughput","Represents the provisioned throughput settings for a specified table or index. The settings can be modified using the _UpdateTable_ operation. For current minimum and maximum provisioned throughput values, see Limits in the _Amazon DynamoDB Developer Guide_."],["ProvisionedThroughputDescription","Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases."],["ProvisionedThroughputExceededException","Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests and use exponential backoff. For more information, go to Error Retries and Exponential Backoff in the _Amazon DynamoDB Developer Guide_."],["PutItemInput","Represents the input of a _PutItem_ operation."],["PutItemOutput","Represents the output of a _PutItem_ operation."],["PutRequest","Represents a request to perform a _PutItem_ operation on an item."],["QueryInput","Represents the input of a _Query_ operation."],["QueryOutput","Represents the output of a _Query_ operation."],["ResourceInUseException","The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the `CREATING` state."],["ResourceNotFoundException","The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be `ACTIVE`."],["ScanInput","Represents the input of a _Scan_ operation."],["ScanOutput","Represents the output of a _Scan_ operation."],["StreamSpecification","Represents the DynamoDB Streams configuration for a table in DynamoDB."],["TableDescription","Represents the properties of a table."],["UpdateGlobalSecondaryIndexAction","Represents the new provisioned throughput settings to be applied to a global secondary index."],["UpdateItemInput","Represents the input of an _UpdateItem_ operation."],["UpdateItemOutput","Represents the output of an _UpdateItem_ operation."],["UpdateTableInput","Represents the input of an _UpdateTable_ operation."],["UpdateTableOutput","Represents the output of an _UpdateTable_ operation."],["WriteRequest","Represents an operation to perform - either _DeleteItem_ or _PutItem_. You can only request one of these operations, not both, in a single _WriteRequest_. If you do need to perform both of these operations, you will need to provide two separate _WriteRequest_ objects."]],"type":[["AttributeAction",""],["AttributeDefinitions",""],["AttributeMap",""],["AttributeName",""],["AttributeNameList",""],["AttributeUpdates",""],["AttributeValueList",""],["Backfilling",""],["BatchGetRequestMap",""],["BatchGetResponseMap",""],["BatchWriteItemRequestMap",""],["BinaryAttributeValue",""],["BinarySetAttributeValue",""],["BooleanAttributeValue",""],["BooleanObject",""],["ComparisonOperator",""],["ConditionExpression",""],["ConditionalOperator",""],["ConsistentRead",""],["ConsumedCapacityMultiple",""],["ConsumedCapacityUnits",""],["Date",""],["ErrorMessage",""],["ExpectedAttributeMap",""],["ExpressionAttributeNameMap",""],["ExpressionAttributeNameVariable",""],["ExpressionAttributeValueMap",""],["ExpressionAttributeValueVariable",""],["FilterConditionMap",""],["GlobalSecondaryIndexDescriptionList",""],["GlobalSecondaryIndexList",""],["GlobalSecondaryIndexUpdateList",""],["IndexName",""],["IndexStatus",""],["Integer",""],["ItemCollectionKeyAttributeMap",""],["ItemCollectionMetricsMultiple",""],["ItemCollectionMetricsPerTable",""],["ItemCollectionSizeEstimateBound",""],["ItemCollectionSizeEstimateRange",""],["ItemList",""],["Key",""],["KeyConditions",""],["KeyExpression",""],["KeyList",""],["KeySchema",""],["KeySchemaAttributeName",""],["KeyType",""],["ListAttributeValue",""],["ListTablesInputLimit",""],["LocalSecondaryIndexDescriptionList",""],["LocalSecondaryIndexList",""],["Long",""],["MapAttributeValue",""],["NonKeyAttributeName",""],["NonKeyAttributeNameList",""],["NullAttributeValue",""],["NumberAttributeValue",""],["NumberSetAttributeValue",""],["PositiveIntegerObject",""],["PositiveLongObject",""],["ProjectionExpression",""],["ProjectionType",""],["PutItemInputAttributeMap",""],["Result",""],["ReturnConsumedCapacity","Determines the level of detail about provisioned throughput consumption that is returned in the response:   * _INDEXES_ - The response includes the aggregate _ConsumedCapacity_ for the operation, together with _ConsumedCapacity_ for each table and secondary index that was accessed. Note that some operations, such as _GetItem_ and _BatchGetItem_, do not access any indexes at all. In these cases, specifying _INDEXES_ will only return _ConsumedCapacity_ information for table(s).   * _TOTAL_ - The response includes only the aggregate _ConsumedCapacity_ for the operation.   * _NONE_ - No _ConsumedCapacity_ details are included in the response."],["ReturnItemCollectionMetrics",""],["ReturnValue",""],["ScalarAttributeType",""],["ScanSegment",""],["ScanTotalSegments",""],["SecondaryIndexesCapacityMap",""],["Select",""],["StreamArn",""],["StreamEnabled",""],["StreamViewType",""],["StringAttributeValue",""],["StringSetAttributeValue",""],["TableName",""],["TableNameList",""],["TableStatus",""],["UpdateExpression",""],["WriteRequests",""]]});