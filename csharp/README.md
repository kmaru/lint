CSharp static analysis
=====================================

CShapの静的解析には以下の3種類の[Roslyn Analyzer]を利用します。

- [SonarAnalyzer.CShap]
- [StyleCop.Analyzers]
- [Roslynator.Analyzers]

設定方法
----------------------
1. config/csharp.ruleset をソリューションフォルダまたはプロジェクトフォルダに配置します。
   - ソリューションフォルダに配置して、複数プロジェクトから参照し、設定を共有することができますが、Dockerのイメージビルドなどでプロジェクトファイルのみでビルドを実行した場合に、警告やエラーがでることがあります。
1. csprojファイルに ruleset ファイルへの参照を追加します。
1. config/stylecop.json をソリューションフォルダまたはプロジェクトフォルダに配置します。
1. csproj にstylecop.json をコンテンツとしてリンクで追加します。
1. プロジェクトに、 nuget から以下の参照を追加します。
   - [SonarAnalyzer.CShap]
   - [StyleCop.Analyzers]
    - [Roslynator.Analyzers]

<figure>
<figcaption>csproj ファイルへの ruleset への参照の追加</figcaption>

```xml
<PropertyGroup>
  <CodeAnalysisRuleSet>../../../csharp.ruleset</CodeAnalysisRuleSet>
</PropertyGroup>
```
</figure>

<figure>
<figcaption>csproj ファイルへの stylecop.json への参照の追加</figcaption>

```xml
<ItemGroup>
  <Content Include="..\..\..\stylecop.json" Link="stylecop.json" />
</ItemGroup>
```
</figure>

<figure>
<figcaption>nuget で analyzer の参照</figcaption>

```xml
<PackageReference Include="Roslynator.Analyzers" Version="2.0.0">
  <PrivateAssets>all</PrivateAssets>
  <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
</PackageReference>
<PackageReference Include="SonarAnalyzer.CSharp" Version="7.8.0.7320">
  <PrivateAssets>all</PrivateAssets>
  <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
</PackageReference>
<PackageReference Include="StyleCop.Analyzers" Version="1.0.2">
  <PrivateAssets>all</PrivateAssets>
  <IncludeAssets>runtime; build; native; contentfiles; analyzers</IncludeAssets>
</PackageReference>
```
</figure>

実行方法
-----------
ビルドすることで自動的に実行されます。

[Roslyn Analyzer]:https://docs.microsoft.com/visualstudio/extensibility/getting-started-with-roslyn-analyzers
[SonarAnalyzer.CShap]:https://www.nuget.org/packages/SonarAnalyzer.CSharp/
[StyleCop.Analyzers]:https://www.nuget.org/packages/stylecop.analyzers/
[Roslynator.Analyzers]:https://www.nuget.org/packages/Roslynator.Analyzers/