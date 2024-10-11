<cfset basePath = "/cbChecklist/views/index/static/js" />
<div id="cbChecklistRoot" style="width:100%;max-width:100%;height:100%;max-height:100%;backgroundColor: white; overflow: auto"></div>

<cfset fileName = directorylist(expandPath(basePath)).filter(function(item){
    var path = item.replace("\","/","all");
    return path.listlast("/").left(5) == "main." && path.listlast("/").right(3)==".js";
}) />
<cfset myjs = fileName.len() ? fileRead(expandPath(basePath & "/#fileName[1].replace("\","/","all").listlast('/')#")) : "HI!" />
<script type="text/javascript">
    <cfoutput>#myjs#</cfoutput>
</script>