/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
	    { name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		
		{ name: 'links' },
		{ name: 'insert', groups: [ 'img','table','flvplayer','video' ] },
		{ name: 'jwplayer'},
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		//{ name: 'forms' },
		{ name: 'tools' },
		
		{ name: 'others' },
		//'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'colors' },
		{ name: 'styles' }


		//{ name: 'about' }
	];

	config.height = 400; //编辑器高度
	 config.enterMode = CKEDITOR.ENTER_BR;
	 config.extraPlugins = 'flvPlayer,video,jwplayer';
	 config.allowedContent = true;

	//config.uiColor = '#0B61B1';

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre;address;div';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	function getRootPath(){
    //获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath=window.document.location.href;
    //获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName=window.document.location.pathname;
    var pos=curWwwPath.indexOf(pathName);
    //获取主机地址，如： http://localhost:8083
    var localhostPaht=curWwwPath.substring(0,pos);
    //获取带"/"的项目名，如：/uimcardprj
    var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);
	if(projectName.indexOf(".php")!="-1"){
		projectName="";
	}
    return(projectName);
	}
	//添加ckfinder上传文件功能
	var ckfinderPath = getRootPath()+"/ckeditor"; //ckfinder路径
	 config.filebrowserBrowseUrl = ckfinderPath+'/ckfinder/ckfinder.html';
	 config.filebrowserImageBrowseUrl = ckfinderPath+'/ckfinder/ckfinder.html?Type=Images';
	 config.filebrowserFlashBrowseUrl =  ckfinderPath+'/ckfinder/ckfinder.html?Type=Flash';
	 config.filebrowserUploadUrl =  ckfinderPath+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files';
	 config.filebrowserImageUploadUrl  = ckfinderPath+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images';
	 config.filebrowserFlashUploadUrl  =  ckfinderPath+'/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash';
};
