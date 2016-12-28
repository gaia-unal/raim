<?php
namespace App\Repositories;

use App\Entities\ReferenceLearningStyle;

/**
 * Reference Learning Style Repository
 */
class RolRepository extends BaseRepository
{
  public function getModel()
  {
    return new ReferenceLearningStyle();
  }

  public function createObject($referenceLearningStyle)
  {
    return new ReferenceLearningStyle($referenceLearningStyle);
  }

  public function store($referenceLearningStyle)
  {
    return $this->createObject($referenceLearningStyle)->save();
  }

}
