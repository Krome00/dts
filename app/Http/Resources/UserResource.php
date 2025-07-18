<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'roles' => $this->whenLoaded('roles', function () {
                return $this->roles->pluck('name');
            }),
            'avatar' => $this->avatar ? asset('storage/' . $this->avatar) : null,
            'created_at' => $this->created_at->format('d F Y'),
            'updated_at' => $this->updated_at->format('d F Y'),
            'permissions' => $this->whenLoaded('permissions', function () {
                return $this->permissions->pluck('name');
            }),
            'organizational_unit' => $this->whenLoaded('organizationalUnit', function () {
                return [
                    'id' => $this->organizationalUnit->id,
                    'name' => $this->organizationalUnit->name,
                    'hierarchy_path' => $this->organizationalUnit->getHierarchyPath()->pluck('name')->implode(' > '),
                ];
            }),
            'active' => $this->active,
        ];
    }
}
