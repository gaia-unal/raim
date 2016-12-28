@extends('template.main')

@section('title', 'Editar Aplicacion ')

@section('content')

<!--
	// cabezera del contenido
-->
  <div class="contentHeader">
  		<h1>Editar Aplicacion</h1>
  </div>

<!--
	//fin de la cabezera del contenido
-->

	{!! Form::model($aplication,['route' => ['Admin.Aplication.update', $aplication], 'files' => true, 'method'=> 'PUT']) !!}

		<div class="fieldForm">

			{!! Form::label('name','Nombre') !!}

			{!! Form::text('name', null,['class' => '', 'placeholder' => 'Nombre Del Rol','required']) !!}

		</div>

		<div class="fieldForm">

			{!! Form::label('url','Url') !!}

			{!! Form::text('url', null,['class' => '']) !!}

		</div>

		<div class="fieldForm">
			{!! Form::label('type','Tipo') !!}
			{!! Form::select('type',['Herramienta_Autor'=> 'Herramienta de Autor', 'Repositorio'=> 'Repositorio'], null, ['class' => '', 'required']) !!}
		</div>

		<div class="fieldForm">
			{!! Form::label('state','Estado') !!}
			{!! Form::select('state',['Activo'=> 'Activo', 'Inactivo'=> 'Inactivo'], null, ['class' => '', 'required']) !!}
		</div>

		<div class="fieldForm">
			{!! Form::label('rquiered_information','Requiere Informacion') !!}
			{!! Form::select('rquiered_information',['True'=> 'Si', 'False'=> 'No'], null, ['class' => '', 'required']) !!}
		</div>

		<div class="fieldForm">
			{!! Form::label('rquiered_personalization','Requiere Personalización') !!}
			{!! Form::select('rquiered_personalization',['True'=> 'Si', 'False'=> 'No'], null, ['class' => '', 'required']) !!}
		</div>

		<div class="fieldForm">
			{!! Form::label('rquiered_NEDD','Requiere NEED') !!}
			{!! Form::select('rquiered_NEDD',['True'=> 'Si', 'False'=> 'No'], null, ['class' => '', 'required']) !!}
		</div>

		<div class="fieldForm">
			{!! Form::label('rquiered_learningStyle','Requiere Estilos de Aprendizaje') !!}
			{!! Form::select('rquiered_learningStyle',['True'=> 'Si', 'False'=> 'No'], null, ['class' => '', 'required']) !!}
		</div>

    <div class="fieldForm">
      {!! Form::label('systemRoute','Rutas definidad por framework') !!}
      {!! Form::select('systemRoute',['True'=> 'Si', 'False'=> 'No'], null, ['class' => '', 'required']) !!}
    </div>

		<div class="fieldForm">

			{!! Form::label('description','Descripcion') !!}

			{!! Form::textarea('description', null ,['class' => '']) !!}

		</div>

		<div class="fieldForm">
			{!! Form::label('logo','logo') !!}
			{!! Form::file('logo') !!}

		</div>

		<div class="buttonTable">
			{!! Form::submit('Guardar',['class' => '']) !!}
			<a href="{{ route('Admin.Aplication.index') }}">Cancelar</a>

		</div>


	{!! Form::close() !!}

@endsection
