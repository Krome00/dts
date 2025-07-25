<?php

namespace App\Policies;

use App\Models\DocumentType;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class DocumentTypePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view document types');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, DocumentType $documentType): bool
    {
        return $user->hasPermissionTo('view document types');
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create document types');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, DocumentType $documentType): bool
    {
        return $user->hasPermissionTo('edit document types');
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, DocumentType $documentType): bool
    {
        return $user->hasPermissionTo('delete document types');
    }
}
