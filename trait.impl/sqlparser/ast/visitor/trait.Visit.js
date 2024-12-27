(function() {
    var implementors = Object.fromEntries([["common_query",[["impl Visit for <a class=\"enum\" href=\"common_query/enum.AddColumnLocation.html\" title=\"enum common_query::AddColumnLocation\">AddColumnLocation</a>"]]],["datatypes",[["impl Visit for <a class=\"enum\" href=\"datatypes/schema/column_schema/enum.FulltextAnalyzer.html\" title=\"enum datatypes::schema::column_schema::FulltextAnalyzer\">FulltextAnalyzer</a>"],["impl Visit for <a class=\"enum\" href=\"datatypes/schema/column_schema/enum.SkippingIndexType.html\" title=\"enum datatypes::schema::column_schema::SkippingIndexType\">SkippingIndexType</a>"],["impl Visit for <a class=\"struct\" href=\"datatypes/schema/column_schema/struct.FulltextOptions.html\" title=\"struct datatypes::schema::column_schema::FulltextOptions\">FulltextOptions</a>"],["impl Visit for <a class=\"struct\" href=\"datatypes/schema/column_schema/struct.SkippingIndexOptions.html\" title=\"struct datatypes::schema::column_schema::SkippingIndexOptions\">SkippingIndexOptions</a>"]]],["sql",[["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/admin/enum.Admin.html\" title=\"enum sql::statements::admin::Admin\">Admin</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/alter/enum.AlterDatabaseOperation.html\" title=\"enum sql::statements::alter::AlterDatabaseOperation\">AlterDatabaseOperation</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/alter/enum.AlterTableOperation.html\" title=\"enum sql::statements::alter::AlterTableOperation\">AlterTableOperation</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/copy/enum.Copy.html\" title=\"enum sql::statements::copy::Copy\">Copy</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/copy/enum.CopyDatabase.html\" title=\"enum sql::statements::copy::CopyDatabase\">CopyDatabase</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/copy/enum.CopyTable.html\" title=\"enum sql::statements::copy::CopyTable\">CopyTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/create/enum.TableConstraint.html\" title=\"enum sql::statements::create::TableConstraint\">TableConstraint</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/show/enum.ShowCreateTableVariant.html\" title=\"enum sql::statements::show::ShowCreateTableVariant\">ShowCreateTableVariant</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/show/enum.ShowKind.html\" title=\"enum sql::statements::show::ShowKind\">ShowKind</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/statement/enum.Statement.html\" title=\"enum sql::statements::statement::Statement\">Statement</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"enum\" href=\"sql/statements/tql/enum.Tql.html\" title=\"enum sql::statements::tql::Tql\">Tql</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/alter/struct.AlterDatabase.html\" title=\"struct sql::statements::alter::AlterDatabase\">AlterDatabase</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/alter/struct.AlterTable.html\" title=\"struct sql::statements::alter::AlterTable\">AlterTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/alter/struct.KeyValueOption.html\" title=\"struct sql::statements::alter::KeyValueOption\">KeyValueOption</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/copy/struct.CopyDatabaseArgument.html\" title=\"struct sql::statements::copy::CopyDatabaseArgument\">CopyDatabaseArgument</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/copy/struct.CopyTableArgument.html\" title=\"struct sql::statements::copy::CopyTableArgument\">CopyTableArgument</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.Column.html\" title=\"struct sql::statements::create::Column\">Column</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.ColumnExtensions.html\" title=\"struct sql::statements::create::ColumnExtensions\">ColumnExtensions</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.CreateDatabase.html\" title=\"struct sql::statements::create::CreateDatabase\">CreateDatabase</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.CreateExternalTable.html\" title=\"struct sql::statements::create::CreateExternalTable\">CreateExternalTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.CreateFlow.html\" title=\"struct sql::statements::create::CreateFlow\">CreateFlow</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.CreateTable.html\" title=\"struct sql::statements::create::CreateTable\">CreateTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.CreateTableLike.html\" title=\"struct sql::statements::create::CreateTableLike\">CreateTableLike</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.CreateView.html\" title=\"struct sql::statements::create::CreateView\">CreateView</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.PartitionEntry.html\" title=\"struct sql::statements::create::PartitionEntry\">PartitionEntry</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/create/struct.Partitions.html\" title=\"struct sql::statements::create::Partitions\">Partitions</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/cursor/struct.CloseCursor.html\" title=\"struct sql::statements::cursor::CloseCursor\">CloseCursor</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/cursor/struct.DeclareCursor.html\" title=\"struct sql::statements::cursor::DeclareCursor\">DeclareCursor</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/cursor/struct.FetchCursor.html\" title=\"struct sql::statements::cursor::FetchCursor\">FetchCursor</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/delete/struct.Delete.html\" title=\"struct sql::statements::delete::Delete\">Delete</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/describe/struct.DescribeTable.html\" title=\"struct sql::statements::describe::DescribeTable\">DescribeTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/drop/struct.DropDatabase.html\" title=\"struct sql::statements::drop::DropDatabase\">DropDatabase</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/drop/struct.DropFlow.html\" title=\"struct sql::statements::drop::DropFlow\">DropFlow</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/drop/struct.DropTable.html\" title=\"struct sql::statements::drop::DropTable\">DropTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/drop/struct.DropView.html\" title=\"struct sql::statements::drop::DropView\">DropView</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/explain/struct.Explain.html\" title=\"struct sql::statements::explain::Explain\">Explain</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/insert/struct.Insert.html\" title=\"struct sql::statements::insert::Insert\">Insert</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/option_map/struct.OptionMap.html\" title=\"struct sql::statements::option_map::OptionMap\">OptionMap</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/query/struct.Query.html\" title=\"struct sql::statements::query::Query\">Query</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/set_variables/struct.SetVariables.html\" title=\"struct sql::statements::set_variables::SetVariables\">SetVariables</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowColumns.html\" title=\"struct sql::statements::show::ShowColumns\">ShowColumns</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowCreateDatabase.html\" title=\"struct sql::statements::show::ShowCreateDatabase\">ShowCreateDatabase</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowCreateFlow.html\" title=\"struct sql::statements::show::ShowCreateFlow\">ShowCreateFlow</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowCreateTable.html\" title=\"struct sql::statements::show::ShowCreateTable\">ShowCreateTable</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowCreateView.html\" title=\"struct sql::statements::show::ShowCreateView\">ShowCreateView</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowDatabases.html\" title=\"struct sql::statements::show::ShowDatabases\">ShowDatabases</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowFlows.html\" title=\"struct sql::statements::show::ShowFlows\">ShowFlows</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowIndex.html\" title=\"struct sql::statements::show::ShowIndex\">ShowIndex</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowStatus.html\" title=\"struct sql::statements::show::ShowStatus\">ShowStatus</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowTableStatus.html\" title=\"struct sql::statements::show::ShowTableStatus\">ShowTableStatus</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowTables.html\" title=\"struct sql::statements::show::ShowTables\">ShowTables</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowVariables.html\" title=\"struct sql::statements::show::ShowVariables\">ShowVariables</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/show/struct.ShowViews.html\" title=\"struct sql::statements::show::ShowViews\">ShowViews</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/tql/struct.TqlAnalyze.html\" title=\"struct sql::statements::tql::TqlAnalyze\">TqlAnalyze</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/tql/struct.TqlEval.html\" title=\"struct sql::statements::tql::TqlEval\">TqlEval</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/tql/struct.TqlExplain.html\" title=\"struct sql::statements::tql::TqlExplain\">TqlExplain</a>"],["impl <a class=\"trait\" href=\"sql/ast/trait.Visit.html\" title=\"trait sql::ast::Visit\">Visit</a> for <a class=\"struct\" href=\"sql/statements/truncate/struct.TruncateTable.html\" title=\"struct sql::statements::truncate::TruncateTable\">TruncateTable</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[174,804,14359]}